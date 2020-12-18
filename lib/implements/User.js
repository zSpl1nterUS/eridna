const { User } = require('eris');

Object.defineProperties(User.prototype, {
    'tag': {
        get: function getTag() {
            return this.username + '#' + this.discriminator;
        }
    }
});