'use strict';

import shortid from 'shortid';
import { classMutator } from '../polyfills/classList';
import { counts, createEl } from '../globals';
import { has, isFunction } from 'lodash';
import { isDefined, objLength } from '../helpers/misc';
import {
    ANIMATE, ANIMATELEAVE,
    CLASS,
    CLASSLEAVE,
    EVENT_ENTER,
    LEAVE,
    ON,
    ONCE,
    PARENT,
    STYLE,
    STYLELEAVE,
    UNDEFINED
} from '../constants';
import isValidArg from '../helpers/isValidArg';
import defaultAction from '../helpers/defaultAction';
import _$eventview from './eventView';
import elementEnter from '../helpers/elementEnter';
import objectClass from '../helpers/objectClass';
import objectStyle from '../helpers/objectStyle';
import objectAnimation from '../helpers/objectAnimation';
import objectParent from '../helpers/objectParent';
import objectModifiers from '../helpers/objectModifiers';
import elementExit from '../helpers/elementExit';

/**
 * (el → dom, $bd → object{*})
 - inview directive handler
 **/
const _$elinview = (el, $bd) => {
    // generate class indetities
    // add prefix , number can't been the first character in classname
    const classId = `inview-${shortid.generate()}`;

    // register class element
    classMutator(el).add(classId);
    createEl.register.push({
        classid: classId,
        rawName: $bd.rawName
    });

    // if directive value not registed
    if (!has(createEl.values, classId) && isDefined($bd.value)) {
        createEl.values[classId] = $bd.value;
    }

    // register handler
    const regHdlr = !isDefined($bd.arg) ? ON : isDefined(isValidArg($bd.arg)) && isValidArg($bd.arg) === ONCE ? ONCE : isDefined(isValidArg($bd.arg)) ?
        ON : UNDEFINED;

    // create Object for handling element enter and exit
    const funcEvent = Object.create(null);

    // default event handler
    defaultAction($bd, () => {
        if (isDefined(createEl.values[classId]) && isFunction(createEl.values[classId])) {
            createEl.values[classId](funcEvent);
        }
    });

    const _$arg = isDefined(isValidArg($bd.arg)) && isValidArg($bd.arg) !== ON || isValidArg($bd.arg) === ONCE ? isValidArg($bd.arg) : UNDEFINED;

    _$eventview(regHdlr, classId,{
        enter: (el) => {
            let elvalue;

            // check the value of the directive has been registered
            if (has(createEl.values, classId)) {
                elvalue = createEl.values[classId];
            }

            // for magic properties
            counts.countEntered += 1;
            elementEnter(el, classId);
            // end magic properties

            if (_$arg !== UNDEFINED && objLength($bd.modifiers) === 0 && isDefined(elvalue)) {
                switch (_$arg) {
                    case CLASS:
                        objectClass(elvalue, el);
                        break;
                    case STYLE:
                        objectStyle(elvalue, el);
                        break;
                    case ANIMATE:
                        objectAnimation(elvalue, el);
                        break;
                    case PARENT:
                        objectParent(elvalue, el);
                        break;
                    case EVENT_ENTER:
                        isFunction(elvalue) ? elvalue(el) : console.warn('[in-view:${$bd.expression}] invalid method');
                        break;
                }
            }

            if (_$arg === ON || _$arg === ONCE && objLength($bd.modifiers) > 0 && isDefined(elvalue)) {
                // register modifiers
                const $mdf = objectModifiers($bd.modifiers);

                switch ($mdf) {
                    case EVENT_ENTER:
                        isFunction(elvalue) ? elvalue(el) : console.warn('[in-view:${$bd.expression}] invalid method');
                        break;
                    case CLASS:
                        objectClass(elvalue, el);
                        break;
                    case STYLE:
                        objectStyle(elvalue, el);
                        break;
                    case ANIMATE:
                        objectAnimation(elvalue, el);
                        break;
                    case PARENT:
                        objectParent(elvalue, el);
                        break;
                }
            }

            if (isDefined(funcEvent.enter)) {
                funcEvent.enter(el);
            }
        },
        exit: function (el) {
            let elvalue;

            // check the value of the directive has been registered
            if (has(createEl.values,classId)) {
                elvalue = createEl.values[classId];
            }

            // for magic properties
            counts.countExits += 1;
            elementExit(el, classId);
            // end magic properties

            if (_$arg !== UNDEFINED && isDefined(elvalue)) {
                if (_$arg === LEAVE && objLength($bd.modifiers) === 0) {
                    isFunction(elvalue) ? elvalue(el) : console.warn('[in-view:${$bd.expression}] invalid method');
                }

                if (objLength($bd.modifiers) > 0 && objectModifiers($bd.modifiers) === LEAVE) {
                    switch (_$arg) {
                        case CLASS:
                            objectClass(elvalue, el);
                            break;
                        case STYLE:
                            objectStyle(elvalue, el);
                            break;
                        case ANIMATE:
                            objectAnimation(elvalue, el);
                            break;
                        case PARENT:
                            objectParent(elvalue, el);
                            break;
                    }
                }

                if (_$arg === PARENT && objLength($bd.modifiers) === 0) {
                    objectParent(elvalue, el);
                }
            }

            // check if has modifiers
            if (_$arg === ON || _$arg === ONCE && objLength($bd.modifiers) > 0 && isDefined(elvalue)) {
                // register modifiers
                const $mdf = objectModifiers($bd.modifiers);

                switch ($mdf) {
                    case LEAVE:
                        isFunction(elvalue) ? elvalue(el) : console.warn('[in-view:${$bd.expression}] invalid method');
                        break;
                    case CLASSLEAVE:
                        objectClass(elvalue, el);
                        break;
                    case STYLELEAVE:
                        objectStyle(elvalue, el);
                        break;
                    case ANIMATELEAVE:
                        objectAnimation(elvalue, el);
                        break;
                    case PARENT:
                        objectParent(elvalue, el);
                        break;
                }
            }

            if (isDefined(funcEvent.exit)) {
                funcEvent.exit(el);
            }
        }
    })
};

export default _$elinview;
