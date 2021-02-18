const Category = require('../models/Category');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.create = (req, res) => {
    const category = new Category(req.body)
    category.save((err, data)=> {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    })
}

exports.list = (req, res) => {
    Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    })
}

exports.deleteCategory = (req, res) =>{
    const id = req.params.id
    Category.findByIdAndRemove(id, (err,id)=>{ 
        if(err){
        res.status(500).send({message: 'Error al eliminar lo que sea'});
        }else{
        res.status(200).send({message: 'Se elimino bien esa vuelta :)'});
        }
        });
   
}
