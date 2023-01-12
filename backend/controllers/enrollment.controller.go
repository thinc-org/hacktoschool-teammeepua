package controllers

import (
	"log"
	"net/http"

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

func GetStudentEnrollments(userID uint, listCourse *[]models.Course) {
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
