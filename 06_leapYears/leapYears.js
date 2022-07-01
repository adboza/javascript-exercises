const leapYears = function(year) {
    
    if (year%400 === 0){
        console.log(year);
        return true;
    }else if (year%100 === 0 ){
        console.log(year);
        return false;

    }else if (year%4 ===0){
        console.log(year);
        return true;
    }else{
        console.log(year);
        return false;
    }

};

leapYears(1900);

// Do not edit below this line
module.exports = leapYears;
