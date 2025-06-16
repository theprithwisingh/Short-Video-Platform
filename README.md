**Video Content Platform (Next.js + ImageKit + Razorpay)**

A **modern full-stack video content platform** built with **Next.js 15**, **React 19**, and **TypeScript**, designed for uploading, managing, and selling video content. It includes user authentication, secure payments, responsive design, and media handling using **ImageKit**.

---

## 🚀 Features

* 🔐 **User Authentication** – Powered by NextAuth.js with JWT
* 📹 **Video Upload & Management** – ImageKit integration
* 💳 **Payments** – Seamless Razorpay payment gateway
* 🎨 **Modern UI** – Tailwind CSS + DaisyUI
* 📱 **Fully Responsive** – Optimized for all devices
* 🔒 **Secure API Routes** – Protected backend endpoints
* 📧 **Email Notifications** – Integrated with Nodemailer
* 🗄️ **MongoDB Database** – With Mongoose ORM


## 🛠️ Tech Stack

| Layer        | Technology                       |
| ------------ | -------------------------------- |
| Frontend     | Next.js 15, React 19, TypeScript |
| Styling      | Tailwind CSS, DaisyUI            |
| Auth         | NextAuth.js, JWT                 |
| Database     | MongoDB, Mongoose                |
| File Storage | ImageKit                         |
| Payments     | Razorpay                         |
| Email        | Nodemailer                       |
| Forms        | React Hook Form                  |

---

## ⚙️ Prerequisites
* Node.js (Latest LTS)
* MongoDB database (local/cloud)
* ImageKit Account
* Razorpay Account
* SMTP Server (Mailtrap, Gmail, etc.)

---

## Getting Started

```bash
# Clone the repo
git clone <repository-url>
cd imagekit-video-main

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Then fill in all required keys in .env

# Run the app
npm run dev
# Open http://localhost:3000
```

---

## 📁 Environment Variables

`.env` file should include:

```env
# Database
MONGODB_URI=

# NextAuth
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# ImageKit
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

# Email (SMTP)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```

---

## Available Scripts

| Command            | Description                     |
| ------------------ | ------------------------------- |
| `npm run dev`      | Start development server        |
| `npm run build`    | Build for production            |
| `npm run start`    | Start production server         |
| `npm run lint`     | Run ESLint checks               |
| `npm run seed`     | Seed the database (if included) |
| `npm run mailtrap` | Test SMTP mail setup            |

---

## Project Structure

```
├── app/
│   ├── api/             # API routes (Next.js handlers)
│   ├── components/      # UI components
│   ├── login/           # Login page
│   ├── register/        # Registration page
│   └── upload/          # Upload functionality
├── lib/                 # Helpers & utilities
├── models/              # Mongoose models
├── public/              # Static assets
├── types.d.ts           # Global TypeScript types

❤️ by Hitesh Sir X Prithwi singh 


