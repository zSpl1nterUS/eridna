const { Message } = require('eris');
const fetch = require('node-fetch');

Object.defineProperties(Message.prototype, {
    'quote': {
        /**
         * 
         * @param {string} content The message content
         * @param {object} options The message options @default {}
         * @param {string} options?.message_id The message id
         * @param {string} options?.guild_id The guild id
         * @param {boolean} options?.mention Mention the user
         */
        value: function quote(content, options = { message_id: null, guild_id: null, mention: true }) {
            const message_reference = {
                message_id: options.message_id || this.id,
                message_channel: this.channel.id,
                guild_id: options.guild_id || this.guildID
            };
        
            const allowed_mentions = {
                parse: ['users', 'roles', 'everyone'],
                replied_user: options.mention
            };
        
            fetch(`https://discord.com/api/v8/channels/${this.channel.id}/messages`, {
                method: 'POST',
                body: JSON.stringify({
                    content, message_reference, allowed_mentions
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.channel.client.token
                }
            });
        },
        writable: false
    }
});