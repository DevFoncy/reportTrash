/**
 *
 * Account
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAccount from './selectors';
import reducer from './reducer';

import './index.less';

import saga from './saga';
import { Breadcrumb, Layout, Menu } from 'antd';
import SiderDashboard from '../../components/SiderDashboard';
import ServiceList from '../../components/ServiceList';

import AccountProfile from '../../components/AccountProfile';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      showMantenimiento: false,
      page: 'Mi Perfil',
      menu: 'account',
      item: 'profile',
    };
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderDashboard menu={this.state.menu} item={this.state.item} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Cuenta</Breadcrumb.Item>
            <Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>
            <AccountProfile />
          </div>
        </Content>
      </Layout>
    );
  }
}

Account.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  account: makeSelectAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Account);
