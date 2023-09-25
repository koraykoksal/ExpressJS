"use strict"

//* EXPRESS

const express = require('express')
const app = express()


/* ENV FILE */

//* env dosyasının içinde ki bilgiyi okumak için import yapılır.

require('dotenv').config()

const HOST = process.env?.HOST || 'http://localhost'
const PORT = process.env?.PORT || 8000

//?route yapısında '/' dan sonra ilk karşılaşılan değeri okuyup response işlemi yapıyor. bundan dolayı / index adresi en sona yazılır ve en özel olan adres en başa alınır.

//* Routes

//* get metodu ile bu url adresine istek gelirse ilgili callback çalışsın
// app.get('/',(req,res)=>{

//     res.send({message:'welcome baby 🫶'})
// })

// app.post('/',(req,res)=>{

//     res.send({message:'called post method'})
// })

// app.post('/:id',(req,res)=>{

//     res.send({message:`${req.params.id}`})
// })

// //* app.all ile bütün http metodlarına izin ver anlamına gelir
// app.all('/about',(req,res)=>{

//     res.send({message:'all ile istek atıldı.'})
// })


app.route('/')
.get((req,res)=>res.send('get'))
.post((req,res)=>res.send('post'))
.delete((req,res)=>res.send('delete'))
.patch((req,res)=>res.send('patch'))











app.listen(PORT,()=>{
    console.log('listening port 8000')
})

