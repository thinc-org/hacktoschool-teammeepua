package models

import "gorm.io/gorm"

type Enrollment struct {
	gorm.Model
	StudentID uint `json:"studentID"`
	Student   Student
	CourseID  uint `json:"courseID"`
	Course    Course
}
