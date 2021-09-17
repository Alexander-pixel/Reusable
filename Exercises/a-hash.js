'use strict';

const phonebook = {
  Alex: '059082423',
  Joseph: '054290823',
};

const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName('Alex'));

module.exports = { phonebook, findPhoneByName };
