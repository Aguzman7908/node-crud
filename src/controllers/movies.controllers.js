const {peliculas} = require('../databse/db')
const {v4:uuid} = require('uuid')

//READ
const getMovies = (req,res) => {
    return res.json ({
        ok:true,
        msg:'Peliculas Obtenidos',
        data:peliculas,
    })
}


//CREATE
const createMovie = (req,res) => {
    const {id,title, year, price}=req.body
    const movie = {
        id: uuid(),
        title,
        year,
        price,
    }
    peliculas.push(movie)
    return res.json({
        ok:true,
        msg:'Pelicula Agregada',
        data:peliculas,
    })
}

//UPDATE
const updateMovie = (req,res) => {
    const {id}=req.params
    const {title, year, price}=req.body

    const movie = peliculas.find((movie)=> movie.id === id)

    
    movie.title = title
    movie.year = year
    movie.price = price
      
    return res.json({
        ok:true,
        msg:'Peliculas Actualizadas',
        data:movie,
    })
}

//DELETE
const deleteMovie = (req,res) => {
    
    const {id}=req.params

    const movie = peliculas.find((movie)=> movie.id === id)

    peliculas.splice(peliculas.indexOf(movie),1)
   
    return res.json({
        ok:true,
        msg:'Pelicula Eliminad',
        data:movie,
    })
}

module.exports = {getMovies, createMovie, updateMovie,deleteMovie}