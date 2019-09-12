const { spawnSync } = require('child_process');

const languages = {
    javascript: (code) => {
        return {
            start: 'node',
            args: [ '-p', code, ]
        }
    },
    java: (code, containerId) => {
        const matches = code.match(/([public]{6})?\s?(\w+\s)?[class]{5}\s(\w+)/) || []
        const classNameWithMainMethod = matches[3]

        const javaDockerCommand = `run --name java${containerId} -i --rm -w /app openjdk:9-jdk sh -c`.split(' ')
        javaDockerCommand.push(`echo 'running' && echo ${JSON.stringify(code)} > ${classNameWithMainMethod}.java && javac ${classNameWithMainMethod}.java && java ${classNameWithMainMethod}`)

        return {
            start: 'docker',
            args: javaDockerCommand
        }
    }
}

function universalExec({ code, language }) {
    const id = Math.floor(Math.random() * 1000); // We should use an UUID
    const { start, args } = languages[language](code, id);
    console.log(start,args);
    const execution = spawnSync(start, args);

    return execution.stdout
}


module.exports = universalExec;