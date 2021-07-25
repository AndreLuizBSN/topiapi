'use strict'

const { test } = use('Test/Suite')('Categoriestest')
const CommunicationExtService = use('App/Services/Communication/CommunicationExtService')
const GeneralService = use('App/Services/General/GeneralService')

test('Categories is a Array list', async ({ assert }) => {
  var communicationExtService = new CommunicationExtService();
  var dados = await communicationExtService.getDataList('', 'CATEGORYLIST')
    
  var generalService = new GeneralService();
  dados = await generalService.convertCategories( dados );
  
  assert.equal(Array.isArray(dados), true)
})


test('Categories structure is correct', async ({ assert }) => {
  var communicationExtService = new CommunicationExtService();
  var dados = await communicationExtService.getDataList('', 'CATEGORYLIST')
    
  var generalService = new GeneralService();
  dados = await generalService.convertCategories( dados );

  function testStructure() {
    var dado = dados[0];
    var ret = true;
    if ( !dado['id'] ) ret = false;
    if ( !dado['name'] ) ret = false;
    if ( !dado['thumb'] ) ret = false;
    if ( !dado['description'] ) ret = false;
    return ret;
  }

  assert.isTrue(testStructure())
})

test('categoriesshort Array list', async ({ assert }) => {
  var communicationExtService = new CommunicationExtService();
  var dados = await communicationExtService.getDataList('', 'CATEGORYLISTSHORT')
    
  var generalService = new GeneralService();
  dados = await generalService.convertCategories( dados );
  
  assert.equal(Array.isArray(dados), true)
})