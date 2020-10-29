import React from 'react';
import {
  AppBar,
  Toolbar,
  // List,
  // ListItem,
  // ListItemText,
  Button,
  Typography,
} from '@material-ui/core';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import FunctionsIcon from '@material-ui/icons/Functions';

import styles from './styles.module.css';

// import { isFunction } from 'lodash';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={styles.title}>
              泺少的数学(
              <FunctionsIcon />
              )游戏
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.body}>
          <Button
            variant="contained"
            color="primary"
            className={styles['create-button']}
            endIcon={<SportsEsportsIcon />}
            onClick={() => {
              this.props.history.replace('/create-game');
            }}
            fullWidth
            size="large"
          >
            新游戏
          </Button>
        </div>
        {/* <List component="nav">
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItem>
        </List> */}
      </div>
    );
  }
}

export default Home;
