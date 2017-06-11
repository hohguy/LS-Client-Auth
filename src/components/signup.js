// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { signUp } from '../actions';

class SignUp extends Component {
  handleFormSubmit({email, password, confirmPassword}) {
    if (password === confirmPassword) {
      return this.props.signUp(email, password, this.props.history);
    }
    alert("Passwords are not the same.");
  }

  renderAlert() {
    if (!this.props.error) return null;
    return (
      <h3>{this.props.error}</h3>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <legend>Sign Up</legend>
          <label htmlFor="email">Email:</label>
          <Field id="email" name="email" component="input" type="text" /><br/>
          <label htmlFor="pw">Password:</label>
          <Field id="pw" name="password" component="input" type="password" /><br/>
          <label htmlFor="pw2">Confirm password:</label>
          <Field id="pw2" name="confirmPassword" component="input" type="password" />
        </fieldset>
        <button action="submit">Sign Up</button>
        {this.renderAlert()}
      </form>
    );
  }

}

 SignUp = connect(null, { signUp })(SignUp);

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'confirmPassword'],
})(SignUp);
