import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import {
  deleteCardThunk,
  editCardThunk,
} from '../../_redux/_actions/listsActions';
import RecommendationButton from './recommendationButton';
import RecommendationForm from './recommendationForm';

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const IssueContainer = styled.div`
  margin-top: 3vh;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 32px;
  bottom: 6px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const RecommendationCard = React.memo(
  ({ text, time, issues, listID, id, index, handleRemoveCard, dispatch }) => {
    // use hooks state to handle editing

    // show form html if being edited(true)
    const [isEditing, setIsEditing] = useState(false);
    // text local state
    const [cardText, setText] = useState(text);
    //issue list collapse
    const [open, setOpen] = React.useState(false);

    // didMount in hooks
    useEffect(() => {
      console.log('card created');
    }, []);

    const handleDeleteCard = (e) => {
      // delete card using AC func
      dispatch(deleteCardThunk(id, listID));
    };

    const closeForm = (e) => {
      setIsEditing(false);
    };

    // bind text field data changes to state
    const handleChange = (e) => {
      setText(e.target.value);
    };

    const saveCard = (e) => {
      e.preventDefault();
      // save edited text and close the form
      dispatch(editCardThunk(id, listID, cardText));
      setIsEditing(false);
    };

    const handleCollapse = () => {
      setOpen(!open);
    };
    // the render funcs

    // render edit form and pass it event funcs as props
    const renderEditForm = () => {
      return (
        <RecommendationForm
          text={cardText}
          onChange={handleChange}
          closeForm={closeForm}
        >
          <RecommendationButton onClick={saveCard}>Save</RecommendationButton>
        </RecommendationForm>
      );
    };

    // render card func
    const renderCard = () => {
      return (
        <Draggable draggableId={String(id)} index={index}>
          {(provided) => (
            <CardContainer
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onDoubleClick={() => setIsEditing(true)}
            >
              <Card>
                <EditButton
                  onMouseDown={() => setIsEditing(true)}
                  fontSize='small'
                >
                  edit
                </EditButton>

                <DeleteButton fontSize='small' onMouseDown={handleDeleteCard}>
                  delete
                </DeleteButton>

                <CardContent>
                  <Typography id={id}>{text}</Typography>
                  {
                    // <div style={{ 'margin-top': '20px' }}>
                    <IssueContainer>
                      <AccessTimeIcon />
                      <Typography variant='caption'>{time}</Typography>

                      <List
                        component='nav'
                        aria-labelledby='nested-list-subheader'
                        // className={classes.root}
                      >
                        <ListItem button onClick={handleCollapse}>
                          <ListItemIcon>
                            <FormatListBulletedIcon
                              style={{ color: '#3f51b5' }}
                            />
                          </ListItemIcon>

                          <ListItemText
                            primary={issues.length + ' findings affected'}
                          />
                          {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout='auto' unmountOnExit>
                          <List component='div' disablePadding>
                            {issues.map((issue) => {
                              return (
                                <ListItem
                                  button
                                  // className={classes.nested}
                                >
                                  <ListItemIcon>
                                    <FormatListBulletedIcon />
                                  </ListItemIcon>
                                  <ListItemText primary={issue} />
                                </ListItem>
                              );
                            })}
                          </List>
                        </Collapse>
                      </List>
                    </IssueContainer>
                    // </div>
                  }
                </CardContent>
              </Card>
            </CardContainer>
          )}
        </Draggable>
      );
    };
    // show/hide editable card logic
    return isEditing ? renderEditForm() : renderCard();
  }
);

export default connect()(RecommendationCard);
