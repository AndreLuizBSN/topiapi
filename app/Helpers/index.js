'use strict'

const crypto = use('crypto')
const Helpers = use('Helpers')

/**
 * Generate random string
 * 
 * @param { int } length -- 0 tamanho so string que deseja criar
 * @return { string } --String ramdomica do tamanho do parametro
 */

const str_random = async (length = 40) => {
    let str = ''
    let len = str.length

    if (len < length) {
        let size = length - len
        let bytes = await crypto.randomBytes(size)
        let buffer = Buffer.from(bytes)
        str += buffer.toString('base64').replace(/[^a-zA-Z0-0]/g, '').substr(0, size)
    }

    return str
}

/**
 * Single upload
 * Move the file to a specific directory. If this directory is not specified, will upload 
 * in the directory 'public/uploads'
 * @param { FileJar } file the file that will be managed
 * @param { String } path directory
 * @return { Object<FileJar> }
 */

 const manage_single_upload = async ( file, path = null ) => {
    path = path ? path : Helpers.publicPath('uploads')
    //generate a random name
    const random_name = await str_random(30)

    let fileName = `${new Date().getTime()}-${random_name}.${file.subtype}`

    file.fileName = fileName

    file.move(path, {
        name: fileName
    })

    return file

 }

 /**
 * Multiple upload
 * Move the files to a specific directory. If this directory is not specified, will upload 
 * in the directory 'public/uploads'
 * @param { FileJar } fileJar the file that will be managed
 * @param { String } path directory
 * @return { Object<FileJar> }
 */

 const manage_multiple_upload = async ( fileJar, path = null ) => {
    path = path ? path : Helpers.publicPath('uploads')

    let successed = [], errors = []

    await Promise.all(fileJar.files.map(async file => {
        //generate a random name
        const random_name = await str_random(30)

        let fileName = `${new Date().getTime()}-${random_name}.${file.subtype}`

        file.fileName = fileName

        file.move(path, {
            name: fileName
        })

        if ( file.ended ) {
            successed.push(file)
        } else {
            errors.push(file.error())
        }

    }))

    return { successed, errors }

 }

const montar_url = ( title ) => {
    
    title = title.toLowerCase();

    title = title.replace(/[àáâãäå]/g,"a");
    title = title.replace(/[èéêë]/g,"e");
    title = title.replace(/[íìîï]/g,"i");
    title = title.replace(/[óòõôö]/g,"o");
    title = title.replace(/[úùûü]/g,"u");
    title = title.replace(/[ç]/g,"c");
    title = title.replace(/[^a-z0-9]/gi,'_');
    title = title.replace(/[ç]/g,"c");

    var result = '';
    var length = 15;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    title = title + "_" + result;

    return title;
}


module.exports = {
    str_random,
    manage_single_upload,
    manage_multiple_upload,
    montar_url
}