const { Channel } = require('eris');

Object.defineProperties(Channel.prototype, {
    'send': {
        /**
         * 
         * @param {string} content The message content
         * @param {object} options File options
         */
        value: function send(content, options) {
            this.client.createMessage(this.id, content, options);
        }
    }
});