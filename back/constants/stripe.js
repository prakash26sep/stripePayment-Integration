const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_51GtnwoLHeuYMZTk5hch2bCFflpX6ZS0Yl3bBYZ08nuGr0XpJyqfMW6GpyRtfwBpOf4XhYIqULm7hGD0YcZn6944f00myNrQGnm';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
