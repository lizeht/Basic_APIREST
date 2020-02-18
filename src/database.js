 const mysql =require("mysql");

//metodo de conecxion
const mysqlConection=mysql.createConnection({
     host:"localhost",
     user:"root",
     password:"",
     database:"world",
     multipleStatements:true
 });
 // para verificar que si esta conectada
 mysqlConection.connect(function(err){
     if(err){
         console.log("Error ",err)
     }else{
         console.log("DB is conected");
     }
 });
 //sirve para exportar la coleccion
 module.exports = mysqlConection;  