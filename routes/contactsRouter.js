
const  express = require('express');
const ContactsServices = require('../services/contactsServices');
const router = express.Router();
const services = new ContactsServices();

///users/:usersId/agendas
router.get('/', async (req, res) =>{
  const contacts = await services.find();
  res.json(contacts);


});

router.get('/:id', async (req,res) => {
  const{ id } = req.params;
  const contacts = await services.finOne(id);
  res.json(contacts);


});

router.post('/', async (req,res) => {
  const body= req.body;
  const newcontact =await services.create(body);
  res.status(201).json(newcontact);
})

router.patch('/:id', async (req,res) => {
  try {
    const {id}= req.params;
  const body= req.body;
  const contacts =await services.update(id, body);
  res.json(contacts)
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
