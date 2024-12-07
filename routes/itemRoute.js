const express=require("express");
const router=express.Router();

const {addItem,fetchItems}=require("../controller/itemsController")


router.post("/addItem",addItem)
router.get("/inventoryItem",fetchItems)
module.exports=router