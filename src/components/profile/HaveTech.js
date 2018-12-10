import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import DropdownSearchQuery from 'components/job/post/DropdownSearchQuery';
import * as jobUtils from 'utils/jobutils';
import * as Styled from 'StyledComponents';

export default class UserInterestTech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      tech: [],
    };

    this.onButtonClick = () => {
      const { edit } = this.state;

      this.setState({
        edit: !edit,
      });
    };

    this.onHandleDataChange = (key, shouldChange) => data => {
      if (!shouldChange) this.setState({ ...this.state, [key]: data });
      else this.setState({ ...this.state, [key]: data, provider: 'user' });
    };

    this.onSubmit = () => {
      const data = {
        haveTech: this.state.tech,
      };
      props.funcs.submit(data, 'havetech');
    };

    this.onDelete = () => {
      const data = {
        haveTech: [],
      };
      props.funcs.submit(data, 'havetech');
    };
  }

  render() {
    const { haveTech } = this.props;
    const hireMapping = category => <div className="mapping">{category}</div>;

    return (
      <Styled.Wrapper>
        <Styled.Box column="1" row="1">
          <Styled.Header>Tech Stacks</Styled.Header>
          <Styled.Line />
        </Styled.Box>
        <Styled.BoxWithBackground column="2/5" row="1">
          <Styled.Box column="2" row="1">
            <b>보유 기술</b>
          </Styled.Box>{' '}
          <Styled.Box column="1/4" row="2">
            <div style={this.state.edit ? { display: 'none' } : null}>
              {haveTech.length < 1 ? (
                <div>보유 기술을 선택해주세요.</div>
              ) : (
                haveTech.map(hireMapping)
              )}
            </div>
            <div style={!this.state.edit ? { display: 'none' } : null}>
              <DropdownSearchQuery
                stateOptions={jobUtils.selectTech}
                title="기술 분야"
                handleArrayChange={this.onHandleDataChange('tech', true)}
                value={this.state.tech}
              />
              <Styled.DivWithMargin>
                <Button
                  compact
                  content="취소"
                  onClick={e => {
                    e.preventDefault();
                    this.onButtonClick();
                  }}
                />
                <Button
                  compact
                  content="변경"
                  onClick={() => {
                    this.onButtonClick();
                    this.onSubmit();
                  }}
                />
              </Styled.DivWithMargin>
            </div>
          </Styled.Box>
          <Styled.SpanEditButton className="ui mini basic icon buttons ">
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
        </Styled.BoxWithBackground>
      </Styled.Wrapper>
    );
  }
}
