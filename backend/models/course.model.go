package models

import "gorm.io/gorm"

type Course struct {
	gorm.Model
	Title        string `json:"title"`
	CoverURL     string `json:"cover_url"`
	Description  string `json:"description"`
	InstructorID uint
}
