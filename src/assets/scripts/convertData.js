import { isString } from 'lodash';
/**
 * 转换Base64的题目数据字符串至JSON
 *
 * @param {string} dataBase64Str - Base64的题目数据
 * @return {object, null}
 *
 * @example
 * ```js
 * const [trueOrFalseQuestions, choiceQuestions] = convertData('...');
 *
 * [
 *  [
 *    questionContent, // 题目文本
 *    questionAnswer, // 题目答案
 *  ],
 *  ...restQuestions
 * ] = trueOrFalseQuestions // 判断题
 *
 * [
 *  [
 *    questionContent, // 题目文本
 *    questionOptions, // 题目选项
 *    questionAnswer, // 题目答案 - [0，1，2，3] >>> ['A', 'B', 'C', 'D']
 *  ],
 *  ...restQuestions
 * ] = choiceQuestions // 判断题
 * ```
 */
export default (dataBase64Str = '') => {
  let result = null;
  if (isString(dataBase64Str) && dataBase64Str.length !== 0) {
    try {
      let decodeBase64Data = atob(dataBase64Str);
      var decodeURIData = decodeURIComponent(decodeBase64Data);
      result = JSON.parse(decodeURIData);
    } catch (e) {
      throw new Error(`convertData error: ${JSON.stringify(e)}`);
    }
  }
  return result;
};
