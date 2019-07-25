import rp from 'request-promise-native';

import React, { Component } from 'react';

export default class CreateBlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.onClick = this.onClick.bind(this);
  }

  async onClick(e) {
    e.preventDefault();

    const options = {
      uri: 'http://localhost:3000/blog',
      json: true,
    };

    const users = await rp.get(options);

    this.setState({
      users,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Get All Users</button>
        {this.state.users.map(user => {
          return (
            <div key={user.id}>
              {user.id} | {user.username}
            </div>
          );
        })}
      </div>
    );
  }
}
