import Sequelize from 'sequelize';
import logger from '../../utils/logging/logger.js';

export default (sequelize) => {
  try {
    return sequelize.define(
      'User',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        firstName: Sequelize.DataTypes.STRING,
        lastName: Sequelize.DataTypes.STRING,
        age: Sequelize.DataTypes.INTEGER,
      },
      {
        paranoid: true,
        timestamps: true,
      }
    );
  } catch (err) {
    logger.error(err);
  }
};
