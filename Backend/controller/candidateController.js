const candidateInfo = require('../schema/candidateInfo')

const fetchAllCandidates=async (req,res)=>{
const candidate=await candidateInfo.find()
res.status(200).json(candidate)
}
const fetchIndividualCandidate=async (req,res)=>{
const candidate=await candidateInfo.findById(req.params.id);
if(!candidate){
    res.status(400)
    throw new Error ("Candidate do not exist");
}
res.status(200).json(`Here we found application for the candidate ${req.body.name}`)

}
const postCandidate=async (req,res)=>{
    console.log(req.body)
    const {name,email,password,number,address,city,graduation,company,experience}=req.body;
    if(!name||!email||!password||!number||!address||!city||!graduation||!company||!experience){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const candidate=await candidateInfo.create({
        name,email,password,number,address,city,graduation,company,experience
    })
    res.status(200).json(candidate)

}
const deleteCandidate=async(req,res)=>{
    const candidate=await candidateInfo.findById(req.params.id);
    if(!candidate){
        res.status(400);
        throw new Error ("Such candidate do not exists in our database")
    }
    await candidateInfo.deleteOne(candidate)
    res.status(200).json(`Candidate ${candidate.name} has been deleted`)
}
module.exports={fetchAllCandidates,fetchIndividualCandidate,postCandidate,deleteCandidate}