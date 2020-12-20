const { Role } = require('eris');

Object.defineProperties(Role.prototype, {
	'higherThan': {
		/**
		 *
		 * @param {Role} role The role object
		*/
		value: function higherThan(role) {
			return this.position - role.position > 0;
		}
	}
});