/**
 *
 * Ticket
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import makeSelectTicket from './selectors';
import reducer from './reducer';
import './index.less';
import saga from './saga';
import { createTicketWatcher } from './actions';

import SiderDashboard from '../../components/SiderDashboard';
import { Breadcrumb, Layout } from 'antd';
import CreateTicket from '../../components/TicketCreate';

const { Header, Content, Footer, Sider } = Layout;

export class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Crear Ticket',
      menu: 'ticket',
      item: 'create-ticket',
    };
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderDashboard menu={this.state.menu} item={this.state.item} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Ticket</Breadcrumb.Item>
            <Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 20, background: '#fff', minHeight: 600 }}>
            <CreateTicket handleSubmit={this.props.createTicket} />
          </div>
        </Content>
      </Layout>
    );
  }
}

Ticket.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ticket: makeSelectTicket(),
});

function mapDispatchToProps(dispatch) {
  return {
    createTicket: params => dispatch(createTicketWatcher(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'createTicket', reducer });
const withSaga = injectSaga({ key: 'createTicket', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga,
  memo,
)(Ticket);
