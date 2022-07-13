function ganjilGenap(num) {
    if(num % 2 === 0) {
        return `${num} is Genap`
    }else{
        return `${num} is Ganjil`
    }
}


console.log(ganjilGenap(114)); // Genap
console.log(ganjilGenap(113)); // Ganjil