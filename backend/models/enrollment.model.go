package models

import "gorm.io/gorm"

type Enrollment struct {
	gorm.Model
	StudentID uint
	CourseID  uint
}
