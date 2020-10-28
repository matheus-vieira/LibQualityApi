import Sequelize from "sequelize";
import logger from "../../../utils/logging/logger.js";

/**
 * @swagger/**
 * @swagger
 *
 * definitions:
 *   project-issue:
 *     type: object
 *     required:
 *       - username
 *       - password
 *     properties:
 *       guid:
 *         type: string
 *         format: uuid
 *       issue_id:
 *         type: integer
 *       url:
 *         - description: the issue url
 *           type: string
 *       html_url:
 *         - description: the issue html url
 *           type: string
 *       repository_url:
 *         - description: the repository url which the issue belongs
 *           type: string
 *       issue_created_at:
 *         - description: date the issue was created
 *           type: string
 *       issue_updated_at:
 *         - description: date the issue was updated
 *           type: string
 *       issue_closed_at:
 *         - description: date the issue was closed
 *           type: string
 *       state:
 *         - description: current status of the issue
 *           type: string
 *   User:
 *     allOf:
 *       - $ref: '#/definitions/NewUser'
 *       - required:
 *         - id
 *       - properties:
 *         id:
 *           type: integer
 *           format: int64
 */
export default (sequelize) => {
  try {
    return sequelize.define(
      "issues",
      {
        guid: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
        },
        "issue_id": Sequelize.DataTypes.INTEGER,
        "url": Sequelize.DataTypes.STRING,
        "html_url": Sequelize.DataTypes.STRING,
        "repository_url": Sequelize.DataTypes.STRING,
        "issue_created_at": Sequelize.DataTypes.DATE,
        "issue_updated_at": Sequelize.DataTypes.DATE,
        "issue_closed_at": Sequelize.DataTypes.DATE,
        "state": Sequelize.DataTypes.STRING
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
