// @author: Diego Hilderink Dominguez
// @e-mail: diego.hilderink@iesdonana.org
// License: GNU License 2020

// check this
function checkOpened(aux, son){
    aux = 'li[show]:not('+aux+')'
    prueba(aux) 
    $(aux).attr('show', false);
    $(son).hide(1500);
}

function getPref(k){
    return pref[k] !== undefined && pref[k] !== null ?
         pref[k] : false;
}

function iterator(key, moment) {
    return key !== moment
}

function setAction(opc, config) {
    switch (opc) {
        case 'hex' : return ['background-color',`#${config}`]
        case 'rgb' : return ['background-color',config]
        case 'url' : return ['background-image', `url(${config})`]
        default : warnExit('type')
    }
}

//Comprobar el padre que recibe, si es un id, si es una clase o etiqueta.
// Si es id y existe, negar.
function checkThis(elem) {
    if (checkFather(elem.attr('id'))) {
        return elem.attr('id')
    } else if (checkFather(elem.attr('class'))) {
        return elem.attr('class')
    } else if (checkFather(elem.prev().prop('tagName'))) {
        //Esto tiene que ser una etiqueta
        return elem.prev().prop('tagName');
    } else {
        return false;
    }
}

function checkFather(father) {
    return !$(father).length;
}

function isStr(elem) {
    return typeof(elem) === 'string';
}

function isIn(k, config) {
    return k in config;
}

function remvElem(mark) {
    $(mark).length ? $(mark).remove() : errorExit('exists')
}

function checkArguments(...names) {
    if (typeof(names[1]) === 'number' || typeof(names[2]) === 'number' ) {
        return parseInt(names[1]) == arguments.length 
            || parseInt(names[2]) == arguments.length
    } else {
        warnExit('type')
    }
}

function errorExit(error) {
    var aux = errors[error];
    aux ? console.log(aux) : errorExit('error');
}

function warnExit(warn) {
    var aux = warnings[warn];
    aux ? salida.push({type: warn , mssg: aux}) : errorExit('error');
}

function prueba(output) {
    console.log(output)
}

function getWarns(search = null) {
    if (search === null ) {
        $.each(salida, (k, v) => {
            console.log(`${v['type']}: ${v['mssg']}`)
        })
    } else {
        $.each(salida, (k, v) => {
            if (v['type'] === search)
            console.log(`${v['type']}: ${v['mssg']}`)
        })
    }
}