exports.up = async (knex) => {
  return knex.schema.createTable('config', function (table) {
    table.increments()
    table.json('graph_ql_api_config')
    table.string('client_id', 1000)
    table.string('client_secret', 1000)
    table.string('auth_url', 1000)
    table.string('token_url', 1000)
    table.timestamps(true, true)
  })
}

exports.down = async (knex) => {
  return knex.schema.dropTable('config')
}
