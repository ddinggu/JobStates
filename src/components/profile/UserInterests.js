import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import DropdownSearchQuery from 'components/job/post/DropdownSearchQuery';
import * as jobUtils from 'utils/jobutils';
import * as Styled from 'StyledComponents';

export default class UserInterestTech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTech: false,
      editField: false,
      tech: [],
      field: [],
    };

    this.onButtonClick = (part) => {
      const { editTech, editField } = this.state;

      if (part === 'tech') {
        this.setState({
          editTech: !editTech,
        });
      } else if (part === 'field') {
        this.setState({
          editField: !editField,
        });
      }
    };

    this.onHandleDataChange = (key, shouldChange) => (data) => {
      if (!shouldChange) this.setState({ ...this.state, [key]: data });
      else this.setState({ ...this.state, [key]: data, provider: 'user' });
    };

    this.onSubmit = (part) => {
      if (part === 'tech') {
        const data = {
          favoriteTech: this.state.tech,
        };
        props.funcs.submit(data, 'favoritetech');
      } else if (part === 'field') {
        const data = {
          favoriteCategory: this.state.field,
        };
        props.funcs.submit(data, 'favoritecategory');
      }
    };

    this.onDelete = (part) => {
      if (part === 'tech') {
        const data = {
          favoriteTech: [],
        };
        props.funcs.submit(data, 'favoritetech');
      } else if (part === 'field') {
        const data = {
          favoriteCategory: [],
        };
        props.funcs.submit(data, 'favoritecategory');
      }
    };
  }

  render() {
    const { userFavTech, userFavField } = this.props;
    const hireMapping = category => <div className="mapping">{category}</div>;
    return (
      <Styled.Wrapper>
        <Styled.Box column="1" row="1">
          <Styled.Header>Interests</Styled.Header>
          <Styled.Line />
        </Styled.Box>
        <Styled.BoxWithBackground column="2/5" row="1">
          <Styled.Box column="2" row="1">
            <b>관심 산업</b>
          </Styled.Box>
          <Styled.Box column="2" row="2">
            <div style={this.state.editField ? { display: 'none' } : null}>
              {userFavField.length < 1 ? (
                <div>관심 산업을 선택해주세요.</div>
              ) : (
                userFavField.map(hireMapping)
              )}
            </div>
            <div style={!this.state.editField ? { display: 'none' } : null}>
              <DropdownSearchQuery
                stateOptions={jobUtils.selectCategory}
                title="산업 분야"
                handleArrayChange={this.onHandleDataChange('field', true)}
                value={this.state.field}
              />
              <Styled.DivWithMargin>
                <Button
                  compact
                  content="취소"
                  onClick={(e) => {
                    e.preventDefault();
                    this.onButtonClick('field');
                  }}
                />
                <Button
                  compact
                  content="변경"
                  onClick={() => {
                    this.onButtonClick('field');
                    this.onSubmit('field');
                  }}
                />
              </Styled.DivWithMargin>
            </div>
          </Styled.Box>
          <Styled.SpanEditButton className="ui mini basic icon buttons">
            <button
              type="button"
              className="ui button"
              onClick={() => this.onButtonClick('field')}
            >
              <i className="edit icon" />
            </button>
            <button
              type="button"
              className="ui button"
              onClick={() => {
                this.onDelete('field');
              }}
            >
              <i className="delete icon" />
            </button>
          </Styled.SpanEditButton>
          <Styled.BoxWrapper>
            <Styled.Box column="2" row="1">
              <b>관심 기술</b>
            </Styled.Box>
            <Styled.Box column="1/4" row="2">
              <div style={this.state.editTech ? { display: 'none' } : null}>
                {userFavTech.length < 1 ? (
                  <div>관심 기술을 선택해주세요.</div>
                ) : (
                  userFavTech.map(hireMapping)
                )}
              </div>
              <div style={!this.state.editTech ? { display: 'none' } : null}>
                <DropdownSearchQuery
                  stateOptions={jobUtils.selectTech}
                  title="요구 기술 스택"
                  handleArrayChange={this.onHandleDataChange('tech', true)}
                  value={this.state.tech}
                />
                <Styled.DivWithMargin>
                  <Button
                    compact
                    content="취소"
                    onClick={(e) => {
                      e.preventDefault();
                      this.onButtonClick('tech');
                    }}
                  />
                  <Button
                    compact
                    content="변경"
                    onClick={() => {
                      this.onButtonClick('tech');
                      this.onSubmit('tech');
                    }}
                  />
                </Styled.DivWithMargin>
              </div>
            </Styled.Box>
            <Styled.SpanEditButtonList>
              <button
                type="button"
                className="ui button"
                onClick={() => this.onButtonClick('tech')}
              >
                <i className="edit icon" />
              </button>
              <button
                type="button"
                className="ui button"
                onClick={() => {
                  this.onDelete('tech');
                }}
              >
                <i className="delete icon" />
              </button>
            </Styled.SpanEditButtonList>
          </Styled.BoxWrapper>
        </Styled.BoxWithBackground>
      </Styled.Wrapper>
    );
  }
}
