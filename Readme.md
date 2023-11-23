# Car Rental System

## Overview

This repository contains the code for a comprehensive vehicle rental booking system, designed to streamline the process of renting automobiles. The system is built as a client-server application using Node.js, providing a user-friendly platform for users to search, book, and manage car rentals efficiently.

# Table of Contents

1. [Features](#features)
   1. [User-Friendly Interface](#1-user-friendly-interface)
   2. [Client-Server Architecture](#2-client-server-architecture)
   3. [Database Design](#3-database-design)
   4. [Services](#4-services)
   5. [Views](#5-views)
   6. [Project Goals](#6-project-goals)
   7. [Mockup Design](#7-mockup-design)
2. [Conclusion](#conclusion)


## Features

### 1. User-Friendly Interface

The application offers a seamless user experience, allowing users to easily browse a diverse selection of cars, select preferred features, and make reservations online.

### 2. Client-Server Architecture

Utilizing Node.js, the system incorporates both client-side and server-side components to ensure a smooth and responsive user experience.

### 3. Database Design

The system employs a relational database with the following tables:

- **User**: Stores user information.
- **Car**: Contains details about rental vehicles.
- **Rental Agreement**: Manages legally binding contracts for car rentals.

The Entity-Relationship Diagram (ERD) provides a visual representation of the database structure.

### 4. Services

The application includes a set of services to manage data in the database, such as:

- `getAvailableVehicles(Pick_up_Date, Return_Date)`: Retrieves a list of available vehicles for a specified date range.
- `makeReservation(User_Id, Car_Id, Pick_up_Date, Return_Date)`: Allows users to make reservations.
- `updateReservation(Agreement_ID)`: Modifies reservation details.
- `cancelReservation(Agreement_ID)`: Cancels a reservation.

### 5. Views

The system offers various views for user interaction, including:

- **Homepage**: Showcases exclusive offers and cars.
- **Vehicle Details**: Provides comprehensive details about a particular rental car.
- **Reservation Form**: Allows users to customize their reservations.
- **Reservation Management**: Enables users to view and edit existing reservations.

### 6. Project Goals

Our main objectives for this semester include:

- Creating a complete Node.js server using Express.js.
- Implementing permission and authentication features for users.
- Developing RESTful API endpoints for customer and car bookings.
- Utilizing EJS or React templates for dynamic client-side views.
- Ensuring an intuitive and responsive UI.
- Establishing a secure and effective procedure for booking rental automobiles.

### 7. Mockup Design

We will use Figma to create visually appealing and user-friendly mockups that guide the application's design and user interface. The development process will be aligned with these mockups to enhance the user experience.

## Conclusion

The proposed vehicle rental booking system aims to streamline the rental process, providing clients with a comfortable and delightful experience. Our goal is to establish a successful presence in the automobile rental sector by offering a diverse range of rental cars through an easy-to-use, secure platform. We are excited to embark on this project and believe it aligns well with the goals of the CSIS228 course.