const express = require('express');
const cron = require('node-cron');
const expensesRoutes = require('./routes/expenses');
const { generateDailySummary } = require('./services/summary');

const app = express();
app.use(express.json());

// Routes
app.use('/expenses', expensesRoutes);

// Schedule Tasks
cron.schedule('0 0 * * *', generateDailySummary); // Daily at midnight

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
