import React, { Component } from 'react';
import {
 Button, Container, Grid, Header 
} from 'semantic-ui-react';
import DropdownSearchQuery from 'components/job/post/DropdownSearchQuery';
import * as jobUtils from 'utils/jobutils';

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

    this.onHandleDataChange = (key, shouldChange) => (data) => {
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
      <Container>
        <Grid textAlign="center">
          <Grid.Column width={2} textAlign="left">
            <Header>Tech Stacks</Header>
          </Grid.Column>
          <Grid.Column textAlign="left" width={10} className="profilebox read">
            <div>
              <div>
                <Grid.Row>
                  <Grid.Row>
                    <Grid verticalAlign="middle">
                      <Grid.Column width={4} textAlign="left" />
                      <Grid.Column width={8} textAlign="center">
                        <b>보유 기술</b>
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
                            onClick={() => {
                              this.onDelete('field');
                            }}
                          >
                            <i className="delete icon" />
                          </button>
                        </span>
                      </Grid.Column>
                    </Grid>
                  </Grid.Row>
                  <Grid.Row>
                    <div style={this.state.edit ? { display: 'none' } : null}>
                      <Grid textAlign="center">
                        <Grid.Column>
                          {haveTech.length < 1 ? (
                            <div>보유 기술을 선택해주세요.</div>
                          ) : (
                            haveTech.map(hireMapping)
                          )}
                        </Grid.Column>
                      </Grid>
                    </div>
                    <div style={!this.state.edit ? { display: 'none' } : null}>
                      <Grid textAlign="center">
                        <Grid.Row>
                          <DropdownSearchQuery
                            stateOptions={jobUtils.selectTech}
                            title="기술 분야"
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
                        </Grid.Row>
                      </Grid>
                    </div>
                  </Grid.Row>
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
