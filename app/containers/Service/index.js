/**
 *
 * Service
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga, { useInjectSaga } from 'utils/injectSaga';
import injectReducer, { useInjectReducer } from 'utils/injectReducer';
import { makeSelectServices } from './selectors';
import reducer from './reducer';

import './index.less';

import saga from './saga';
import { Breadcrumb, Layout, Menu } from 'antd';
import SiderDashboard from '../../components/SiderDashboard';
import ServiceList from '../../components/ServiceList';
import TicketList from '../../components/TicketList';
import { getServicesWatcher } from './actions';
import { Dashboard } from '../Dashboard';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      showMantenimiento: false,
      page: 'Lista de Solicitud de Servicios',
      menu: 'ticket',
      item: 'list-service',
    };
  }

  componentDidMount() {
    this.props.getServices();
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderDashboard menu={this.state.menu} item={this.state.item} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Servicios</Breadcrumb.Item>
            <Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <ServiceList data={this.props.services && this.props.services} />
          </div>
        </Content>
      </Layout>
    );
  }
}

Service.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  getServices: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  services: makeSelectServices(),
});

function mapDispatchToProps(dispatch) {
  return {
    getServices: () => dispatch(getServicesWatcher()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'services', reducer });
const withSaga = injectSaga({ key: 'services', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga,
  withConnect,
)(Service);
