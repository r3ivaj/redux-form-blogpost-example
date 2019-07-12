import React from 'react';
import { connect } from 'react-redux';
import { path } from 'ramda';

const Form = ({
  name,
  email,
  message,
  updateName,
  updateEmail,
  updateMessage,
}) => {
  return (
    <div className="form">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => updateName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => updateEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="msg">Message:</label>
        <textarea
          id="msg"
          value={message}
          onChange={e => updateMessage(e.target.value)}
        />
      </div>
      <div className="button">
        <button type="submit">Send your message</button>
      </div>
    </div>
  );
}

const createConnectedForm = n => {
  const mapStateToProps = state => {
    return {
      name: path([`form${n}`, 'name'], state),
      email: path([`form${n}`, 'email'], state),
      message: path([`form${n}`, 'message'], state),
    }
  }

  const mapDispatchToProps = dispatch => {
    const saf = type => text => dispatch({type, text});
    return {
      updateName: saf(`FORM_${n}/UPDATE_NAME`),
      updateEmail: saf(`FORM_${n}/UPDATE_EMAIL`),
      updateMessage: saf(`FORM_${n}/UPDATE_MESSAGE`)
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
};

export default createConnectedForm;