'use strict';

import nativeClassList from './nativeClassList';
import { UNDEFINED } from '../constants';

export const classMutator = (el) => new classList(el);

export default class classList {
    constructor(el) {
        this.el = el;

        if (typeof el.classList !== UNDEFINED) {
            // if classList support
            this.old = false
        } else {
            // browser class unsupport classList
            this.classList = new nativeClassList(el);
            this.old = true
        }
    }

    add(className) {
        if (this.old) {
            this.classList.add(className);
            return;
        }

        if (!this.hasClass(className)) {
            this.el.classList.add(className);
        }
    }

    remove(className) {
        if (this.old) {
            this.classList.remove(className);
            return;
        }

        if (this.hasClass(className)) {
            this.el.classList.remove(className);
        }
    }

    get() {
        if (this.old) {
            return this.classList.get();
        }

        return this.el.classList;
    }

    hasClass(className) {
        return this
            .el
            .className
            .split(' ')
            .indexOf(className) >= 0;
    }
}
