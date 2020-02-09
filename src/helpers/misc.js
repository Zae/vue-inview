'use strict';

import { isUndefined } from 'lodash';

/**
 * return boolean
 - check typeof object
 **/
export const isDefined = v => !isUndefined(v);

/**
 * return number
 - counting key of object
 **/
export const objLength = (v) => Object.keys(v).length;

/**
 * (el →  dom, callback → function)
 - looping querySelectorAll
 **/
export const elementLooping = (el, callback) => el.forEach((value, key) => callback(value, key));
