import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { authCheck } from 'actions/action_authenticate';

export default (ComposedComponent) => {
  class Authenticate extends Component {
    componentDidMount() {
      this.checkAndRedirect();
    }

    async checkAndRedirect() {
      const { isAuthenticated, redirect, tokenvaildation } = this.props;
      if (!localStorage.getItem('token')) {
        alert('로그인이 필요합니다!');
        redirect();
      } else {
        await tokenvaildation();

        if (!isAuthenticated) {
          alert('다시 로그인 해주세요!');
          redirect();
        }
      }
    }

    render() {
      const { isAuthenticated } = this.props;

      return (
        <>{isAuthenticated ? <ComposedComponent {...this.props} /> : null}</>
      );
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

  const mapDispatchToProps = dispatch => bindActionCreators(
      {
        redirect: () => push('/login'),
        tokenvaildation: () => authCheck(),
      },
      dispatch,
    );

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool,
    redirect: PropTypes.func,
    authCheck: PropTypes.func,
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Authenticate);
};

// import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import auth from 'utils/auth';

// export default class withPrivateRoute extends Component {
//   state = {
//     loaded: false,
//     isAuthenticated: false,
//   };

//   async componentDidMount() {
//     console.log('privateRoute');
//     if (!localStorage.getItem('token')) {
//       this.setState({
//         loaded: !this.state.loaded,
//       });
//     } else {
//       const authenticateResult = await auth.userCheck();

//       try {
//         if (authenticateResult.code === 200) {
//           this.setState({
//             isAuthenticated: !this.state.isAuthenticated,
//             loaded: !this.state.loaded,
//           });
//         } else {
//           // 추후 토큰 state 별 상태를 유저에게 보여줄 수 있는 팝업이 필요하다!!
//           alert(authenticateResult.message);

//           localStorage.removeItem('token');
//           localStorage.removeItem('nick');
//           localStorage.removeItem('profile');

//           this.setState({
//             loaded: !this.state.loaded,
//           });
//         }
//       } catch (err) {
//         throw err;
//       }
//     }
//   }

//   render() {
//     const { component: Component, appStateChange, ...rest } = this.props;
//     const { loaded, isAuthenticated } = this.state;

//     if (!loaded) return null;

//     return (
//       <Route
//         {...rest}
//         render={props =>
//           isAuthenticated ? (
//             <Component {...props} appStateChange={appStateChange} />
//           ) : (
//             <Redirect to="/login" />
//           )
//         }
//       />
//     );
//   }
// }
