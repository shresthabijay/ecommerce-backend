var express=require("express")
var router=express.Router()
var db=require("../models/index")



router.get("/all",(req,res,next)=>{
    db.category.findAll().then((data)=>{
        res.status(200).json(data)
    })
})

router.post("/create",(req,res,next)=>{
    db.category.create({name:req.body.name,detail:req.body.detail})
    .then((category)=>{
        res.status(200).json(category);
    })
    .catch((e)=>{res.status(400).send(e)})
})

router.get("/findbyid/:id",(req,res,next)=>{
    
    db.category.findById(req.params.id)
    .then(category=>{
        res.status(200).json(category)
    })
    .catch(e=>{
        res.status(404).json(e)
    })
})

router.get("/findbyname/:name",(req,res,next)=>{
    
    db.category.findOne({where:{name:req.params.name}})
    .then(category=>{json(e)
    })
})

router.get("/findbyname/:name",(req,res,next)=>{
    
    db.category.findOne({where:{name:req.params.name}})
    .then(category=>{
        res.status(200).json(category)
    })
    .catch(e=>{
        res.status(404).json(e)
    })
})

router.get("/deletebyid/:id",(req,res,next)=>{

    db.category.destroy({
        where:{
            id:req.params.id
        }
    }).then(r=>{
        if(r===1){
            res.status(200).send("success");
        }
    }).catch(e=>{
        res.status(400).send("failure")
    })
})

module.exports=router