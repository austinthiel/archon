import {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} from '../repositories/BlogRepository';

const express = require('express');

const router = express.Router();

router.get('/', getBlog);
router.post('/', createBlog);
router.put('/', updateBlog);
router.delete('/', deleteBlog);

module.exports = router;
