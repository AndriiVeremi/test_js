// // написати скрипт, який провіряє чи число помішається в відрізок зазначенийв x1 x2
// // до x1
// // після x2
// // від x1 до x2
// // до x1 чи після x2

// const x1 = 10;
// const x2 = 30;
// const numb = 50;

// console.log(`Число ${numb} попадає в відрізок до ${x1}`, numb < x1);
// console.log(`Число ${numb} попадає в відрізок до ${x2}`, numb > x2);

// console.log(`Число ${numb} попадає в відрізок від ${x1} до ${x2}`, numb > x1 && numb < x2);
//  const res1 = numb > x1 && numb < x2;
// // // numb > 10 && numb < 30;
// // 50 > 10 && 50 < 30;
// // true && false; ---> вертає false

// console.log(`Число ${numb} попадає в відрізок до ${x1} чи після ${x2}`, numb < x1 || numb > x2);
//  const res2 = numb > x1 || numb < x2;
// // numb > 10 || numb < 30;
// // 50 > 10 || 50 < 30;
// // true || false; ---> вертає true






// // написати скрипт, який відкриє чат з користувачем
// // користувач повинен бути
// // - другом
// // - онлайн
// // - без режиму не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log(canOpenChat);






// // написати скрипт, перевірки підпискі користувача придоступі до контенту
// // є 3 типи підпискі free, pro, vip
// // доступ можуть получити тільки pro, vip

// const sub = 'pro';   
// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log(' Чие доступ до контенту?', canAccessContent);