import React, { Component } from 'react';
import {
  Grid,
  Button,
  Image,
  List,
  Form,
  Input,
  Container,
  Header,
} from 'semantic-ui-react';
import * as jobUtils from 'utils/jobutils';
import DropdownSearchQuery from 'components/job/post/DropdownSearchQuery';

class JobCompany extends Component {
  state = {
    edit: false,
    companyId: this.props.companyId,
    logo: this.props.logo,
    brand: this.props.brand,
    companyUrl: this.props.companyUrl,
    intro: this.props.intro,
    category: this.props.category,
    status: this.props.status,
  };

  onEditing = () => this.setState({ edit: !this.state.edit });

  onHandleChange = key => e =>
    this.setState({
      ...this.state,
      [key]: e.target.value ? e.target.value : e.target.innerText,
    });

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
      logo,
      brand,
      companyUrl,
      intro,
      category,
      status,
    } = this.state;
    const { onSubmitEditData } = this.props;

    return (
      <Container>
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={10} textAlign="left">
              {status}
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              <Header>회사</Header>
            </Grid.Column>
            {/* <Grid.Row> */}
            {!edit ? (
              <Grid.Column textAlign="center" width={10} className="jobbody">
                <Grid>
                  <Grid.Column width={1}>
                    <Image src={this.props.logo} alt="" textAlign="left" />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <span>{this.props.brand}</span>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <span>
                      <List.Icon
                        name="linkify"
                        style={{
                          display: 'inline-block',
                          marginLeft: '3rem',
                        }}
                      />
                      //{' '}
                      <a href={this.props.companyUrl}>
                        // {this.props.companyUrl}
                        //{' '}
                      </a>
                      //{' '}
                    </span>
                  </Grid.Column>

                  <p>회사소개 : {this.props.intro}</p>
                </Grid>
              </Grid.Column>
            ) : (
              <>
                <Grid.Row>
                  <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
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
                      value={brand}
                    />
                    <Form.Field
                      id="form-input-control-company-logo"
                      label="회사 로고"
                      placeholder="회사 로고"
                    />
                    <input type="file" />
                    <Image src={logo} size="small" />
                    <Form.Field
                      id="form-input-control-company-url"
                      control={Input}
                      label="회사 사이트"
                      placeholder="회사사이트"
                      onChange={this.onHandleChange('companyUrl')}
                      value={companyUrl}
                    />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                    <div>산업 분야</div>
                    <div style={{ border: '1px solid' }} />
                  </Grid.Column>
                  <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                    <DropdownSearchQuery
                      stateOptions={jobUtils.selectCategory}
                      title={'산업 분야'}
                      handleArrayChange={this.onHandleGetArray('category')}
                      value={category}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Button
                  compact
                  onClick={() => {
                    onSubmitEditData(this.state, 'company');
                  }}
                >
                  추가
                </Button>
                <Button compact onClick={this.onEditing}>
                  취소
                </Button>
              </>
            )}

            <span className="linkBtn">
              <a href="www.naver.com">
                <img
                  src="https://png.pngtree.com/svg/20170904/url_650529.png"
                  height="30px"
                />
              </a>
            </span>
            {/* </Grid.Row> */}

            <Grid.Column width={2}>
              <Button
                basic
                icon="edit"
                floated="right"
                onClick={this.onEditing}
              />
            </Grid.Column>
          </Grid.Row>

          <></>
        </Grid>
      </Container>
    );
  }
}

export default JobCompany;
