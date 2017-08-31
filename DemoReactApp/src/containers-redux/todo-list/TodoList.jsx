import { connect } from 'react-redux';
import { TodoList } from '../../containers/todo-list/TodoList.jsx';
import {
    openCreateNewForm,
} from '../../actions/todo-list/actionCreators';

const mapStateToProps = (state) => ({
    list: state.todoApp.itemsList,
    editedItemId: state.todoApp.editedItemId,
    isCreateNewFormOpen: state.todoApp.isCreateNewFormOpen,
});

const mapDispatchToProps = (dispatch) => ({
    onCreateNewClick: () => dispatch(openCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(TodoList);

export { connectedComponent as TodoListRedux };
