import * as Immutable from 'immutable';
import { uuid } from './uuidGenerator';
import {items} from '../constants/localStorageKeys';

const firstId = uuid();
const secondId = uuid();

const firstItem = {
    id: firstId,
    title: 'Wash dishes',
    description: 'Not again!'
};

const secondItem = {
    id: secondId,
    title: 'Kill spider',
    description: 'All lives matter'
};

const allIds = Immutable.List([firstId, secondId]);
const byId = Immutable.Map([[firstId, firstItem], [secondId, secondItem]]);

export const getInitialItems = () => {
    const storedMapJSON = localStorage.getItem(items.byId);
    const storedListJSON = localStorage.getItem(items.allIds);

    return {
        allIds: storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : allIds,
        byId: storedMapJSON ? Immutable.Map(JSON.parse(storedMapJSON)) : byId,
    };
};
