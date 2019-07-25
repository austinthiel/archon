import rp from 'request-promise-native';

import React, { Component } from 'react';

export default class CreateBlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userIdFieldValue: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(e) {
    this.setState({
      userIdFieldValue: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const options = {
      uri: 'http://localhost:3000/blog',
      json: true,
      body: {
        id: this.state.userIdFieldValue,
      },
    };

    await rp.delete(options);

    this.clearForm();
  }

  clearForm() {
    this.setState({
      userIdFieldValue: '',
    });

    document.getElementById('deleteForm').reset();
  }

  render() {
    return (
      <form id='deleteForm' onSubmit={this.handleSubmit}>
        <label>
          User ID:
          <br />
          <input type='number' name='userId' onChange={this.handleChange} />
        </label>
        <input type='submit' value='Delete User' />
      </form>
    );
  }
}
