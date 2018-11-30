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
import * as jobUtils from 'utils/jobutils';
import postUserJobData from 'actions/action_jobpost';
import { connect } from 'react-redux';
import DropdownSearchQuery from 'components/job/post/DropdownSearchQuery';
import JobAutoComplete from './JobAutoComplete';
import GoogleVisionPortal from './GoogleVisionPortal';
import CommonLoading from 'components/common/Loading';
import { jobPostImage } from 'api/api';
import './JobPostForm.css';

class JobPostForm extends Component {
  state = {
    hireId: null,
    status: null,
    statusDate: new Date(),
    scheduleId: null,
    logoKey: null,
    logo: null,
    logoKey: null,
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
    hireImageKey: null,
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

  _sendImageForLogo = async () => {
    let imageForm = new FormData();
    imageForm.append('img', document.getElementById('imagefileLogo').files[0]);
    try {
      let data = await jobPostImage(imageForm);
      this.setState({ logo: data.data.url, logoKey: data.data.key });
    } catch (err) {
      console.log(err);
    }
  };

  _sendImageForHireImage = async () => {
    let imageForm = new FormData();
    imageForm.append('img', document.getElementById('imagefileHire').files[0]);
    try {
      let data = await jobPostImage(imageForm);
      this.setState({ hireImage: data.data.url, hireImageKey: data.data.key });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { postJobData, loading, error } = this.props;
    return (
      <>
        {/* {loading ? <CommonLoading /> : null} */}
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
            <GoogleVisionPortal />
          </div>

          <Container className="jobContainer">
            <Grid textAlign="center">
              <Grid.Column width={2}>
                <Header>현재 상황</Header>
              </Grid.Column>
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
                          onChange={this.onHandleChange('status', false)}
                          value={this.state.status}
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
                          selected={this.state.statusDate}
                          onChange={this.onHandleDataChange(
                            'statusDate',
                            false,
                          )}
                        />
                      </List>
                    </Form.Field>
                  </div>
                </Grid.Row>
                <Grid.Row />
              </Grid.Column>

              <Grid.Column width={2} textAlign="left" />
            </Grid>

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
                              <div>
                                <Image
                                  src={this.state.logo}
                                  alt=""
                                  style={{
                                    maxWidth: '15%',
                                    borderRadius: '50%',
                                  }}
                                />

                                <div className="upload-btn-wrapper">
                                  <button className="btn">등록</button>
                                  <input
                                    type="file"
                                    name="file"
                                    id="imagefileLogo"
                                    onChange={() => {
                                      this._sendImageForLogo();
                                    }}
                                  />
                                </div>
                              </div>
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
                                onChange={this.onHandleChange(
                                  'companyUrl',
                                  true,
                                )}
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
                            <List.Item className="jobpostItem">
                              채용명
                            </List.Item>
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
                            <TextArea
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
                            <TextArea
                              onChange={this.onHandleChange('detailInfo', true)}
                              value={this.state.detailInfo}
                              style={{ minHeight: 200 }}
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
                            {/* <Input
                              control={Input}
                              type="file"
                              name="file"
                              id="imagefileHire"
                              onChange={() => {
                                this._sendImageForHireImage();
                              }}
                            /> */}
                            <div className="upload-btn-wrapper">
                              <button className="btn">등록</button>
                              <input
                                type="file"
                                name="file"
                                id="imagefileHire"
                                onChange={() => {
                                  this._sendImageForHireImage();
                                }}
                              />
                            </div>
                            <Image src={this.state.hireImage} />
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
      </>
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
