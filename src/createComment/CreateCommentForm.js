import React from 'react';
import { Formik } from 'formik';
import Yup from 'yup';

const CreateCommentForm = props => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="body"
          value={props.form.body}
          onChange={props.onChange}
        />
      </form>
    </div>
  )
}

export default CreateCommentForm;
