const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fahrschulcard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import models
const User = require('./models/User');
const TheoryQuestion = require('./models/TheoryQuestion');

// Sample theory questions
const sampleQuestions = [
  {
    question: "What does a red traffic light mean?",
    options: [
      "Stop and wait",
      "Slow down",
      "Speed up",
      "Turn right"
    ],
    correctAnswer: 0,
    explanation: "A red traffic light means you must stop and wait until it turns green.",
    category: "traffic_signs",
    difficulty: "easy",
    language: "en",
    translations: {
      krio: {
        question: "Wetin red traffic light mean?",
        options: [
          "Stop en wait",
          "Go slow",
          "Go fast",
          "Turn right"
        ],
        explanation: "Red traffic light mean you must stop en wait till e turn green."
      }
    }
  },
  {
    question: "What is the speed limit in a residential area?",
    options: [
      "30 km/h",
      "50 km/h",
      "70 km/h",
      "100 km/h"
    ],
    correctAnswer: 1,
    explanation: "The speed limit in residential areas is typically 50 km/h for safety.",
    category: "road_rules",
    difficulty: "medium",
    language: "en",
    translations: {
      krio: {
        question: "Wetin be di speed limit for residential area?",
        options: [
          "30 km/h",
          "50 km/h",
          "70 km/h",
          "100 km/h"
        ],
        explanation: "Di speed limit for residential areas na 50 km/h for safety."
      }
    }
  },
  {
    question: "What should you do when approaching a pedestrian crossing?",
    options: [
      "Speed up to get through quickly",
      "Slow down and be prepared to stop",
      "Honk your horn to warn pedestrians",
      "Ignore pedestrians"
    ],
    correctAnswer: 1,
    explanation: "You should slow down and be prepared to stop when approaching a pedestrian crossing.",
    category: "safety",
    difficulty: "easy",
    language: "en",
    translations: {
      krio: {
        question: "Wetin you must do when you dey go near pedestrian crossing?",
        options: [
          "Go fast to pass quick",
          "Go slow en ready to stop",
          "Blow horn to warn pedestrians",
          "No mind pedestrians"
        ],
        explanation: "You must go slow en ready to stop when you dey go near pedestrian crossing."
      }
    }
  },
  {
    question: "What does a yellow traffic light mean?",
    options: [
      "Stop if it's safe to do so",
      "Speed up to get through",
      "Turn right only",
      "Ignore the light"
    ],
    correctAnswer: 0,
    explanation: "A yellow traffic light means stop if it's safe to do so, otherwise proceed with caution.",
    category: "traffic_signs",
    difficulty: "medium",
    language: "en",
    translations: {
      krio: {
        question: "Wetin yellow traffic light mean?",
        options: [
          "Stop if e safe to do so",
          "Go fast to pass",
          "Turn right only",
          "No mind di light"
        ],
        explanation: "Yellow traffic light mean stop if e safe to do so, if not, go with care."
      }
    }
  },
  {
    question: "What is the purpose of seat belts?",
    options: [
      "To make the car look better",
      "To keep you in place during sudden stops",
      "To make driving more comfortable",
      "To save fuel"
    ],
    correctAnswer: 1,
    explanation: "Seat belts are designed to keep you in place during sudden stops or accidents.",
    category: "safety",
    difficulty: "easy",
    language: "en",
    translations: {
      krio: {
        question: "Wetin be di purpose of seat belts?",
        options: [
          "To make di car look fine",
          "To keep you for place when car stop quick",
          "To make driving comfortable",
          "To save fuel"
        ],
        explanation: "Seat belts dey design to keep you for place when car stop quick or accident happen."
      }
    }
  }
];

// Sample users
const sampleUsers = [
  {
    email: "student@example.com",
    password: "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // "password"
    firstName: "John",
    lastName: "Student",
    role: "student",
    phone: "+1234567890",
    language: "en"
  },
  {
    email: "instructor@example.com",
    password: "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // "password"
    firstName: "Sarah",
    lastName: "Instructor",
    role: "instructor",
    phone: "+1234567891",
    language: "en"
  }
];

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // Clear existing data
    await User.deleteMany({});
    await TheoryQuestion.deleteMany({});

    console.log('🗑️  Cleared existing data');

    // Insert sample users
    const users = await User.insertMany(sampleUsers);
    console.log(`👥 Created ${users.length} sample users`);

    // Insert sample questions
    const questions = await TheoryQuestion.insertMany(sampleQuestions);
    console.log(`❓ Created ${questions.length} sample theory questions`);

    console.log('✅ Database seeding completed successfully!');
    console.log('');
    console.log('📋 Sample login credentials:');
    console.log('Student: student@example.com / password');
    console.log('Instructor: instructor@example.com / password');
    console.log('');
    console.log('🌐 Access the application at: http://localhost:3001');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Run the seeder
seedDatabase();