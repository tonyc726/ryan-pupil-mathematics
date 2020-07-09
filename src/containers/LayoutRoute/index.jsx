import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { get } from 'lodash';
import clsx from 'clsx';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Container,
} from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MapIcon from '@material-ui/icons/Map';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FunctionsIcon from '@material-ui/icons/Functions';
import StorageIcon from '@material-ui/icons/Storage';

import Copyright from '../../components/Copyright';

import { toggleSidebarCollapsed } from './actions';
import { changeLoginStatus } from '../PrivateRoute/actions';

import theme from '../../theme';

const drawerWidth = 200;

const styles = {
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9),
    // },
  },
  drawerButtunActived: {
    color: theme.palette.primary.dark,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
};

const Layout = props => {
  const {
    classes,
    children,
    pathname,
    pageTitle,
    sidebarCollapsed,
    toggleSidebarCollapsedStatus,
    updateLoginStatus,
  } = props;
  const handleDrawerOpen = () => {
    // setOpen(true);
    toggleSidebarCollapsedStatus(true);
  };
  const handleDrawerClose = () => {
    // setOpen(false);
    toggleSidebarCollapsedStatus(false);
  };
  const handleLogout = () => {
    updateLoginStatus(false);
    // 退出后返回首页
    props.history.replace('/');
  };

  const handleSidebarLink = path => {
    props.history.push(path);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={clsx(
            classes.appBar,
            sidebarCollapsed && classes.appBarShift
          )}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="展开菜单"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                sidebarCollapsed && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {pageTitle}
            </Typography>
            <IconButton color="inherit" onClick={handleLogout}>
              <PowerSettingsNewIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(
              classes.drawerPaper,
              !sidebarCollapsed && classes.drawerPaperClose
            ),
          }}
          open={sidebarCollapsed}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem
              button
              title="点云数据展示"
              onClick={() => {
                handleSidebarLink('/statisticMap');
              }}
              selected={pathname.indexOf('statisticMap') >= 0}
            >
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="点云数据展示" />
            </ListItem>
            <Divider />
            <ListItem
              button
              title="热环境营造要素数据库"
              onClick={() => {
                handleSidebarLink('/excenergy/zelement');
              }}
              selected={pathname.indexOf('zelement') >= 0}
            >
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="要素数据库" />
            </ListItem>
            <ListItem
              button
              title="综合分析平台"
              onClick={() => {
                handleSidebarLink('/excenergy/zanalysis');
              }}
              selected={pathname.indexOf('zanalysis') >= 0}
            >
              <ListItemIcon>
                <FunctionsIcon />
              </ListItemIcon>
              <ListItemText primary="综合分析平台" />
            </ListItem>
            <Divider />
            <ListItem
              button
              title="数据管理"
              onClick={() => {
                handleSidebarLink('/dataManager');
              }}
              selected={pathname.indexOf('dataManager') >= 0}
            >
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="数据管理" />
            </ListItem>
            <ListItem
              button
              title="用户管理"
              onClick={() => {
                handleSidebarLink('/userManager');
              }}
              selected={pathname.indexOf('userManager') >= 0}
            >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="用户管理" />
            </ListItem>
            <Divider />
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {children && React.Children.toArray(children)}
          </Container>
          <Copyright />
        </main>
      </div>
    </MuiThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    sidebarCollapsed: get(state, ['layout', 'sidebarCollapsed']),
    pathname: get(state, ['router', 'location', 'pathname'], ''),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebarCollapsedStatus: status => {
      dispatch(toggleSidebarCollapsed(status));
    },
    updateLoginStatus: status => {
      dispatch(changeLoginStatus(status));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Layout)));
