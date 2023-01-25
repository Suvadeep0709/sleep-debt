const getSleephours=day=>{
    switch (day) {
        case 'sunday':
            return 8;
            break;
        case 'monday':
            return 10;
            break;
        case 'tuesday':
            return 10;
            break;
        case 'wednesday':
            return 10;
            break;
        case 'thursday':
            return 10;
            break;
        case 'friday':
            return 12;
            break;
        case 'saturday':
            return 8;
        default:
            return 'Please enter a day in a week';
            break;

    }
};
const getActualSleepHours=()=>
getSleephours('sunday')+getSleephours('monday')+getSleephours('tuesday')
+getSleephours('wednesday')+getSleephours('thursday')+getSleephours('friday')
+getSleephours('saturday');

const getIdealSleepHours=()=>{
    const idealHours=8;
    return idealHours*7;
};
const calculateSleepDebt=()=>{
    const actualSleepHours=getActualSleepHours();
    const idealSleepHours=getIdealSleepHours();
    if(actualSleepHours===idealSleepHours){
        console.log('You got the perfect amount of sleep');
    }
    else if(actualSleepHours>idealSleepHours){
        console.log('You got more sleep than needed');
    }
    else{
        console.log('You should get some rest');
    }
};
calculateSleepDebt();