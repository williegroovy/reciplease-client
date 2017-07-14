import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

export const Fade = (props) => {
  const { children } = props;
  
  return(
    <CSSTransition
      {...props}
      timeout={1000}
      classNames="fade"
    >
      {children}
    </CSSTransition>
  );
};