import React from 'react';
import { Page, Spacer } from '../shared';
import {
  CreateBlogForm,
  ReadBlogButton,
  UpdateBlogForm,
  DeleteBlogForm,
} from './';

const Blog = () => {
  return (
    <Page>
      <CreateBlogForm />
      <Spacer size={20} />
      <ReadBlogButton />
      <Spacer size={20} />
      <UpdateBlogForm />
      <Spacer size={20} />
      <DeleteBlogForm />
    </Page>
  );
};

export default Blog;
