const express = require('express');
const connectDB = require('./config/db');
const app = express();
//Connect DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/tag', require('./routes/api/tag'));
app.use('/api/question', require('./routes/api/question'));
app.use('/api/myquestion', require('./routes/api/myquestion'));
app.use('/api/askquestion', require('./routes/api/askquestion'));
app.use('/api/company', require('./routes/api/company'));
app.use('/api/postVacancy', require('./routes/api/postVacancy'));
app.use('/api/myVacancy', require('./routes/api/myVacancy'));
app.use('/api/about', require('./routes/api/about'));
app.use('/api/answer', require('./routes/api/answer'));
app.use('/api/postAnswer', require('./routes/api/postAnswer'));
app.use('/api/answerID', require('./routes/api/answerID'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
