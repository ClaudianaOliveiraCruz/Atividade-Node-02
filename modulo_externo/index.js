const minimist = require("minimist");

const argv = minimist(process.argv.slice(2));

const nome = argv['nome'];
const emprego = argv['emprego'];

console.log(`Nome ${nome}. Emprego: ${emprego}.`);