import React from 'react';

const Dashboard = (props) => {
  console.log('Dashboard Props', props);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        This site is very much a work in progress.
        My goal with this is to demonstrate my react skills, and just to simply try out new things.
      </p>
      <h3>Ready for Demo</h3>
      <ul>
        <li>Weather Card</li>
      </ul>
    </div>
  )
};

export default Dashboard;