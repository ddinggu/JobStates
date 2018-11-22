/* eslint-disable */
import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class NewPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    // STEP 1: create a container <div>
    this.containerEl = document.createElement('div');
    this.externalWindow = null;
    this.state = {
      hire_id: 123,
      status: '합격',
      statusDate: new Date(),
      schedule_id: 456,
      logo:
        'https://media.rocketpunch.com/cache/8c/6e/8c6ecb4b1339b8fb0cea2bff25c34aaf.jpg',
      brand: '테스트용 회사',
      category: ['모바일', '게임'],
      company_url: 'https://www.google.com',
      hire_url: 'https://www.google.com',
      intro: '테스트 합시다',
      title: '테스트 테스트',
      importantInfo: '테스트가 잘 되는지 확인',
      hireTech: ['React', 'Redux', 'CSS3'],
      detailInfo: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
      hireImage:
        'https://media.rocketpunch.com/cache/27/e3/27e3792cb034415093a5e5e0b6b8aa6c.jpg',
      salary: '5,000 - 6,000만원',
      address: '경기도 성남시',
      deadLine: new Date(),
      advantage: '???',
      disadvantage: 'good!',
      provider: 'rocketpunch',
      strategy: 'yep!!',
    };
  }

  componentDidMount() {
    this.externalWindow = window.open(
      '',
      '',
      'width=600,height=600,left=200,top=200',
    );
    this.externalWindow.document.body.appendChild(this.containerEl);
  }

  componentWillUnmount() {
    this.externalWindow.close();
  }

  render() {
    const { onClickLoadData } = this.props;
    const rendering = (
      <button
        onClick={() => {
          onClickLoadData(this.state);
          console.log(123);
        }}
      >
        {' '}
        검색{' '}
      </button>
    );

    return createPortal(rendering, this.containerEl);
  }
}

NewPortal.PropTypes = {
  children: PropTypes.element,
};

export default NewPortal;
