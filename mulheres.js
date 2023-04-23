const express = require("express") 
const router = express.Router()

const app = express ()
const porta = 3333

const mulheres = [
    {
        nome: 'Andrea Torres',
        imagem: 'deia.nirv@gmail.com',
        minibio: 'estudante de back end'
    },
    {
        nome: 'Eliana Torres',
        imagem: 'deia.nirv@gmail.com',
        minibio: 'poderosa chefona'
    },
    {
        nome: 'Cristina Torres',
        imagem: 'deia.nirv@gmail.com',
        minibio: 'professora de biologia e ciências'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)