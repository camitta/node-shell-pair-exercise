process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  }
  if (cmd === "ls") {
    ls();
  }
});
//console.log(pwd, ls);
const pwd = require("./pwd");
const ls = require("./ls");
