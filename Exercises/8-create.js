'use strict';

const createUser = (name, city) => {
  const User = {
    name: name,
    city: city,
  };
  return User;
};

module.exports = { createUser };
