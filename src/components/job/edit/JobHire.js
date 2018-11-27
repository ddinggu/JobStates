import React, { Component } from 'react';
import { Grid, Button, Image, Form, Input, TextArea } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import * as jobUtils from 'utils/jobutils';
import DropdownSearchQuery from 'components/job/post/DropdownSearchQuery';

class JobCompany extends Component {
  state = {
    edit: false,
    hireId: this.props.hireId,
    title: this.props.title,
    hireTech: this.props.hireTech,
    hireUrl: this.props.hireUrl,
    importantInfo: this.props.importantInfo,
    detailInfo: this.props.detailInfo,
    hireImage: this.props.hireImage,
    salary: this.props.salary,
    deadLine: this.props.deadLine,
    address: this.props.address,
    provider: this.props.provider,
    exprience: this.props.exprience,
  };

  onEditing = () => this.setState({ edit: !this.state.edit });

  onHandleChange = key => e =>
    this.setState({
      ...this.state,
      [key]: e.target.value ? e.target.value : e.target.innerText,
    });

  onDateChange = key => date => this.setState({ ...this.state, [key]: date });

  onHandleGetArray = key => data =>
    this.setState({
      ...this.state,
      [key]: data,
    });

  componentWillReceiveProps(nextProps) {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const {
      edit,
      hireId,
      title,
      hireTech,
      hireUrl,
      importantInfo,
      detailInfo,
      hireImage,
      salary,
      deadLine,
      address,
      provider,
      exprience,
    } = this.state;
    const { onSubmitEditData } = this.props;
    const hireMapping = category => <div className="mapping">{category}</div>;

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
                <div>채용명</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {this.props.title}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>요구 기술 스텍</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {hireTech.map(hireMapping)}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용링크</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <div>
                  <a href={this.props.hireUrl}>{this.props.hireUrl}</a>{' '}
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>주요 업무</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {this.props.importantInfo}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용상세</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {this.props.detailInfo}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>공고 이미지</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <img src={this.props.hireImage} alt="" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>연봉</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {this.props.salary}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용조건</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                test
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>지원 마감일</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {this.props.deadLine}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>지역</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {this.props.address}
              </Grid.Column>
            </Grid.Row>
          </>
        ) : (
          <>
            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용명</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Form.Field
                  id="form-input-control-company-name"
                  control={Input}
                  placeholder="채용명"
                  onChange={this.onHandleChange('title')}
                  value={title}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>공고 URL</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Form.Field
                  id="form-input-control-company-name"
                  control={Input}
                  placeholder="공고 URL"
                  onChange={this.onHandleChange('hireUrl')}
                  value={hireUrl}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>요구 기술 스택</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>

              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <DropdownSearchQuery
                  stateOptions={jobUtils.selectTech}
                  title={'요구 기술 스택'}
                  handleArrayChange={this.onHandleGetArray('hireTech')}
                  value={hireTech}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>주요 업무</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea
                  style={{ minHeight: 150 }}
                  onChange={this.onHandleChange('importantInfo')}
                  value={importantInfo}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용 상세</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea
                  style={{ minHeight: 230 }}
                  onChange={this.onHandleChange('detailInfo')}
                  value={detailInfo}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>공고 이미지</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <input type="file" />
                <Image src={hireImage} size="medium" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>연봉</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Input
                  placeholder="연봉"
                  onChange={this.onHandleChange('salary')}
                  value={salary}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용조건</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Input
                  placeholder="채용조건"
                  onChange={this.onHandleChange('exprience')}
                  value={exprience}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용 마감일</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <DatePicker
                  selected={typeof statusDate === 'string' ? null : new Date()}
                  onChange={this.onDateChange('deadLine')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>지역</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Input
                  fluid
                  placeholder="지역"
                  onChange={this.onHandleChange('address')}
                  value={address}
                />
              </Grid.Column>
            </Grid.Row>

            <Button
              compact
              onClick={() => {
                onSubmitEditData(this.state, 'hire');
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

export default JobCompany;
