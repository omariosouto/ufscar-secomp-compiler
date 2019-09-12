// Desafio:
// Converter o SpawnSync para spawn
// - https://nodejs.org/api/child_process.html#child_process_spawning_bat_and_cmd_files_on_windows
// Pra quem curte robos: http://johnny-five.io/


const express = require('express');
const app = express();
const executorUniversal = require('./libs/executor_universal');

// rotas['GET']['/'] = function(request, response) {}
app.get('/', function(request, response) {
    console.log('request')
    // http://localhost:3000/?linguagem=AAA&codigo=AAA
    const linguagem = request.query.linguagem
    const codigo = request.query.codigo

    response.send({
        linguagem: linguagem,
        codigo: codigo,
        output: executorUniversal({
            linguagem: linguagem,
            codigo: codigo
        }),
    });
    console.log('response')
})


const port = 3000;
app.listen(port, () => {
    console.log(`
        Servidor rodando em:
        http://localhost:${port}

    `)
})
// Façam o script pra poder rodar "npm run dev"