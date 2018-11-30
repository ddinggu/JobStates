import React, { Component } from 'react';
import {
 Button, Container, Grid, Header, List 
} from 'semantic-ui-react';
import DropdownSearchQuery from 'components/job/post/DropdownSearchQuery';
import * as jobUtils from 'utils/jobutils';

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
        props.funcs.submit(this.state.tech);
      } else if (part === 'field') {
        props.funcs.submit(this.state.field);
      }
    };
  }

  render() {
    const { userFavTech, userFavField } = this.props;
    const hireMapping = category => <div className="mapping">{category}</div>;
    console.log('here', this.props);
    return (
      <Container>
        <Grid textAlign="center">
          <Grid.Column width={2} textAlign="left">
            <Header>Interests</Header>
          </Grid.Column>
          <Grid.Column textAlign="left" width={10} className="profilebox read">
            <div>
              <div>
                <Grid.Row>
                  <Grid.Row>
                    <Grid verticalAlign="middle">
                      <Grid.Column width={4} textAlign="left" />
                      <Grid.Column width={8} textAlign="center">
                        <b>관심 산업</b>
                      </Grid.Column>
                      <Grid.Column width={4} textAlign="right">
                        {' '}
                        <span className="ui mini basic icon buttons">
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
                            onClick={() => {}}
                          >
                            <i className="delete icon" />
                          </button>
                        </span>
                      </Grid.Column>
                    </Grid>
                  </Grid.Row>
                  <Grid.Row>
                    <div
                      style={this.state.editField ? { display: 'none' } : null}
                    >
                      <Grid textAlign="center">
                        <Grid.Column>
                          {userFavField.length < 1 ? (
                            <div>관심 산업을 선택해주세요.</div>
                          ) : (
                            userFavField.map(hireMapping)
                          )}
                        </Grid.Column>
                      </Grid>
                    </div>
                    <div
                      style={!this.state.editField ? { display: 'none' } : null}
                    >
                      <Grid textAlign="center">
                        <Grid.Row>
                          <DropdownSearchQuery
                            stateOptions={jobUtils.selectCategory}
                            title="산업 분야"
                            handleArrayChange={this.onHandleDataChange(
                              'field',
                              true,
                            )}
                            value={this.state.field}
                          />
                        </Grid.Row>
                        <Grid.Row>
                          <Button
                            compact
                            content="취소"
                            onClick={(e) => {
                              e.preventDefault();
                              this.onButtonClick('field');
                            }}
                          />
                          <Button compact content="변경" />
                        </Grid.Row>
                      </Grid>
                    </div>
                  </Grid.Row>
                </Grid.Row>
              </div>
              <div>
                <Grid.Row>
                  <Grid.Row>
                    <Grid verticalAlign="middle">
                      <Grid.Column width={4} textAlign="left" />
                      <Grid.Column width={8} textAlign="center">
                        <b>관심 기술</b>
                      </Grid.Column>
                      <Grid.Column width={4} textAlign="right">
                        {' '}
                        <span className="ui mini basic icon buttons">
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
                            onClick={() => {}}
                          >
                            <i className="delete icon" />
                          </button>
                        </span>
                      </Grid.Column>
                    </Grid>
                  </Grid.Row>
                  <div style={this.state.editTech ? { display: 'none' } : null}>
                    <Grid textAlign="center">
                      <Grid.Row>{userFavTech.map(hireMapping)}</Grid.Row>
                      <Grid.Row />
                    </Grid>
                  </div>
                  <div
                    style={!this.state.editTech ? { display: 'none' } : null}
                  >
                    <Grid textAlign="center">
                      <Grid.Row>
                        <DropdownSearchQuery
                          stateOptions={jobUtils.selectTech}
                          title="요구 기술 스택"
                          handleArrayChange={this.onHandleDataChange(
                            'tech',
                            true,
                          )}
                          value={this.state.tech}
                        />
                      </Grid.Row>
                      <Grid.Row>
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
                      </Grid.Row>
                    </Grid>
                  </div>
                </Grid.Row>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={2} textAlign="left" />
        </Grid>
      </Container>
    );
  }
}
