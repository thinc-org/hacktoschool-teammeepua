package database

import (
	"github.com/thamph/thinc-hacktoschool/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)

func ConnectDatabase() {
	connectionString := "host=database user=mepua password=123456 dbname=e_course port=5432 sslmode=disable TimeZone=Asia/Bangkok"

	database, err := gorm.Open(postgres.Open(connectionString), &gorm.Config{})

	if err != nil {
		log.Fatal("failed to connect database")
	}

	log.Print("database is connected")

	database.AutoMigrate(&models.User{})

}
