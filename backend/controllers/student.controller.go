package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/database"
	"github.com/thamph/thinc-hacktoschool/models"
)

func CreateStudent(context *gin.Context, user *models.User) {
	var student models.Student
	student.UserID = user.ID
	database.DB.Db.Create(&student)
	context.JSON(http.StatusOK, gin.H{"userID": student.UserID})
}
