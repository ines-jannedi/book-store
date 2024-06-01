 const item = require('../database mongo/index.js');


 const selectAll = async function (req, res) {
       try {
         const y = await item.getAll();
         res.status(200).json(y);
       } catch (error) {
         res.status(404).send(error);
       }
     };

     const selectOne = async function (req, res) {
      try {
        const y = await item.getOne(req.params.title );
        res.status(200).json(y[0]);
      } catch (error) {
        res.status(404).send(error);
      }
    };

    const make = async function (req, res) {
      try {
        const y = await item.create(req.body.category,req.body.title,req.body.description,req.body.price,req.body.cover);
        res.status(201).json(y);
      } catch (error) {
        ; res.status(500).send(error)
      }
    };

   

    const change= async function (req,res) {
      try{
        const y=await item.update(req.params.id,req.body.title,req.body.price,req.body.cover)
        res.status(204).json(y)
      } catch(err) {res.status(505).send(err)}
    };

    const delt= async function (req,res) {
      try{
        const y=await item.destroy(req.params.id)
        res.status(204).json(y)
      } catch(err) {res.status(505).send(err)}
    };
     module.exports = { selectAll,selectOne,make,change,delt }