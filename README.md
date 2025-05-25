# Fullstack Product Management Application

This repository contains the **backend** and **frontend** code for a simple product management system. The backend is built with **Spring Boot** and the frontend is built using **React**.

## Project Overview

This project demonstrates a basic CRUD application with authentication:

- Users can **login** to the system.
- Authenticated users can **add, view, update, and delete products**.
- Backend uses **Spring Boot** with JPA and MySQL.
- Frontend is a **React** application communicating with the backend via REST API.

## Tech Stack

| Layer    | Technology           |
| -------- | -------------------- |
| Backend  | Java, Spring Boot, JPA, Hibernate, MySQL |
| Frontend | React, Axios, React Router |
| Build    | Maven (Backend), npm (Frontend) |


**Prerequisites**

   - Java 17+
   - Maven
   - MySQL database (running and accessible)

2. **Configure Database**

   Edit the `application.properties` or `application.yml` inside the backend folder to point to your MySQL database

**Features**

User Authentication: Secure login using JWT tokens (backend).
Product CRUD:
Create new products with name and price.
List all products.
Update and delete products.
Frontend Routing: Navigation between login, product list, add, and edit pages.

**API Endpoints**

Method	Endpoint	Description
POST	/auth/login	User login, returns JWT token
GET	/products	Get list of all products
POST	/products	Add a new product
PUT	/products/{id}	Update product by ID
DELETE	/products/{id}	Delete product by ID

