import { connect } from 'react-redux';
import { TodoList } from '../../components/todo-list/TodoList.jsx';
import { openCreateNewForm } from '../../actions/todo-list/actionCreators';

// this should be memoized, because it creates a new instance
// with every change of store (every call of the mapping function)
export const getListOfItems = (items) => items.allIds.map(id => items.byId.get(id)).toList();

const mapStateToProps = (state) => ({
    list: getListOfItems(state.todoApp.items),
    editedItemId: state.todoApp.editedItemId,
    createNewFormVisible: state.todoApp.isCreateNewFormOpen,
});

const mapDispatchToProps = (dispatch) => ({
    onCreateNewClick: () => dispatch(openCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(TodoList);

export { connectedComponent as TodoListRedux };
