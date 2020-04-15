const moment = require('moment');

function formatMessage(body) {
    return {
        username: body.username,
        body,
        time: moment().format('h:mm a'),
    };
}

module.exports = formatMessage;
