let obj = JSON.parse($response.body);
if (obj && obj.data && obj.data.user) {
  obj.data.user.isVip = true;
  obj.data.user.vipType = 1;
  obj.data.user.vipExpireAt = 4102444800000;
  $done({ body: JSON.stringify(obj) });
} else {
  $done({});
}
