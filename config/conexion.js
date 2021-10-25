const mysql=require('mysql')
const conexion=mysql.createConnection({
    host:'localhost',
    user:'semudc',
    password:'123456',
    database:'bdsem'
})

conexion.connect((err)=>{
    if(err){
        console.log("Error de conexion")
        return err
    }
    console.log("conexion exitosa")

})

module.exports=conexion

