bài 2
function divisor(n){
    let result = [];
    let count = 0;
    while (count < 15){
     if (n % 3 == 0){
         result.push(n);
         count++
     }
     n++;
    }
    return result;
}
let n = +prompt('nhập số bắt đầu');
document.write('số chia hết cho 3 là : ' + divisor(n));
//bài 1
function integer(x){
    let resutl = 1;
    if(x <= 0){
        alert(" lớn hơn 0");
    }else {
        for (let i = 1; i <= x; i++) {
            resutl = resutl * i;
        }
    }
    return resutl;
}
let x = prompt("Nhập sô dương vào");
console.log(integer(x));

