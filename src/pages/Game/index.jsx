import React from 'react';
import { delay, get, includes, isNil, padStart } from 'lodash';
import {
  AppBar,
  Fab,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TimerIcon from '@material-ui/icons/Timer';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import randomInt from '../../assets/scripts/randomInt';
import styles from './styles.module.css';

class Game extends React.Component {
  constructor(props) {
    super(props);

    const params = get(props, ['match', 'params'], {});

    const range = isNil(params.range)
      ? params.range
      : parseInt(params.range, 10);
    const operators = [];
    if (`${params.addition}` === '1') {
      operators.push('+');
    }
    if (`${params.subtraction}` === '1') {
      operators.push('-');
    }
    if (`${params.multiplication}` === '1') {
      operators.push('*');
    }
    const optionLength =
      2 + (isNil(params.level) ? 0 : parseInt(params.level, 10));
    const minutes = isNil(params.minutes)
      ? params.minutes
      : parseInt(params.minutes, 10);

    this.state = {
      isPlaying: false,
      countDown: minutes * 60,
      x: null,
      y: null,
      operator: null,
      z: null,
      options: [],
      optionLength,
      range,
      operators,
      history: [],
      answer: null,
      isPushToHistoryPending: false,
    };

    this.countDownDelayer = null;

    this.handlePlayingClick = this.handlePlayingClick.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);

    this.makeAlgorism = this.makeAlgorism.bind(this);
  }

  componentDidMount() {
    this.makeAlgorism();
  }

  componentWillUnmount() {
    if (this.countDownDelayer !== null) {
      clearTimeout(this.countDownDelayer);
      this.countDownDelayer = null;
    }
  }

  countDownDelay() {
    const { countDown } = this.state;
    if (countDown <= 0) {
      return;
    }
    const nextCountDown = countDown - 1;
    this.countDownDelayer = delay(() => {
      this.setState(
        {
          countDown: nextCountDown,
        },
        () => {
          const { countDown, history } = this.state;
          if (countDown > 0) {
            this.countDownDelay();
          } else {
            window.localStorage.setItem(
              `${+new Date()}`,
              JSON.stringify(history)
            );
          }
        }
      );
    }, 1000);
  }

  makeAlgorism() {
    console.time('> makeAlgorism');
    const { range, optionLength, operators } = this.state;
    const operator =
      operators.length === 1
        ? operators[0]
        : operators[randomInt(0, operators.length - 1)];
    let x = randomInt(0, range);
    let y = randomInt(0, range);
    // 防止减法出现负数的结果
    if (operator === '-') {
      x = randomInt(1, range);
      while (x < y) {
        y = randomInt(0, range);
      }
    }
    // eslint-disable-next-line
    const z = eval(`${x}${operator}${y}`);
    const zAtOptionIndex = randomInt(0, optionLength - 1);
    const options = [];
    for (let i = optionLength - 1; i >= 0; i -= 1) {
      if (i === zAtOptionIndex) {
        options[i] = z;
      } else {
        let r = randomInt(0, operators === '*' ? range * range : 2 * range);
        while (includes(options, r) || r === z) {
          r = randomInt(0, operators === '*' ? range * range : 2 * range);
        }
        options[i] = r;
      }
    }
    console.timeEnd('> makeAlgorism');

    this.setState({
      isPushToHistoryPending: false,
      answer: null,
      x,
      y,
      z,
      options,
      operator,
    });
  }

  handlePlayingClick() {
    this.setState(
      {
        isPlaying: true,
      },
      () => {
        this.countDownDelay();
      }
    );
  }

  handleOptionClick(answerOptionIndex) {
    const { isPushToHistoryPending } = this.state;
    if (isPushToHistoryPending === false) {
      console.log('answerOptionIndex: ', answerOptionIndex);
      this.setState(
        ({ x, y, z, options, operator, history }) => ({
          isPushToHistoryPending: true,
          answer: answerOptionIndex,
          history: history.concat([
            [x, operator, y, z, options, answerOptionIndex],
          ]),
        }),
        () => {
          delay(this.makeAlgorism, 600);
        }
      );
    }
  }

  render() {
    const {
      isPlaying,
      countDown,
      x,
      y,
      z,
      operator,
      options,
      isPushToHistoryPending,
      answer,
      history,
    } = this.state;
    return (
      <div className={styles.exam}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={styles.menuButton}
              color="inherit"
              aria-label="back"
              onClick={() => {
                this.props.history.replace('/');
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              <TimerIcon />
              &nbsp;
              {padStart(`${Math.floor(countDown / 60)}`, 2, '0')}&nbsp;:&nbsp;
              {padStart(`${Math.floor(countDown % 60)}`, 2, '0')}
            </Typography>
          </Toolbar>
        </AppBar>
        {isPlaying === false && (
          <div className={styles['start-wrapper']}>
            <Fab
              color="primary"
              className={styles['start-button']}
              onClick={this.handlePlayingClick}
            >
              <PlayArrowIcon className={styles['start-button-icon']} />
            </Fab>
          </div>
        )}
        {isPlaying && countDown > 0 && (
          <>
            <div className={styles.playground}>
              <span className={styles['playground-x']}>{x}</span>
              <span className={styles['playground-operator']}>
                {operator === '*' ? 'x' : operator}
              </span>
              <span className={styles['playground-y']}>{y}</span>
            </div>
            {answer === null ? (
              <div className={styles.options}>
                {options.map((o, i) => (
                  <Fab
                    color="primary"
                    className={styles['options-button']}
                    key={`option_${i}_${o}`}
                    disabled={isPushToHistoryPending}
                    onClick={() => {
                      this.handleOptionClick(o);
                    }}
                  >
                    {o}
                  </Fab>
                ))}
              </div>
            ) : (
              <div className={styles['answer-wrapper']}>
                {answer === z ? (
                  <SentimentVerySatisfiedIcon
                    className={styles['answer-correct']}
                  />
                ) : (
                  <SentimentVeryDissatisfiedIcon
                    className={styles['answer-incorrect']}
                  />
                )}
              </div>
            )}
          </>
        )}
        {isPlaying && countDown === 0 && (
          <div className={styles['timeout']}>
            <AccessAlarmIcon className={styles['timeout-icon']} />
            <Typography className={styles['timeout-title']}>
              宝贝，游戏结束了
            </Typography>
            <Typography className={styles['timeout-p']}>
              你一共回答了&nbsp;
              <span
                style={{
                  color: '#b71c1c',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}
              >
                {history.length}
              </span>
              &nbsp;道题目
            </Typography>
            <Typography className={styles['timeout-p']}>
              答对了&nbsp;
              <span
                style={{
                  color: '#388e3c',
                  fontWeight: '700',
                  fontStyle: 'italic',
                }}
              >
                {history.filter(([, , , z, , a]) => z === a).length}
              </span>
              &nbsp;道题目
            </Typography>
          </div>
        )}
      </div>
    );
  }
}

export default Game;
