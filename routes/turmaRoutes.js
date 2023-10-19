
const Turma = require('../models/Turma')


const router = require('express').Router()

// Create Turma
router.post('/', async (req,res) =>{

    // req.body
    // {name: "1º ano A", category: "Ensino Fundamental I", status: true}
       const {name,category, status} = req.body;
    
       if (!name  || !category){
            res.status(422).json({ message: "The name and category are mandatory"})
            return;
       }
    
       const turma = {
        name,category,status,
       }
    
       try {
        // making request create.
        await Turma.create(turma)
            res.status(201).json({message: 'Turma created successfully!'})
       } catch (err) {
        res.status(400).json({error: err})
       }
    })

  router.get('/', async (req, res)=>{
      try {
          const turmas = await Turma.find()
          res.status(200).json(turmas);
      } catch (err) {
          res.status(404).json({error: err})
      }
  })

  router.get('/:id', async (req,res)=>{
     const id = req.params.id
     try {
          const turma = await Turma.findOne({_id:id})
           if (!turma){
               res.status(422).json({msg:"Turma was not found!"})
               return
           }

          res.status(200).json(turma)
     } catch (err) {
          res.status(404).json({error: err})
     }
  })

  router.patch('/:id', async (req, res) =>{

     const id = req.params.id
     const {name,category, status} = req.body;

     const turma = {
         name, category, status,
     }

     try {

          const updatedTurma = await Turma.updateOne({_id: id}, turma)

           if (updatedTurma.matchedCount === 0){
               res.status(422).json({msg:"Any turma wasn't updated!!"})
               return
           }

          res.status(200).json(turma);
          
     } catch (err) {
          res.status(404).json({error: err})
     }

  })

  router.delete('/:id', async (req, res)=>{
     const id = req.params.id

     const turmaEncontrada = await Turma.findOne({_id: id})
    
          if (!turmaEncontrada){
               res.status(422).json({msg:"Turma was not found!"})
               return
           }
     

     try {

               const turma = await Turma.deleteOne({_id: id})

           res.status(200).json({ message: "The Turma was deleted successfully"});

          
         

          
     } catch (err) {
          res.status(404).json({error: err})
     }
  })



    module.exports = router