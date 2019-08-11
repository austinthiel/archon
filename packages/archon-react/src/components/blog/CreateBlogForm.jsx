import rp from 'request-promise-native';

import React, { Component } from 'react';

export default class CreateBlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameFieldValue: '',
    };
  }

  handleChange = e => {
    this.setState({
      usernameFieldValue: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const options = {
      uri: 'http://localhost:3000/api/blog',
      json: true,
      body: {
        username: this.state.usernameFieldValue,
      },
    };

    await rp.post(options);

    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      usernameFieldValue: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <br />
          <input type='text' name='username' onChange={this.handleChange} />
        </label>
        <input type='submit' value='Create User' />
      </form>
    );
  }
}
