'use strict';

const fn = () => {
  const constObj = {
    name: 'Alex',
  };
  let letObj = {
    name: 'Alex',
  };

  constObj.name = 'TestName';
  letObj.name = 'TestName';

  let testObj = {
    name: 'Joseph',
  };

  // constObj = testObj; // Error: Assignment to constant variable.
  letObj = testObj;
};

fn();

module.exports = { fn };
