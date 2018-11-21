import React, { Component } from 'react';
import {
  Form,
  Input,
  TextArea,
  Button,
  Grid,
  Dropdown,
  Image,
  Checkbox,
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as jobUtils from 'utils/jobutils';
import NewPortal from './NewPortal';
// import { ClipLoader } from 'react-spinners';
import postUserJobData from 'actions/action_jobpost';
import { connect } from 'react-redux';
import DropdownSearchQuery from './DropdownSearchQuery';

class JobPostForm extends Component {
  state = {
    hireId: null,
    status: '',
    statusDate: new Date(),
    scheduleId: null,
    logo: '',
    brand: '',
    category: [],
    companyUrl: '',
    hireUrl: '',
    intro: '',
    title: '',
    importantInfo: '',
    hireTech: [],
    detailInfo: '',
    hireImage: '',
    salary: '',
    address: '',
    deadLine: new Date(),
    advantage: '',
    disadvantage: '',
    strategy: '',
    hireType: '',
    provider: 'user',
    showWindowPortal: false,
  };

  onHandleChange = key => e =>
    this.setState({
      ...this.state,
      [key]: e.target.value ? e.target.value : e.target.innerText,
    });

  onDateChange = key => date => this.setState({ ...this.state, [key]: date });

  toggleWindowPortal = () =>
    this.setState(state => ({
      ...this.state,
      showWindowPortal: !state.showWindowPortal,
    }));

  onHandleGetArray = key => data =>
    this.setState({
      ...this.state,
      [key]: data,
    });

  //   onHandleArrayChange = key => e => {
  //     const filteredState = jobUtils.filterToJobArray(
  //       this.state[key],
  //       e.target.innerText,
  //     );

  //     this.setState({
  //       ...this.state,
  //       [key]: filteredState,
  //     });
  //   };

  render() {
    const { postJobData, loading, error } = this.props;
    return (
      <div style={{ marginTop: '5rem' }}>
        {/* {loading ? <ClipLoader size={150} /> : null} */}
        {/* 포탈 띄우기 */}
        {this.state.showWindowPortal && <NewPortal />}

        <Form>
          <div className="jobPostHeader" style={{ height: '4rem' }}>
            <Button
              floated="right"
              color="green"
              style={{ marginRight: '4rem' }}
              onClick={() => postJobData(this.state)}
            >
              등록
            </Button>
            <Button
              floated="right"
              color="blue"
              style={{ marginRight: '1.5rem' }}
              onClick={this.toggleWindowPortal}
            >
              자동완성
            </Button>
          </div>
          <div style={{ border: '1px solid gray', marginBottom: '1rem' }} />
          <Grid>
            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>채용공고 상황</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <span>
                  현재 이 채용공고는{' '}
                  <Dropdown
                    inline
                    options={jobUtils.current}
                    onChange={this.onHandleChange('status')}
                  />
                </span>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>회사</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Form.Field
                  id="form-input-control-company-name"
                  control={Input}
                  label="회사명"
                  placeholder="회사명"
                  onChange={this.onHandleChange('brand')}
                />
                <Form.Field
                  id="form-input-control-company-logo"
                  label="회사 로고"
                  placeholder="회사 로고"
                />
                <input type="file" />
                <Image src={this.state.logo} size="small" />
                <Form.Field
                  id="form-input-control-company-url"
                  control={Input}
                  label="회사 사이트"
                  placeholder="회사사이트"
                  onChange={this.onHandleChange('companyUrl')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>산업 분야</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {/* {jobUtils.selectCategory.map((val, idx) => (
                  <Button
                    size="mini"
                    style={{ marginBottom: '0.4rem' }}
                    onClick={e => {
                      this.onHandleArrayChange('category')(e);
                      e.target.classList.toggle('blue');
                    }}
                  >
                    {val}
                  </Button>
                ))} */}
                <DropdownSearchQuery
                  stateOptions={jobUtils.selectCategory}
                  title={'산업 분야'}
                  handleArrayChange={this.onHandleGetArray('category')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>채용명</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Form.Field
                  id="form-input-control-company-name"
                  control={Input}
                  placeholder="채용명"
                  onChange={this.onHandleChange('title')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>공고 URL</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Form.Field
                  id="form-input-control-company-name"
                  control={Input}
                  placeholder="공고 URL"
                  onChange={this.onHandleChange('hireUrl')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>요구 기술 스택</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>

              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {/* {jobUtils.selectTech.map((val, idx) => (
                  <Button
                    size="mini"
                    style={{ marginBottom: '0.4rem' }}
                    onClick={e => {
                      this.onHandleArrayChange('hireTech')(e);
                      e.target.classList.toggle('blue');
                    }}
                  >
                    {val}
                  </Button>
                ))} */}
                <DropdownSearchQuery
                  stateOptions={jobUtils.selectTech}
                  title={'요구 기술 스택'}
                  handleArrayChange={this.onHandleGetArray('hireTech')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>주요 업무</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea
                  style={{ minHeight: 150 }}
                  onChange={this.onHandleChange('importantInfo')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>채용 상세</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea
                  style={{ minHeight: 230 }}
                  onChange={this.onHandleChange('detailInfo')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>공고 이미지</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <input type="file" />
                <Image src={this.state.hireImage} size="medium" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>연봉</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Input
                  placeholder="연봉"
                  onChange={this.onHandleChange('salary')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>채용조건</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Checkbox
                  radio
                  label="인턴"
                  name="checkboxRadioGroup"
                  value="인턴"
                  checked={this.state.hireType === '인턴'}
                  style={{ marginRight: '1rem' }}
                  onChange={this.onHandleChange('hireType')}
                />{' '}
                <Checkbox
                  radio
                  label="신입"
                  name="checkboxRadioGroup"
                  value="신입"
                  checked={this.state.hireType === '신입'}
                  style={{ marginRight: '1rem' }}
                  onChange={this.onHandleChange('hireType')}
                />{' '}
                <Checkbox
                  radio
                  label="경력"
                  name="checkboxRadioGroup"
                  value="경력"
                  checked={this.state.hireType === '경력'}
                  style={{ marginRight: '1rem' }}
                  onChange={this.onHandleChange('hireType')}
                />{' '}
              </Grid.Column>
            </Grid.Row>

            {/* 전형 일자는 채용 상황이 서류대기, 면접대기인 경우에만 설정!! */}
            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>전형 일자</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <DatePicker
                  selected={this.state.statusDate}
                  onChange={this.onDateChange('statusDate')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>채용 마감일</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <DatePicker
                  selected={this.state.deadLine}
                  onChange={this.onDateChange('deadLine')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>지역</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Input
                  placeholder="지역"
                  onChange={this.onHandleChange('address')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>내가 생각하는 이 공고의 장점</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea
                  style={{ minHeight: 100 }}
                  onChange={this.onHandleChange('advantage')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>내가 생각하는 이 공고의 단점</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea
                  style={{ minHeight: 100 }}
                  onChange={this.onHandleChange('disadvantage')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>해당 공고만의 취업 전략</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea
                  style={{ minHeight: 100 }}
                  onChange={this.onHandleChange('strategy')}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postJobData: data => dispatch(postUserJobData(data)),
});

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobPostForm);
