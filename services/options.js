module.exports.poolConfig = {
    local: {
        user:'postgres',
        host:'localhost',
        database:'activities',
        password:'postgres',
        port:5432
    },
    heroku: { // create connection to database
        connectionString: process.env.DATABASE_URL,	// use DATABASE_URL environment variable from Heroku app 
        ssl: {
          rejectUnauthorized: false // don't check for SSL cert
        }
      }
};