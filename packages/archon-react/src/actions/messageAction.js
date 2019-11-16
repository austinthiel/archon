/**
 * action types
 */

export const SEND_MESSAGE = 'SEND_MESSAGE';

/**
 * action creators
 */

export const sendMessage = message => {
  return {
    type: SEND_MESSAGE,
    message,
  };
};
