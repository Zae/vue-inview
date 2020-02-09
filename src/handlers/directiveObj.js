'use strict';

import _$elinview from './elInView';
import { classMutator } from '../polyfills/classList';
import { isDefined } from '../helpers/misc';
import objClassReg from '../helpers/objClassReg';
import { createEl } from '../globals';

/**
 * directive object
 * @type {{inserted: (function(*=, *=): void), componentUpdated: directiveObj.componentUpdated}}
 * @private
 */
const directiveObj = {
    inserted: (el, $bd) => _$elinview(el, $bd),
    componentUpdated: (el, $bd) => {
        const elSize = classMutator(el).get().length;
        let getclass;

        // check the class has been registered
        for (let i = 0; i < elSize; i++) {
            if (isDefined(objClassReg($bd.rawName)) && objClassReg($bd.rawName) === classMutator(el).get()[i]) {
                getclass = classMutator(el).get()[i];
            }
        }

        if (isDefined(getclass) && isDefined($bd.value)) {
            createEl.values[getclass] = $bd.value;
        }
    }
};

export default directiveObj;
