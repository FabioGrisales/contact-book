
const  express = require('express');
const AgendasServices = require('../services/agendasServices');
const router = express.Router();
const services = new AgendasServices();

///users/:usersId/agendas
router.get('/', async (req, res) =>{
  const agendas = await services.find();
  res.json(agendas);


});

router.get('/:id', async (req,res) => {
  const{ id } = req.params;
  const agendas = await services.finOne(id);
  console.log('agendaID');
  res.json(agendas);

});

router.post('/', async (req,res) => {
  const body= req.body;
  const newAgendas =await services.create(body);
  res.status(201).json(newAgendas);
})

router.patch('/:id', async (req,res) => {
  try {
    const {id}= req.params;
  const body= req.body;
  const agenda =await services.update(id, body);
  res.json(agenda)
  } catch (error) {
    res.status(404).json({
      message:error.message
    });
  }

})

router.delete('/:id', async (req,res) => {
  const {id}= req.params;
  const rta = await services.delete(id);
  res.json(rta)
})



 module.exports=router;
