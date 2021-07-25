'use strict'

const { test } = use('Test/Suite')('Areatest')
const CommunicationExtService = use('App/Services/Communication/CommunicationExtService')
const GeneralService = use('App/Services/General/GeneralService')

test('areas Array list', async ({ assert }) => {
  var communicationExtService = new CommunicationExtService();
  var dados = await communicationExtService.getDataList('', 'AREALIST')
    
  var generalService = new GeneralService();
  dados = await generalService.convertCategories( dados );
  
  assert.equal(Array.isArray(dados), true)
})