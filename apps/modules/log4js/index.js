const log4js = require('log4js');
const loggerConfig = require('../../../config/logger');

exports.init = function(){
    var appenders = {},
        categories = {};
    appenders['console'] = { type: 'console' };
    categories['default'] = { appenders: ['console'], level: 'info' };

    for (logCfg in loggerConfig) {
        var logAppender = {
            type: 'dateFile',
            filename: loggerConfig[logCfg].RootDir + loggerConfig[logCfg].Filename,
            pattern: '-yyyyMMdd-.log',
            category: logCfg,
            alwaysIncludePattern: true
        };

        appenders[logCfg] = logAppender;
        categories[logCfg] = { appenders: ['console', logCfg], level: 'info' };
    }

    log4js.configure({
        appenders: appenders,
        categories: categories
    });
};

exports.server = function(){
    return log4js.getLogger('Server');
};

exports.sql = function(){
    return log4js.getLogger('sql');
};