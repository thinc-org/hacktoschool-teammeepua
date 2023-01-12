package controllers

import (
	"fmt"
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
	fmt.Println(data.CourseID, data.UserID)

	database.DB.Db.Where("id = ?", data.UserID, &student)
	database.DB.Db.Where("id = ?", data.CourseID, &course)

	enrollment.Student = student
	enrollment.Course = course

	fmt.Println(student.)
	fmt.Println()
	fmt.Println(course)
	fmt.Println()
	fmt.Println(enrollment)
	fmt.Println()
	fmt.Println()

	database.DB.Db.Create(&enrollment)

	fmt.Println(enrollment)

	context.JSON(http.StatusOK, gin.H{"message": "enrollment is successfully"})
}
