'use strict';

import { elementLooping } from './misc';
import objectAnimation from './objectAnimation';
import { ANIMATE, TOGGLE, TOGGLE_INVERSE } from '../constants';

/**
 * (el → dom)
 - check and get animation attribute
 **/
const animateAttribute = (el) => {
    const normal = el.querySelectorAll('[animate]'),
        toggle = el.querySelectorAll('[animate-toggle]'),
        inverse = el.querySelectorAll('[animate-toggle-inverse]');

    if (normal !== null) {
        elementLooping(normal, (els) => {
            objectAnimation(
                els.getAttribute(ANIMATE),
                els
            );
        });
    }

    if (toggle !== null){
        elementLooping(toggle, (els) => {
            objectAnimation(
                els.getAttribute('animate-toggle'),
                els,
                TOGGLE
            );
        });
    }

    if (inverse !== null) {
        elementLooping(inverse, (els) => {
            objectAnimation(
                els.getAttribute('animate-toggle-inverse'),
                els,
                TOGGLE_INVERSE
            );
        });
    }
};

export default animateAttribute;
