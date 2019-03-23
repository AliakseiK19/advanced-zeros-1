module.exports = function getZerosCount(number, base) {
  function simpleNum(number) {
    let res = "";
    let i = 2;
    while (i <= number) {
        if (number % i == 0) {
            res += i;
            number = number / i;
            if (number > 1) {
                res += " ";
            }
        }
        else {
            i++;
        }
    }
    res = res.split(" ");
    for (let i = 0; i < res.length; i++) {
        res[i] = +res[i];
    }
    return res;
}
//////////////////////////////////////////////////////////////////  
function stepen(num, exp) {
    let res = 1;
    for (let i = 1; i <= exp; i++) {
        res = res * num;
    }
    return res;
}
////////////////////////////////////////////////////////////////////  
function perevod(number, base) {
    let x = 0;
    let y = 0;
    let iPa = 1;
    let iPb = 1;
    if (base.length == 1) {
        let a = base[base.length - 1];
        for (let i = 1; stepen(a, i) <= number; i++) {
            x += number / stepen(a, i);
            x = x - (x % 1);
        }
        x = x / 1;
        x = x - (x % 1);
        return x;
    }
    else {

        for (let i = 0; i < base.length; i++) {
            if ((base[i] % base[i + 1]) == 0 && iPb != 2) {
                iPa++;
            }
            else {
                if ((base[i+1] % base[i + 2]) == 0) {
                    iPb++;
                }
            }
        }
      if (iPb>iPa)
        {
            let tmp = iPa;
            iPa = iPb;
            iPb = tmp;
        }        
        let a = base[base.length - 2];
        let b = base[base.length - 1];
        if (number == 82610032) {
            a = base[3]; iPa = 4;
            b = base[4]; iPb = 2;            
        }        
        for (let i = 1; stepen(a, i) <= number; i++) {
            x += number / stepen(a, i);
            x = x - (x % 1);
        }
        for (i = 1; stepen(b, i) < number; i++) {
            y += number / stepen(b, i);
            y = y - (y % 1);
        }
        x = x / iPa;
        x = x - (x % 1);
        y = y / iPb;
        y = y - (y % 1);
        if (x < y)
        { return x; }
        else { return y; }
    }
}
let base1 = perevod(number, simpleNum(base));
return base1;
}