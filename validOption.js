const isNOption = function(option) {
  let regex = new RegExp(/-[1-9]+/g);
  return option.startsWith('-n') || regex.test(option);
};

const isOptionC = function(option) {
  return option.startsWith('-c');
};

const isHelp = function(option) {
  return option == '--help';
}

const areAllLineOptions = function(options) {
  return options.every(isNOption);
};

const areAllByteOptions = function(options) {
  return options.every(isOptionC);
};

const areUniqueOptions = function(options) {
  return areAllLineOptions(options) || areAllByteOptions(options);
};

const getNumberFromOption = function(option) {
  let regex = new RegExp(/[0-9]/g);
  let number = +option.match(regex).join('');
  return number;
};

const validateOption = function(options) {
  let finalOption = {};
  let desiredOption = options[options.length - 1];
  if (options.length == 0) {
    finalOption.lineCount = 10;
  } else if (areUniqueOptions(options)) {
    if (isNOption(desiredOption)) {
      finalOption.lineCount = getNumberFromOption(desiredOption);
    } else {
      finalOption.byteCount = getNumberFromOption(desiredOption);
    }
  } else {
    throw new Error('can\'t combine line and byte count Options');
  }
  return finalOption;
};



exports.validateOption = validateOption;
