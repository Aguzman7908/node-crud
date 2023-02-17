const {Router} = require ('express')
const router = Router()
const {getMovies, createMovie, updateMovie, deleteMovie} = require ('../controllers/movies.controllers')

//READ
router.get('/',getMovies)

//CREATE
router.post ('/',createMovie)

//UPDATE
router.put ('/:id',updateMovie)

//DELETE
router.delete ('/:id',deleteMovie)

module.exports = router