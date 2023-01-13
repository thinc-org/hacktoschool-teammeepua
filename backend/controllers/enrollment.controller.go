package controllers

import (
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/database"
	"github.com/thamph/thinc-hacktoschool/models"
)

type EnrollmentData struct {
	UserID   uint `json:"userID"`
	CourseID uint `json:"courseID"`
}

func EnrollCourse(context *gin.Context) {
	var data EnrollmentData
	var student models.Student
	var course models.Course
	var enrollment models.Enrollment
	if err := context.BindJSON(&data); err != nil {
		log.Fatal(err)
	}
	database.DB.Db.Where("user_id = ?", data.UserID).First(&student)
	database.DB.Db.Where("id = ?", data.CourseID).First(&course)

	enrollment.StudentID = student.ID
	enrollment.CourseID = course.ID

	database.DB.Db.Create(&enrollment)

	context.JSON(http.StatusOK, gin.H{"message": "enrollment is successfully"})
}

func GetEnrollmentsOfStudent(userID uint, listCourse *[]models.Course) {
	var student models.Student
	var enrollments []models.Enrollment
	database.DB.Db.Where("user_id = ?", userID).First(&student)
	database.DB.Db.Where("student_id = ?", student.ID).Find(&enrollments)
	for i := range enrollments {
		var course models.Course
		database.DB.Db.Where("id = ?", enrollments[i].CourseID).First(&course)
		*listCourse = append(*listCourse, course)
	}
}

func GetStudentEnrollmentsFromCourse(context *gin.Context) {
	type studentData struct {
		StudentFullName string `json:"studentFullName"`
		StudentID       uint   `json:"studentID"`
	}
	courseID, err := strconv.Atoi(context.Param("courseID"))
	if err != nil {
		log.Fatal(err)
	}
	var enrollments []models.Enrollment
	database.DB.Db.Where("course_id = ?", courseID).Find(&enrollments)
	var studentList []studentData
	for i := range enrollments {
		var student models.Student
		database.DB.Db.Where("id = ?", enrollments[i].StudentID).First(&student)
		var user models.User
		database.DB.Db.Where("id = ?", student.UserID).First(&user)
		studentList = append(studentList, studentData{
			StudentFullName: user.FirstName + " " + user.LastName,
			StudentID:       student.ID,
		})
	}
	context.JSON(http.StatusOK, gin.H{"studentList": studentList})
}
