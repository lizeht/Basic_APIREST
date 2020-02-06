const  express= require('express');
const morgan= require('morgan');
const app =express();

//settings
app.set('port',3000);

 //middleware
 app.use(morgan('dev'));
 app.use(express.urlencoded({extended: false}));
 app.use(express.json());

 app
 //Routes
// app.use(require('./routes'));
 app.use('/api/movies',require('./routes/movies'));

//starting server 
 app.listen(app.get('port'),()=>{
     console.log("Server on Port"+app.get('port'));
 });

