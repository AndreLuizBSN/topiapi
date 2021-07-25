'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  
  Route.get('home', 'HomeController.index')

  Route.get('meals', 'MealController.index')
  Route.get('meals/:id', 'MealController.show')
  Route.get('meals-category/:search', 'MealController.searchByCategory')
  Route.get('meals-letter/:search', 'MealController.searchByLetter')
  Route.get('meals-suggestion', 'MealController.suggestion')
  Route.get('meals-area/:search', 'MealController.searchByArea')
  Route.get('meals-ingredient/:search', 'MealController.searchByIngredient')
  

  Route.get('categories', 'CategoryController.index')
  Route.get('categoriesshort', 'CategoryController.short')

  Route.get('areas', 'AreaController.index')

  Route.get('ingredients', 'IngredientController.index')

}).prefix('v1')