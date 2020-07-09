import React from 'react';
import { get } from 'lodash';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slider,
  Button,
  Checkbox,
  Radio,
  FormControl,
  FormLabel,
  FormGroup,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SendIcon from '@material-ui/icons/Send';

import styles from './styles.module.css';

class CreateGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      range: 5, // 运算的数字范围
      addition: true, // 是否启用加法
      subtraction: false, // 是否启用减法
      level: 0, // 0(2个选项),1(3个选项),2(4个选项)
      minutes: 1, // 游戏时长(分钟)
    };

    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleAdditionStatusChange = this.handleAdditionStatusChange.bind(
      this
    );
    this.handleSubtractionStatusChange = this.handleSubtractionStatusChange.bind(
      this
    );
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleMinutesChange = this.handleMinutesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRangeChange(event, newValue) {
    this.setState({
      range: newValue,
    });
  }

  handleAdditionStatusChange(e) {
    this.setState({
      addition: get(e, ['target', 'checked'], false),
    });
  }

  handleSubtractionStatusChange(e) {
    this.setState({
      subtraction: get(e, ['target', 'checked'], false),
    });
  }

  handleLevelChange(e) {
    this.setState({
      level: parseInt(get(e, ['target', 'value'], 0), 10),
    });
  }

  handleMinutesChange(event, newValue) {
    this.setState({
      minutes: newValue,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      range, // 运算的数字范围
      addition, // 是否启用加法
      subtraction, // 是否启用减法
      level, // 0(2个选项),1(3个选项),2(4个选项)
      minutes, // 游戏时长(分钟)
    } = this.state;

    if (addition === false && subtraction === false) {
      console.warn('');
      return;
    }

    this.props.history.push(
      `/game/${range}/${addition === true ? 1 : 0}/${
        subtraction === true ? 1 : 0
      }/${level}/${minutes}/`
    );
  }

  render() {
    const { range, addition, subtraction, level, minutes } = this.state;
    return (
      <div className={styles.container}>
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
              游戏规则
            </Typography>
          </Toolbar>
        </AppBar>
        <form action="" className={styles.body} onSubmit={this.handleSubmit}>
          <FormControl
            component="fieldset"
            className={styles['form-control']}
            fullWidth
          >
            <FormLabel component="legend" className={styles['form-legend']}>
              算术运算范围：{range} 以内运算
            </FormLabel>
            <Slider
              value={range}
              step={null}
              marks={[
                {
                  value: 5,
                  label: '5',
                },
                {
                  value: 10,
                  label: '10',
                },
                {
                  value: 20,
                  label: '20',
                },
                {
                  value: 30,
                  label: '30',
                },
                {
                  value: 40,
                  label: '40',
                },
                {
                  value: 50,
                  label: '50',
                },
              ]}
              min={5}
              max={50}
              valueLabelDisplay="auto"
              onChange={this.handleRangeChange}
            />
          </FormControl>
          <FormControl
            component="fieldset"
            error={addition === false && subtraction === false}
            className={styles['form-control']}
            fullWidth
          >
            <FormLabel component="legend" className={styles['form-legend']}>
              算术运算规则
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={addition}
                    onChange={this.handleAdditionStatusChange}
                    name="addition"
                  />
                }
                label="加法"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={subtraction}
                    onChange={this.handleSubtractionStatusChange}
                    name="subtraction"
                  />
                }
                label="减法"
              />
            </FormGroup>
            {addition === false && subtraction === false && (
              <FormHelperText>
                点击“加法”或者“减法”开启对应的算术运算规则
              </FormHelperText>
            )}
          </FormControl>
          <FormControl
            component="fieldset"
            fullWidth
            className={styles['form-control']}
          >
            <FormLabel component="legend" className={styles['form-legend']}>
              游戏难度
            </FormLabel>
            <RadioGroup value={level} onChange={this.handleLevelChange}>
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="低 - 2个选项"
              />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="中 - 3个选项"
              />
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="高 - 4个选项"
              />
            </RadioGroup>
          </FormControl>
          <FormControl
            component="fieldset"
            className={styles['form-control']}
            fullWidth
          >
            <FormLabel component="legend" className={styles['form-legend']}>
              游戏时长（分钟）
            </FormLabel>
            <Slider
              value={minutes}
              step={null}
              marks={[
                {
                  value: 1,
                  label: '1',
                },
                {
                  value: 3,
                  label: '3',
                },
                {
                  value: 5,
                  label: '5',
                },
                {
                  value: 10,
                  label: '10',
                },
              ]}
              min={1}
              max={10}
              valueLabelDisplay="auto"
              onChange={this.handleMinutesChange}
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles['submit']}
            size="large"
            endIcon={<SendIcon />}
            fullWidth
          >
            开始游戏
          </Button>
        </form>
      </div>
    );
  }
}

export default CreateGame;
