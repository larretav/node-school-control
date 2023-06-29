const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');
// import { PrismaClient } from '@prisma/client';

// const conexion = require('./database/db');

const prisma = new PrismaClient();

async function main(){

    //Mostrar datos
    router.get('/', async (req, res)=>{
        const result = await prisma.user.findMany();
        res.render('index', {results:result});
    })

    
        const results = await prisma.user.delete({
            where: {
                id: 1
            }
        })
        console.log(results)


}

main()
    .catch((e)=>{
        throw e
    })
    .finally(async ()=>{
        await prisma.$disconnect()
    })

// router.get('/', async (req, res)=>{
//     const results = await prisma.user.findMany();
//     res.render('index',{results:results});
// })

//BORRADO



// router.get('/', (req, res)=>{
//     conexion.query('SELECT * FROM user', (error, results)=>{
//         // console.log(error,results);
//         if(error){
//             throw error;
//         }else{
//             res.render('index', {results:results});
//         }
//     });
// })

router.get('/create', (req,res)=>{
    res.render('create');
})

const crud = require('./controllers/crud');
router.post('save', crud.save);

module.exports = router;