package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/database"
	"github.com/thamph/thinc-hacktoschool/models"
	"log"
	"net/http"
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
