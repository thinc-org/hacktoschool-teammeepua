package models

import "gorm.io/gorm"

type Student struct {
	gorm.Model
	User   User
	UserID uint
}
