const getValidOptions = require('./validateOption.js').getValidOptions;
const validateOption = require('./validOption.js').validateOption;

const Parser = function(seperatedOptions) {
  this.seperatedOptions = seperatedOptions;
  this.parsedArgs = {
    options: {},
    expliciteOption: []
  }
};

Parser.prototype = {
  getParsedArgvs: function() {
    let options = this.seperatedOptions;
    let validOptions = getValidOptions(options);
    this.parsedArgs.options = validateOption(validOptions);
    return this.parsedArgs;
  }
};

module.exports = Parser;
