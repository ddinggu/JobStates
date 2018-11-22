import React, { Component } from 'react';

class JobDetailHeader extends Component {
  render() {
    return (
      <div>
        <input type="submit">수정</input>
        <input type="submit">삭제</input>
      </div>
    );
  }
}

export default JobDetailHeader;
