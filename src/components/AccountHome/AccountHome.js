import React from 'react';

import PermissionCombo from './PermissionCombo';
import CollapsiblePanel from '../CollapsiblePanel';
import UsernameField from './UsernameField';
import ArticleWell from './ArticleWell';

const inlineTitle = title => (<div><hr/><h4>{title}</h4><hr/></div>);

export default () => (
  <div className="container">
    <PermissionCombo />

    {inlineTitle('User Permissions Required')}

    <UsernameField />

    {inlineTitle('Manager Permissions Required')}

    <ArticleWell />

    {inlineTitle('Admin Permissions Required')}

    <CollapsiblePanel/>
  </div>
);
