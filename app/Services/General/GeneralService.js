'use strict'

const axios  = use('axios')

class GeneralService {

    async convertShort( data ) {

        var retorno = [];
        if ( !data.meals ) {
            return retorno;
        }
        data.meals.forEach(i => {
            if ( i.strCategory ) {
                retorno.push(i.strCategory);
            } else {
                retorno.push(i.strArea);
            }
        });

        return retorno;
    }

    async convertCategories( data ) {

        var retorno = [];
        if ( !data.categories ) {
            return retorno;
        }
        data.categories.forEach(i => {
            retorno.push({
                'id': i.idCategory,
                'name': i.strCategory,
                'thumb': i.strCategoryThumb,
                'description': i.strCategoryDescription
            });
        });

        return retorno;
    }

    async convertIngredients( data ) {

        var retorno = [];
        if ( !data.meals ) {
            return retorno;
        }
        data.meals.forEach(i => {
            retorno.push({
                'id': i.idIngredient,
                'name': i.strIngredient,
                'description': i.strDescription,
                'type': i.strType
            });
        });

        return retorno;
    }

}

module.exports = GeneralService