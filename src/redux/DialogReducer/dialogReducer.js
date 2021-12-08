const DIALOG_SET_ITEM = 'DIALOG_SET_ITEM'
const DIALOG_CURRENT_DIALOG_ID = 'DIALOG_CURRENT_DIALOG_ID'

const initialState = {
  item: [],
  currentDialogId: null,
}

export const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_SET_ITEM: {
      return {...state, item: action.payload}
    }
    case DIALOG_CURRENT_DIALOG_ID: {
      return {...state, currentDialogId: action.payload}
    }
    default:
      return state
  }
}

export const setDialogItem = (item) => ({
  type: DIALOG_SET_ITEM,
  payload: item
})

export const setCurrentDialogId = (id) => ({
  type: DIALOG_CURRENT_DIALOG_ID,
  payload: id
})