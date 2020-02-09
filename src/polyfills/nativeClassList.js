'use strict';

export default class nativeClassList
{
    constructor(el) {
        this.classList = el.className.split(' ');
        this.el = el;
    }

    get () {
        return this.classList;
    }

    add(className) {
        if (this.classList.indexOf(className) === -1) {
            this.classList.push(className);
            this.el.className = this.classList.join(' ');
        }
    }

    remove(className) {
        const index = this.classList.indexOf(className);

        if (index >= 0) {
            this.classList.splice(index, 1);
            this.el.className = this.classList.join(' ');
        }
    }
}
