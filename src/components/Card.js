import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-md';

const propTypes = {
  media: PropTypes.element,
  title: PropTypes.element.isRequired,
  body: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  closeCard: PropTypes.func
};

const Card = ({ media, title, body, closeCard }) => {
  return (
    <Card className="card md-block-centered">
      {media}
      {title}
      {body}
    </Card>
  );
};
