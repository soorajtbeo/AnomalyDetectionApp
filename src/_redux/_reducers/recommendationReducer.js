import * as types from '../_constants';

let listID = 2;
let cardID = 6;

const initialState = [
  {
    title: 'Open',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'Clean ODM',
        time: '5 mins',
        issues: ['ODM diameters differ', 'ODM faulty'],
      },
      {
        id: `card-${1}`,
        text: 'Callibrate ODM',
        time: '10 mins',
        issues: ['Issue a1', 'Issue a2', 'Issue a3'],
      },
      {
        id: `card-${2}`,
        text: 'Figure the Tube',
        time: '3 mins',
        issues: ['Issue b1'],
      },
      {
        id: `card-${3}`,
        text: 'Check the connection',
        time: '20 mins',
        issues: ['Issue c1', 'Issue c2'],
      },
      {
        id: `card-${4}`,
        text: 'Fix the Pipeline',
        time: '30 mins',
        issues: ['Issue d1', 'Issue d2', 'Issue d3'],
      },
    ],
  },

  {
    title: 'In Progress',
    id: `list-${1}`,
    cards: [],
  },
  {
    title: 'Finished',
    id: `list-${2}`,
    cards: [],
  },
  {
    title: 'Suspended',
    id: `list-${3}`,
    cards: [],
  },
];

const recommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`,
      };

      listID += 1;

      return [...state, newList];

    case types.ADD_CARD: {
      // adding braces to fix newState var duplicatiton
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      };

      cardID += 1;
      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    case types.EDIT_CARD: {
      const { id, listID, newText } = action.payload;
      return state.map((list) => {
        if (list.id === listID) {
          const newCards = list.cards.map((card) => {
            if (card.id === id) {
              card.text = newText;
              return card;
            }
            return card;
          });
          return { ...list, cards: newCards };
        }
        return list;
      });
    }

    case types.DELETE_CARD: {
      // extract payload data
      const { id, listID } = action.payload;
      // map our state
      return state.map((list) => {
        // if list matches
        if (list.id === listID) {
          // filter cards and return new list
          // eventually we return new array state by map
          console.log('list deletion');
          const newCards = list.cards.filter((card) => card.id !== id);
          return { ...list, cards: newCards };
        } else {
          return list;
        }
      });
    }

    case types.DRAG_HAPPENDED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
      } = action.payload;

      const newState = [...state];

      // draggin lists around
      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      // If the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // if dropped to other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state.find((list) => droppableIdStart === list.id);
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state.find((list) => droppableIdEnd === list.id);

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    case types.EDIT_LIST_TITLE: {
      const { listID, newListTitle } = action.payload;
      // return new state (array)
      return state.map((list) => {
        // find list by id
        if (list.id === listID) {
          // rewrite title in matched lists
          list.title = newListTitle;
          return list;
        } else {
          return list;
        }
      });
    }

    case types.DELETE_LIST: {
      const { listID } = action.payload;
      // filter out lists that pass condition
      return state.filter((list) => list.id !== listID);
    }

    default:
      return state;
  }
};

export default recommendationReducer;
