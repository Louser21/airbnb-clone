# Airbnb Clone

A modern Airbnb clone built with **Next.js 15.5.3**, **React 19**, **TypeScript**, and **Tailwind CSS**, featuring user authentication, property listings, and reservation management.  

---

## 🛠 Tech Stack

- **Framework:** Next.js 15.5.3  
- **Frontend:** React 19, Tailwind CSS  
- **State Management:** Zustand  
- **Forms:** React Hook Form  
- **Authentication:** NextAuth (Credentials, Google, GitHub)  
- **Database:** MongoDB via Prisma ORM  
- **Server:** Node.js  

---

## 📁 Project Structure

airbnb-clone/
├─ app/
│ ├─ _components/ # Reusable UI components (Navbar, Modals, Inputs, etc.)
│ ├─ _hooks/ # Custom hooks (modal states)
│ ├─ _actions/ # Server-side actions (getCurrentUser)
│ ├─ _libs/ # Prisma client setup
│ ├─ _provider/ # Providers (Toaster notifications)
│ ├─ api/ # API routes (user registration)
│ ├─ layout.tsx # Root layout with Navbar and modals
│ ├─ page.tsx # Homepage
│ └─ globals.css # Global styles
├─ pages/
│ └─ api/auth/[...nextauth].ts # NextAuth configuration
├─ prisma/
│ └─ schema.prisma # MongoDB schema
├─ public/
│ └─ images/ # Static images (avatars, placeholders)
├─ package.json
├─ tsconfig.json
├─ next.config.ts
├─ postcss.config.mjs
├─ eslint.config.mjs
└─ README.md

markdown
Copy code

---

## ⚡ Features

- **User Authentication**
  - Email/password login
  - OAuth login via Google & GitHub
  - Secure password hashing with bcrypt
- **UI Components**
  - Reusable buttons, modals, inputs, avatars, headings
  - Responsive Navbar with search bar and user menu
- **State Management**
  - Zustand for handling modal states
- **Database Models**
  - Users, Accounts, Listings, Reservations
- **Notifications**
  - Global toast notifications using react-hot-toast

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd airbnb-clone
```
###2. Install dependencies
```bash
Copy code
npm install
```

###3. Setup Environment Variables
Create a .env file in the root:
```
env
DATABASE_URL=<your-mongodb-connection-string>
NEXTAUTH_SECRET=<your-nextauth-secret>
GITHUB_ID=<github-client-id>
GITHUB_SECRET=<github-client-secret>
GOOGLE_CLIENT_ID=<google-client-id>
GOOGLE_CLIENT_SECRET=<google-client-secret>
```
###4. Initialize Prisma
```
bash
npx prisma generate
npx prisma db push
```
###5. Run the Development Server
```
bash
npm run dev
Open http://localhost:3000 to view the app.
```

📦 Scripts
Command	Description
npm run dev	Start the development server
npm run build	Build the production app
npm start	Start the production server
npx prisma generate	Generate Prisma client
npx prisma db push	Push schema changes to database

🗄 Database Schema
User: Stores user information & authentication data

Account: Links OAuth accounts (Google, GitHub)

Listing: Property listings (title, location, price, etc.)

Reservation: Bookings linking users to listings

💡 Future Improvements
Property search & filtering

Reservation management & calendar integration

Review and rating system

Payment gateway integration

📄 License
This project is open-source. Feel free to modify and distribute.

Made with ❤️ using Next.js, React, and Tailwind CSS.
