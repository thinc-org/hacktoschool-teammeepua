package models

import (
	"github.com/lib/pq"
	"gorm.io/gorm"
)

type Course struct {
	gorm.Model
	Title        string `json:"title"`
	CoverURL     string `json:"coverURL"`
	Description  string `json:"description"`
	InstructorID uint   `json:"instructorID"`
	Instructor   Instructor
	Content      string         `json:"content"`
	Categories   pq.StringArray `json:"categories" gorm:"type:text[]"`
}
