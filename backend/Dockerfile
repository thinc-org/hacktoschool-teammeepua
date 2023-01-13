FROM golang:1.19-alpine

WORKDIR /app

COPY . .

RUN go install github.com/cosmtrek/air@latest

RUN go mod tidy

LABEL org.opencontainers.image.source="https://github.com/thinc-org/hacktoschool-team"