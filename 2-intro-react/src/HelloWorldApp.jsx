import Title from './components/Title';
import UserDetails from './components/UserDetails';
import PropTypes from 'prop-types';

function HelloWorldApp(props) {
    const name = 'Pepe';
    return (
        <>
            <Title title={ props.title } />
            <UserDetails user = { props.user } id={ props.id } />
            <p>qué tal! { name } </p>
            
        </>
    );
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object
};

HelloWorldApp.defaultProps = {
    title: 'Hola Mundo por defecto'
};

export default HelloWorldApp;