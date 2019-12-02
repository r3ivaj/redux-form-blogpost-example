import React from 'react';
import { connect } from 'react-redux';
import { path } from 'ramda';

const Form = ({
  name,
  email,
  message,
  setFieldValue,
}) => {
  return (
    <div className="form">
      <label>
        Name:
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setFieldValue('name', e.target.value)}
        />
      </label>
      <br />
      <label>
        E-mail:
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setFieldValue('email', e.target.value)}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          id="message"
          value={message}
          onChange={e => setFieldValue('message', e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Send your message</button>
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
    const saf = type => (field, text) => dispatch({type, field, text});
    return {
      setFieldValue: saf(`FORM_${n}/SET_FIELD_VALUE`),
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
};

export default createConnectedForm;