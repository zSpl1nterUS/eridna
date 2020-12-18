const { GuildChannel } = require('eris');

Object.defineProperties(GuildChannel.prototype, {
    /**
     * 
     * @param {string} id The member id
     */
    'hasPermission': {
        value: function hasPermission(id, permission) {
            return this.permissionsOf(id).has(permission);
        }
    }
});