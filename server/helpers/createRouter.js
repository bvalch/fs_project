const express = require('express');
const ObjectId = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection.find().toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectId(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.post('/', (req, res) => {
    const dinoToAdd = req.body;
    const id = (req.body._id)
    collection.insertOne(dinoToAdd, dinoToAdd._id = ObjectId(id))
      .then(result => res.json(result.ops[0]))
      .catch((err) => {
        console.log(err);
        res.status(500)
        res.json({ status: 500, error: err })
      });


  });

  router.put("/:id", (req, res) => {


    const updateDino = req.body;
    const id = ObjectId(req.params.id)
    console.log(id)
    console.log(updateDino)
    collection.updateOne({_id:id},{$set:updateDino})
    .then((result) => res.json(result))
            .catch((err) => {
                console.log(err);
                res.status(500);
                res.json({ status: 500, error: err })
            });


  })


  router.delete("/:id",(req,res)=>{
    const id=req.params.id;
    collection.deleteOne({_id:ObjectId(id)})
    .then(result=>res.json(result))
    .catch((err)=>{
      console.log(err);
      res.status(500)
      res.json({status:500,error:err})
      })
  
  })

  return router;
};

module.exports = createRouter;