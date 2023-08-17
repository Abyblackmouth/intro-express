const express = require("express")
const app = express()
const port = 3000

const users = [
    {id: 1, name: "Abraham", lastName: "Covarrubias"},
    {id: 2, name: "Alexis", lastName: "Salazar"}
]

app.get("/", (request, response) => {
    response.send({ message: "Intro Expressjs" })
})

app.get("/users", (request, response) => {
    response.send(users)
})

app.get("/users/:id", (request, response) => {
    console.log(request)
    const userId = request.params.id
    const findUser = users.find((user) => user.id == userId)

    if (!findUser){
        response.send({ error: `Usuario con el id ${userId} no encontrado`})
    }
    response.send( findUser)
})

app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto ${ port }`)
})