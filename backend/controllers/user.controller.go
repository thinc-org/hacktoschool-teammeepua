package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/database"
	"github.com/thamph/thinc-hacktoschool/models"
	"log"
	"net/http"
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
		if user.Role == "student" {
			CreateStudent(context, &user)
		} else if user.Role == "instructor" {
			CreateInstructor(context, &user)
		}
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

type Data struct {
	UserID uint `json:"userID"`
}

func GetUserInfo(context *gin.Context) {
	var data Data
	var user models.User
	if err := context.BindJSON(&data); err != nil {
		log.Fatal(err)
	}
	database.DB.Db.Where("id = ?", data.UserID).First(&user)
	var listCourseRaw []models.Course
	if user.Role == "student" {
		GetStudentEnrollments(user.ID, &listCourseRaw)
	} else if user.Role == "instructor" {
		GetInstructorCourses(user.ID, &listCourseRaw)
	}
	var listCourse []CourseInfo
	for i := range listCourseRaw {
		listCourse = append(listCourse, GetCourseInfo(listCourseRaw[i].ID))
	}

	context.JSON(http.StatusOK, gin.H{
		"userID":         user.ID,
		"email":          user.Email,
		"firstName":      user.FirstName,
		"lastName":       user.LastName,
		"displayName":    user.DisplayName,
		"role":           user.Role,
		"listCourse":     listCourse,
		"socialFacebook": user.SocialFacebook,
		"socialYoutube":  user.SocialYoutube,
	})
}
