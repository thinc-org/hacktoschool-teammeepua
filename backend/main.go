package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

type testStruct struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

func main() {

	router := gin.Default()

	router.GET("/api/test_get", func(context *gin.Context) {
		context.JSON(http.StatusOK, gin.H{
			"message": "hello 6432846982141234314",
		})
	})

	router.POST("/api/test_post", func(context *gin.Context) {
		var requestBody testStruct
		err := context.BindJSON(&requestBody)
		if err != nil {
			fmt.Println("error!!!!!!!!!!!!!!!!!!!!!!!")
			return
		}
		requestBody.Name += "  tested"
		context.JSON(http.StatusOK, requestBody)
	})

	router.Run(":3100")

}
