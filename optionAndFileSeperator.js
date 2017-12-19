const isLineOrByteOption = function(option) {
  let list = ['-n', '-c'];
  return list.includes(option);
};

const isNumberValid = function(option) {
  return +option > 0;
};

const getTotalOption = function(currArgv, NextArgv) {
  if (isLineOrByteOption(currArgv) && isNumberValid(NextArgv)) {
    let option = currArgv + NextArgv;
    return option;
  }
  throw new Error('illegal count option -- ' + NextArgv);
};

const argumentsSeperator = function(argvs) {
  let optionsAndFiles = {
    options: [],
    files: []
  };
  for (let index = 0; index < argvs.length; index++) {
    let currentArgv = argvs[index];
    if (isLineOrByteOption(currentArgv)) {
      let totalOption = getTotalOption(currentArgv, argvs[index + 1])
      optionsAndFiles.options.push(totalOption);
      index++;
    } else if (currentArgv.startsWith('-')) {
      optionsAndFiles.options.push(currentArgv);
    } else {
      optionsAndFiles.files = argvs.slice(index);
      return optionsAndFiles;
    }
  }
  return optionsAndFiles;
};

exports.isLineOrByteOption = isLineOrByteOption;
exports.isNumberValid = isNumberValid;
exports.getTotalOption = getTotalOption;
exports.argumentsSeperator = argumentsSeperator;
