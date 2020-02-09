'use strict';

import { createEl } from '../globals';
import { isDefined } from './misc';
import hasObjArray from './hasObjArray';
import { CLASS } from '../constants';

/**
 * (el → dom, classid → string)
 - add element has exit
 **/
const elementExit = (el, classid) => {
    createEl.exit = el;
    const cElm_enter = createEl.$enter.length;

    // remove element if has in createEl.$enter
    if (cElm_enter > 0) {
        for (let i = 0;i < cElm_enter; i++) {
            if (isDefined(createEl.$enter[i]) && isDefined(createEl.$enter[i].class) && createEl.$enter[i].class === classid) {
                createEl.$enter.splice(i, 1)
            }
        }
    }

    // push an element
    if (!hasObjArray(createEl.$exits, CLASS, classid).is) {
        createEl.$exits.push({class: classid, el: el});
    }
};

export default elementExit;
