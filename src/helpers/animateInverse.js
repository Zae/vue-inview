'use strict';

/**
 * (data → string)
 - generate inverse direction
 **/
const animateInverse = (data) => {
    const inverse = [
        ['In', 'Out'],
        ['X', 'Y'],
        ['Down', 'Up'],
        ['Left', 'Right']
    ];

    let result;

    for (let i = 0; i < inverse.length; i++) {
        const inverseIndex = inverse[i],
            dataIndex = inverseIndex.indexOf(data);

        if (dataIndex >= 0) {
            result = dataIndex === 0 ? inverseIndex[1] : inverseIndex[0];
        }
    }

    return result;
};

export default animateInverse;
