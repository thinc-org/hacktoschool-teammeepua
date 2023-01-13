package models

import "gorm.io/gorm"

type Instructor struct {
	gorm.Model
	UserID uint `json:"userID"`
	User   User
}
