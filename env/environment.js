const fs = require('fs')

let env

if (process.env.NODE_ENV == "development") {
    // Development mode
    env = require("../config/development.json")
    console.log('run mode ' + process.env.NODE_ENV + ' port ' + env.port)
} else {
    // Production mode
    // check production.json config file
    if (fs.existsSync("./config/production.json")) {
        env = require("../config/production.json")
        console.log('run mode production' + ' port ' + env.port)
    } else {
        env = require("../config/development.json")
        console.log('production.json config file not found');
        console.log('run development configuration on port ' + env.port)
    }
}

module.exports = env
