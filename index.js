const userInput = prompt('Enter array elements (only numbers with "," between)!')
if(userInput){
    const arr = userInput.split(',')
    let sum = 0;
    for(let i=0; i <= arr.length - 1; i++){
        if(arr[i] === ''){
            arr.splice(arr[i],1)
        } else if(isNaN(arr[i])){
            alert(`"${arr[i]}" not a number, I wouldn't sum up this element`)
        } else if(!Number.isInteger(+arr[i])){
            alert(`"${arr[i]}" isn't integer, I wouldn't sum up this element`)
        } else {
            sum += parseFloat(arr[i])
        }
    }
    alert(sum)
}