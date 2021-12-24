const SET_DIALOGS = 'SET_DIALOGS';
const DIALOG_CURRENT_DIALOG_ID = 'DIALOG_CURRENT_DIALOG_ID';
const SET_ACTIVE_DIALOG = 'SET_ACTIVE_DIALOG';

const initialState = {
  dialogs: [],
  currentDialogId: null,
  activeDialog: null,
};

export const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIALOGS: {
      return {...state, dialogs: action.payload};
    }
    case DIALOG_CURRENT_DIALOG_ID: {
      return {...state, currentDialogId: action.payload};
    }
    case SET_ACTIVE_DIALOG: {
      return {...state, activeDialog: action.payload};
    }
    default:
      return state;
  }
};

export const setDialogs = (item) => ({
  type: SET_DIALOGS,
  payload: item,
});

export const setCurrentDialogId = (id) => ({
  type: DIALOG_CURRENT_DIALOG_ID,
  payload: id,
});

export const setActiveDialog = (id) => ({
  type: SET_ACTIVE_DIALOG,
  payload: id,
});
