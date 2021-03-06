import { css } from '@emotion/core';

export const container = css`
  min-height: 100vh;
  position: relative;

  body {
    padding: 10px;
    padding-bottom: 150px; /* Height of the footer */
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    background: rgb(39, 39, 39);
  }

  input {
    border-radius: 3px;
    height: 35px;
    padding: 0 5px;
    font-size: 16px;
    border: 1px solid black;

    &:focus {
      outline: 0;
      border: 1px solid skyblue;
    }
  }
`;

export const streamWrapper = css`
  height: calc(100vh - 42px);
`;
