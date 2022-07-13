function rating(age) {
    if(age >= 21) {
        return 'Dewasa';
    }
    else if(age >= 13) {
        return 'Remaja';
    }
    else if(age >= 9) {
        return 'Bimbingan Orang Tua';
    }
    else if(age < 9 ) {
        return 'Semua Usia';
    }
}

console.log(rating(15)); // remaja
console.log(rating(32)); // Dewasa