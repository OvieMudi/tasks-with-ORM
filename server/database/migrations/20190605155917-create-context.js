/**
 *
 * @param {Object} queryInterface
 * @param {Object} Sequelize
 * @returns {Object} - up function for create database
 */
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Contexts', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
    },
    UserId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}

/**
 *
 * @param {Object} queryInterface
 * @param {Object} Sequelize
 * @returns {Object} - down function for create database
 */
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('Contexts');
}
