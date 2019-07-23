'use strict';

const express = require('express');
const Celebrity = require('../models/Celebrity');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('celebritiesList', { celebrities });
  } catch (error) {
    next(error);
  }
});

router.get('/new', (req, res, next) => {
  res.render('celebritiesNew');
});

router.post('/new', async (req, res, next) => {
  try {
    const create = req.body;
    await Celebrity.create(create);
    res.redirect('/');
  } catch (error) {
    res.redirect('/new');
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const details = await Celebrity.findById(id);
    res.render('show', details);
  } catch (error) {
    next(error);
  }
});

router.post('/:id/delete', async (req, res, next) => {
  try {
    const id = req.params.id;
    await Celebrity.findByIdAndRemove(id);
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  try {
    const id = req.params.id;
    const details = await Celebrity.findById(id);
    res.render('celebritiesUpdate', details);
  } catch (error) {
    next(error);
  }
});

router.post('/:id/edit', async (req, res, next) => {
  try {
    const id = req.params.id;
    const celebrity = req.body;
    await Celebrity.findByIdAndUpdate(id, celebrity);
    res.redirect(`/celebrities/${id}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
