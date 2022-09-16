const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const youtubeLogger = () => {
    return createLogger({
        level: 'debug',
        format: combine(colorize(), timestamp({ format: "HH:mm:ss" }), myFormat),
        //defaultMeta: { service: 'user-service' },
        transports: [new transports.Console()],
    });
}

module.exports = youtubeLogger