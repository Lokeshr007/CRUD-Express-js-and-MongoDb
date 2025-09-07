const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const db=require('./db')
const exhbs=require('express-handlebars')
const {ObjectId}=require('mongodb')

app.engine('hbs',exhbs.engine({
    layoutsDir:'views/',
    defaultLayout:'main',
    extname:'hbs'
}))
app.set('view engine','hbs')
app.set('views','views')


app.use(bodyParser.urlencoded())

app.get('/',async (req,res,next)=>{
    let database=await db.getDatabase()
    const collection =database.collection('books')
    let books=await collection.find({}).toArray();
    let edit_id, edit_book;
    let message = '';
    if(req.query.edit_id){
        edit_id = req.query.edit_id;
        edit_book = await collection.findOne({_id:new ObjectId(edit_id)})
    }

    switch(req.query.status){
        case '1':
            message="Inserted Successfully"
            break
        case '2':
            message="Updated Successfully"
            break
        case '3':
            message="Deleted Successfuly"
            break
        default:
            break
    }
    res.render('main',{books,edit_id,edit_book,message})
})

app.post('/store_book',async (req,res)=>{
    let database = await db.getDatabase()
    const collection = database.collection('books')
    let book = {title:req.body.title,author:req.body.author}

    await collection.insertOne(book)
    return res.redirect('/?status=1')

})

app.post('/update_book/:id',async (req,res)=>{
    let database = await db.getDatabase()
    const collection=database.collection('books')
    let edit_id=req.params.id;
    let book = {title:req.body.title,author:req.body.author}

    await collection.updateOne(
        {_id:new ObjectId(edit_id)},
        {$set:book}
    )

    return res.redirect('/?status=2')
})

app.get('/delete_book/:id',async (req,res)=>{
    let database = await db.getDatabase()
    const collection = database.collection('books')
    let delete_id = req.params.id
    await collection.deleteOne(
        {_id:new ObjectId(delete_id)}
    )
    return res.redirect('/?status=3')
})

app.listen(3000, () => {
    console.log('Server is Running on http://localhost:3000');
});
