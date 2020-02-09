'use strict';

/**
 * return object{$enter → array, $exits → array, enter → string, exit → string, register → array, values → object{}}
 - create object
 **/
export const createEl = Object.create(null);

createEl.$enter = [];
createEl.$exits = [];
createEl.enter = '';
createEl.exit = '';
createEl.register = [];
createEl.values = {};

export const counts = {
    countEntered: 0,
    countExits: 0
};
