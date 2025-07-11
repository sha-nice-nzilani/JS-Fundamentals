const args = process.argv.slice(2);
if (args.length === 0) {
conso
le.log('No argument');
} else if (args.length === 1) {
console.log('Argument found');
} else {
console.log('Arguments found');
}


