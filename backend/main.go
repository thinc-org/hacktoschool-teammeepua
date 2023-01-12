package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/controllers"
	"github.com/thamph/thinc-hacktoschool/database"
)

func main() {
	database.ConnectDatabase()

	router := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Accept", "Content-Type", "Content-Length", "Accept-Encoding", "X-CSRF-Token", "Authorization"}
	router.Use(cors.New(config))

	router.POST("/api/create_course", controllers.CreateCourse)
	router.GET("/api/get_all_courses", controllers.GetAllCourse)
	router.POST(("/api/signup"), controllers.CreateUser)
	router.GET("/api/login", controllers.CheckLogin)
	router.POST("/api/enroll", controllers.EnrollCourse)
	router.Run(":3100")

}
