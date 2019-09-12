const express = require('express');
const app = express();
const universalExec = require('./universal_exec');

app.get('/', (_, res) => {
    console.log('Request')
    const input = {
        language: 'javascript',
        code: `
            var teste = 'oi///""'
            console.log(teste);
        `
    }

    const output = universalExec(input)
    res.send(`Output: ${output}`)
    console.log('Response')
})

app.listen(3000, () => {
    console.log('[SECOMP] Executor de Código Universal');
    console.log(`
        - http://localhost:3000
    `);
})



