const express = require("express");
const router = express.Router();
const {
  fetchAllCandidates,
  fetchIndividualCandidate,
  postCandidate,
  deleteCandidate
} = require("../controller/candidateController");
router.get("/getIndividualCandidate/:id", fetchIndividualCandidate);
router.get("/getAllCandidates", fetchAllCandidates);
router.post("/postCandidateInfo", postCandidate);
router.delete('/deleteCandidate/:id',deleteCandidate)
module.exports = router;
