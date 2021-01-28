import { GoogleLogout } from 'react-google-login';

const clientId = '279098454783-6ifmp48rjph5516k7i7hajcsfshh8h2a.apps.googleusercontent.com';

function googleLogout() {
    const onSuccess = () => {
        alert('Logged Out Successfully');
    };

    return (
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}>
            </GoogleLogout>
        </div>
    )
}

export default googleLogout;

