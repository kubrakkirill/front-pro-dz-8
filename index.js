const userInput = prompt('Enter array elements (only numbers with "," between)!');

if (userInput) {
    const arr = userInput.split(',');
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            arr.splice(i, 1);
            i--;
        } else if (isNaN(arr[i])) {
            alert(`"${arr[i]}" not a number, I wouldn't sum up this element`);
        } else if (!Number.isInteger(parseFloat(arr[i]))) {
            alert(`"${arr[i]}" isn't an integer, I wouldn't sum up this element`);
        } else {
            sum += parseFloat(arr[i]);
        }
    }

    alert(sum);
}
