import React from 'react';
import {Table, Button} from 'react-bootstrap';

/**
 * TODO: Checklist
 * - On load dispatch action creator to GET recipes
 * - Map over recipes and extract name and id
 * - Map over new data and generate table rows
 * - Pass name and id as props for buttons and labels
 * - Add an "Add" button at the top right of the table.
 * - Better styles on table row labels and the damn alignment...
 */

const TableRow = ({ name }) => (
  <tr>
    <td>
      {name}
      <span className="pull-right">
        <Button style={{width: '70px', marginRight: '10px'}} bsStyle="warning">Edit</Button>
        <Button style={{width: '70px'}} bsStyle="danger">Delete</Button>
      </span>
    </td>
  </tr>
);

const RecipeTable = () => (
  <Table striped bordered hover>
    <tbody>
      <TableRow name="Cheesy Chicken Caserole"/>
    </tbody>
  </Table>
);

const Recipes = (props) => {
  return (
    <div>
      <h3>Recipes</h3>
      <RecipeTable />
    </div>
  );
};

export default Recipes;