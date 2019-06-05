/**
 *
 * @param {Object} queryInterface
 * @param {Object} Sequelize
 * @returns {Object} - up function for create database
 */
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
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
  return queryInterface.dropTable('Users');
}
