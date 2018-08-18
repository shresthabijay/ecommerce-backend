var express=require("express")
var router=express.Router()
var db=require("../models/index")

router.get("/all",(req,res,next)=>{
    db.subcategory.findAll().then((data)=>{
        res.status(200).json(data)
    })
})

router.post("/create",(req,res,next)=>{
    db.category.findById(req.body.categoryId)
    .then((category)=>{
        if(category==null){
            res.status(404).send("not found");
        }

        else{
            db.subcategory.create({name:req.body.name,detail:req.body.detail})
            .then((subcategory)=>{

                subcategory.setCategory(category).
                then((sc)=>{
                    res.status(200).json(sc);
                })
                .catch((e)=>{
                    res.status(404).json(e);
                })
                
            })
            .catch((e)=>{res.status(400).send(e)})
        }
    })
    .catch((e)=>{
        res.send(e)
    })  
})

router.get("/findbyid/:id",(req,res,next)=>{

    db.subcategory.findById(req.params.id)
    .then(category=>{
        res.status(200).json(category)
    })
    .catch(e=>{
        res.status(404).json(e)
    })
})

router.get("/findbyname/:name",(req,res,next)=>{
    
    db.subcategory.findOne({where:{name:req.params.name}})
    .then(category=>{
        res.status(200).json(category)
    })
    .catch(e=>{
        res.status(404).json(e)
    })
})

router.put("/updatename/:id",(req,res,next)=>{
    db.subcategory.update(
        {name:req.body.name},
        {where:{
            id:req.params.id
        }}
    )
    .then(r=>res.status(200).json(r))
    .catch(e=>res.status(400).json(e))
})

router.put("/updatecategory/:id",(req,res,next)=>{
    db.subcategory.update(
        {categoryId:req.body.categoryId},
        {where:{
            id:req.params.id
        }}
    )
    .then(r=>res.status(200).json(r))
    .catch(e=>res.status(400).json(e))
})






module.exports=router