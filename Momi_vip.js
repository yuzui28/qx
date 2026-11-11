/*
 * 薏米(momi) 会员 VIP 解锁
 * 拦截接口:
 *   POST api.momisapp.com/api/auth/me
 *   POST api.momisapp.com/api/payment/membership/plans
 */
let obj = JSON.parse($response.body);
if (obj && obj.data && obj.data.user) {
  obj.data.user.isVip = true;
  obj.data.user.vipType = 1;
  obj.data.user.vipExpireAt = 4102444800000; // 2099-12-31 毫秒时间戳
  $done({ body: JSON.stringify(obj) });
} else {
  $done({});
}
