const { Router } = require("express");
const { getQuestions, getAnswerImages, getCategories, getCorrectAnswers } = require("../controllers/questions");

const router = Router();

router.get('/question/:id', getQuestions);

router.get('/categories', getCategories);

router.get('/images', getAnswerImages);

router.get('/answers/:id', getCorrectAnswers);

module.exports = router;