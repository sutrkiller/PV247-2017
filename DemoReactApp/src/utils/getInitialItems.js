import * as Immutable from 'immutable';
import {uuid} from './uuidGenerator';

const defaultItems = Immutable.List([
    {
        id: uuid(),
        title: 'Wash dishes',
        description: 'Not again!'
    },
    {
        id: uuid(),
        title: 'Kill spider',
        description: 'All lives matter'
    }
]);

export const getInitialItems = () => {
    const storedListJSON = localStorage.getItem('todoList');
    return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : defaultItems;
};
