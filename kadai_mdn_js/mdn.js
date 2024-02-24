const date = new Date();
const [month, day, year] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
];
    console.log(date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日');
