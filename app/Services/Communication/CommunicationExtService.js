'use strict'

const axios  = use('axios')

class CommunicationExtService {

    constructor () {
        this.urlBase = "https://www.themealdb.com/api/json/v1/1/";
    }

    async getData( url ) {
        var dados;
        try {
            dados = await axios({ method:'GET', url: url})
        } catch( error ) {
            return error.response;
        }
        
        return dados.data;
    }

    async getDataList(filter, typeFilter) {
        /*
            typeFilter: 
            NAME: search by name
            LETTER: search by first letter
            RANDOM: 
            CATEGORY: search by category
            AREA: search by area
            INGREDIENT: Search by principal ingredient
            INGREDIENTLIST: list ingredients
            ID: Search by meal ID
            CATEGORYLIST: list categories
            CATEGORYLISTSHORT: list categories short
            AREALIST: list categories
        */

        var urlExt = '';

        if ( typeFilter == 'NAME' ) {
            urlExt = 'search.php?s=' + ( filter || '' )
        } else if ( typeFilter == 'LETTER' ) {
            urlExt = 'search.php?f=' + ( filter || '' )
        } else if ( typeFilter == 'RANDOM' ) {
            urlExt = 'random.php'
        } else if ( typeFilter == 'ID' ) {
            urlExt = 'lookup.php?i=' + ( filter || '0' )
        } else if ( typeFilter == 'CATEGORY' ) {
            urlExt = 'filter.php?c=' + ( filter || '' )
        } else if ( typeFilter == 'AREA' ) {
            urlExt = 'filter.php?a=' + ( filter || '' )
        } else if ( typeFilter == 'INGREDIENT' ) {
            urlExt = 'filter.php?i=' + ( filter || '' )
        } else if ( typeFilter == 'CATEGORYLIST' ) {
            urlExt = 'categories.php'
        } else if ( typeFilter == 'AREALIST' ) {
            urlExt = 'list.php?a=list'
        } else if ( typeFilter == 'CATEGORYLISTSHORT' ) {
            urlExt = 'list.php?c=list'
        } else if ( typeFilter == 'INGREDIENTLIST' ) {
            urlExt = 'list.php?i=list'
        }

        return await this.getData( this.urlBase + urlExt );
    }


}

module.exports = CommunicationExtService