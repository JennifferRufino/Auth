import React from 'react';
import logo from '../../assets/logo.png';
import {useAuth } from '../../contexts/auth';

import * as Styles from './styles';

function SignIn() {
    const { signed, loading, signIn } = useAuth();

    function handleSignIn() {
        signIn();
    }

    return (
        <Styles.Container className="sign-in-page activated"> 
            <Styles.Logo src={logo} alt="CL Logo" />
            <Styles.Input type="text" defaultValue="test@email.com" />
            <Styles.Input type="password" defaultValue="12345678" />
            <Styles.Button onClick={handleSignIn}>
                {loading ? 'Carregando' : 'Entrar'}
            </Styles.Button>
        </Styles.Container>
    )

}

export default SignIn;