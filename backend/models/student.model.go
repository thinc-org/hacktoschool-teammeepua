package models

import "gorm.io/gorm"

type Student struct {
	gorm.Model
	UserID uint `json:"userID"`
	User   User
}
