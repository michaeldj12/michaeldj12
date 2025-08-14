# Fahrschulcard Clone - Setup Guide

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### 1. Clone and Install
```bash
git clone <repository-url>
cd fahrschulcard-clone
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Database Setup
```bash
# Start MongoDB (if using local installation)
mongod

# Seed the database with sample data
npm run seed
```

### 4. Start the Application
```bash
# Option 1: Use the start script
./start.sh

# Option 2: Start manually
npm run dev          # Backend (port 3000)
npm run build:dev    # Frontend (port 3001)
```

### 5. Access the Application
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000

## Sample Login Credentials

After running the seeder, you can use these accounts:

**Student Account:**
- Email: student@example.com
- Password: password

**Instructor Account:**
- Email: instructor@example.com
- Password: password

## Features Implemented

### ✅ Core Features
- [x] User authentication (login/register)
- [x] Multilingual support (English & Krio)
- [x] Responsive design
- [x] Dashboard with progress tracking
- [x] Theory test system
- [x] Appointment management
- [x] User profile management
- [x] Modern UI with Tailwind CSS

### ✅ Technical Features
- [x] JWT authentication
- [x] MongoDB database
- [x] RESTful API
- [x] React frontend
- [x] Webpack bundling
- [x] Hot reloading
- [x] Form validation
- [x] Error handling
- [x] Toast notifications

### 🌍 Language Support
- **English**: Complete translation
- **Krio**: Complete translation with proper grammar and vocabulary

## Project Structure

```
fahrschulcard-clone/
├── src/                    # React frontend source
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── contexts/          # React contexts
│   ├── i18n/              # Internationalization
│   └── utils/             # Utility functions
├── models/                # Database models
├── public/                # Static files
├── server.js              # Express server
├── seeder.js              # Database seeder
└── package.json           # Dependencies
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

## Development

### Adding New Languages
1. Add translations to `src/i18n/index.js`
2. Update the language selector in `Navbar.js`
3. Test the translations

### Adding New Features
1. Create new components in `src/components/`
2. Add new pages in `src/pages/`
3. Update routing in `App.js`
4. Add API endpoints in `server.js`

### Database Changes
1. Update models in `models/` directory
2. Update the seeder if needed
3. Run `npm run seed` to update sample data

## Troubleshooting

### Common Issues

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check the connection string in `.env`
- Verify network connectivity

**Port Already in Use:**
- Change the port in `.env`
- Kill existing processes using the port

**Build Errors:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

**Language Not Switching:**
- Clear browser cache
- Check localStorage for language preference
- Verify translation files are loaded

## Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables for Production
```env
NODE_ENV=production
PORT=3000
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions:
1. Check the existing issues
2. Create a new issue with detailed information
3. Include environment details and error logs