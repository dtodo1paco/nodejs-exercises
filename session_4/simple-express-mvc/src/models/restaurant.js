
module.exports = (sequelize, type) => {
  return sequelize.define('restaurant', {
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
    address: {
      type: type.STRING(50),
      allowNull: false,
      comment: '密码'
    },
  }, {
    underscored: true,
    timestamps: false,
    createAt: false,
    paranoid: true,
  });
}
