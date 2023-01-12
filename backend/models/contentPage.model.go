package models

import (
	"gorm.io/gorm"
)

type ContentPage struct {
	gorm.Model
	CourseID uint
}
