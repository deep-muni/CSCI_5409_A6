module.exports.datastores = {
  mysqldb: {
    adapter: require('sails-mysql'),
    host: 'localhost',
    user: 'root',
   // password: 'admin123',
     password: 'root',
    port: '3306',
    database: 'assign6'
  },
};
