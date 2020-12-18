const { Guild } = require('eris');

Object.defineProperties(Guild.prototype, {
    'me': {
        get: function getMe() {
            return this.members.get(this.shard.client.user.id);
        }
    }
});