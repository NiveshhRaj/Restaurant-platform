## Graze & Grain – Restaurant Management Platform

    A full-stack restaurant management system that provides a digital presence for restaurants and replaces manual operations such as menu management and reservation handling currently done through WhatsApp.

    This platform allows customers to browse the menu and make reservations, while the restaurant staff can manage reservations and menu items through an admin dashboard.

Live Demo

## Frontend (Vercel)

    https://restaurant-platform-ruddy.vercel.app

## Backend API (Render)

    https://restaurant-platform-jc7b.onrender.com

## Features

    Customer Side

    Browse restaurant menu

    Filter menu items by category

    View dish details

    Table reservation system

    Responsive UI for mobile and desktop

## Admin Dashboard

    Admin login authentication

    View customer reservations

    Approve or reject reservations

    Add new dishes to the menu

    Upload dish images or provide image URL

## System Features

    REST API architecture

    Pagination for menu items

    Database-driven menu system

    Cloud deployment

    CORS enabled for frontend–backend communication

## Tech Stack

## Frontend

    Next.js

    Tailwind CSS

    Axios

## Backend

    NestJS

    Node.js

    Prisma ORM

## Database

    PostgreSQL

## Deployment

    Frontend: Vercel

    Backend: Render

    Database: Neon PostgreSQL

## Project Structure

restaurant-platform
│
├── frontend
│ ├── app
│ ├── components
│ ├── lib
│ └── styles
│
├── backend
│ ├── src
│ │ ├── auth
│ │ ├── reservations
│ │ ├── menu-items
│ │ └── prisma
│ │ └── upload
│ └── prisma
│
└── README.md

## Database Schema (Prisma)

Main entities used in the system:

AdminUser

MenuCategory

MenuItem

Reservation

## Installation (Local Development)

1 Clone Repository
git clone https://github.com/NiveshhRaj/restaurant-platform.git
cd restaurant-platform

2 Backend Setup
cd backend
npm install

Create .env

DATABASE_URL=postgresql://username:password@localhost:5432/restaurant\
JWT_SECRET=secret

Run migrations

npx prisma migrate dev

Start server

npm run start:dev

Backend runs on

http://localhost:3001

3 Frontend Setup

cd frontend
npm install
npm run dev

Frontend runs on

http://localhost:3000
