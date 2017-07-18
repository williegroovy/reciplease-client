import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-md';

/*
 * COMPONENT STYLESHEET @ /src/stylesheets/components/overlay.scss
 */

const OverlayPropTypes = {
  clearPresentation: PropTypes.func,
  clearOverlayOnClick: PropTypes.bool,
};

const OverlayDefaultProps = {
  clearOverlayOnClick: true,
};

const clearIcon = (handleClick) => <Button key="close" id="close-overlay" onClick={handleClick()} icon>clear</Button>;

const renderClearIcon = (clearOverlayOnClick, clearPresentation)  => (
  clearOverlayOnClick ? (e => e.target.dataset.space === 'overlay' ? clearPresentation() : null) : null
);

const Overlay = ({ clearPresentation, clearOverlayOnClick, children }) => {
  return (
    <div key="overlay" data-space='overlay' className="overlay" onClick={renderClearIcon(clearOverlayOnClick, clearPresentation)}>
      {clearIcon(() => clearPresentation)}
      {children}
    </div>
  );
};

Overlay.propTypes = OverlayPropTypes;
Overlay.defaultProps = OverlayDefaultProps;

export default Overlay;