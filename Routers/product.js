var express=require("express")
var router=express.Router()
var db=require("../models/index")


router.get("/all",(req,res,next)=>{
    db.product.findAll().then((data)=>{
        res.status(200).json(data)
    })
})


router.post("/create",(req,res,next)=>{
    db.subcategory.findById(req.body.subcategoryId)
    .then((subcategory)=>{
        if(subcategory==null){
            res.status(404).send("subcategory not found");
        }

        else{
            db.product.create({name:req.body.name,detail:req.body.detail,price:req.body.price})
            .then((product)=>{

                product.setSubcategory(subcategory)
                subcategory.getCategory()
                .then((category)=>{
                    product.setCategory(category)
                    res.status(200).json(product);
                })
                .catch((e)=>{
                    res.status(404).json(e);
                })
            })
            .catch((e)=>{res.status(404).json(e)})
        }
    })
    .catch((e)=>{
        res.send(e)
    })  
})

router.get("/findbyid/:id",(req,res,next)=>{
    
    db.product.findById(req.params.id)
    .then(category=>{
        res.status(200).json(category)
    })
    .catch(e=>{
        res.status(404).json(e)
    })
})

router.get("/findbyname/:name",(req,res,next)=>{
    
    db.product.findOne({where:{name:req.params.name}})
    .then(category=>{
        res.status(200).json(category)
    })
    .catch(e=>{
        res.status(404).json(e)
    })
})

router.get("/findbyid/:id",(req,res,next)=>{
    
    db.product.findById(req.params.id)
    .then(r=>{
        res.status(200).json(r)
    })
    .catch(e=>{
        res.status(404).json(e)
    })
})

router.get("/findbyname/:name",(req,res,next)=>{
    
    db.product.findOne({where:{name:req.params.name}})
    .then(r=>{
        res.status(200).json(r)
    })
    .catch(e=>{
        res.status(404).json(e)
    })
})

router.put("/updatename/:id",(req,res,next)=>{
    db.product.update(
        {name:req.body.name},
        {where:{
            id:req.params.id
        }}
    )
    .then(r=>res.status(200).json(r))
    .catch(e=>res.status(400).json(e))
})

router.put("/updatesubcategory/:id",(req,res,next)=>{
    db.product.update(
        {subcategoryId:req.body.subcategoryId},
        {where:{
            id:req.params.id
        }}
    )
    .then(r=>res.status(200).json(r))
    .catch(e=>res.status(400).json(e))
})

router.put("/updateprice/:id",(req,res,next)=>{
    db.product.update(
        {price:req.body.price},
        {where:{
            id:req.params.id
        }}
    )
    .then(r=>res.status(200).json(r))
    .catch(e=>res.status(400).json(e))
})


module.exports=router