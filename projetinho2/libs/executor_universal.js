const { spawnSync } = require('child_process')
const { writeFileSync } = require('fs');
console.log('1 - [Executor universal]');

const linguagens = {
    javascript: function(codigo) {
        // console.log('codigo:', codigo);
        return {
            argumentoInicial: 'node',
            arrayDeOutrosParametros: [
                '-p',
                codigo
            ]
        }
    },
    python: function(codigo) {
        return {
            argumentoInicial: 'python',
            arrayDeOutrosParametros: [
                '-c',
                codigo
            ]
        }
    },
    java: function(codigo) {
        writeFileSync('Main.java', codigo)
        spawnSync('javac', ['Main.java'])
        return {
            argumentoInicial: 'java',
            arrayDeOutrosParametros: [
                'Main',
            ]
        }
    }
}
function executorUniversal({ linguagem, codigo }) {
    const dadosPraRodar = linguagens[linguagem](codigo)

    const resultado = spawnSync(
        dadosPraRodar.argumentoInicial,
        dadosPraRodar.arrayDeOutrosParametros,
        { encoding: 'utf-8' }
    );
    return resultado.stdout
}
// Acessem: http://dontpad.com/xablau2

module.exports = executorUniversal










// const resultado = executorUniversal({
//     linguagem: 'javascript',
//     codigo: `
//         var pessoa = 'mario'
//         console.log('Nome da pessoa:', pessoa);
//     `
// })

// const resultado = executorUniversal({
//     linguagem: 'python',
//     codigo: `print('Bagulhos em python')`
// })

const resultado = executorUniversal({
    linguagem: 'java',
    codigo: `class Main { public static void main (String[] args) { System.out.println(150); } }`
})

console.log('ultimo - [RESULTADO]',resultado);
// node -p "console.log('alo alo w brazil')"