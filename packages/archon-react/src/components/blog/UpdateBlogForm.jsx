import rp from 'request-promise-native';

import React, { Component } from 'react';

export default class UpdateBlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idFieldValue: null,
      newUsernameFieldValue: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleNewUsernameChange = this.handleNewUsernameChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleIdChange(e) {
    this.setState({
      idFieldValue: e.target.value,
    });
  }

  handleNewUsernameChange(e) {
    this.setState({
      newUsernameFieldValue: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (
      this.state.idFieldValue === '' ||
      this.state.newUsernameFieldValue === ''
    ) {
      return;
    }

    const options = {
      uri: 'http://localhost:3000/blog',
      json: true,
      body: {
        id: this.state.idFieldValue,
        username: this.state.newUsernameFieldValue,
      },
    };

    await rp.put(options);

    this.clearForm();
  }

  clearForm() {
    this.setState({
      idFieldValue: '',
      newUsernameFieldValue: '',
    });

    document.getElementById('updateForm').reset();
  }

  render() {
    return (
      <form id='updateForm' onSubmit={this.handleSubmit}>
        <label>
          User ID:
          <input type='number' name='id' onChange={this.handleIdChange} />
        </label>
        <br />
        <label>
          New Username:
          <input
            type='text'
            name='newUsername'
            onChange={this.handleNewUsernameChange}
          />
        </label>
        <br />
        <input type='submit' value='Update User' />
      </form>
    );
  }
}
