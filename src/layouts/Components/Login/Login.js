import './Login.scss';
import { GoogleLogin } from 'react-google-login';
import { useState, useEffect, useContext } from 'react';
import { gapi } from 'gapi-script';
import AppContext from '../../../components/Context/AppContext';

function Login({ handleLogin }) {
    const { setIsLogin } = useContext(AppContext);
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
                scope: 'email',
            });
        }
        gapi.load('client:auth2', start);
    }, []);
    const [loginStatus, setLoginStatus] = useState(false);

    const [loginTiktokData, setLoginData] = useState(
        localStorage.getItem('loginTiktokData')
            ? JSON.parse(localStorage.getItem('loginTiktokData'))
            : null,
    );

    const responseGoogle = (response) => {
        if (response && response.profileObj) {
            setLoginStatus(true);
            setIsLogin(true);
            // console.log('context now is: ', AppContext);
            //save localstorage
            setLoginData(response.profileObj);
            localStorage.setItem('loginTiktokData', JSON.stringify(response.profileObj));
            localStorage.setItem('userTiktokData', JSON.stringify(response));

            //pass data to Header (parent)
            (function () {
                handleLogin({
                    isLogin: true,
                    imageUrl: response.profileObj.imageUrl,
                });
            })();
        }
    };

    return (
        <div className="wrapper-login">
            {!loginStatus && !loginTiktokData && (
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    render={(renderProps) => (
                        <button
                            className="btn right-btn login-btn"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            <span className="login-btn-text">Log In</span>
                        </button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            )}
        </div>
    );
}
export default Login;
