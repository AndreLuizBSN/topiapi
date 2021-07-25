'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with beers
 */
const CommunicationExtService = use('App/Services/Communication/CommunicationExtService')
const MealService = use('App/Services/Meal/MealService')

class MealController {
  
   /**
 * @swagger
 * /v1/meals:
 *   get:
 *     tags:
 *       - Meals
 *     summary: Show all meals
 *     description: Show all meals;
 *     produces:
 *       - application/json
 *     parameters:
  *       - name: search
  *         description: name or part of name. Example /v1/meals?search=Cord
  *         in:  query
 *     responses:
 *       200:
 *         description: Return
 *         example:
 *             [ 
 *                {
 *                  id: (int),
 *                  name: (string),
 *                  drink: (string),
 *                  category: (string),
 *                  area: (string),
 *                  instructions: (string),
 *                  thumb: (string),
 *                  tag: [
 *                    (string)
 *                  ],
 *                  youtube: (string),
 *                  source: (string),
 *                  image_source: (string),
 *                  creative_commons_confirmed: (string),
 *                  updated_at: (timestamp),
 *                  ingredients: [
 *                    ingredient: (string),
 *                    measure: (string),
 *                  ],
 *                }
 *             ] 
*/
  async index ({ request, response }) {

    const queries = request.all()

    var communicationExtService = new CommunicationExtService();
    var dados = await communicationExtService.getDataList((queries.search || ''), 'NAME')

    var mealService = new MealService();
    dados = await mealService.convertToApi( dados, false );

    return response.send( dados )

  }

  /**
 * @swagger
 * /v1/meals/:id:
 *   get:
 *     tags:
 *       - Meals
 *     summary: Show meal by id
 *     description: Show meal by id;
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return
 *         example:
 *              
 *                {
 *                  id: (int),
 *                  name: (string),
 *                  drink: (string),
 *                  category: (string),
 *                  area: (string),
 *                  instructions: (string),
 *                  thumb: (string),
 *                  tag: [
 *                    (string)
 *                  ],
 *                  youtube: (string),
 *                  source: (string),
 *                  image_source: (string),
 *                  creative_commons_confirmed: (string),
 *                  updated_at: (timestamp),
 *                  ingredients: [
 *                    ingredient: (string),
 *                    measure: (string),
 *                  ],
 *                }
 *              
*/
  async show ({ params: { id }, request, response, transform }) {

    var communicationExtService = new CommunicationExtService();
    var dados = await communicationExtService.getDataList(id, 'ID')

    var mealService = new MealService();
    dados = await mealService.convertToApi( dados, true );

    return response.send( dados )
    
  }

    /**
 * @swagger
 * /v1/meals-category/:search:
 *   get:
 *     tags:
 *       - Meals
 *     summary: Show all meals by category
 *     description: Show all meals by category;
 *     produces:
 *       - application/json
 *     parameters:
  *       - name: search
  *         description: name of category. Example /v1/meals-category/Vegetarian
  *         in:  query
 *     responses:
 *       200:
 *         description: Return
 *         example:
 *             [ 
 *                {
 *                  id: (int),
 *                  name: (string),
 *                  thumb: (string),
 *                }
 *             ] 
*/
  async searchByCategory ({ params: { search }, request, response }) {

    var communicationExtService = new CommunicationExtService();
    var dados = await communicationExtService.getDataList(search, 'CATEGORY')

    var mealService = new MealService();
    dados = await mealService.convertToApiShort( dados );

    return response.send( dados )
    
  }

  /**
 * @swagger
 * /v1/meals-letter/:search:
 *   get:
 *     tags:
 *       - Meals
 *     summary: Show meal by letter
 *     description: Show meal by id;
 *     produces:
 *       - application/json
 *     parameters:
  *       - name: search
  *         description: name init by letter. Example /v1/meals-letter/a
  *         in:  query
 *     responses:
 *       200:
 *         description: Return
 *         example:
 *             [ 
 *                {
 *                  id: (int),
 *                  name: (string),
 *                  drink: (string),
 *                  category: (string),
 *                  area: (string),
 *                  instructions: (string),
 *                  thumb: (string),
 *                  tag: [
 *                    (string)
 *                  ],
 *                  youtube: (string),
 *                  source: (string),
 *                  image_source: (string),
 *                  creative_commons_confirmed: (string),
 *                  updated_at: (timestamp),
 *                  ingredients: [
 *                    ingredient: (string),
 *                    measure: (string),
 *                  ],
 *                }
 *              ]
*/

  async searchByLetter ({ params: { search }, request, response }) {

    var communicationExtService = new CommunicationExtService();
    var dados = await communicationExtService.getDataList(search, 'LETTER')
    
    var mealService = new MealService();
    dados = await mealService.convertToApi( dados, false );

    return response.send( dados )
    
  }

  /**
 * @swagger
 * /v1/meals-suggestion:
 *   get:
 *     tags:
 *       - Meals
 *     summary: Show meal suggestion - random
 *     description: Show meal suggestion - random;
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return
 *         example:
 *              
 *                {
 *                  id: (int),
 *                  name: (string),
 *                  drink: (string),
 *                  category: (string),
 *                  area: (string),
 *                  instructions: (string),
 *                  thumb: (string),
 *                  tag: [
 *                    (string)
 *                  ],
 *                  youtube: (string),
 *                  source: (string),
 *                  image_source: (string),
 *                  creative_commons_confirmed: (string),
 *                  updated_at: (timestamp),
 *                  ingredients: [
 *                    ingredient: (string),
 *                    measure: (string),
 *                  ],
 *                }
 *              
*/

  async suggestion ({ request, response }) {

    var communicationExtService = new CommunicationExtService();
    var dados = await communicationExtService.getDataList('', 'RANDOM')
    
    var mealService = new MealService();
    dados = await mealService.convertToApi( dados, true );

    return response.send( dados )
    
  }

    /**
 * @swagger
 * /v1/meals-area/:search:
 *   get:
 *     tags:
 *       - Meals
 *     summary: Show all meals by area
 *     description: Show all meals by area;
 *     produces:
 *       - application/json
 *     parameters:
  *       - name: search
  *         description: name of area. Example /v1/meals-area/Canadian
  *         in:  query
 *     responses:
 *       200:
 *         description: Return
 *         example:
 *             [ 
 *                {
 *                  id: (int),
 *                  name: (string),
 *                  thumb: (string),
 *                }
 *             ] 
*/

  async searchByArea ({ params: { search }, request, response }) {

    var communicationExtService = new CommunicationExtService();
    var dados = await communicationExtService.getDataList(search, 'AREA')
    
    var mealService = new MealService();
    dados = await mealService.convertToApiShort( dados );

    return response.send( dados )
    
  }

    /**
 * @swagger
 * /v1/meals-ingredient/:search:
 *   get:
 *     tags:
 *       - Meals
 *     summary: Show all meals by ingredient
 *     description: Show all meals by ingredient;
 *     produces:
 *       - application/json
 *     parameters:
  *       - name: search
  *         description: name of ingredient. Example /v1/meals-ingredient/Egg
  *         in:  query
 *     responses:
 *       200:
 *         description: Return
 *         example:
 *             [ 
 *                {
 *                  id: (int),
 *                  name: (string),
 *                  thumb: (string),
 *                }
 *             ] 
*/

  async searchByIngredient ({ params: { search }, request, response }) {

    var communicationExtService = new CommunicationExtService();
    var dados = await communicationExtService.getDataList(search, 'INGREDIENT')
    
    var mealService = new MealService();
    dados = await mealService.convertToApiShort( dados );

    return response.send( dados )
    
  }

}

module.exports = MealController
