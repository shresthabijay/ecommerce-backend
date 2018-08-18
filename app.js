let express=require("express")
let cors=require("cors")
let db=require("./models")
let bodyParser=require("body-parser")
let productRouter=require("./Routers/product")
let subcategoryRouter=require("./Routers/subcategory")
let categoryRouter=require("./Routers/category")

let app=express()


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/",(req,res,next)=>{
    res.send("Hello World!")
})

app.use("/category",categoryRouter)
app.use("/subcategory",subcategoryRouter)
app.use("/product",productRouter)
app.use("/test/create",(req,res,next)=>{
    db.test.create({}).then((test)=>{
        db.category.findOne({where:{id:7}}).then((cat)=>{
            test.setCategory(cat).then(r=>{
                res.send(r)
            })
        })
    })
})



module.exports = app;