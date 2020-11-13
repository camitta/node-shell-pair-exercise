module.exports = process.stdin.on('data', (data) => {
	process.stdout.write(`Current directory: ${process.cwd()}`);
	process.stdout.write('\nprompt > ');
});
