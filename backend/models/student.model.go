package models

import "gorm.io/gorm"

type Student struct {
	gorm.Model
	UserID     uint
	Enrollment []Enrollment
}
