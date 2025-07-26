for (let i = 0; i <= 5; i++) console.log(i); // 0 to 5
for (let i = 5; i >= 0; i--) console.log(i); // 5 to 



let i = 0;
while (i <= 5) {
    if(i==3){
        i++;
        continue;
    }
    console.log(i);
    i++;
}

do {
    if (i == 3) {
       break;
    }
  console.log(i);
  i++;
} while (i <= 5);