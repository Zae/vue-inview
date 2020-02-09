'use strict';

/**
 * (css → string)
 * return string
 - create javascript stylesheet name
 **/
const cssJs = (css) => {
    css = css.split('-');

    const size = css.length;
    let result = css[0] === 'float' ? 'cssFloat' : css[0];

    for (let i = 0; i < size; i++) {
        if (i > 0) {
            result += css[i].charAt(0).toUpperCase() + css[i].substr(1)
        }
    }

    return result;
};

export default cssJs;
