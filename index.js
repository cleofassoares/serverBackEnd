const express = require("express");
const { router } = require("./routes/user");

const server =express();
server.use(express.json());


server.get("/", (req, res) => {
    res.send("Ola mundo");
});

server.use(router);

const port = 3000;
server.listen(port,() => {
    console.log(`servidor rodando no http://localhost:${port}`);
});
