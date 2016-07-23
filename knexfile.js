
function getDevDbConfig() {
    return {
        client: 'pg',
        connection: {
            host : '127.0.0.1',
            user : 'postgres',
            password : 'asdffdsa',
            database : 'watchwithdb'
        }
    };
}

function getDigitalOceanDbConfig() {
    return getDevDbConfig();
}

function getHerokuProductionDbConfig () {
    var theDbConfig = null;

    if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
        theDbConfig = {client: 'pg'};
        var parseDbUrl = require("parse-database-url");
        var parsedDbConfig = parseDbUrl(process.env.HEROKU_POSTGRESQL_BRONZE_URL);

        theDbConfig.connection = {
            host : parsedDbConfig.host,
            user : parsedDbConfig.user,
            password : parsedDbConfig.password,
            database  : parsedDbConfig.database,
            charset : 'utf8'
        };
    }
    return theDbConfig;
}

module.exports = {
    HerokuProduction: getHerokuProductionDbConfig(),
    DigitalOceanProduction: getDigitalOceanDbConfig(),
    development: getDevDbConfig()
}
