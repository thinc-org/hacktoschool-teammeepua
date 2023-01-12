package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/database"
	"github.com/thamph/thinc-hacktoschool/models"
)

func CreateInstructor(context *gin.Context, user *models.User) {
	var instructor models.Instructor
	instructor.UserID = user.ID
	database.DB.Db.Create(&instructor)
	context.JSON(http.StatusOK, gin.H{"userID": instructor.UserID})
}
