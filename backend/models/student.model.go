package models

import "gorm.io/gorm"

type Student struct {
	gorm.Model
	UserID uint
	User   User
}
