import './Login.scss';
import GoogleLogin from 'react-google-login';
import { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

function Login({ handleLogin }) {
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null,
    );
    const handleFailure = (errorData) => {
        console.log(errorData);
    };
    const handleLoginGoogle = async (googleData) => {
        console.log('google Data: ', googleData);

        const res = await fetch('/api/google-login', {
            method: 'POST',
            body: JSON.stringify({
                token: googleData.tokenId,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        setLoginData(googleData);
        localStorage.setItem('loginData', JSON.stringify(data));
        console.log('logged in of: ', data);
    };
    const handleLogout = () => {
        console.log('Logout....');
        localStorage.removeItem('loginData');
        setLoginData(null);
    };
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
                scope: 'email',
            });
        }
        gapi.load('client:auth2', start);
    }, []);

    console.log('google Login is: ', GoogleLogin);
    return (
        <div className="wrapper-Login">
            <button className="btn right-btn login-btn" onClick={() => handleLogin(true)}>
                <span className="login-btn-text">Log In</span>
            </button>
            <div>
                {loginData ? (
                    <div>
                        <h3> You Logged in as {loginData.profileObj.email}</h3>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        render={(renderProps) => (
                            <button
                                className="btn right-btn login-btn"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                                <span className="login-btn-text">Google</span>
                            </button>
                        )}
                        onSuccess={handleLoginGoogle}
                        onFailure={handleFailure}
                        cookiePolicy={'single_host_origin'}
                    ></GoogleLogin>
                )}
            </div>
        </div>
    );
}

export default Login;
