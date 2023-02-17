const express = require ('express')
const app = express()
const port = 7000

//middlewares
app.use(express.json())

//Importando RUTAS
app.use ("/api/users", require("./routes/user.routes"))


//SERVER
app.listen(port, () => {
    console.log (`servidor corriendo en puerto: ${port}`)
})