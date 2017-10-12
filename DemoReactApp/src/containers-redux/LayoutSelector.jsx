import { connect } from 'react-redux';
import { LayoutSelector } from '../components/LayoutSelector.jsx';

const mapStateToProps = (state) => ({
    isAuthenticated: !!state,
    location: state.router.location,
});

const enhancer = connect(mapStateToProps);
const connectedComponent = enhancer(LayoutSelector);

export { connectedComponent as LayoutSelector };
