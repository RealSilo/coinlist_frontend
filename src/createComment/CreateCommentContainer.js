import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import withFormHelpers from '../utils/withFormHelpers';

import CreateCommentForm from './CreateCommentForm';

const query = gql`
  query {
    coins {
      id
      currency_type
      name
      symbol
    }
  }`
;
class CreateCommentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CreateCommentForm 
          form={this.props.form}
          onChange={this.props.handleInputChange}
        />
      </div>
    )
  }
};

export default withRouter(graphql(query)(withFormHelpers(CreateCommentContainer)));
