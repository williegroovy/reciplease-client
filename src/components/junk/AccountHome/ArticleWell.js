import React from 'react';
import { ButtonGroup, Button, Glyphicon, Grid, Col, Row, Well } from 'react-bootstrap';

import { permission } from '../../../enhancers/user';

const ArticleButtonGroup = ({ disabled, articleName }) => (
  <ButtonGroup style={{ float: 'right', marginTop: 5 }}>
    <Button
      disabled={disabled}
      onClick={() => alert(articleName + ' Published')}
      bsStyle="info"
      bsSize="small">
      <Glyphicon glyph="eye-open" />
    </Button>
    <Button
      disabled={disabled}
      onClick={() => alert(articleName + ' Unpublished')}
      bsStyle="warning"
      bsSize="small" >
      <Glyphicon glyph="eye-close" />
    </Button>
    <Button
      disabled={disabled}
      bsStyle="success"
      bsSize="small"
      onClick={() => alert(articleName + ' needs to be edited, we all know. Just cut me some slack Im working on it.')}>
      <Glyphicon glyph="pencil" />
    </Button>
    <Button
      disabled={disabled}
      bsStyle="danger"
      bsSize="small"
      onClick={() => alert('Are you sure you want to delete ' + articleName)}>
      <Glyphicon glyph="trash" />
    </Button>
  </ButtonGroup>
);

const ArticleWell = ({ permission }) =>  {

  console.log('permission', permission);

  const permissionCheck = (permission === 'manager' || permission === 'admin');

  console.log('permissionCheck', permissionCheck);

  let wellStyle = { opacity: 0.5 };

  return (
    <Well bsSize="large" style={permissionCheck ? {} : wellStyle }>
      <Grid>
        <Row style={{ paddingRight: 50, paddingLeft: 50, width: '90%' }}>
          <Col style={{ display: 'inline' }}>
            <ArticleButtonGroup articleName="Beach Body" disabled={!permissionCheck} />
            <h4>Beach Body</h4>
          </Col>
          <hr style={{ borderColor: 'white' }} />
        </Row>

        <Row style={{ paddingRight: 50, paddingLeft: 50, width: '90%' }}>
          <Col style={{ display: 'inline' }}>
            <ArticleButtonGroup articleName="Trumps War On Drugs" disabled={!permissionCheck} />
            <h4>Trumps War On Drugs</h4>
          </Col>
          <hr style={{ borderColor: 'white' }} />
        </Row>

        <Row style={{ paddingRight: 50, paddingLeft: 50, width: '90%' }}>
          <Col style={{ display: 'inline' }}>
            <ArticleButtonGroup articleName="Exploding Kittens Reign Supreme" disabled={!permissionCheck} />
            <h4>Exploding Kittens Reign Supreme</h4>
          </Col>
        </Row>
      </Grid>
    </Well>
  );
};

export default permission()(ArticleWell);