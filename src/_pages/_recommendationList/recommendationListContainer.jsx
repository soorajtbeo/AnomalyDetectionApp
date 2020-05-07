import React, { useState } from 'react';
import RecommendationCard from './recommendationCard';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { editTitle } from '../../_redux/_actions/listsActions';
import { connect } from 'react-redux';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const ListContainer = styled.div`
  background-color: #ccc;
  border-radius: 3px;
  width: 300px;
  padding: 15px 8px 25px 8px;
  height: 100%;
  margin: 0 10px 0 1px;
  height: 100vh;
  overflow-y: scroll;
`;

const StyledInput = styled.input`
  width: 95%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  padding: 7px 5px;
  margin: 10px 5px 15px 5px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  font-size: 18px;
  font-weight: bold;
  margin: 1px 5px 20px 5px;
`;

const RecommendationListContainer = ({
  title,
  cards,
  listID,
  index,
  dispatch,
}) => {
  // handle list editing with hooks comps states
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  // the render func for edit feature
  const renderEditInput = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <StyledInput
          type='text'
          maxLength='45'
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
        />
      </form>
    );
  };

  // select input text by focus (halted for now)
  const handleFocus = (e) => {
    // e.target.select();
  };

  // save changes to state after every input change
  const handleChange = (e) => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  // save changes
  const handleFinishEditing = (e) => {
    setIsEditing(false); // hide input
    dispatch(editTitle(listID, listTitle));
  };

  const handleRemoveCard = (cardIndex) => {
    alert(cardIndex);
  };

  // functional component return
  return (
    <Droppable droppableId={String(listID)} index={index}>
      {(provided) => (
        <ListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type='card'>
            {(provided) => (
              <div>
                <div>
                  {isEditing ? (
                    renderEditInput()
                  ) : (
                    <TitleContainer>
                      <ListTitle>{listTitle}</ListTitle>
                    </TitleContainer>
                  )}
                </div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {/* for each card in array add component */}
                  {cards.map((card, index) => {
                    return (
                      <RecommendationCard
                        key={card.id}
                        index={index}
                        text={card.text}
                        time={card.time}
                        issues={card.issues}
                        id={card.id}
                        listID={listID}
                        handleRemoveCard={handleRemoveCard}
                      />
                    );
                  })}

                  {/* provided.placeholder basically gives extra space to your <Droppable/> while a drag is occurring */}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Droppable>
  );
};

export default connect()(RecommendationListContainer);
