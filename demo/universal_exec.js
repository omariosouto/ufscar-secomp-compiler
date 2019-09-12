const { spawnSync } = require('child_process');

const languages = {
    javascript: (code) => {
        return {
            start: 'node',
            args: [ '-p', code, ]
        }
    }
}

function universalExec({ code, language }) {

    const { start, args } = languages[language](code);
    const execution = spawnSync(start, args);

    return execution.stdout
}


module.exports = universalExec;