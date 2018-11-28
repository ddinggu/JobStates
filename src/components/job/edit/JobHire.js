import React, { Component } from 'react';
import {
  Grid,
  Button,
  Image,
  Form,
  Input,
  TextArea,
  Container,
  Header,
  List,
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import * as jobUtils from 'utils/jobutils';
import DropdownSearchQuery from 'components/job/post/DropdownSearchQuery';
import * as api from 'api/api';

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

  onInputChange = () => {
    let imageForm = new FormData();
    imageForm.append('img', document.getElementById('jobHireImage').files[0]);
    api
      .jobPostImage(imageForm)
      .then(data => {
         this.setState({ hireImage : data.data.url });
        console.log(data)
      })
      .catch(err => console.log('error:::', err));
  };

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
      provider,
      experience,
    } = this.state;
    const { onSubmitEditData } = this.props;
    const hireMapping = category => <div className="mapping">{category}</div>;

    return (
      <Container className="jobContainer">
        <Grid textAlign="center">
          <Grid.Column width={2}>
            <Header>채용공고</Header>
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
                        (채용 마감일 : {this.props.deadLine.substr(0, 10)})
                      </Grid.Row>
                    </Grid.Column>
                    <Grid.Column textAlign="right" width={4}>
                      <span className="linkBtn">
                        <a href={this.props.hireUrl}>
                          <img
                            src="https://png.pngtree.com/svg/20170904/url_650529.png"
                            height="30px"
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
                          {this.props.hireTech.map(hireMapping)}
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
                          {this.props.experience || '...'} / {salary}
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
                          {this.props.importantInfo}
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
                          {this.props.detailInfo}
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
                          {this.props.address}
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
                          <Input
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
                          <Input
                            onChange={this.onHandleChange('detailInfo')}
                            value={detailInfo}
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
                          <Input
                            control={Input}
                            type="file"
                            name="file"
                            id="jobHireImage"
                            onChange={() => {
                              this.onInputChange();
                            }}
                          />
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
