module.exports = {
	debug: false,
  scopes: ['@netease'],
  enableCluster: true, // enable cluster mode
  mysqlServers: [
    {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
    }
  ],
  mysqlDatabase: 'cnpm',
  enablePrivate: true, // enable private mode
  admins: {
    admin: 'admin@163.com',
  },
  syncModel: 'exist',// 'none', 'all', 'exist'
  sourceNpmRegistry: 'http://registry.npmjs.org',
  sourceNpmRegistryIsCNpm: false,
  database: {
	  db: 'cnpm',
	  username: 'root',
	  password: '', 
	  dialect: 'mysql',
	  host: '127.0.0.1',
	  port: 3306
	}
}