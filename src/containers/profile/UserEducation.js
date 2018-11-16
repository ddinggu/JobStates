import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class UserEducation extends Component {
  render() {
    // const { name, phoneNum, email, snsBlog, snsGithub, picture } = this.props;
    return (
      <div>
        <h3>학력</h3>
        <div>discription</div>
      </div>
    );
  }
}

// UserEducation.propTypes = {};

// UserEducation.defaultProps = {};

// const mapStateToProps = state => ({});

export default connect()(UserEducation);
