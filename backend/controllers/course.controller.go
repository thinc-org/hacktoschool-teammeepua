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

func GetAllCourse(context *gin.Context) {
	var courses []models.Course
	database.DB.Db.Find(&courses)
	context.JSON(http.StatusOK, courses)
}

func SearchCourseById(context *gin.Context) {
	var courses []models.Course
	id := context.Param("id")
	database.DB.Db.Where("id = ?", id).Find(&courses)
	context.JSON(http.StatusOK, courses)
}

func SearchCourseByName(context *gin.Context) {
	var courses []models.Course
	name := context.Param("name")
	database.DB.Db.Where("title LIKE ?", "%"+name+"%").Find(&courses)
	context.JSON(http.StatusOK, courses)
}
