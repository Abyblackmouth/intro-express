const express = require("express")
const app = express()
const port = 3000

app.get("/", (request, response) => {
    response.send({ message: "Intro Expressjs" })
})

app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto ${ port }`)
})