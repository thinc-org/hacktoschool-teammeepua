package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/database"
	"github.com/thamph/thinc-hacktoschool/models"
)

func CreateInstructor(context *gin.Context, user *models.User) {
	var instructor models.Instructor
	instructor.User = *user
	database.DB.Db.Create(&instructor)
	context.JSON(http.StatusOK, instructor.User)
}
