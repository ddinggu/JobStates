import * as types from 'actions/actionTypes';

const initialState = {
  loading: false,
  error: false,
  allJobData: [],
  filterData: [],
  currentData: {
    data: {
      hireId: 1,
      status: '지원하지 않음',
      statusDate: 'new Date()',
      scheduleId: 3,
      provider: 'rocketpunch',
      logo:
        'https://media.rocketpunch.com/cache/3c/48/3c48e95474a25dbf49f5aefc12a1b487.png',
      brand: '로켓펀치(RocketPunch)',
      category: [' ', ' ', ' '],
      companyUrl: 'https://www.rocketpunch.com',
      hireUrl:
        'https://www.rocketpunch.com/jobs/39347/Python-%EC%9B%B9-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EA%B0%9C%EB%B0%9C%EC%9E%90?utm_source=rocketpunch&utm_medium=advertisement&utm_campaign=job_ad&utm_content=job_detail',
      intro:
        '로켓펀치는 4만개 이상의 기업과 4.5만개 이상의 채용 정보, 15만명 이상의 사용자 프로필을 기반으로, 다양한 분야의 전문가들이 비즈니스에 관련된 정보를 쉽게 찾을 수 있고, 궁극적으로 본인의 커리어를 지속적으로 성장시킬 수 있는 비즈니스 네트워킹 플랫폼을 만들어 가고 있습니다.',
      title: 'Pyhton 웹 어플리케이션 개발자',
      importantInfo:
        '- 로켓펀치 웹 서비스 개발 - 서비스 배포/관리에 필요한 클라우드 및 인프라 관리',
      hireTech: ['2', '3'],
      detailInfo:
        '대한민국 최대의 비즈니스 플랫폼을 만들어 가고 있는 로켓펀치에서 웹 어플리케이션 개팀원찾습니다. 로켓펀치는 국내 최초의 스타트업 기업/채용 정보 서비스로 시작하여, 수백 만 건 이상의 비즈니스 관련 데이터가 존재하는 종합 비즈니스 플랫폼으로 도약하고 있습니다. 빠르게 변화하는 경제 구조에서 꼭 필요한 서비스를 함께 만들어갈 동료를 찾습니다. + 자격 요건- 웹 개발 업무 2년 이상이 있어야 합니다.- Python 및 Django/Flask 등 Python기반 웹 프레임워크를 능숙하게 사용해야 합니다.- AWS나 클라우드 서비스를 운영해본 경험이 있어야 합니다.- Git을 사용하고 이를 통한 협업을 충분히 이해해야 합니다.- 원격 근무를 통한 소통에 문제가 없어야 합니다.- 로켓펀치 개인 프로필을 충실히 기입한 후 지원하시기 바랍니다. + 우대 사항- 적극적으로 서비스 개선에 필요한 업무를 찾고 개선할수 있는 인성과 역량- SEO 및 웹 접근성에 대한 이해- Ansible, Chef 등 설정 관리 도구에 대한 이해- Webpack 등 웹 프론트엔드 기술에 대한 이해- 소셜 미디어 서비스 개발에 필요한 데이터 구조 이해 및 성능 개선 경험- 원격근무를 훌륭하게 수행할 수 있는 주도적 성향- 업무 생산성 및 서비스 퍼포먼스를 높일 수 있는 개발 언어 및 도구에 대한 관심과 적응력 + 업무 환경- 원격근무(재택근무)를 기본으로 하며 필요 시 온라인 회의 및 오프라인 미팅을 가집니다.- 타 개발자와 협업하게 되며, 관련하여 CEO, CTO와 직접 커뮤니케이션 합니다.- 업무에 필요한 기기 및 환경을 제공합니다.- 채용 완료 시, 기존 팀원과 실제 업무를 통해 알아가는 과정이 필요하다고 생각하며 3개월간의 수습 기간을 가집니다. (계약급여의 100%를 지급하면서 진행됩니다) 기타 궁금한 사항은 startup@rocketpunch.com으로 문의해 주세요!! 로켓펀치의 자율 근무 문화 : https://blog.rocketpunch.com/2017/06/20/autonomy-culture-of-rocketpunch/',
      hireImage: 'url',
      salary: '4200만원',
      hireType: '신입',
      address: '원격근무',
      deadLine: 'new Date()',
      advantage:
        '로켓펀치는 소규모 스타트업 회사의 가장 이상적인 채용 솔루션입니다. 다른 플랫폼이 아닌 로켓펀치를 통해서 지원자가 연락해올 때, 해당 지원자가 최신 트렌드에 대해 어느정도 익숙한 사람이라는 것을 보장받을 수 있습니다.',
      disadvantage:
        '6개월간 로켓펀치 팀에서 일하면서 가장 인상깊었던 점은 정말 효율적으로 일을 한다는 점이었어요. 불필요한 보고서 대신 Google docs를 이용해 정보를 주고받고, 아침 회의때는 형식적인 대화보다는 본인이 할일과 주요 이슈에 대해서 이야기를 나눴어요. 덤으로 재택근무인 덕에 출퇴근 시간없고 본인이 원하는 시간에 일을 할 수 있었어요ㅎㅎ',
      strategy:
        '로켓펀치 팀에서 일하면서 가장 좋은 것은 대한민국에서 가장 생산적인 철학을 갖고 철학을 현실로 만들어 가는 사람들과 토론하며 일한다는 것입니다.',
      end: false,
    },
  },
  autocompleteData: [],
  filteredAutocompleteData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_JOB:
      return {
        ...state,
        allJobData: action.payload,
        filterData: action.payload,
      };
    case types.SEARCH_FILTER:
      return {
        ...state,
        filterData: state.allJobData.filter((data) => {
          if (!action.payload2) {
            return data.status === action.payload;
          }
          if (action.payload === '전체') {
            return data.brand.indexOf(action.payload2) !== -1;
          }
          if (!!action.payload && !!action.payload2) {
            return (
              data.status === action.payload
              && data.brand.indexOf(action.payload2) !== -1
            );
          }
        }),
      };

    case types.GET_DETAIL_JOB:
      return {
        ...state,
        currentData: {
          data: state.allJobData.filter(
            job => `${job.hireId}` === action.id,
          )[0],
        },
      };

    case types.POST_JOB_BEGIN:
      return { ...state, loading: true };

    case types.POST_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        // api 완성되면 수정될 것!!
        currentData: { ...state.currentData, data: action.payload },
      };

    case types.POST_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case types.GET_AUTOCOMPLETEJOB_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case types.GET_AUTOCOMPLETEJOB_SUCCESS:
      return {
        ...state,
        autocompleteData: action.crawlingData,
      };

    case types.GET_AUTOCOMPLETEJOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case types.FILTER_AUTOCOMPLETEJOB:
      return {
        ...state,
        filteredAutocompleteData: state.autocompleteData.filter(
          job => `${job.hireId}` === `${action.hireId}`,
        )[0],
      };

    case types.CLEAR_AUTOCOMPLETEJOB:
      return {
        ...state,
        autocompleteData: [],
      };

    case types.DELETE_JOB_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case types.DELETE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        currentData: { data: {} },
      };

    case types.DELETE_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case types.CHANGE_STATE_DETAILPAGE:
      return {
        ...state,
        currentData: { ...state.currentData },
      };

    default:
      return state;
  }
}
