function kabisat(year){
    if(year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
        return `${year} is Kabisat`;
    }else {
        return `${year} is Not Kabisat`;
    }
}

console.log(kabisat(1900)); // Bukan Kabisat
console.log(kabisat(2000)); // Kabisat
console.log(kabisat(2001)); // Bukan Kabisat
console.log(kabisat(2016)); // Kabisat