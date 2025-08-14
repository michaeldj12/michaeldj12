# Fahrschulcard Clone

A modern driving school management system with multilingual support (English and Krio), built with React, Node.js, and MongoDB.

## Features

- 🚗 **Complete Driving School Management**: Theory tests, practical lessons, and appointment scheduling
- 🌍 **Multilingual Support**: English and Krio languages
- 👥 **User Management**: Students, instructors, and administrators
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🔐 **Secure Authentication**: JWT-based authentication system
- 📊 **Progress Tracking**: Monitor learning progress and test results
- 🎨 **Modern UI**: Built with Tailwind CSS and Lucide React icons
- ⚡ **Real-time Updates**: Live notifications and status updates

## Tech Stack

### Frontend
- React 18
- React Router DOM
- React i18next (Internationalization)
- Tailwind CSS
- Lucide React (Icons)
- React Query
- React Hook Form
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs (Password hashing)
- CORS support

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fahrschulcard-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/fahrschulcard
   JWT_SECRET=your-secret-key-here
   NODE_ENV=development
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system or update the `MONGODB_URI` to point to your MongoDB instance.

5. **Run the development server**
   ```bash
   # Start the backend server
   npm run dev
   
   # In a new terminal, start the frontend development server
   npm run build:dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3001
   - Backend API: http://localhost:3000

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm run build` - Build the frontend for production
- `npm run build:dev` - Build the frontend for development

## Project Structure

```
fahrschulcard-clone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── LoadingSpinner.js
│   ├── contexts/
│   │   └── AuthContext.js
│   ├── i18n/
│   │   └── index.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   ├── Appointments.js
│   │   ├── Theory.js
│   │   ├── Profile.js
│   │   └── NotFound.js
│   ├── utils/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── server.js
├── package.json
├── webpack.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Appointments
- `GET /api/appointments` - Get user appointments
- `POST /api/appointments` - Create appointment
- `PUT /api/appointments/:id` - Update appointment

### Theory Tests
- `GET /api/theory-questions` - Get theory questions
- `POST /api/theory-test/submit` - Submit test answers

### Progress
- `GET /api/progress` - Get user progress

## Multilingual Support

The application supports two languages:

1. **English** - Default language
2. **Krio** - Sierra Leone Creole language

Users can switch languages using the language selector in the navigation bar. The language preference is saved in the user's profile and persists across sessions.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Original Fahrschulcard app for inspiration
- Tailwind CSS for the beautiful UI components
- Lucide React for the icon library
- React community for the excellent tools and libraries

## Support

If you encounter any issues or have questions, please:

1. Check the existing issues in the repository
2. Create a new issue with detailed information about your problem
3. Include steps to reproduce the issue
4. Provide your environment details (OS, Node.js version, etc.)

## Roadmap

- [ ] Add more theory test categories
- [ ] Implement real-time chat between students and instructors
- [ ] Add video lessons and multimedia content
- [ ] Mobile app development
- [ ] Advanced analytics and reporting
- [ ] Payment integration for premium features
- [ ] Integration with external driving test systems
