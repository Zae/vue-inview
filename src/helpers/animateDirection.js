'use strict';

import { isDefined } from './misc';
import { TOGGLE, TOGGLE_INVERSE } from '../constants';

/**
 * (an → string, type → string)
 - generate animation direction
 **/
const animateDirection = (an, type) => {
    const data = an;

    let animate,
        result;

    if (/^[a-z]+[A-Z][a-z]+$/.test(data)) {
        animate = data.match(/^([a-z]+)([A-Z][a-z]+)$/);

        if (type === TOGGLE && isDefined(animateInverse(animate[2]))) {
            result = animate[1] + animateInverse(animate[2]);
        }
    }

    if (/^[a-z]+[A-Z][a-z]+[A-Z]$/.test(data)) {
        animate = data.match(/^([a-z]+)([A-Z][a-z]+)([A-Z])$/);

        if (type === TOGGLE && isDefined(animateInverse(animate[2]))) {
            result = animate[1] + animateInverse(animate[2])  + animate[3];
        }

        if (type === TOGGLE_INVERSE && isDefined(animateInverse(animate[2]))) {
            const direct = isDefined(animateInverse(animate[3])) ? animateInverse(animate[3]) : animate[3];
            result = animate[1] + animateInverse(animate[2])  + direct;
        }
    }

    if (/^[a-z]+[A-Z][a-z]+[A-Z][a-z]+$/.test(data)) {
        animate = data.match(/^([a-z]+)([A-Z][a-z]+)([A-Z][a-z]+)$/);

        if (type === TOGGLE && isDefined(animateInverse(animate[2]))) {
            result = animate[1] + animateInverse(animate[2])  + animate[3];
        }

        if (type === TOGGLE_INVERSE && isDefined(animateInverse(animate[2]))) {
            const direct = isDefined(animateInverse(animate[3])) ? animateInverse(animate[3]) : animate[3];
            result = animate[1] + animateInverse(animate[2])  + direct;
        }
    }

    if (/^[a-z]+[A-Z][a-z]+[A-Z][a-z]+[A-Z][a-z]+$/.test(data)) {
        animate = data.match(/^([a-z]+)([A-Z][a-z]+)([A-Z][a-z]+)([A-Z][a-z]+)$/);

        if (type === TOGGLE && isDefined(animateInverse(animate[2]))) {
            result = animate[1] + animateInverse(animate[2])  + animate[3];
        }

        if (type === TOGGLE_INVERSE && isDefined(animateInverse(animate[2]))) {
            const direct = isDefined(animateInverse(animate[3])) ? animateInverse(animate[3]) : animate[3] +
            isDefined(animateInverse(animate[4])) ? animateInverse(animate[4]) : animate[4];
            result = animate[1] + animateInverse(animate[2])  + direct;
        }
    }

    return result;
};

export default animateDirection;
