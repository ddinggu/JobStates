import React, { Component } from 'react';
import {
  Grid,
  Button,
  Image,
  Form,
  Input,
  Container,
  Header,
  List,
  TextArea,
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import * as jobUtils from 'utils/jobutils';
import DropdownSearchQuery from 'components/job/post/DropdownSearchQuery';
import { jobPostImage } from 'api/api';
import * as Styled from 'StyledComponents';

class JobCompany extends Component {
  state = {
    edit: false,
    hireId: this.props.hireId || null,
    title: this.props.title || null,
    hireTech: this.props.hireTech || null,
    hireUrl: this.props.hireUrl || null,
    importantInfo: this.props.importantInfo || null,
    detailInfo: this.props.detailInfo || null,
    hireImage: this.props.hireImage || null,
    hireImageKey: this.props.hireImageKey || null,
    salary: this.props.salary || null,
    deadLine: this.props.deadLine || null,
    address: this.props.address || null,
    provider: this.props.provider || null,
    experience: this.props.experience || null,
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

  onInputChange = async () => {
    let imageForm = new FormData();
    imageForm.append('img', document.getElementById('jobHireImage').files[0]);
    try {
      let data = await jobPostImage(imageForm);
      this.setState({ hireImage: data.data.url, hireImageKey: data.data.key });
    } catch (err) {
      console.log(err);
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.edit !== this.state.edit) {
      return true;
    }
    if (nextState.title !== this.state.title) {
      return true;
    }
    if (nextState.hireTech !== this.state.hireTech) {
      return true;
    }
    if (nextState.hireUrl !== this.state.hireUrl) {
      return true;
    }
    if (nextState.importantInfo !== this.state.importantInfo) {
      return true;
    }
    if (nextState.detailInfo !== this.state.detailInfo) {
      return true;
    }
    if (nextState.hireImage !== this.state.hireImage) {
      return true;
    }
    if (nextState.hireImageKey !== this.state.hireImageKey) {
      return true;
    }
    if (nextState.salary !== this.state.salary) {
      return true;
    }
    if (nextState.deadLine !== this.state.deadLine) {
      return true;
    }
    if (nextState.address !== this.state.address) {
      return true;
    }
    if (nextState.experience !== this.state.experience) {
      return true;
    }
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      return true;
    }
    return false;
  }

  render() {
    const {
      edit,
      title,
      hireTech,
      hireUrl,
      importantInfo,
      detailInfo,
      hireImage,
      salary,
      deadLine,
      address,
      experience,
    } = this.state;
    const { onSubmitEditData } = this.props;
    const hireMapping = category => <div className="mapping">{category}</div>;

    return (
      <Container className="jobContainer">
        <Grid textAlign="center">
          <Grid.Column width={2}>
            {/* <Header>채용공고</Header> */}
            <Styled.Box column="1" row="2">
              <Styled.Header>채용공고</Styled.Header>
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
                        <Header>{this.props.title}</Header>
                      </Grid.Row>
                      <Grid.Row>
                        (채용 마감일 :{' '}
                        {!this.props.deadLine
                          ? '등록되지 않음'
                          : this.props.deadLine.substr(0, 10)}
                        )
                      </Grid.Row>
                    </Grid.Column>
                    <Grid.Column textAlign="right" width={4}>
                      <span className="linkBtn">
                        <a href={`http://${this.props.hireUrl}`}>
                          <img
                            src="https://png.pngtree.com/svg/20170904/url_650529.png"
                            height="30px"
                            alt=""
                          />
                        </a>
                      </span>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid column="two">
                      <Grid.Column textAlign="left">
                        <List bulleted>
                          <List.Item>
                            <div className="jobpostItem">필요 기술 스택</div>
                          </List.Item>
                          {!this.props.hireTech.length
                            ? this.props.hireTech.map(hireMapping)
                            : '등록되지 않음'}
                        </List>
                      </Grid.Column>
                    </Grid>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid column="two">
                      <Grid.Column textAlign="left">
                        <List bulleted>
                          <List.Item>
                            <div className="jobpostItem">채용조건 / 연봉</div>
                          </List.Item>
                          {this.props.experience || '등록되지 않음'} /{' '}
                          {salary || '등록되지 않음'}
                        </List>
                      </Grid.Column>
                    </Grid>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid column="two">
                      <Grid.Column textAlign="left">
                        <List bulleted>
                          <List.Item>
                            <div className="jobpostItem">주요업무</div>
                          </List.Item>
                          {this.props.importantInfo || '등록되지 않음'}
                        </List>
                      </Grid.Column>
                    </Grid>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid column="two">
                      <Grid.Column textAlign="left">
                        <List bulleted>
                          <List.Item>
                            <div className="jobpostItem">채용상세</div>
                          </List.Item>
                          {this.props.detailInfo || '등록되지 않음'}
                        </List>
                      </Grid.Column>
                    </Grid>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid column="two">
                      <Grid.Column textAlign="left">
                        <List bulleted>
                          <List.Item>
                            <div className="jobpostItem">지역</div>
                          </List.Item>
                          {this.props.address || '등록되지 않음'}
                        </List>
                      </Grid.Column>
                    </Grid>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid column="two">
                      <Grid.Column textAlign="left">
                        <List bulleted>
                          <List.Item>
                            <div className="jobpostItem">공고 이미지</div>
                          </List.Item>
                          <Image src={this.props.hireImage} alt="" />
                          {this.props.hireImage ? null : '등록되지 않음'}
                        </List>
                      </Grid.Column>
                    </Grid>
                  </Grid.Row>
                </Grid>
              </div>
            </Grid.Column>
          ) : (
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
                            onChange={this.onHandleChange('title')}
                            value={title}
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
                                selected={new Date(deadLine)}
                                onChange={this.onDateChange('deadLine')}
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
                            onChange={this.onHandleChange('hireUrl')}
                            value={hireUrl}
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
                            handleArrayChange={this.onHandleGetArray(
                              'hireTech',
                            )}
                            value={hireTech}
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
                            onChange={this.onHandleChange('importantInfo')}
                            value={importantInfo}
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
                            onChange={this.onHandleChange('detailInfo')}
                            value={detailInfo}
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
                            onChange={this.onHandleChange('salary')}
                            value={salary}
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
                          <div className="upload-btn-wrapper">
                            <button className="btn">등록</button>
                            <input
                              type="file"
                              name="file"
                              id="jobHireImage"
                              onChange={() => {
                                this.onInputChange();
                              }}
                            />
                          </div>
                          <Image src={hireImage} />
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
                            onChange={this.onHandleChange('experience')}
                            value={experience}
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
                            onChange={this.onHandleChange('address')}
                            value={address}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                </Form>
              </Grid.Row>

              <Grid textAlign="center">
                <Grid.Row>
                  <div class="ItemsInContainer">
                    <Button compact onClick={this.onEditing}>
                      취소
                    </Button>
                    <Button
                      compact
                      onClick={() => {
                        onSubmitEditData(this.state, 'hire');
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

export default JobCompany;
