import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Details } from '../../components/profile/Details.jsx';
import { editProfileDetails } from '../../actions/profile/actionCreators';

const mapStateToProps = (state) => ({
    initialValues : state.profile.details,
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (details) => dispatch(editProfileDetails(details))
});

const formConfig = {
    form: 'DetailsForm',
};

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps);
const formEnhancer = reduxForm(formConfig);
const connectedComponent = stateEnhancer(formEnhancer(Details));

export { connectedComponent as Details };
