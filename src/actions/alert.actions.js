import { createActions, handleActions, combineActions } from 'redux-actions';

const ALERT_SUCCESS = 'ALERT_SUCCESS';
const ALERT_ERROR = 'ALERT_ERROR';
const CLEAR_ALERT = 'CLEAR_ALERT';

const defaultState = {};

// exports alertSuccess, alertError, clearAlert
export const alertActions = createActions(ALERT_SUCCESS, ALERT_ERROR, CLEAR_ALERT);

const { alertSuccess, alertError, clearAlert } = alertActions;
const reducer = handleActions(
  {
    [alertSuccess]: (state, { payload }) => {
      return { ...state, type: 'alert-success', message: payload };
    },
    [alertError]: (state, { payload: { message } }) => {
      return { ...state, type: 'alert-danger', message };
    },
    [clearAlert]: () => {
      return defaultState;
    }
  },
  defaultState
);

export default reducer;
