function adjacentElementsProduct(inputArray) {
    let max = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        const elem1 = inputArray[i];
        const elem2 = inputArray[i + 1];
        const product = elem1 * elem2;
        if (product > max) {
            max = product;
        }
    }
    console.log(max)
}
let arr =[2, 3, -5, -2, 4]
adjacentElementsProduct(arr)