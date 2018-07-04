import React, { Component } from 'react';

const withFormHelpers = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      const initialState = {
        form: {},
        errors: {},
      };
      
      this.handleInputChange = this.handleInputChange.bind(this);

      this.state = initialState;
    }

    handleInputChange(e) {
      e.preventDefault();

      const name = e.target.name;
      const value = e.target.value;

      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          [name]: value
        },
      });
    }

    render() {
      return <WrappedComponent
        {...this.props}
        withFormState={this.state}
        handleInputChange={this.handleInputChange}
      />;
    }
  };
};

export default withFormHelpers;
