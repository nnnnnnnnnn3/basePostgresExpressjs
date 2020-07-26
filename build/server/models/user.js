"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};
//# sourceMappingURL=user.js.map