export const current = [
  { text: '지원하지 않음', value: '지원하지 않음' },
  { text: '서류대기', value: '서류대기' },
  { text: '면접대기', value: '면접대기' },
  { text: '합격', value: '합격' },
  { text: '불합격', value: '불합격' },
];

export const selectTech = [
  { key: 'Node.js', value: 'Node.js', text: 'Node.js' },
  { key: 'Amazon AWS', value: 'Amazon AWS', text: 'Amazon AWS' },
  { key: 'Python', value: 'Python', text: 'Python' },
  { key: 'React', value: 'React', text: 'React' },
  { key: 'Redux', value: 'Redux', text: 'Redux' },
  { key: 'MySQL', value: 'MySQL', text: 'MySQL' },
  { key: 'JavaScript', value: 'JavaScript', text: 'JavaScript' },
  { key: 'CSS3', value: 'CSS3', text: 'CSS3' },
  { key: 'Bootstrap', value: 'Bootstrap', text: 'Bootstrap' },
  { key: 'Git', value: 'Git', text: 'Git' },
  { key: 'GitHub', value: 'GitHub', text: 'GitHub' },
  { key: 'Redis', value: 'Redis', text: 'Redis' },
  { key: 'jQuery', value: 'jQuery', text: 'jQuery' },
  { key: 'MongoDB', value: 'MongoDB', text: 'MongoDB' },
  { key: 'HTML5', value: 'HTML5', text: 'HTML5' },
  { key: 'nginx', value: 'nginx', text: 'nginx' },
  { key: 'es6', value: 'es6', text: 'es6' },
  { key: 'react-native', value: 'react-native', text: 'react-native' },
  { key: 'iOS', value: 'iOS', text: 'iOS' },
  { key: 'Objective-C', value: 'Objective-C', text: 'Objective-C' },
  { key: 'Swift', value: 'Swift', text: 'Swift' },
  { key: 'WebSocket', value: 'WebSocket', text: 'WebSocket' },
  { key: 'Vue.js', value: 'Vue.js', text: 'Vue.js' },
  { key: 'Sass', value: 'Sass', text: 'Sass' },
  { key: 'Ajax', value: 'Ajax', text: 'Ajax' },
  { key: 'Front-end', value: 'Front-end', text: 'Front-end' },
  { key: 'Back-end', value: 'Back-end', text: 'Back-end' },
  { key: 'blockchain', value: 'blockchain', text: 'blockchain' },
  { key: 'django', value: 'django', text: 'django' },
  { key: 'Docker', value: 'Docker', text: 'Docker' },
  { key: 'dapp', value: 'dapp', text: 'dapp' },
];
export const selectCategory = [
  { key: '모바일', value: '모바일', text: '모바일' },
  { key: '게임', value: '게임', text: '게임' },
  { key: '화장품', value: '화장품', text: '화장품' },
  { key: '데이터/빅데이터', value: '데이터/빅데이터', text: '데이터/빅데이터' },
  { key: '웹서비스', value: '웹서비스', text: '웹서비스' },
  { key: 'Music', value: 'Music', text: 'Music' },
  { key: 'Video', value: 'Video', text: 'Video' },
  { key: '여행', value: '여행', text: '여행' },
  { key: '보안', value: '보안', text: '보안' },
  { key: '핀테크', value: '핀테크', text: '핀테크' },
  { key: '블록체인', value: '블록체인', text: '블록체인' },
  { key: '유통/물류/운송', value: '유통/물류/운송', text: '유통/물류/운송' },
  {
    key: '쇼핑몰/오픈마켓/이커머스',
    value: '쇼핑몰/오픈마켓/이커머스',
    text: '쇼핑몰/오픈마켓/이커머스',
  },
  { key: 'SNS/소셜미디어', value: 'SNS/소셜미디어', text: 'SNS/소셜미디어' },
  { key: '웹디자인/UI/UX', value: '웹디자인/UI/UX', text: '웹디자인/UI/UX' },
  { key: 'SCM', value: 'SCM', text: 'SCM' },
  {
    key: 'AI/머신러닝/딥러닝',
    value: 'AI/머신러닝/딥러닝',
    text: 'AI/머신러닝/딥러닝',
  },
  { key: '친환경', value: '친환경', text: '친환경' },
  { key: '교통/Mobility', value: '교통/Mobility', text: '교통/Mobility' },
  { key: 'IOT', value: 'IOT', text: 'IOT' },
  { key: '로봇', value: '로봇', text: '로봇' },
  { key: '식품', value: '식품', text: '식품' },
  { key: '교육', value: '교육', text: '교육' },
  {
    key: '부동산/코워킹커뮤니티/사무실',
    value: '부동산/코워킹커뮤니티/사무실',
    text: '부동산/코워킹커뮤니티/사무실',
  },
  { key: '하드/소프트웨어', value: '하드/소프트웨어', text: '하드/소프트웨어' },
  { key: '에너지', value: '에너지', text: '에너지' },
];

export const filterToJobArray = (stateArr, target) => {
  const copiedArr = stateArr.slice();
  const findTarget = copiedArr.indexOf(target);

  if (findTarget !== -1) {
    copiedArr.splice(findTarget, 1);
    return copiedArr;
  }

  copiedArr.push(target);
  return copiedArr;
};

export const options = [
  { text: '전체', value: '전체' },
  { text: '합격', value: '합격' },
  { text: '불합격', value: '불합격' },
  { text: ' 서류대기', value: '서류대기' },
  { text: '면접대기', value: '면접대기' },
  { text: '지원하지 않음', value: '지원하지 않음' },
];
