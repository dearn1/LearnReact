import PropType from 'prop-types';

function UserGreeting(props) {
    const welcomeMessage = <h1 className="welcome-message">Welcome back, {props.name}!</h1>
    const loginPrompt = <h1 className="login-prompt">Please sign up.</h1>

    return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propType = {
    name: PropType.string,
    isLoggedIn: PropType.bool
}
UserGreeting.defaultProps = {
    name: 'Guest',
    isLoggedIn: false
}
export default UserGreeting