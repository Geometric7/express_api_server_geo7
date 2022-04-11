const express = require('express');
const router = express.Router();
// const { v4: uuidv4 } = require('uuid');
// const db = require('../db');
const { getAll, getItem, getRandom, postItem, putItem, deleteItem } = require('../controllers/testimonial.controller');

// router.route('/testimonials').get((req, res) => {
//   res.json(db.testimonials);
// });

router.get('/testimonials', getAll);

// router.route('/testimonials/:id').get((req, res) => {
//   res.json(db.testimonials.filter((item) => item.id == req.params.id));
// });

router.get('/testimonials/:id', getItem);

// router.route('/testimonials/random').get((req, res) => {
//   let item = db.testimonials[Math.floor(Math.random() * db.length )];
//   res.json(item);
// });

router.get('/testimonials/random', getRandom);

// router.route('/testimonials').post((req, res) => {
//   const newData = {
//     id: uuidv4(),
//     author: req.body.author,
//     text: req.body.text,
//   };
//   db.testimonials.push(newData);
//   return res.json({message: 'OK'});
// });

router.post('/testimonials', postItem);

// router.route('/testimonials/:id').put((req, res) => {
//   const editedTestimonials = db.testimonials.filter((item) => item.id == req.params.id);
//   const indexOfTestimonial = db.testimonials.indexOf(editedTestimonials);
//   const newTestimonials = {
//     ...editedTestimonials,
//     author: req.body.author,
//     text: req.body.text,
//   };
//   db.testimonials[indexOfTestimonial] = newTestimonials;
//   return res.json({message: 'OK'});
// });

router.put('/testimonials/:id', putItem);

// router.route('/testimonials/:id').delete((req, res) => {
//   const deletedTestimonials = db.testimonials.filter((item) => item.id == req.params.id);
//   const indexOfTestimonial = db.testimonials.indexOf(deletedTestimonials);
//   db.testimonials.splice(indexOfTestimonial, 1);
//   return res.json({message: 'OK'});
// });

router.delete('/testimonials/:id', deleteItem);

module.exports = router;
