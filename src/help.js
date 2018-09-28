const version = require(`./version`);
const description = require(`./description`);
const author = require(`./author`);
const license = require(`./license`);

module.exports = {
  name: `help`,
  description: `Shows the list of possible commands with their descriptions.`,
  execute() {
    console.log(`Доступные команды:
       --${this.name} ${this.description}
       --${license.name} ${license.description}
       --${version.name} ${version.description}
       --${description.name} ${description.description}
       --${author.name} ${author.description}
    `);
  }
};
