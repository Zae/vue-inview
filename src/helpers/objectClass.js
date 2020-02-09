'use strict';

import { isArray, isObject, isString } from 'lodash';
import { classMutator } from '../polyfills/classList';

/**
 * (clss → string | object | array, el → dom)
 - add and remove class of element
 **/
const objectClass = (clss, el)  => {
    if (isString(clss)) {
        classMutator(el).add(clss);
    }

    if (isObject(clss)) {
        const classArr = el.className.split(' ');

        for (let key in clss) {
            if (classArr.indexOf(key) && clss[key] === false) {
                classMutator(el).remove(key)
            }

            if (clss.hasOwnProperty(key) && clss[key] === true) {
                classMutator(el).add(key)
            }
        }
    }

    if (isArray(clss)) {
        for (let i = 0;i < clss.length; i++) {
            classMutator(el).add(clss[i])
        }
    }
};

export default objectClass;
