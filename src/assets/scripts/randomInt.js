/**
 * 随机正整数
 *
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 *
 * @returns {number}
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default (min, max) => Math.round(Math.random() * (max - min)) + min;
