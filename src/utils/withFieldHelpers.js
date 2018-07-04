import React, { Component } from 'react';

const withFieldHelpers = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.validateField = this.validateField.bind(this);

      const initialState = {
        fieldErrors: {},
      };

      this.state = initialState;
    }

    validateField(e) {
      if (e.target.name === 'body') {
        if (e.target.value.length < 3) {
          this.setState({
            ...this.state,
            fieldErrors: {
              ...this.state.fieldErrors,
              [e.target.name]: e.target.value
            }
          });
        }
      }
    }

    render() {
      return <WrappedComponent
        {...this.props}
        validateField={this.validateField}
        withFieldState={this.state}
      />;
    }
  };
};

export default withFieldHelpers;

// function replacer(key, value) {
//   if (typeof value === 'function') {
//     return `function ${value.name}() {...}`
//   }

//   return value
// }

// export function stringify(value) {
//   return JSON.stringify(value, replacer, 2)
// }

// const withFieldHelpers = (WrappedComponent) => {
//   return class extends WrappedComponent {
//     render() {
//       return (
//         <div>
//           <h2>
//             HOC Debugger Component
//           </h2>
//           <p>
//             Props
//           </p>
//           <pre>{stringify(this.props)}</pre>
//           <p>
//             State
//           </p>
//           <pre>{stringify(this.state)}</pre>
//           {super.render()}
//         </div>
//       )
//     }
//   }
// }
// export default withFieldHelpers;