package controllers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/database"
	"github.com/thamph/thinc-hacktoschool/models"
)

// create new user only if email doesn't exist in database
func CreateUser(context *gin.Context) {
	var user models.User
	if err := context.BindJSON(&user); err != nil {
		log.Fatal(err)
	}
	var userFound models.User
	database.DB.Db.Where("email = ?", user.Email).First(&userFound)
	if userFound.Email == user.Email {
		context.JSON(http.StatusConflict, gin.H{"message": "Email already exists"})
	} else {
		database.DB.Db.Create(&user)
		context.JSON(http.StatusOK, user)
	}
}

func CheckLogin(context *gin.Context) {
	var user models.User
	if err := context.BindJSON(&user); err != nil {
		log.Fatal(err)
	}
	var userFound models.User
	database.DB.Db.Where("email = ?", user.Email).First(&userFound)
	if userFound.Email == user.Email && userFound.Password == user.Password {
		context.JSON(http.StatusOK, userFound)
	} else {
		context.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid email or password"})
	}
}

func GetAllUser(context *gin.Context) {
	var users []models.User
	database.DB.Db.Find(&users)
	context.JSON(http.StatusOK, users)
}

func GetUserById(context *gin.Context) {
	var user models.User
	id := context.Param("id")
	database.DB.Db.First(&user, id)
	context.JSON(http.StatusOK, user)
}
