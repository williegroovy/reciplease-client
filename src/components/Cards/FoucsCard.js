import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-md';

const FocusCard = ({ media, cardTitle, cardBody, clearCard }) => {
  console.log("Modal Wrapper", media);
  return(
    <Card className="card md-block-centered">
      {media}
      {cardTitle}
      {cardBody}
    </Card>
  );
};

FocusCard.propTypes = {
  media: PropTypes.element,
  cardTitle: PropTypes.element.isRequired,
  cardBody: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]).isRequired,
  clearCard: PropTypes.func,
};

export default FocusCard;

//media, cardTitle, cardBody, onClick, hideModal