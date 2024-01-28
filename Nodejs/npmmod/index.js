const chalk = require("chalk");
const validator = require("validator");
console.log(chalk.red.underline.inverse("Nodejs"));

//email validator
const b = validator.isEmail("tiwaryabhishek@gmail.com");
if (b) console.log(chalk.green(b));
else console.log(chalk.red(b));