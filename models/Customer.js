import mongoose from 'mongoose';

// Define the Customer schema
const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
    trim: true,     // Trims whitespace from the name
  },
  dateOfBirth: {
    type: Date,
    required: true, // Date of birth is required
  },
  memberNumber: {
    type: Number,
    required: true,   // Member number is required
    unique: true,     // Ensure unique member number
    min: 1            // Member number should be at least 1
  },
  interests: {
    type: String,  // List of interests as a comma-separated string
    required: true,
    trim: true     // Trims whitespace around the interests
  }
});

// Create and export the Customer model
const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);
export default Customer;
