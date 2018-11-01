let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "Dev";
// appConfig.db = {
//     uri = 'mongoDB://appDB',
// }
appConfig.apiVersion = '/api/v1';

// Create mdoule Export(Object) to use config in our Application some how
module.exports = {
    port: appConfig.port,
    allowedCorsOrigin:appConfig.allowedCorsOrigin,
    env:appConfig.env,
    // db:appConfig.db,
    apiVersion:appConfig.apiVersion
}// ENd Module Exports