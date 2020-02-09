'use strict';

import { createEl } from '../globals';

/**
 * (rw → string)
 * return string
 - check and get class ID
 **/
const objClassReg = (rw) => {
    for (let i = 0; i < createEl.register.length; i++) {
        if (createEl.register[i].rawName === rw) {
            return createEl.register[i].classid;
        }
    }
};

export default objClassReg;
