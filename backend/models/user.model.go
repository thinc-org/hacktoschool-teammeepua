package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Email       string `json:"email"`
	Password    string `json:"password"`
	FirstName   string `json:"first_name"`
	LastName    string `json:"last_name"`
	DisplayName string `json:"display_name"`
	Role        string `json:"role"`
}
