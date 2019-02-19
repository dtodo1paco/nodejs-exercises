module.exports = (sequelize, type) => {
  return sequelize.define('location', {
    id: {
      type: type.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    name: {
      type: type.STRING(50),
      allowNull: false,
      unique: true,
    },
  })
};
