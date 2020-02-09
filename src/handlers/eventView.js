'use strict';

import inView from 'in-view';
import { EVENT_ENTER, EVENT_EXIT, ON, ONCE } from '../constants';

/**
 * (arg → string, classId → string, callback → function)
 - register inView handler
 **/
const _$eventview = (arg, classId, callback) => {
    const view = inView(`.${classId}`);

    switch(arg) {
        case ON:
            view
                .on(EVENT_ENTER, callback.enter)
                .on(EVENT_EXIT, callback.exit);
            break;
        case ONCE:
            view
                .once(EVENT_ENTER, callback.enter)
                .once(EVENT_EXIT, callback.exit);
            break;
        default:
            console.warn('[in-view] event handler not found')
    }
};

export default _$eventview;
