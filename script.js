let a, b, c;
a = 10;
b = 20;
c = 30;

if(a>b) {
    if(a>c) {
        console.log(a);
    } else {
        console.log(c);
    }
} else if(b>a) {
    if(b>c) {
        console.log(b);
    } else {
        console.log(c);
    }
} else {
    console.log(c);
}

(a>b)?(a>c)?console.log(a):console.log(c):(b>a)?(b>c)?console.log(b):console.log(c):console.log(c);