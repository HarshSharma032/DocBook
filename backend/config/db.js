const mongoose = require('mongoose');
const User = require('../models/User');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // additional setup if needed
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Auto-seed default Admin if it doesn't exist
    try {
      const adminEmail = 'admin@example.com';
      const adminExists = await User.findOne({ email: adminEmail });
      if (!adminExists) {
        const adminUser = new User({
          name: 'System Admin',
          email: adminEmail,
          password: 'admin123',
          role: 'Admin'
        });
        await adminUser.save();
        console.log('Default admin user created automatically.');
      } else {
        console.log('Default admin user already exists.');
      }
    } catch (seedError) {
      console.error(`Error automatically seeding admin user: ${seedError.message}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
