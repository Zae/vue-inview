'use strict';

/**
 * (update → function)
 - life cycle update
 **/
const updateLifeCycle = (update) => {
    const sync = () => {
        update();
        setTimeout(sync,0);
    };

    sync();
};

export default updateLifeCycle;
