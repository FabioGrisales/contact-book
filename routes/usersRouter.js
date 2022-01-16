
const  express = require('express');
const UsersServices = require('./../services/usersServices');
const router = express.Router();
const services = new UsersServices();

router.get('/', async (req, res) =>{
  const users = await services.find();
    res.json(users);

});

router.get('/:id', async (req,res) => {
  const{ id } = req.params;
  const users = await services.finOne(id);
  res.json(users);


});

router.post('/', async (req,res) => {
  const body= req.body;
  const newUsers =await services.create(body);
  res.status(201).json(newUsers);
})

router.patch('/:id', async (req,res) => {
  try {
    const {id}= req.params;
  const body= req.body;
  const users =await services.update(id, body);
  res.json(users)
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
