'use strict';

import animateAttribute from './animateAttribute';

/**
 * (parent → string, el → dom)
 - inview directive handler
 **/
const objectParent = (parent, el) => {
    if (parent === 'animate') {
        animateAttribute(el);
    }
};

export default objectParent;
