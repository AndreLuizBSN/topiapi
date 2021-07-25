'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with beers
 */
const CommunicationExtService = use('App/Services/Communication/CommunicationExtService')
const GeneralService = use('App/Services/General/GeneralService')

class AreaController {
  
/**
 * @swagger
 * /v1/areas:
 *   get:
 *     tags:
 *       - Areas
 *     summary: List all areas
 *     description: List all areas - Array;
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return
 *         example:
 *              [
 *                (string)
 *              ]
*/
  async index ({ request, response }) {

    var communicationExtService = new CommunicationExtService();
    var dados = await communicationExtService.getDataList('', 'AREALIST')
    
    var generalService = new GeneralService();
    dados = await generalService.convertShort( dados );
    
    return response.send( dados )

  }

}

module.exports = AreaController
