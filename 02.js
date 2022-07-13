const grade = ["A", "B", "C", "D", "E"]

function inputNilai(nilai) {
    if(nilai >= 90) {
        return grade[0];
    }else if(nilai >= 80 && nilai <= 89){
        return grade[1];
    }else if(nilai >= 70 && nilai <= 79){
        return grade[2];
    }else if(nilai >= 60 && nilai <= 69){
        return grade[3];
    }else if(nilai <= 59){
        return grade[4];
    }
}


console.log(inputNilai(61)) // Output D
console.log(inputNilai(71)) // Output C
