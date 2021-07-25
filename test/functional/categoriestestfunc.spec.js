'use strict'

const { test, trait } = use('Test/Suite')('Categoriestestfunc')
trait('Test/ApiClient')

test('Get All categories', async ({ client }) => {
  const response = await client.get('v1/categories').end()
  response.assertStatus(200)
  response.assertJSONSubset([
    {"id":"1","name":"Beef"},
    {"id":"2","name":"Chicken"}
  ])
})

test('Get All categories short request', async ({ client }) => {
  const response = await client.get('v1/categoriesshort').end()
  response.assertStatus(200)
  response.assertJSONSubset(["Beef","Chicken"])
})