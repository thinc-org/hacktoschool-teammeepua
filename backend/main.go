package main

import (
	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/controllers"
	"github.com/thamph/thinc-hacktoschool/database"
)

func main() {
	database.ConnectDatabase()

	router := gin.Default()

	router.POST("/api/create_course", controllers.CreateCourse)
	router.GET("/api/get_all_courses", controllers.GetAllCourse)
	router.POST(("/api/signup"), controllers.CreateUser)
	router.GET("/api/login", controllers.CheckLogin)

	router.Run(":3100")

}
