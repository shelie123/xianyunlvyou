/**
 * @desc 计算相隔时间
 * 
 * @params: 参数 | 属性说明 | 参考值
 * @params：dep_time | 出发时间 | 12：00
 * @params：arr_time | 到达时间 | 14：00
 * 
 * @return：相隔时间的字符串
 * 
 */

export function computeTime(arr_time, dep_time) {
  // 如果参数有一个是空值，直接返回
  if (!arr_time || !dep_time) return;

  // 获取时间，将时间跟分钟切割 得出，小时和分钟 如 14:00 切割之后 ["14":"00"]
  const arrTime = arr_time.split(":"); // 到达时间
  const depTime = dep_time.split(":"); // 起飞时间
  //   console.log(arrTime);

  //   如果是第二天到达，到达时间要加上24小时
  if (arrTime[0] < depTime[0]) {
    arrTime[0] += 24;
  }

  // 到达时间的分钟
  const arr = arrTime[0] * 60 + +arrTime[1];
  //   起飞时间的分钟
  const dep = depTime[0] * 60 + +depTime[1];
  //   console.log(arr);

  // 飞行时间的分钟
  const dis = arr - dep;
  //   console.log(dis);

  // 将飞行时间的分钟转成时间的小时与分钟
  //   飞行用了多少小时
  const hours = Math.floor(dis / 60);
  //   飞行用了多少分钟
  const min = dis % 60;

  return `${hours}小时${min}分钟`;

}
