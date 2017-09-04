import { getInitialItems } from './getInitialItems';

export const getInitialState = () => ({
    todoApp: {
        items: {
            ...getInitialItems()
        }
    }
});
