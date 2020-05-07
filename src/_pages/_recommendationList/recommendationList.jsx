import React, { Component } from "react";
import RecommendationListContainer from "./recommendationListContainer";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../../_redux/_actions/listsActions";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog"; 
import Button from "@material-ui/core/Button";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});



const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  marginright: 8;
`;

class RecommendationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      settingsopen: false,
      anchorEl: null,
      openFinishedDialog: false,
      openSuspendedDialog: false,
      status: '',
    };
  }
  options = (event) => {
    this.setState({
      settingsopen: !this.state.settingsopen,
      anchorEl: event.currentTarget,
    });
  };

  closeFinishedDialog = () => {
    this.setState({ openFinishedDialog: false });
  };

  closeSuspendedDialog = () => {
    this.setState({ openSuspendedDialog: false });
  };

  onDragEnd = result => {
    // destructuring for result obj properties
    const { destination, source, draggableId, type } = result;
    console.log(destination)

    if (destination.droppableId == 'list-2') {
      this.setState({ openFinishedDialog: true });
      this.setState({ status: "Finished" });
    }

    if (destination.droppableId == 'list-3') {
      this.setState({ openSuspendedDialog: true });
      this.setState({ status: "Suspended" });
    }

    if (!destination) {
      return;
    }
    // else sort items with ac func
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const lists = this.props.lists;

    return (
      <div className="py-4 px-4">
        <DragDropContext onDragEnd={this.onDragEnd} >
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {/* dnd standart func */}
            {provided => (
              <ListsContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {/* render lists with RecommendationListContainer comp using lists reducer's state (array of lists objects) */}
                {lists.map((list, index) => (
                  <RecommendationListContainer
                    listID={list.id}
                    title={list.title}
                    key={list.id}
                    cards={list.cards}
                    index={index}
                  />
                ))}
                {provided.placeholder}

              </ListsContainer>
            )}
          </Droppable>
        </DragDropContext>

        <Dialog
          fullWidth={true}
          maxWidth={"sm"}
          className="overlay"
          open={this.state.openFinishedDialog}
          onClose={this.closeFinishedDialog}
        >
          <div className="flex items-center justify-between px-2 py-2 modal-border-bottom">
            <p className="capitalize p-0 m-0">{this.state.status}</p>
            <div
              className="close-icon hover"
              onClick={this.closeFinishedDialog}
              alt="close"
            >
              <svg
                version="1.1"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                aria-hidden="false"
              >
                <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
              </svg>
            </div>
          </div>
          <div className="px-2 py-2">
            <TextareaAutosize
              rowsMax={10}
              aria-label="minimum height"
              placeholder="Enter Some notes"
              style={{
                height: '100px',
                overflow: 'hidden',
                width: '-webkit-fill-available',
                padding: '10px'
              }}
            />
          </div>

          <div className="flex items-center justify-end px-2 py-2">
            <Button
              onClick={this.closeFinishedDialog}
              variant="contained"
              color="primary"
              size="large"
              style={{
                marginRight: '10px'
              }}
            >Cancel</Button>

            <Button
              onClick={this.closeFinishedDialog}
              variant="contained"
              color="primary"
              size="large"
            >Finish</Button>
          </div>
        </Dialog>
        <Dialog
          fullWidth={true}
          maxWidth={"sm"}
          className="overlay"
          open={this.state.openSuspendedDialog}
          onClose={this.closeSuspendedDialog}
        >
          <div className="flex items-center justify-between px-2 py-2 modal-border-bottom">

            <p className="capitalize p-0 m-0">{this.state.status}</p>
            <div
              className="close-icon hover"
              onClick={this.closeSuspendedDialog}
              alt="close"
            >
              <svg
                version="1.1"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                aria-hidden="false"
              >
                <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
              </svg>
            </div>
          </div>

          <div className="flex items-center px-2 py-2">
            Suspended Until
            </div>
          <div className="px-2 py-2">

            <TextareaAutosize
              rowsMax={10}
              aria-label="minimum height"
              placeholder="Enter Some notes"
              className="text-area"
              style={{
                height: '100px',
                overflow: 'hidden',
                width: '-webkit-fill-available',
                padding: '10px'
              }}
            />
          </div>
          <div className="flex items-center justify-end px-2 py-2">
            <Button
              onClick={this.closeSuspendedDialog}
              variant="contained"
              color="primary"
              size="large" style={{
                marginRight: '10px'
              }}
            >Cancel</Button>

            <Button
              onClick={this.closeSuspendedDialog}
              variant="contained"
              color="primary"
              size="large"
            >Ok</Button>
          </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.recommendation
  };

};
export default connect(mapStateToProps)(RecommendationList);

