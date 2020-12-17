const { Client } = require('eris');

Object.defineProperties(Client.prototype, {
    'codeblock': {
        /**
         * 
         * @param {string} content The message content
         * @param {string} language? The specifier of codeblock @default ''
         */
        value: function codeblock(content, language = '') {
            return '```' + language + '\n' + content + '```';
        },
        writable: false
    }
});