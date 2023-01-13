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
	router.GET("/api/browse_course", controllers.BrowseCourses)
	router.POST(("/api/signup"), controllers.CreateUser)
	router.POST("/api/login", controllers.CheckLogin)
	router.POST("/api/enroll", controllers.EnrollCourse)
	router.POST("/api/userinfo", controllers.GetUserInfo)
	router.PATCH("/api/course_content/:courseID", controllers.EditCourseContent)
	router.GET("/api/course_content/:courseID", controllers.GetCourseContent)
	router.GET("/api/get_student_list/:courseID", controllers.GetStudentEnrollmentsFromCourse)

	router.Run(":3100")

}
