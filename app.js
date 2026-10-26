import express from "express"

const app = express()

app.use(express.json())

const PORT = 3000

app.get("/", (request, response) => {
    response.send("Bem vindo ao meu site! Meu e do Gustavo")
})

app.get("/produtos", (request, response) => {
    response.send("<h1>Lista de Produtos!</h1>")
})

app.get("/consulta/:id", (request, response) => {
    response.send("retorno consulta:" + request.params.id)
})

app.get("/cadastro/:id", (request, response) => {
    let id = request.params.id

    if(id) {
        response.send("<h1>produto " + id + " criado!</h1>")
    } else {
        response.send("produto criado!")
    }
})

app.get("/consulta/", (request, response) => {
    let cpf = request.query["cpf"]

    if (cpf) {
        response.send("retorno consulta: cpf = " + cpf)
    } else {
        response.send("CPF não foi fornecido!")
    }

    
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
