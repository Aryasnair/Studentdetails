const express = require('express');
const { title } = require('process');
const router = express.Router();

// Middleware to parse JSON
router.use(express.json());//built-in middleware
router.use(express.urlencoded({extended:true}))//for identify if sending any static file 

// Mock user data
let basic= [
    { "id": 1, "name": "Jeena", "email": "jeena@example.com","place":"TVM"},
    { "id": 2, "name": "Jaison", "email": "jaison@example.com","place":"TVM" },
    { "id": 3, "name": "Jhon", "email": "jhon@example.com","place":"TVM"}
];

function studentroutes(nav){
router.get('/',(req,res)=>{
    res.render("home",{
        title:"EJS",
        paragraph:"NodeJS",
        basic,
        nav
    });
})
//Rendering formPage
router.get('/form',(req,res)=>{
    res.render("studentform",{
    nav
    })
});





// 1. CREATE

router.post('/', (req, res) => {
    basic.push(req.body);
    //res.send(basic);
    res.redirect('/basic');
});

// 2. READ

router.get('/', (req, res) => {
    res.json(basic);
});

// 3. UPDATE
router.put('/:id', (req, res) => {
    basic.splice(req.params.id,1,req.body);
    res.send(basic);
});

//4. DELETE
router.delete('/remove/:id',(req,res)=>{
    basic.pop();
    res.send(basic);
})
return router;
}

// Export the router

module.exports=studentroutes;