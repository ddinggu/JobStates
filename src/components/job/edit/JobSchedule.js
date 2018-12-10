import React, { Component } from 'react';
import {
  Grid,
  Dropdown,
  Button,
  Container,
  Header,
  List,
  Form,
} from 'semantic-ui-react';
import * as jobUtils from 'utils/jobutils';
import DatePicker from 'react-datepicker';
import * as Styled from 'StyledComponents';

class JobSchedule extends Component {
  state = {
    edit: false,
    scheduleId: this.props.scheduleId,
    status: this.props.status,
    statusDate: this.props.statusDate,
  };

  onEditing = () => this.setState({ edit: !this.state.edit });

  onHandleChange = key => e =>
    this.setState({
      ...this.state,
      [key]: e.target.value ? e.target.value : e.target.innerText,
    });

  onDateChange = key => date => this.setState({ ...this.state, [key]: date });

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.edit !== nextState.edit) {
      return true;
    }
    if (this.state.status !== nextState.status) {
      return true;
    }
    if (this.state.statusDate !== nextState.statusDate) {
      return true;
    }
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      return true;
    }
    return false;
  }

  render() {
    const { edit, status, statusDate } = this.state;
    const { onSubmitEditData } = this.props;

    return (
      <Container className="jobContainer">
        <Grid textAlign="center">
          <Grid.Column width={2}>
            {/* <Header>현재 상황</Header> */}
            <Styled.Box>
              <Styled.Header>현재 상황</Styled.Header>
              <Styled.Line />
            </Styled.Box>
          </Grid.Column>
          {!edit ? (
            <Grid.Column textAlign="left" width={10} className="jobbody">
              <div className="ItemsInContainer">
                <Grid padded="vertically horizontally">
                  <Grid.Row>
                    <Grid.Column width={4} />
                    <Grid.Column textAlign="center" width={8}>
                      <Grid.Row>
                        <Header>현재 이 공고는 {this.props.status}</Header>
                      </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={4} />
                  </Grid.Row>
                  <Grid.Row textAlign="left">
                    <List bulleted>
                      <List.Item className="jobpostItem">전형 일자</List.Item>
                      {!this.props.statusDate
                        ? '등록되지 않음'
                        : this.props.statusDate.substr(0, 10)}
                    </List>
                  </Grid.Row>
                </Grid>
              </div>
            </Grid.Column>
          ) : (
            <Grid.Column textAlign="left" width={10} className="jobbody">
              <Grid.Row>
                <div class="ItemsInContainer">
                  <Form.Field>
                    <List bulleted>
                      <List.Item className="jobpostItem">
                        채용공고 상황
                      </List.Item>
                      현재 이 공고는{' '}
                      <Dropdown
                        inline
                        options={jobUtils.current}
                        onChange={this.onHandleChange('status')}
                        value={status}
                      />
                    </List>
                  </Form.Field>
                </div>
              </Grid.Row>
              <Grid.Row />

              <Grid.Row>
                <div class="ItemsInContainer">
                  <Form.Field>
                    <List bulleted>
                      <List.Item className="jobpostItem">전형일자</List.Item>
                      <DatePicker
                        className="datePicker"
                        selected={new Date(statusDate)}
                        onChange={this.onDateChange('statusDate')}
                      />
                    </List>
                  </Form.Field>
                </div>
              </Grid.Row>
              <Grid.Row />

              <Grid textAlign="center">
                <Grid.Row>
                  <div class="ItemsInContainer">
                    <Button compact onClick={this.onEditing}>
                      취소
                    </Button>
                    <Button
                      compact
                      onClick={() => {
                        onSubmitEditData(this.state, 'write');
                        this.onEditing();
                      }}
                    >
                      변경
                    </Button>
                  </div>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          )}
          <Grid.Column width={2} textAlign="left">
            <Button basic icon="edit" onClick={this.onEditing} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default JobSchedule;
