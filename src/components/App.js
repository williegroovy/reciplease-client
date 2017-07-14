import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose, lifecycle, setDisplayName, withProps, withState, withHandlers } from 'recompose'

import { current, toggle } from '../enhancers/modal';
import { Fade } from '../enhancers/transitions';

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

//import Header from './Header';
//import Landing from './Landing';
//import AccountHome from './AccountHome/AccountHome';
//import Articles from './Articles';
//import SignOut from './SignOut';
//import RequireAuth from './require_auth';
//import ModalConductor from './Modals/ModalConductor';

import '../stylesheets/main.scss';

//currentModal, toggleClear
const App = ({ collapsed, toggleSider }) => {

  return (
    <Layout>
      <Sider collapsible collapsed={ collapsed } onCollapse={ toggleSider }>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>

          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">anv 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 500 }}>
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
};

const enhance = compose(
  setDisplayName('Richardson Demo'),
  connect(mapStateToProps),
  withProps(history => history),
  withProps(location => location),
  withState('collapsed', 'toggleSider', true),
  withHandlers({
    toggleSider: ({ toggleSider, collapsed }) => () => {
      console.log('toggleSider', toggleSider);
      console.log('props', collapsed);
      return toggleSider(!collapsed)
    }
  }),
  toggle(),
  current(),
  lifecycle({
    componentWillMount() {
      //if (this.props.authenticated) this.props.history.push('/account');
    },
    componentWillReceiveProps(nextProps) {
      //if(this.props.authenticated !== nextProps.authenticated && nextProps.authenticated)
        //this.props.history.push('/account')
    }
  })
);

export default withRouter(enhance(App));

/*
 <Header />
 <Route exact path="/" component={Landing} />
 <Route exact path="/signout" component={SignOut} />
 <Route path="/edit" component={Articles} />
 <Route path="/account" component={RequireAuth(AccountHome)} />
 <Fade in={!!currentModal}>
 <ModalConductor currentModal={currentModal} clearModal={toggleClear} />
 </Fade>
 */