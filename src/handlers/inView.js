'use strict';

import updateLifeCycle from '../helpers/updateLifeCycle';
import { isDefined } from '../helpers/misc';
import { isObject, isString } from 'lodash';
import { counts, createEl } from '../globals';
import hasAttr from '../helpers/hasAttr';

/**
 * check and send notification if component has enter or exit
 *
 * @param $arg string
 * @param $opt object
 * @private
 */
const _$inview = ($arg, $opt) => {
    let lastEnter = 0,
        lastExit = 0;

    updateLifeCycle(() => {
        if (isDefined($opt) && isObject($opt) && isString($arg)) {
            if (counts.countEntered > lastEnter) {
                isDefined($opt.enter) && hasAttr(createEl.enter, $arg) && $opt.enter(createEl.enter);
                lastEnter = counts.countEntered;
            }

            if (counts.countExits > lastExit) {
                isDefined($opt.exit) && hasAttr(createEl.exit, $arg) && $opt.exit(createEl.exit);
                lastExit = counts.countExits;
            }
        }
    });
};

export default _$inview;
