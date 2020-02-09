'use strict';

/**
 * (el → dom, att → string)
 * return boolen
 - check if has attribute
 **/
const hasAttr = (el, att) => {
    if (/^\.[\w]+/.test(att)) {
        const className = att.match(/^\.([\w]+)/)[1],
            gClass = el.className.split(' ');

        if (gClass.indexOf(className) >- 1) {
            return true;
        }
    }

    if (/^\#[\w]+/.test(att)) {
        const idName = att.match(/^\#([\w]+)/)[1];

        if (el.hasAttribute('id') && el.getAttribute('id') === idName) {
            return true;
        }
    }

    if (/^\[[\w]+=\"[\w]+\"\]$/.test(att)) {
        const attr = att.match(/^\[([\w]+)=\"([\w]+)\"\]$/),
            attName = attr[1],
            attval = attr[2];

        if (el.hasAttribute(attName) && el.getAttribute(attName) === attval) {
            return true
        }
    }

    if (/^\[[\w]+=\'[\w]+\'\]$/.test(att)) {
        const attr = att.match(/^\[([\w]+)=\'([\w]+)\'\]$/),
            attName = attr[1],
            attval = attr[2];

        if (el.hasAttribute(attName) && el.getAttribute(attName) === attval) {
            return true;
        }
    }

    return false
};

export default hasAttr;
