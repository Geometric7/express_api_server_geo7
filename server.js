const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const socket = require('socket.io');
const mongoose = require('mongoose');
//app.use((req, res, next) => {
//  req.io = io;
//  next();
//});

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use;

app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).json({ message: '404 not found...' });
});

//const dbURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost:27017/NewWaveDBTest' : 'mongodb+srv://Geometric7:MyProject2022@cluster0.n3y6p.mongodb.net/NewWaveDB?retryWrites=true&w=majority';
//mongoose.connect(dbURI, { useNewUrlParser: true });

const NODE_ENV = process.env.NODE_ENV;
let dbURI = '';

if(NODE_ENV === 'production') dbURI = 'mongodb+srv://Geometric7:MyProject2022@cluster0.n3y6p.mongodb.net/NewWaveDB?retryWrites=true&w=majority';
else if(NODE_ENV === 'test') dbURI = 'mongodb://localhost:27017/NewWaveDBTest';
else dbURI = 'mongodb://localhost:27017/NewWaveDB';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

//mongoose.connect('mongodb+srv://Geometric7:MyProject2022@cluster0.n3y6p.mongodb.net/NewWaveDB?retryWrites=true&w=majority', {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
//});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});

db.on('error', (err) => console.log('Error' + err));

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running');
});

module.exports = server;
