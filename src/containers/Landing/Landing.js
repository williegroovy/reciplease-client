import React from 'react';

import LoginForm from '../Forms/LoginForm';
import { legrand416x130 } from '../../media/index';
import './Landing.css';

const Landing = () => {
  return (
    <div>
      <div className="landing">
        <img src={legrand416x130} alt="Legrand Logo" />

        <div className="login-form md-grid">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Landing;
