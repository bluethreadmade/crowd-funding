const router = require('express').Router();
const { User, Project } = require('../models');

// It's done when the `/` homepage route renders a list of all projects from the database.
router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;
