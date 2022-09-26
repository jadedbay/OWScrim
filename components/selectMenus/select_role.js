const { createUserDir, createUserRoleFile } = require('../../util/fs_functions');
const { Role } = require('../../util/roles')
const {capitalize} = require('../../util/format')

module.exports = {
    name: 'select_role',
    async execute(interaction, client) {
        createUserDir(interaction.user.id);
        createUserRoleFile(interaction.user.id, Role[interaction.values[0]]);

        const message = `> **Role set to ${capitalize(interaction.values[0])}** ${Role[interaction.values[0]]}`
        interaction.update({ content: message, components: [] });
    }
}