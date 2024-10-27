let r = parseInt(prompt("Enter number of rows"));
function pyramid(r) {
    let array = '';
    let i = 0;  
    while (i < r) {
        array += (i * 2 + 1) + ' ';
        console.log(array);
        i++;
    }
}
pyramid(r);
