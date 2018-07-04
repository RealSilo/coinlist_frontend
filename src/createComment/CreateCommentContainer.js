import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Formik } from 'formik';
import Yup from 'yup';

import withFormHelpers from '../utils/withFormHelpers';
import withFieldHelpers from '../utils/withFieldHelpers';

const creatCommentMutation = gql`
  mutation {
    createComment {
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
    this.initialState = {
      form: {
        body: '',
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.initialState;
  }

  sleep(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms)
    });
  }

  async handleSubmit(form) {
    await this.sleep(1000);
    console.log(form);
  }

  render() {
    return (
      <div>
        <Formik
          initialvalues = {this.state}
          validate = { values => {
            let errors = {};
            if (!values.body) {
              errors.body = 'Required'
            }
            return errors;
          }}
          onSubmit = { async(
            values,
            { setSubmitting, setErrors }
          ) => {
            await this.handleSubmit(values);
            setSubmitting(false);
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <CommentForm
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
        />
      </div>
    );
  }
};

const CommentForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input
      type="text"
      name="body"
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.values.email}
    />
    {props.touched.body && props.errors.body && <div>{props.errors.body}</div>}
    <button type="submit" disabled={props.isSubmitting}>
      Submit
    </button>
  </form>
);

export default withRouter(graphql(creatCommentMutation)(CreateCommentContainer));
