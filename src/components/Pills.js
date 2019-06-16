import React from 'react';
import { Spinner } from 'gestalt';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_TYPES = gql `
 {
  types {
    name
    id
  }
}
`;

const Pills = ({ onPillClick }) => (
  <center>
    <Query query={GET_TYPES}>
    {
      ({ loading, error, data, refetch }) => {
        if (loading) return <Spinner show={true} accessibilityLabel="Loading..." />;
        if (error) return <p>Error :(</p>;
        
        const buttons = [<button className="pill" key="noFilter" onClick={() => onPillClick()}>all</button>];

        return buttons.concat(data.types.map(({ id, name }) => (
          <button className="pill" key={id} onClick={() => onPillClick(id)}>{name}</button>
        )));
    }}
    </Query>
  </center>
);
 
export default Pills;