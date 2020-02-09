'use strict';

import { createEl } from '../globals';
import { isDefined } from './misc';
import hasObjArray from './hasObjArray';
import { CLASS } from '../constants';

/**
 * (el → dom, classid → string)
 - add element has enter
 **/
const elementEnter = (el, classid) => {
    createEl.enter = el;
    const cElm_exits = createEl.$exits.length;

    // remove element if has in createEl.$exits
    if (cElm_exits > 0) {
        for (let i = 0;i < cElm_exits; i++) {
            // make sure that element is exits
            if (isDefined(createEl.$exits[i]) && isDefined(createEl.$exits[i].class) && createEl.$exits[i].class === classid) {
                createEl.$exits.splice(i,1);
            }
        }
    }

    // push an element
    if (!hasObjArray(createEl.$enter, CLASS, classid).is) {
        createEl.$enter.push({class: classid, el: el});
    }
};

export default elementEnter;
