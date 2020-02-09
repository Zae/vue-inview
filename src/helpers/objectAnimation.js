'use strict';

import { isArray, isString } from 'lodash';
import { isDefined } from './misc';
import animateDirection from './animateDirection';
import { classMutator } from '../polyfills/classList';

/**
 * (cls → string | array, el → dom, mdf → string)
 - inview animation handler
 **/
const objectAnimation = (cls, el, mdf) => {
    const display = el.getAttribute('animate-display');

    if (display !== null) {
        el.style.display = display;
    } else {
        const none = el.getAttribute('animate-display-none');

        if (none === null || none !== 'false') {
            el.style.display = 'block'
        }
    }

    if (isString(cls)) {
        if (isDefined(mdf)) {
            const inverseAnim = animateDirection(cls, mdf);

            if (isDefined(inverseAnim) && classMutator(el).hasClass(inverseAnim)) {
                const rmClass = {};
                rmClass[inverseAnim] = false;
                objectClass(rmClass, el)
            }
        }

        let hasToggling = false;

        if (classMutator(el).hasClass(cls)) {
            hasToggling = true;

            const rmClass = {};
            rmClass[cls] = false;
            objectClass(rmClass, el);
        }

        if (isDefined(mdf) && hasToggling) {
            const inverseAnim = animateDirection(cls, mdf);

            if (isDefined(inverseAnim)){
                objectClass(inverseAnim, el)
            }
        } else {
            const animate = !classMutator(el).hasClass('animated') ? ['animated', cls] : cls;
            objectClass(animate, el)
        }
    }

    if (isArray(cls)) {
        const size = cls.length;

        let iClass,
            animate;

        for (let i = 0; i < size; i++) {
            if (classMutator(el).hasClass(cls[i])) {
                const rmClass = {};
                rmClass[cls[i]] = false;
                iClass = i;
                objectClass(rmClass, el);
            }
        }

        if (isDefined(mdf) && mdf === 'toggle') {
            const getClass = isDefined(iClass) && size > 0 && (iClass + 1) < size ? cls[(iClass + 1)] : cls[0];
            animate = !classMutator(el).hasClass('animated') ? ['animated', getClass] : getClass;
        } else {
            animate = !classMutator(el).hasClass('animated') ? cls.push('animated') : cls;
        }

        objectClass(animate, el)
    }
};

export default objectAnimation;
