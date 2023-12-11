let dataSet = new Array;

function addData(min, h, d, m, y, v) {
    list = {minute: min, hour: h, day: d, month: m, year: y, value: v};
    dataSet.push(list);
}

let min = 0;
let h = 0;
let d = 1;
let m = 0;
let y = 2023;
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function createData() {
    dataSet.length = 0;
    min = 0;
    h = 0;
    d = 1;
    m = 0;
    y = 2023;
    for (let i = 0; i < 35040; i++) {
        addData(min, h, d, m + 1, y, Math.floor(Math.random() * 10) + 20);
        min += 15;
        if (min >= 60) {
            min = 0;
            h++;
            if (h >= 24) {
                h = 0;
                d++;
                if (d > months[m]) {
                    d = 1;
                    m++;
                    if (m >= months.length) {
                        m = 0;
                        y++;
                    }
                }
            }
        }
    }
}

createData();