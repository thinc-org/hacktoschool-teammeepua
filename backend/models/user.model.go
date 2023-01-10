package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Email       string
	Password    string
	Name        string
	FirstName   string
	LastName    string
	DisplayName string
}
