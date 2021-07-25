'use strict'

const axios  = use('axios')

class MealService {

    async convertToApi( data, single ) {

        var retorno = [];
        if ( !data.meals ) {
            return retorno;
        }
        var obj;
        data.meals.forEach(i => {
            obj = new Object();
            obj.id = i.idMeal;
            obj.name = i.strMeal;
            obj.drink = i.strDrinkAlternate;
            obj.categoy = i.strCategory;
            obj.area = i.strArea;
            obj.instructions = i.strInstructions;
            obj.thumb = i.strMealThumb;
            obj.tag = ( i.strTags ? i.strTags.split(',') : [] ) ;
            obj.youtube = i.strYoutube;
            obj.source = i.strSource;
            obj.image_source = i.strImageSource;
            obj.creative_commons_confirmed = i.strCreativeCommonsConfirmed;
            obj.updated_at = i.dateModified;

            obj.ingredients = [];
            var ix = 1;
            while ( ix <= 20 ) {
                if ( i['strIngredient' + ix] && i['strIngredient' + ix] != '' ) {
                    obj.ingredients.push({
                        'ingredient': i['strIngredient' + ix],
                        'measure': i['strMeasure' + ix]
                    })
                }
                ix+=1;
            }
            retorno.push( obj );
        });

        if ( single ) {
            return retorno[0];
        } else {
            return retorno;
        }
    }

    async convertToApiShort( data ) {

        var retorno = [];        
        if ( !data.meals ) {
            return retorno;
        }
        data.meals.forEach(i => {
            retorno.push({
                'id': i.idMeal,
                'name': i.strMeal,
                'thumb': i.strMealThumb
            });
        });

        return retorno;
    }

}

module.exports = MealService