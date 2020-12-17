const { Member } = require('eris');

Object.defineProperties(Member.prototype, {
    'hasRole': {
        /**
         * 
         * @param {string} id The role id
         */
        value: function hasRole(id) {
            return this.roles.includes(id);
        },
        writable: false
    },

    'name': {
        get: function getName() {
            return this.nick || this.username;
        },
        writable: false
    }
});