const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite3', // SQLite database file
});

// Define your data model
const Manga = sequelize.define('Manga', {
  title: DataTypes.STRING,
  desc: DataTypes.STRING,
  thumbnail: DataTypes.STRING,
},{timestamps:true});

// Synchronize the model with the database (create the 'User' table if it doesn't exist)
sequelize.sync({ force: true });

module.exports = {Manga}