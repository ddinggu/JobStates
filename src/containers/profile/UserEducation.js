import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class UserEducation extends Component {
  render() {
    console.log('edu props', this.props);
    // const { name, phoneNum, email, snsBlog, snsGithub, picture } = this.props;
    return (
      <div>
        <hr />
        <h3>학력</h3>
        <div>
          <li>학력 1</li>
          <li>학력 2</li>
        </div>
      </div>
    );
  }
}

// UserEducation.propTypes = {};

// UserEducation.defaultProps = {};

// const mapStateToProps = state => ({});

export default connect()(UserEducation);
