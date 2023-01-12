package controllers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/database"
	"github.com/thamph/thinc-hacktoschool/models"
)

func CreateCourse(context *gin.Context) {
	var course models.Course
	if err := context.BindJSON(&course); err != nil {
		log.Fatal(err)
	}
	database.DB.Db.Create(&course)
	context.JSON(http.StatusOK, course)
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
