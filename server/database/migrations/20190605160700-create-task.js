/**
 *
 * @param {Object} queryInterface
 * @param {Object} Sequelize
 * @returns {Object} - up function for create database
 */
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Tasks', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    done: {
      type: Sequelize.BOOLEAN,
    },
    description: {
      type: Sequelize.TEXT,
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
  return queryInterface.dropTable('Tasks');
}
