const day = 'COOL'

switch (day) {

    case 'SAT':
    case 'SUN':
        console.log('Weekend')
        break;

    case 'MON':
        console.log('Monday');
        break;

    case 'TUES':
        console.log('Tuesday');
        break;

    case 'WED':
        console.log('Wednesday');
        break;

    case 'Thur':
        console.log('Thursday');
        break;

    case 'Fri':
        console.log('Friday');

    default:
        console.log('404 ERROR NO DAY EXISTS');
        break;


}