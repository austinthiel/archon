import rp from 'request-promise-native';

import React, { Component } from 'react';
import { Button } from '../../components/shared';

export default class CreateBlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  onClick = async e => {
    e.preventDefault();

    const options = {
      uri: 'http://localhost:3000/api/blog',
      json: true,
    };

    const users = await rp.get(options);

    this.setState({
      users,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.onClick}>Get All Users</Button>
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
