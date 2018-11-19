import React, { Component } from 'react';
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Grid,
  Dropdown,
  Image,
  Checkbox,
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as jobutils from 'utils/jobutils';

class JobPostForm extends Component {
  state = {
    status: '',
    statusDate: new Date(),
    logo: [],
    brand: '',
    category: [],
    url: '',
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
  };

  _handleChange = (e, { value }) => this.setState({ hireType: value });
  _dateChange = key => date => this.setState({ [key]: date });

  render() {
    return (
      <div style={{ marginTop: '5rem' }}>
        <Form>
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
                    options={jobutils.current}
                    defaultValue={jobutils.current[0].value}
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
                />
                <Form.Field
                  id="form-input-control-company-logo"
                  label="회사 로고"
                  placeholder="회사 로고"
                />
                <input type="file" />
                <Form.Field
                  id="form-input-control-company-url"
                  control={Input}
                  label="회사 사이트"
                  placeholder="회사사이트"
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>산업 분야</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {jobutils.selectCategory.map((val, idx) => {
                  return (
                    <Button size="mini" style={{ marginBottom: '0.4rem' }}>
                      {val}
                    </Button>
                  );
                })}
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
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>요구 기술 스택</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {jobutils.selectTech.map((val, idx) => {
                  return (
                    <Button size="mini" style={{ marginBottom: '0.4rem' }}>
                      {val}
                    </Button>
                  );
                })}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>주요 업무</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea placeholder="주요 업무" style={{ minHeight: 150 }}>
                  {' '}
                </TextArea>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>채용 상세</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea placeholder="채용 상세" style={{ minHeight: 230 }}>
                  {' '}
                </TextArea>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>공고 이미지</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Image src={this.state.hireImage} size="medium" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>연봉</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Input placeholder="연봉" />
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
                  checked={this.state.value === '인턴'}
                  onChange={this._handleChange}
                />{' '}
                <Checkbox
                  radio
                  label="신입"
                  name="checkboxRadioGroup"
                  value="신입"
                  checked={this.state.value === '신입'}
                  onChange={this._handleChange}
                />{' '}
                <Checkbox
                  radio
                  label="경력"
                  name="checkboxRadioGroup"
                  value="경력"
                  checked={this.state.value === '경력'}
                  onChange={this._handleChange}
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
                  onChange={this._dateChange('statusDate')}
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
                  onChange={this._dateChange('deadLine')}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>지역</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <Input placeholder="지역" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>내가 생각하는 이 공고의 장점</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea placeholder="장점" style={{ minHeight: 100 }}>
                  {' '}
                </TextArea>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>내가 생각하는 이 공고의 단점</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea placeholder="단점" style={{ minHeight: 100 }}>
                  {' '}
                </TextArea>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
                <div>해당 공고만의 취업 전략</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea placeholder="전략" style={{ minHeight: 100 }}>
                  {' '}
                </TextArea>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
}

export default JobPostForm;
