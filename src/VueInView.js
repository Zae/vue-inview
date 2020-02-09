'use strict';

import { isDefined } from './helpers/misc';
import { isObject } from 'lodash';
import directiveObj from './handlers/directiveObj';
import _$inview from './handlers/inView';
import inView from 'in-view';

class VueInview {
    install(Vue, options) {
        if (isDefined(options) && isObject(options)) {
            this.offset(options);
        }

        Vue.directive('inview', directiveObj);
        Vue.prototype._$inview = _$inview;
    }

    threshold(value) {
        return inView.threshold(value);
    }

    offset(value) {
        return inView.offset(value);
    }
}

export default VueInview;
