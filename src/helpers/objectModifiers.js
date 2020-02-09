'use strict';

import { isDefined } from './misc';

/**
 * ($m → object{*})
 * return string
 - convert modifiers object as string
 **/
const objectModifiers = ($m) => {
    let convert;

    for (let key of $m) {
        if ($m[key] === true) {
            if (isDefined(convert)) {
                convert += `.${key}`;
            } else {
                convert = key
            }
        }
    }

    return convert;
};

export default objectModifiers;
