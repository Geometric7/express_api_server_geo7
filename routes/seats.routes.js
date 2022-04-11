const express = require('express');
const router = express.Router();
const { getAll, getItem, postItem, deleteItem } = require('../controllers/seats.controller');

// router.route('/seats').get((req, res) => {
//   res.json(db.seats);
// });

router.get('/seats', getAll);

// router.route('/seats/:id').get((req, res) => {
//   res.json(db.seats.filter((item) => item.id === req.params.id));
// });

router.get('/seats/:id', getItem);

// router.route('/seats').post((req, res) => {
//   const newData = {
//     id: uuidv4(),
//     day: req.body.day,
//     seat: req.body.seat,
//     client: req.body.client,
//     email: req.body.email,
//   };
//   if(db.seats.some(checkSeat => (checkSeat.day === req.body.day && checkSeat.seat === req.body.seat))) {
//     return res.status(404).json({ message: "The slot is already taken..." });
//   } else {
//     db.seats.push(newData);
//     req.io.emit('seatsUpdated', db.seats);
//     return res.json({message: 'Reserved complete'});
//   }
// });

router.post('/seats', postItem);

// router.route('/seats/:id').delete((req, res) => {
//   const deletedSeats = db.seats.filter((item) => item.id === req.params.id);
//   const indexOfSeats = db.seats.indexOf(deletedSeats);
//   db.concerts.splice(indexOfSeats, 1);
//   return res.json({message: 'OK'});
// });

router.delete('/seats/:id', deleteItem);

// router.route('/seats/:id').put((req, res) => {
//   const editedConcerts = db.concerts.filter((item) => item.id === req.params.id);
//   const indexOfConcerts = db.concerts.filter((item) => item.id === req.params.id);
//   const newConcert = {
//     ...editedConcerts,
//     day: req.body.day,
//     seat: req.body.seat,
//     client: req.body.client,
//     email: req.body.email,
//   };
//   db.concerts[indexOfConcerts] = newConcert;
//   return res.json({message: 'OK'});
// });

module.exports = router;
