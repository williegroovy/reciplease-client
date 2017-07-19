import React from 'react';
import { Toolbar } from 'react-md';

import { leftToolbarAction, rightToolbarActions } from "./ToolbarActions"

const ToolbarMain = (props) => (
  <Toolbar colored title="Richardson Demo" nav={leftToolbarAction(props)} actions={rightToolbarActions(props)} prominentTitle />
);

export default ToolbarMain;
