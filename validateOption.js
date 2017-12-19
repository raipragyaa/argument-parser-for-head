
const isLineOrByteOption = function(option){
  return option == '-n'|| option == '-c';
};

const isValidNOrCOption = function(option) {
  let specifier = option.slice(0, 2);
  let follower = option.slice(2);
  return isLineOrByteOption(specifier) && +follower > 0;
};
const isValidOption = function(option){
  return isValidNOrCOption(option) ||+option < 0 || option =='--help';
};

const getValidOptions = function(options) {
  let validOptionList = [];
  for (let index = 0; index < options.length; index++) {
    let currentArg = options[index];
    if (isValidOption(currentArg)) {
      validOptionList.push(currentArg);
    } else {
      throw new Error('illegal option -- ' + currentArg);
    }
  }
  return validOptionList;
};


exports.isValidOption = isValidOption;
exports.getValidOptions = getValidOptions;
