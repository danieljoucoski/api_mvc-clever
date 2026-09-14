const express = require("express")
const app = express()
const sequelize = require("/src/config/database")
const userRoutes = require("./src/routes/userRoutes")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/api", userRoutes)

sequelize
    .authenticated()

    .then(
        () => {
            console.log("Banco conectado com sucesso")
            app.listen(3000, () => console.log("Servidor rodando na porta:3000"))
        }
    )
    .catch(err => {
        console.log("Erro ao conectar no bando de dados:",err)
    })


