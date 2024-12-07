const Item = require('../model/items');

const addItem= async (req,res)=>{
    const {name,category,quantity,price,description}=req.body;

    if(!name||!category||!quantity||!price||!description){
       return res.status(400).json({message:"Please provide all the info"});
    }

    try{
        const item=Item.create({name,category,quantity,price,description});
        res.status(201).json({message:"Item added",value:item});
    }
    catch(err){

        res.status(500).json({message:err});

    }

}



const deleteItem= async (req,res)=>{
    const {name,category,quantity,price,description}=req.body;

    if(!name||!category||!quantity||!price||!description){
       return res.status(400).json({message:"Please provide all the info"});
    }

    try{
        const item=Item.create({name,category,quantity,price,description});
        res.status(201).json({message:"Item added",value:item});
    }
    catch(err){

        res.status(500).json({message:err});

    }

}


const updateItem= async (req,res)=>{
    const {name,category,quantity,price,description}=req.body;

    if(!name||!category||!quantity||!price||!description){
       return res.status(400).json({message:"Please provide all the info"});
    }

    try{
        const item=await Item.create({name,category,quantity,price,description});
        res.status(201).json({message:"Item added",value:item});
    }
    catch(err){

        res.status(500).json({message:err});

    }

}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchItems= async (req,res)=>{
    await delay(2000);
    try{
        const item=await Item.findAll();
       
        res.status(202).json({item});
    }
    catch(err){

        res.status(500).json({message:err});

    }

}



module.exports={addItem,deleteItem,updateItem,fetchItems}