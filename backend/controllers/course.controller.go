package controllers

import (
	"log"
	"net/http"

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

func SearchCourse(context *gin.Context) {
	var courses []models.Course
	id := context.Param("id")
	name := context.Param("name")
	if id != "" {
		database.DB.Db.Where("id = ?", id).Find(&courses)
	}
	if name != "" {
		database.DB.Db.Where("title LIKE ?", "%"+name+"%").Find(&courses)
	}
	if id == "" && name == "" {
		database.DB.Db.Find(&courses)
	}
	context.JSON(http.StatusOK, courses)
}

func GetInstructorCourses(userID uint, listCourse *[]models.Course) {
	var instructor models.Instructor
	database.DB.Db.Where("user_id = ?", userID).First(&instructor)
	database.DB.Db.Where("instructor_id = ?", instructor.ID).Find(&listCourse)
}

type CourseInfo struct {
	CourseID           uint   `json:"courseID"`
	Title              string `json:"title"`
	CoverURL           string `json:"coverURL"`
	Description        string `json:"description"`
	InstructorFullName string `json:"instructorFullName"`
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
		InstructorFullName: user.FirstName + " " + user.LastName,
	}
}
