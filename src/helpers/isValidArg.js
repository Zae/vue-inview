'use strict';

import { ANIMATE, CLASS, EVENT_ENTER, LEAVE, ON, ONCE, PARENT, STYLE } from '../constants';

/**
 * (arg → string)
 * return string
 - check and get argument
 **/
const isValidArg = (arg) => {
    switch (arg) {
        case ON:
        case ONCE:
        case CLASS:
        case STYLE:
        case EVENT_ENTER:
        case LEAVE:
        case ANIMATE:
        case PARENT:
            return arg;
        default:
            console.warn('[in-view] argument ${arg} undefined')
    }
};

export default isValidArg;
