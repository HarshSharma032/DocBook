/**
 * Global configuration for the Doctor Booking Application.
 * Centralizes environment variables and production fallbacks.
 */

// Prefer explicit VITE_API_URL; in production default to current origin.
const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? window.location.origin : 'http://localhost:5001');

// Add other global constants here if needed
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_dummyKEY';

const APP_CONFIG = {
  API_URL,
  RAZORPAY_KEY_ID,
  CURRENCY: 'INR',
  THEME_COLOR: '#0ea5e9',
};

export default APP_CONFIG;
