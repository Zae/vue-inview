'use strict';

import { isArray, isObject } from 'lodash';
import { isDefined } from './misc';
import cssJs from './cssJs';

/**
 * (css →  object | array, el → dom)
 - add and remove style of element
 **/
const objectStyle = (css, el) => {
    const style = el.style;

    if (isObject(css)) {
        for (let key of css) {
            if (isDefined(style[cssJs(key)])) {
                style[cssJs(key)] = css[key];
            }
        }
    }

    if (isArray(css)) {
        const size = css.length;

        for (let i = 0; i < size; i++){
            if (isDefined(style[cssJs(css[i])])) {
                style[cssJs(css[i])] = "";
            }
        }
    }
};

export default objectStyle;
