package controllers

import (
	"fmt"
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
	fmt.Println(student.ID, course.ID)

	enrollment.Student = student
	enrollment.Course = course

	database.DB.Db.Create(&enrollment)

	context.JSON(http.StatusOK, gin.H{"message": "enrollment is successfully"})
}
