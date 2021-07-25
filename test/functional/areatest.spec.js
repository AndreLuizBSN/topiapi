'use strict'

const { test, trait } = use('Test/Suite')('Areastestfunc')
trait('Test/ApiClient')

test('Get All areas short request', async ({ client }) => {
  const response = await client.get('v1/areas').end()
  response.assertStatus(200)
  response.assertJSONSubset(["British","Mexican"])
})