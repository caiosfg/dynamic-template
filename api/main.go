package main

import (
	_ "github.com/lib/pq"
)

type Card struct {
	Id       int    `json:"id"`
	title    string `json:"title"`
	subtitle string `json:"subtitle"`
}
