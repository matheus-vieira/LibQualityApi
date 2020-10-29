import Sequelize from 'sequelize';
import logger from '../../utils/logging/logger.js';

export default (sequelize) => {
  try {
    return sequelize.define(
      'User',
      {
        firstname: Sequelize.DataTypes.STRING,
        lastname: Sequelize.DataTypes.STRING,
        email: Sequelize.DataTypes.STRING,
        password: Sequelize.DataTypes.STRING,
        role: Sequelize.DataTypes.STRING,
      },
      {
        paranoid: true,
        timestamps: true,
      },
    );
  } catch (err) {
    logger.error(err);
  }
};
