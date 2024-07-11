const router = require('express').Router();
const { User, Project } = require('../models');

// It's done when the `/` homepage route renders a list of all projects from the database.
router.get('/', async (req, res) => {
  try {
    const postsData = await Project.findAll({
      include: [{ model: User }],
    });

    const posts = postsData.map((post) => post.get({ plain: true }));

    res.render('homepage', posts);
  } catch (e) {
    console.log(e);
    res.status(200).json('Something went wrong!');
  }
});

module.exports = router;
