const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

// Load environment variables
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('Error: MONGO_URI environment variable is missing.');
  process.exit(1);
}

const seedAdmin = async () => {
  try {
    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(MONGO_URI);
    console.log('Database connected successfully.');

    const adminEmail = 'admin@example.com';
    const adminExists = await User.findOne({ email: adminEmail });

    if (adminExists) {
      console.log(`Admin user with email "${adminEmail}" already exists.`);
      process.exit(0);
    }

    const adminUser = new User({
      name: 'System Admin',
      email: adminEmail,
      password: 'admin123', // Will be securely hashed by the pre-save hook in User model
      role: 'Admin'
    });

    await adminUser.save();
    console.log('Admin user seeded successfully:');
    console.log(`Email: ${adminEmail}`);
    console.log('Password: admin123');
    console.log('Role: Admin');
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding admin: ${error.message}`);
    process.exit(1);
  }
};

seedAdmin();
