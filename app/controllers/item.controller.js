const db = require("../models");
const Item = db.item;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
   if (!req.body.name) {
       res.status(400).send({
           message: "o conteudo não pode ser vazio!"
       });
       return;
   }
   const item = {
       name: req.body.name,
       decription: req.body.description,
       quantity: req.body.quantity,
       is_flammable: req.body.is_flammable ? req.body.is_flammable : false
        }
       Item.create(item)
       .them(data =>{
           res.send(data);
       })
     .catch(err =>{
         res.status(500).send({
             message:
             err.message || "Ocorreu um erro ao criar o item."
         })
     }) 
    };
exports.findALL = (req,res) => {
   const name = req.body.name;
   var condition = name ? { name: { [Op.like]: `%${name}%` }} : null;

   Item.findALL({where: condition})
   .them(data =>{
       res.send(data);
   })
 .catch(err =>{
     res.status(500).send({
         message:
         err.message || "Ocorreu um erro ao criar ao listar os item."
     })
 }) 
};

exports.findOne = (req,res) => {

};

exports.update = (req,res) => {

};

exports.delete = (req,res) => {

};

exports.deleteALL = (req,res) => {

};

exports.findALLFlammabes = (req,res) => {

};
