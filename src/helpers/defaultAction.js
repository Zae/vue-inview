'use strict';

import { isDefined, objLength } from './misc';
import { ON, ONCE } from '../constants';

/**
 * (bidd → object{arg → string, modifiers → array}, callback → function)
 - check and call callback action
 **/
const defaultAction = (bidd, callback) => {
    if (!isDefined(bidd.arg)) {
        callback();
    }

    if (bidd.arg === ON || bidd.arg === ONCE && objLength(bidd.modifiers) === 0) {
        callback();
    }
};

export default defaultAction;
