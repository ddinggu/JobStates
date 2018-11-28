import React, { Component } from 'react';
import { Grid, Dropdown, Button } from 'semantic-ui-react';
import * as jobUtils from 'utils/jobutils';
import DatePicker from 'react-datepicker';

class JobSchedule extends Component {
  state = {
    edit: false,
    scheduleId: this.props.scheduleId || null,
    status: this.props.status || null,
    statusDate: this.props.statusDate || null,
  };

  onEditing = () => this.setState({ edit: !this.state.edit });

  onHandleChange = key => e =>
    this.setState({
      ...this.state,
      [key]: e.target.value ? e.target.value : e.target.innerText,
    });

  onDateChange = key => date => this.setState({ ...this.state, [key]: date });

  render() {
    const { edit, scheduleId, status, statusDate } = this.state;
    const { onSubmitEditData } = this.props;

    return (
      <>
        {!edit ? (
          <>
            <Grid.Row reversed>
              <Button
                basic
                icon="edit"
                floated="right"
                onClick={this.onEditing}
              />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용공고 상황</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={9} style={{ marginLeft: '5rem' }}>
                현재 이 채용공고는 <b>{this.props.status}</b>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>전형 일자</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={9} style={{ marginLeft: '5rem' }}>
                {this.props.statusDate}
              </Grid.Column>
            </Grid.Row>{' '}
          </>
        ) : (
          <>
            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용공고 상황</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={9} style={{ marginLeft: '5rem' }}>
                <span>
                  현재 이 채용공고는{' '}
                  <Dropdown
                    inline
                    options={jobUtils.current}
                    onChange={this.onHandleChange('status')}
                    value={status}
                  />
                </span>
              </Grid.Column>
            </Grid.Row>
            {/* 전형 일자는 채용 상황이 서류대기, 면접대기인 경우에만 설정!! */}
            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>전형 일자</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={9} style={{ marginLeft: '5rem' }}>
                <DatePicker
                  selected={typeof statusDate === 'string' ? null : new Date()}
                  onChange={this.onDateChange('statusDate')}
                />
              </Grid.Column>
            </Grid.Row>
            <Button
              compact
              onClick={() => {
                onSubmitEditData(this.state, 'schedule');
                this.onEditing();
              }}
            >
              추가
            </Button>
            <Button compact onClick={this.onEditing}>
              취소
            </Button>
          </>
        )}
      </>
    );
  }
}

export default JobSchedule;
