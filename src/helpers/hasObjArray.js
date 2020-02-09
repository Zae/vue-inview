'use strict';

import { isDefined } from './misc';

/**
 * return object{is → boolean, count → number}
 - check object has defined in array
 **/
const hasObjArray = (v, search, val) => {
    const defined = Object.create(null);

    defined.is = false;
    defined.count = 0;

    const length = v.length;
    for (let i = 0; i < length; i++) {
        if (isDefined(v[i][search])) {
            if (isDefined(val) && v[i][search] === val) {
                defined.is = true;
                defined.count += 1
            }
        }
    }

    return defined;
};

export default hasObjArray;
