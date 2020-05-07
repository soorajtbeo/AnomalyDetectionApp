import * as types from "../_constants";

export const addCard = (listID, text) => {
  return {
    type: types.ADD_CARD,
    payload: { text, listID }
  }
};

export const deleteCard = (id, listID) => {
  return {
    type: types.DELETE_CARD,
    payload: { id, listID }
  }
}

export const deleteCardThunk = (id, listID) => (dispatch) => {
  dispatch(deleteCard(id, listID)); // dispatch normal action creater func

}


export const editCard = (id, listID, newText) => {
  return {
    type: types.EDIT_CARD,
    payload: { id, listID, newText }
  };

};


export const editCardThunk = (id, listID, newText) => {
  return (dispatch) => {
    dispatch(editCard(id, listID, newText));


  }
}

// ok, i know, it might be redundant but i just want to practice thunk here
export const addCardThunk = (listID, text) => {
  return (dispatch, getState) => {
    dispatch(addCard(listID, text));

  }
}


export const addList = (title) => {
  return {
    type: types.ADD_LIST,
    payload: title
  }
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  droppableId,
  type
) => {
  return {
    type: types.DRAG_HAPPENDED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      droppableId,
      type
    }
  }
}

export const editTitle = (listID, newTitle) => {
  return {
    type: types.EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle
    }
  };
};

export const deleteList = listID => {
  return (dispatch) => {
    return dispatch({
      type: types.DELETE_LIST,
      payload: {
        listID
      }
    });
  };
};