'use strict'

const Role = use('Role')

class RoleSeeder {
  async run () {

    /* Admin */
    await Role.create({
      name: 'Admin',
      slug: 'admin',
      description: 'Administration privileges'
    })

    /* Manager */
    await Role.create({
      name: 'Manager',
      slug: 'manager',
      description: 'Manager privileges'
    })

    /* Client */
    await Role.create({
      name: 'Client',
      slug: 'client',
      description: 'Client privileges'
    })
  }
}

module.exports = RoleSeeder
