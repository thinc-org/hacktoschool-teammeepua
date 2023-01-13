package controllers

import (
	"fmt"
	"log"
	"math"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/database"
	"github.com/thamph/thinc-hacktoschool/models"
)

func CreateCourse(context *gin.Context) {
	type data struct {
		UserID      uint   `json:"userID"`
		CourseTitle string `json:"courseTitle"`
	}
	var d data
	var course models.Course
	var instructor models.Instructor
	if err := context.BindJSON(&d); err != nil {
		log.Fatal(err)
	}

	database.DB.Db.Where("user_id = ?", d.UserID).First(&instructor)
	course.Title = d.CourseTitle
	course.InstructorID = instructor.ID

	database.DB.Db.Create(&course)
	context.JSON(http.StatusOK, gin.H{"courseID": course.ID})
}

func EditCourseContent(context *gin.Context) {
	type data struct {
		CourseID    uint     `json:"courseID"`
		Title       string   `json:"title"`
		Description string   `json:"description"`
		CoverURL    string   `json:"coverURL"`
		Content     string   `json:"content"`
		Categories  []string `json:"categories"`
	}
	var d data
	var course models.Course
	if err := context.BindJSON(&d); err != nil {
		log.Fatal(err)
	}
	database.DB.Db.Where("id = ?", d.CourseID).First(&course)
	course.Title = d.Title
	course.Description = d.Description
	course.CoverURL = d.CoverURL
	course.Content = d.Content
	course.Categories = d.Categories
	database.DB.Db.Save(&course)
	context.JSON(http.StatusOK, course)
}

func GetCourseContent(context *gin.Context) {
	var course models.Course
	var instructor models.Instructor
	var user models.User
	courseID, err := strconv.Atoi(context.Param("courseID"))
	if err != nil {
		log.Fatal(err)
	}
	database.DB.Db.Where("id = ?", courseID).First(&course)
	database.DB.Db.Where("id = ?", course.InstructorID).First(&instructor)
	database.DB.Db.Where("id = ?", instructor.UserID).First(&user)
	context.JSON(http.StatusOK, gin.H{
		"courseID":           course.ID,
		"title":              course.Title,
		"description":        course.Description,
		"coverURL":           course.CoverURL,
		"content":            course.Content,
		"categories":         course.Categories,
		"instructorFullName": user.FirstName + " " + user.LastName,
	})
}

func BrowseCourses(context *gin.Context) {
	searchString := context.Query("search")
	pageNumber := context.Query("page_number")
	if pageNumber == "" {
		pageNumber = "1"
	}
	var courses []models.Course
	SearchCourse(searchString, &courses)
	totalPages := int(math.Ceil(float64(len(courses)) / 5.0))
	totalCourses := len(courses)
	page, err := strconv.Atoi(pageNumber)
	if err != nil {
		log.Fatal(err)
	}
	var listCourses []CourseInfo
	for i := 0; i < 5 && (page-1)*5+i < len(courses); i++ {
		listCourses = append(listCourses, GetCourseInfo(courses[(page-1)*5+i].ID))
	}
	context.JSON(http.StatusOK, gin.H{
		"totalPages":  totalPages,
		"listCourses": listCourses,
		"totalCourse": totalCourses,
	})
}

func SearchCourse(searchString string, courses *[]models.Course) {
	if searchString != "" {
		id, err := strconv.Atoi(searchString)
		fmt.Println("found", id)
		if err == nil {
			database.DB.Db.Where("id = ?", id).Find(courses)
		} else {
			database.DB.Db.Where("title LIKE ?", "%"+searchString+"%").Find(courses)
		}
	} else if searchString == "" {
		database.DB.Db.Find(courses)
	}
}

func GetInstructorCourses(userID uint, listCourse *[]models.Course) {
	var instructor models.Instructor
	database.DB.Db.Where("user_id = ?", userID).First(&instructor)
	database.DB.Db.Where("instructor_id = ?", instructor.ID).Find(&listCourse)
}

type CourseInfo struct {
	CourseID           uint     `json:"courseID"`
	Title              string   `json:"title"`
	CoverURL           string   `json:"coverURL"`
	Description        string   `json:"description"`
	Categories         []string `json:"categories"`
	InstructorFullName string   `json:"instructorFullName"`
}

func GetCourseInfo(courseID uint) CourseInfo {
	var instructor models.Instructor
	var course models.Course
	var user models.User
	database.DB.Db.Where("id = ?", courseID).First(&course)
	database.DB.Db.Where("id = ?", course.InstructorID).First(&instructor)
	database.DB.Db.Where("id = ?", instructor.UserID).First(&user)
	return CourseInfo{
		CourseID:           courseID,
		Title:              course.Title,
		CoverURL:           course.CoverURL,
		Description:        course.Description,
		Categories:         course.Categories,
		InstructorFullName: user.FirstName + " " + user.LastName,
	}
}
