// The ADD button
import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import styled, { keyframes } from "styled-components";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCardThunk } from "../../_redux/_actions/listsActions";

// styled component for Button
const StyledButton = styled(Button)`
  && {
    color: white;
    background: #5aac44;
    &&:hover {
      background: blue;
    }
  }
`;

// styles for form
const Container = styled.div`
  width: 284px;
  margin-bottom: 8px;
`;

const StyledCard = styled(Card)`
  min-height: 85px;
  padding: 6px 8px 2px;
`;

const StyledTextArea = styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const pulse = keyframes`
from {
  transform:rotate(0deg);
}
to {
  transform:rotate(360deg);
}`;

const StyledIcon = styled(Icon)`
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    animation-name: ${pulse};
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

class RecommendationActionButton extends Component {
  // state to manage form
  state = {
    formOpen: false,
    text: ""
  };

  // method to open form
  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };
  // track input value changes
  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddList = () => {
    const dispatch = this.props.dispatch;
    const text = this.state.text;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addList(text));
    }

    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const text = this.state.text;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addCardThunk(listID, text));
    }

    return;
  };

  // subrender method / babel syntax using = /
  renderAddButton = () => {
    // decide what button type we're gonna render - pass List prop if list
    const list = this.props.list;

    // if have list in props received than true
    const buttonText = list ? "ADD NEW LiST" : "Add new card";
    const buttonTextOpacity = list ? 1 : 0.7;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.2)" : "inherit";

    const OpenFormButton = styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 3px;
      height: 36px;
      margin-left: 8px;
      width: 300px;
      padding-left: 10px;
      padding-right: 10px;
      opacity: ${buttonTextOpacity};
      color: ${buttonTextColor};
      background-color: ${buttonTextBackground};
    `;

    return (
      <OpenFormButton onClick={this.openForm}>
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </OpenFormButton>
    );
  };

  // another subrender method
  renderForm = () => {
    // check if it's for list
    const list = this.props.list;

    const placeholder = list ? "Enter list name" : "Enter card name";

    const buttonTitle = list ? "Add List" : "Add Card";

    // return html to render
    return (
      <Container>
        <StyledCard>
          <StyledTextArea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        </StyledCard>
        <StyledButton
          variant="contained"
          onMouseDown={list ? this.handleAddList : this.handleAddCard}
        // onMouseDown instead of onClick to prevent onBlur interception
        >
          {buttonTitle}
        </StyledButton>
        <ButtonContainer>
          <StyledIcon onClick={this.closeForm}>close</StyledIcon>
        </ButtonContainer>
      </Container>
    );
  };

  // if form open then render form else render button (using render alike methods)
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default connect()(RecommendationActionButton);
