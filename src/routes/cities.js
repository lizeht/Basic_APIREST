const {
    Router
} = require('express');
const router = new Router();
const _ = require('underscore');

const mysqlConection = require("../database");

// obtiene Elemnetos
router.get('/', (req, res) => {
    mysqlConection.query("SELECT * FROM city", (err, rows, fileds) => {
        if (err) {
            console.log("Error;", err);
        } else {
            res.json(rows);
        }
    });

});
//agrega Elemntos
router.post('/', function (req, res) {
  console.log(req.body);
  
    const {
        Name,
        CountryCode,
        District,
        Population
    } = req.body;
    mysqlConection.query("INSERT INTO city VALUES(NULL,?,?,?,?)", [Name, CountryCode, District, Population], (err, row, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                "status": "city inserted"
            })
        }
    })

});
//elimnina Elemntos
router.delete('/:id', function (req, res) {
const {id}= req.params;
mysqlConection.query("DELETE FROM city WHERE id  = ?", [id], (err, row, fields) => {
    if (err) {
        console.log(err);
    } else {
        res.json({
            "status": "city deleted"
        });
    }
})

});

//Actualiza Elemntos
router.put('/:id', function (req, res) {
    const {id}=req.params;
    const { Name,CountryCode,District,Population } = req.body;
    mysqlConection.query("UPDATE city SET Name =?, CountryCode =?, District =?, Population =? WHERE id=?", [Name,CountryCode,District,Population,id], (err, row, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.json({"status": "city Uptate"});
        }
    })


});

module.exports = router;