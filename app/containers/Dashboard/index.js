/**
 *
 * Dashboard
 *
 */

import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {Typography} from 'antd';


import {Map, GoogleApiWrapper} from 'google-maps-react';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  notification,
  Button,
  Spin,
} from 'antd';
import makeSelectDashboard, {
  makeSelectTickets,
  makeSelectIsLoadingTickets,
} from './selectors';

import './index.less';
import reducer from './reducer';
import saga from './saga';

import {
  logoutWatcher,
  getTicketWatcher,
  assignTicketWatcher,
  attendTicketWatcher,
} from './actions';
import TicketList from '../../components/TicketList';
import SiderDashboard from '../../components/SiderDashboard';
import Trash from '../../images/trash.png';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;
const {Title, Text} = Typography;

const openNotification = () => {
  notification.info({
    message: 'Notificacion de mantenimiento ',
    description:
      'Es hora que realices un mantenimiento de tus equipos. Tienes un plazo de 24 horas',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const mapStyles = {
  width: '90%',
  height: '100%',
};

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      showMantenimiento: false,
      page: 'Recibir alerta',
      menu: 'ticket',
      item: 'list-ticket',
    };
  }

  componentDidMount() {
    // this.props.getTickets();
  }

  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <SiderDashboard
          onLogout={this.props.onLogout}
          menu={this.state.menu}
          item={this.state.item}
        />
        <Content style={{margin: '0 16px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Report Trash</Breadcrumb.Item>
            <Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{padding: 24, background: '#fff', minHeight: 360}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', margin: '3% 6%'}}>
              <div style={{textAlign: 'center'}}>
                <Title level={3}> Información del tacho </Title>
                <img src={Trash} alt="" height="200px"/>
                <div style={{textAlign: 'left', padding: '4%'}}>
                  <Text> <b>Material</b> : Plasticos y botellas </Text>
                  <br/>
                  <Text> <b>Cantidad</b> : 5 kilos </Text>
                  <br/>
                  <Text> <b>Total</b> :1200 puntos </Text>
                  <br/>
                  <Text> <b>Descripcion</b> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto
                    culpa deleniti deserunt dolores doloribus, eaque eveniet facilis laudantium nam nisi optio pariatur
                    possimus quidem recusandae sapiente sint ut vitae. </Text>
                  <br/>
                </div>

                <Button type="primary" size='large' style={{width:'140px', height: '50px', fontSize: '1.3rem', marginRight: '20px'}}>
                  <Icon type="check" style={{fontSize:'1.5rem'}}/> <b style={{fontSize: '1.2rem'}}>Aceptar</b>
                </Button>

                <Button type="danger" size='large' style={{width:'140px', height: '50px', fontSize: '1.3rem'}}>
                  <Icon type="cross" style={{fontSize:'1.5rem'}}/> <b style={{fontSize: '1.2rem'}}>Rechazar</b>
                </Button>

              </div>
              <div style={{textAlign: 'center'}}>
                <Title level={3}> Ubicacion   </Title>
                <div style={{width: '400px', height: '600px'}} className='maps-report'>
                  <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{lat: -12.075577, lng: -77.086977}}
                  />
                </div>

              </div>
            </div>

          </div>
        </Content>
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  getTickets: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // dashboard: makeSelectDashboard(),
  tickets: makeSelectTickets(),
  isLoadingTickets: makeSelectIsLoadingTickets(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(logoutWatcher()),
    getTickets: () => dispatch(getTicketWatcher()),
    assignTicket: params => dispatch(assignTicketWatcher(params)),
    attendTicket: params => dispatch(attendTicketWatcher(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({key: 'dashboard', reducer});
const withSaga = injectSaga({key: 'dashboard', saga});


export default GoogleApiWrapper({
  apiKey: ("AIzaSyAJHDIApLbh7HHsYFK0j5U_z9qhVU4UyxY")
})(Dashboard);
