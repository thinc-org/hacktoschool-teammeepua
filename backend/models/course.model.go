package models

import "gorm.io/gorm"

type Course struct {
	gorm.Model
	Title        string `json:"title"`
	CoverURL     string `json:"coverURL"`
	Description  string `json:"description"`
	InstructorID uint
	Instructor
}
