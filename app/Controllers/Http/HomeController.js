'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with beers
 */
/**
 * @swagger
 * /v1/home:
 *   get:
 *     tags:
 *       - Home - Test API
 *     summary: Test API
 *     description: Test API;
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Test API - Return
 *         example:
 *             {
 *               msg: (string)
 *          }
*/
 
class HomeController {
  
  async index ({ request, response }) {

    return response.send({'msg': 'ok'})

  }
}

module.exports = HomeController
