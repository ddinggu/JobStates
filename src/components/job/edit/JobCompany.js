import React, { Component } from 'react';
import { Grid, Button, Image, List, Form, Input } from 'semantic-ui-react';
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
    const { edit, logo, brand, companyUrl, intro, category } = this.state;
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
                <div>회사</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={9} style={{ marginLeft: '5rem' }}>
                <Image
                  src={this.props.logo}
                  alt=""
                  height="10%"
                  width="10%"
                  style={{ display: 'inline-block' }}
                />
                <List.Content
                  style={{ display: 'inline-block', marginLeft: '3rem' }}
                >
                  <span>{this.props.brand}</span>
                </List.Content>
                <span>
                  <List.Icon
                    name="linkify"
                    style={{ display: 'inline-block', marginLeft: '3rem' }}
                  />
                  <a href={this.props.companyUrl}>{this.props.companyUrl}</a>
                </span>
                <p>회사소개 : {this.props.intro}</p>
              </Grid.Column>
            </Grid.Row>
          </>
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
      </>
    );
  }
}

export default JobCompany;
