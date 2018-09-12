import React, { Component } from 'react';

// will render all the prop fields for the given edit
const EditPage = ({ fields }) => {
  return (
    <div className="container">
      {
        fields.map((field, index) => (
          <div className="edit-section">
            <h4>{ field.name }</h4>
            <textarea className="edit-area">

            </textarea>
          </div>
        ))
      }
      {/* On submit, grab all the text fields and post to server */}
      <button type="button">Submit</button>
    </div>
  )
}