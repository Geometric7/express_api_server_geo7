const express = require('express');
const router = express.Router();
const { getAll, getItem, postItem, putItem, deleteItem } = require('../controllers/concerts.controller');

// router.route('/concerts').get((req, res) => {
//   res.json(db.concerts);
// });

router.get('/concerts', getAll);

// router.route('/concerts/:id').get((req, res) => {
//   res.json(db.concerts.filter((item) => item.id == req.params.id));
// });

router.get('/concerts/:id', getItem);

// router.route('/concerts').post((req, res) => {
//   const newData = {
//     id: uuidv4(),
//     performer: req.body.performer,
//     genre: req.body.genre,
//     price: req.body.price,
//     day: req.body.day,
//     image: req.body.image,
//   };
//   db.concerts.push(newData);
//   return res.json({ message: 'ok' });
// });

router.post('/concerts', postItem);

// router.route('/concerts/:id').delete((req, res) => {
//   const deletedConcerts = db.concerts.filter((item) => item.id == req.params.id);
//   const indexOfConcerts = db.concerts.indexOf(deletedConcerts);
//   db.concerts.splice(indexOfConcerts, 1);
//   return res.json({ message: 'ok' });
// });

router.delete('/concerts/:id', deleteItem);

// router.route('/concerts/:id').put((req, res) => {
//   const editedConcerts = db.concerts.filter((item) => item.id == req.params.id);
//   const indexOfConcerts = db.concerts.indexOf(editedConcerts);
//   const newConcert = {
//     ...editedConcerts,
//     performer: req.body.performer,
//     genre: req.body.genre,
//     price: req.body.price,
//     day: req.body.day,
//     image: req.body.image,
//   };
//   db.concerts[indexOfConcerts] = newConcert;
//   return res.json({ message: 'ok' });
// });

router.put('/concerts/:id', putItem);

module.exports = router;
