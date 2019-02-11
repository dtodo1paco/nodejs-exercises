
module.exports = (sequelize, type) => {
  const Model = sequelize.define('restaurant', {
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
    },
  }, {
    underscored: true,
    timestamps: false,
    createAt: false,
    paranoid: true,
  });
  Model.associate = (models) => {
    Model.belongsTo(models.location);
  };
  return Model;
}
