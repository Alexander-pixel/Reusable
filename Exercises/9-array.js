'use strict';

const phonebook = [{ name: 'Alex', phone: '0502124554' },
  { name: 'Joseph', phone: '0505521244' }];

const findPhoneByName = (name) => {
  for (let obj of phonebook)
    if (obj.name === name)
      return obj.phone;
};

console.log(findPhoneByName('Alex'));

module.exports = { phonebook, findPhoneByName };
