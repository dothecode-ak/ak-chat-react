import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";


import { auth } from './firebase';
import firebase from 'firebase/compat/app';

const Login = () => {
    return (
        <div id="Login-page">
            <div className="login-card">
                <h2>Welcome to AK Chat Box</h2>
                <div className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Sign With Google
                </div>
                <br />
                <br />
                <div className="login-button facebook"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>

                    <FacebookOutlined /> Sign With Facebook
                </div>

            </div>
        </div>


    );
}

export default Login;