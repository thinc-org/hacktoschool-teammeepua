package main

import (
	"github.com/gin-gonic/gin"
	"github.com/thamph/thinc-hacktoschool/controllers"
	"github.com/thamph/thinc-hacktoschool/database"
)

type testStruct struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

func main() {
	database.ConnectDatabase()

	router := gin.Default()

	router.POST("/api/create_course", controllers.CreateCourse)

	router.Run(":3100")

}
