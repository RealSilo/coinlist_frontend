import React from 'react';
import { Link } from 'react-router-dom';

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
