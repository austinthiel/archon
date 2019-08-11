import './Blog.scss';

import React, { Component } from 'react';
import { Page } from '../shared';
import CreateBlogForm from './CreateBlogForm';
import ReadBlogButton from './ReadBlogButton';
import UpdateBlogForm from './UpdateBlogForm';
import DeleteBlogForm from './DeleteBlogForm';

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
