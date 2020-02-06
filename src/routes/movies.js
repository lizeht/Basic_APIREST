const {
    Router
} = require('express');
const router = new Router();

 const _=require('underscore');
const movies = require('../movies.json');

// muestra Elemnetos
router.get('/', (req, res) => {
    res.json(movies);

});
//agrega Elemntos
router.post('/', function (req, res) {
    console.log(req.body);
    const id = movies.length + 1;
    const {title,director, year} = req.body;
    const newMovie = {id, ...req.body};
    if (title && director && year) {
        movies.push(newMovie);
        res.json({"message": "Movie Added" });
    } else {
        res.json({"message": "Erorr"});
    }

});
//elimnina Elemntos
router.delete('/:id',function(req,res){
    const {id}= req.params;
    if(id){
        _.each(movies,(movie,i)=>{
            if(movie.id == id){
                movies.splice(i,1);  //splice:elinnina elementos
                
            }
        });
    }

});

//Actualiza Elemntos
router.put('/:id',function(req,res){
const {id} = req.params;
const {title,director, year} = req.body;
if(id && title && director && year)
{
   _.each(movies,(movie,i)=>{
       if(movie.id == id){
           movie.title = title;
           movie.director = director;
           movie.year = year;
       }

   });
}else {
    res.json({'error':'Error in the update'})
}
});

module.exports = router;