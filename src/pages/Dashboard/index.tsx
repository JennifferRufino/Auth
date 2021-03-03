import React from 'react';
import logo from '../../assets/logo.png';

import * as Styles from './styles';

function Dashboard() {
    return (
        <Styles.Container className="sign-in-page activated"> 
            <Styles.Logo src={logo} alt="CL Logo" />
        </Styles.Container>
    )

}

export default Dashboard;