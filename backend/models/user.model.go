package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Email          string `json:"email"`
	Password       string `json:"password"`
	FirstName      string `json:"firstName"`
	LastName       string `json:"lastName"`
	DisplayName    string `json:"displayName"`
	Role           string `json:"role"`
	SocialFacebook string `json:"socialFacebook"`
	SocialYoutube  string `json:"socialYoutube"`
}
