const productorouter=require('./routers/productorouter')
const cors=require("cors")
const express=require('express')
const app=express()
const PORT=process.env.port || 3000
app.use(cors())
app.use('/api/producto',productorouter)

app.listen(PORT,()=>{
    console.log("Servidor Ejecutando Puerto "+PORT)
})