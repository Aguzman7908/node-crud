const express = require ('express')
const app = express()
//const port = 7000

require('dotenv').config()
//middlewares

app.use(express.json())

//Importando RUTAS
app.use ("/api/users", require("./routes/user.routes"))
app.use ("/api/movies", require("./routes/movies.routes"))

//SERVER
app.listen(process.env.PORT, () => {
    console.log (`servidor corriendo en puerto: ${process.env.PORT}`);
})