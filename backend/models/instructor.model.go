package models

import "gorm.io/gorm"

type Instructor struct {
	gorm.Model
	UserID        uint
	CreatedCourse []Course
}
