package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/database"
	"github.com/thamph/thinc-hacktoschool/models"
	"log"
	"net/http"
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
	student.UserID = data.UserID
	course.ID = data.CourseID

	if err := database.DB.Db.First(&student); err != nil {
		log.Fatal(err)
	}
	if err := database.DB.Db.First(&course); err != nil {
		log.Fatal(err)
	}

	enrollment.Student = student
	enrollment.Course = course

	if err := database.DB.Db.Create(&enrollment); err != nil {
		log.Fatal(err)
	}

	context.JSON(http.StatusOK, gin.H{"message": "enrollment is successfully"})
}
