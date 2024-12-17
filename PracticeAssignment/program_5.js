// Write a program to print numbers 1-10 with a delay of 1 second between each number.


function new_func() {
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}

new_func();

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


