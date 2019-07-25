import './Blog.scss';

import React, { Component } from 'react';
import { Page } from '../shared';
import CreateBlogForm from './CreateBlogForm.jsx';
import ReadBlogButton from './ReadBlogButton.jsx';
import UpdateBlogForm from './UpdateBlogForm.jsx';
import DeleteBlogForm from './DeleteBlogForm.jsx';

export default class Blog extends Component {
  render() {
    return (
      <Page>
        <CreateBlogForm />
        <br />
        <br />
        <ReadBlogButton />
        <br />
        <br />
        <UpdateBlogForm />
        <br />
        <br />
        <DeleteBlogForm />
      </Page>
    );
  }
}
