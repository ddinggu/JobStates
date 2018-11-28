import React, { Component } from 'react';
import {
  Form,
  Input,
  TextArea,
  Button,
  Grid,
  Dropdown,
  Image,
  Icon,
  List,
  Header,
  Container,
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as jobUtils from 'utils/jobutils';
import postUserJobData from 'actions/action_jobpost';
import { connect } from 'react-redux';
import DropdownSearchQuery from 'components/job/post/DropdownSearchQuery';
import JobAutoComplete from './JobAutoComplete';

class JobPostForm extends Component {
  state = {
    hireId: null,
    status: null,
    statusDate: null,
    scheduleId: null,
    logoKey: null,
    logo: null,
    brand: null,
    category: [],
    companyUrl: null,
    hireUrl: null,
    intro: null,
    title: null,
    importantInfo: null,
    hireTech: [],
    detailInfo: null,
    hireImage: null,
    salary: null,
    address: null,
    deadLine: new Date(),
    advantage: null,
    disAdvantage: null,
    strategy: null,
    experience: null,
    provider: 'user',
    hireStatus: null,
  };

  componentWillReceiveProps(nextProps) {
    if (
      this.props.filteredAutocompleteData.hireId !==
      nextProps.filteredAutocompleteData.hireId
    )
      this.setState(nextProps.filteredAutocompleteData);
  }

  componentDidUpdate(prevProps, prevState) {
    // const { brand } = this.state;
    // if (prevState.brand !== brand) this.setState({ provider: 'user' });
  }

  onHandleChange = (key, shouldChange) => e => {
    if (!shouldChange)
      this.setState({
        ...this.state,
        [key]: e.target.value ? e.target.value : e.target.innerText,
      });
    else
      this.setState({
        ...this.state,
        [key]: e.target.value ? e.target.value : e.target.innerText,
        provider: 'user',
      });
  };

  onHandleDataChange = (key, shouldChange) => data => {
    if (!shouldChange) this.setState({ ...this.state, [key]: data });
    else this.setState({ ...this.state, [key]: data, provider: 'user' });
  };

  render() {
    const { postJobData, loading, error } = this.props;
    return (
      <Container className="jobdetail">
        <div className="jobPostHeader" style={{ height: '4rem' }}>
          <Button
            floated="right"
            labelPosition="left"
            style={{ marginRight: '4rem' }}
            onClick={() => postJobData(this.state)}
          >
            <Icon name="plus" />
            등록
          </Button>
          <JobAutoComplete onAutoCompleteData={this.onAutoCompleteData} />
        </div>

        <Container className="jobContainer">
          <Grid textAlign="center">
            <Grid.Row>
              <Grid.Column width={2}>
                <Header>회사</Header>
              </Grid.Column>

              <Grid.Column textAlign="left" width={10} className="jobbody">
                <Grid.Row>
                  <Form>
                    <Grid.Row>
                      <div class="ItemsInContainer">
                        <Form.Field>
                          <List bulleted>
                            <List.Item className="jobpostItem">
                              회사명
                            </List.Item>
                            <Input
                              value={this.state.brand}
                              onChange={this.onHandleChange('brand', true)}
                            />
                          </List>
                        </Form.Field>
                      </div>
                    </Grid.Row>
                    <Grid.Row>
                      <div class="ItemsInContainer">
                        <Form.Field>
                          <List bulleted>
                            <List.Item className="jobpostItem">
                              회사 로고
                            </List.Item>
                            <Input control={Input} type="file" />
                          </List>
                        </Form.Field>
                      </div>
                    </Grid.Row>

                    <Grid.Row>
                      <div class="ItemsInContainer">
                        <Form.Field>
                          <List bulleted>
                            <List.Item className="jobpostItem">
                              회사 사이트
                            </List.Item>
                            <Input
                              onChange={this.onHandleChange('companyUrl', true)}
                              value={this.state.companyUrl}
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
                            <List.Item className="jobpostItem">
                              회사 소개
                            </List.Item>
                            <Input
                              onChange={this.onHandleChange('intro', true)}
                              value={this.state.intro}
                            />
                          </List>
                        </Form.Field>
                      </div>
                    </Grid.Row>
                    <Grid.Row />

                    <Grid.Row>
                      <div class="ItemsInContainer">
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            산업 분야
                          </List.Item>
                          <DropdownSearchQuery
                            stateOptions={jobUtils.selectCategory}
                            title={'산업 분야'}
                            handleArrayChange={this.onHandleDataChange(
                              'category',
                              true,
                            )}
                            value={this.state.category}
                          />
                        </List>
                      </div>
                    </Grid.Row>
                  </Form>
                </Grid.Row>
              </Grid.Column>

              <Grid.Column width={2} textAlign="left" />
            </Grid.Row>
          </Grid>

          <Grid textAlign="center">
            <Grid.Column width={2}>
              <Header>채용공고</Header>
            </Grid.Column>

            <Grid.Column textAlign="left" width={10} className="jobbody">
              <Grid.Row>
                <Form className="itemsIn">
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        {' '}
                        <List bulleted>
                          <List.Item className="jobpostItem">채용명</List.Item>
                          <Input
                            onChange={this.onHandleChange('title', true)}
                            value={this.state.title}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Grid>
                        <Grid.Column width={10}>
                          <Form.Field>
                            <List bulleted>
                              <List.Item className="jobpostItem">
                                채용 마감일
                              </List.Item>
                              <DatePicker
                                selected={this.state.deadLine}
                                onChange={this.onHandleDataChange(
                                  'deadLine',
                                  true,
                                )}
                              />
                            </List>
                          </Form.Field>
                        </Grid.Column>
                        <Grid.Column />
                      </Grid>
                    </div>
                  </Grid.Row>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            공고 URL
                          </List.Item>
                          <Input
                            onChange={this.onHandleChange('hireUrl', true)}
                            value={this.state.hireUrl}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            요구 기술스택
                          </List.Item>
                          <DropdownSearchQuery
                            stateOptions={jobUtils.selectTech}
                            title={'요구 기술 스택'}
                            handleArrayChange={this.onHandleDataChange(
                              'hireTech',
                              true,
                            )}
                            value={this.state.hireTech}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            주요 업무
                          </List.Item>
                          <Input
                            onChange={this.onHandleChange(
                              'importantInfo',
                              true,
                            )}
                            value={this.state.importantInfo}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            채용 상세
                          </List.Item>
                          <Input
                            onChange={this.onHandleChange('detailInfo', true)}
                            value={this.state.detailInfo}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">연봉</List.Item>
                          <Input
                            onChange={this.onHandleChange('salary', true)}
                            value={this.state.salary}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            공고 이미지
                          </List.Item>
                          <Input control={Input} type="file" />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            채용 조건
                          </List.Item>
                          <Input
                            onChange={this.onHandleChange('experience', true)}
                            value={this.state.experience}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">지역</List.Item>
                          <Input
                            onChange={this.onHandleChange('address', true)}
                            value={this.state.address}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                </Form>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column width={2} textAlign="left" />
          </Grid>

          <Grid textAlign="center">
            <Grid.Column width={2}>
              <Header>메모</Header>
            </Grid.Column>

            <Grid.Column textAlign="left" width={10} className="jobbody">
              <Grid.Row>
                <Form>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            공고 장점
                          </List.Item>
                          <TextArea
                            control={TextArea}
                            value={this.state.advantage}
                            onChange={this.onHandleChange('advantage', false)}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>

                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            공고 단점
                          </List.Item>
                          <TextArea
                            control={TextArea}
                            value={this.state.disAdvantage}
                            onChange={this.onHandleChange(
                              'disAdvantage',
                              false,
                            )}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            필요 취업 전략
                          </List.Item>
                          <TextArea
                            control={TextArea}
                            value={this.state.strategy}
                            onChange={this.onHandleChange('strategy', false)}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                </Form>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={2} textAlign="left" />
          </Grid>
        </Container>
      </Container>

      // <div>
      //   <Form>

      //     {/* <div style={{ border: '1px solid gray', marginBottom: '1rem' }} /> */}
      //     <Grid>
      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>채용공고 상황</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <span>
      //             현재 이 채용공고는{' '}
      //             <Dropdown
      //               inline
      //               options={jobUtils.current}
      //               onChange={this.onHandleChange('status', false)}
      //               value={this.state.status}
      //             />
      //           </span>
      //         </Grid.Column>
      //       </Grid.Row>

      //       {/* 전형 일자는 채용 상황이 서류대기, 면접대기인 경우에만 설정!! */}
      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>전형 일자</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <DatePicker
      //             selected={this.state.statusDate}
      //             onChange={this.onHandleDataChange('statusDate', false)}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>회사</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <Form.Field
      //             id="form-input-control-company-name"
      //             control={Input}
      //             label="회사명"
      //             placeholder="회사명"
      //             onChange={this.onHandleChange('brand', true)}
      //             value={this.state.brand}
      //           />
      //           <Form.Field
      //             id="form-input-control-company-logo"
      //             label="회사 로고"
      //             placeholder="회사 로고"
      //           />
      //           <input type="file" />
      //           <Image src={this.state.logo} size="small" />
      //           <Form.Field
      //             id="form-input-control-company-url"
      //             control={Input}
      //             label="회사 사이트"
      //             placeholder="회사 사이트"
      //             onChange={this.onHandleChange('companyUrl', true)}
      //             value={this.state.companyUrl}
      //           />
      //           <Form.Field
      //             id="form-input-control-company-url"
      //             control={TextArea}
      //             label="회사 소개"
      //             placeholder="회사소개"
      //             onChange={this.onHandleChange('intro', true)}
      //             value={this.state.intro}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>산업 분야</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           {/* {jobUtils.selectCategory.map((val, idx) => (
      //             <Button
      //               size="mini"
      //               style={{ marginBottom: '0.4rem' }}
      //               onClick={e => {
      //                 this.onHandleArrayChange('category')(e);
      //                 e.target.classList.toggle('blue');
      //               }}
      //             >
      //               {val}
      //             </Button>
      //           ))} */}
      //           <DropdownSearchQuery
      //             stateOptions={jobUtils.selectCategory}
      //             title={'산업 분야'}
      //             handleArrayChange={this.onHandleDataChange('category', true)}
      //             value={this.state.category}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>채용명</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <Form.Field
      //             id="form-input-control-company-name"
      //             control={Input}
      //             placeholder="채용명"
      //             onChange={this.onHandleChange('title', true)}
      //             value={this.state.title}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>공고 URL</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <Form.Field
      //             id="form-input-control-company-name"
      //             control={Input}
      //             placeholder="공고 URL"
      //             onChange={this.onHandleChange('hireUrl', true)}
      //             value={this.state.hireUrl}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>요구 기술 스택</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>

      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           {/* {jobUtils.selectTech.map((val, idx) => (
      //             <Button
      //               size="mini"
      //               style={{ marginBottom: '0.4rem' }}
      //               onClick={e => {
      //                 this.onHandleArrayChange('hireTech')(e);
      //                 e.target.classList.toggle('blue');
      //               }}
      //             >
      //               {val}
      //             </Button>
      //           ))} */}
      //           <DropdownSearchQuery
      //             stateOptions={jobUtils.selectTech}
      //             title={'요구 기술 스택'}
      //             handleArrayChange={this.onHandleDataChange('hireTech', true)}
      //             value={this.state.hireTech}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>주요 업무</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <TextArea
      //             style={{ minHeight: 150 }}
      //             onChange={this.onHandleChange('importantInfo', true)}
      //             value={this.state.importantInfo}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>채용 상세</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <TextArea
      //             style={{ minHeight: 230 }}
      //             onChange={this.onHandleChange('detailInfo', true)}
      //             value={this.state.detailInfo}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>공고 이미지</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <input type="file" />
      //           <Image src={this.state.hireImage} size="medium" />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>연봉</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <Input
      //             placeholder="연봉"
      //             onChange={this.onHandleChange('salary', true)}
      //             value={this.state.salary}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>채용조건</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <Input
      //             placeholder="채용조건"
      //             onChange={this.onHandleChange('experience', true)}
      //             value={this.state.experience}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>채용 마감일</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <DatePicker
      //             selected={this.state.deadLine}
      //             onChange={this.onHandleDataChange('deadLine', true)}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>지역</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <Input
      //             fluid
      //             placeholder="지역"
      //             onChange={this.onHandleChange('address', true)}
      //             value={this.state.address}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>내가 생각하는 이 공고의 장점</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <TextArea
      //             style={{ minHeight: 100 }}
      //             onChange={this.onHandleChange('advantage', false)}
      //             value={this.state.advantage}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>내가 생각하는 이 공고의 단점</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <TextArea
      //             style={{ minHeight: 100 }}
      //             onChange={this.onHandleChange('disAdvantage', false)}
      //             value={this.state.disAdvantage}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>

      //       <Grid.Row>
      //         <Grid.Column width={3} style={{ marginLeft: '2rem' }}>
      //           <div>해당 공고만의 취업 전략</div>
      //           <div style={{ border: '1px solid' }} />
      //         </Grid.Column>
      //         <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
      //           <TextArea
      //             style={{ minHeight: 100 }}
      //             onChange={this.onHandleChange('strategy', false)}
      //             value={this.state.strategy}
      //           />
      //         </Grid.Column>
      //       </Grid.Row>
      //     </Grid>
      //   </Form>
      // </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postJobData: data => dispatch(postUserJobData(data)),
});

const mapStateToProps = state => ({
  loading: state.job.loading,
  error: state.job.error,
  filteredAutocompleteData: state.job.filteredAutocompleteData,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobPostForm);
