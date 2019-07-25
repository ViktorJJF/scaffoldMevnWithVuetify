process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =====================================================
// Base de domainToASCII
// =====================================================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:5000/mastermind';
} else {
    urlDB = 'mongodb:';
}