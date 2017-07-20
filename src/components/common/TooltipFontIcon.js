import React, { PropTypes } from 'react';
import classnames from 'classnames';
import FontIcon from 'react-md/lib/FontIcons';
import injectTooltip from 'react-md/lib/Tooltips';

const TooltipFontIcon = injectTooltip(({ children, iconClassName, className, tooltip, ...props }) => (
  <div {...props} className={classnames(className, 'inline-rel-container')}>
    {tooltip}
    <FontIcon iconClassName={iconClassName}>{children}</FontIcon>
  </div>
));

TooltipFontIcon.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  tooltip: PropTypes.node,
};

export default TooltipFontIcon;