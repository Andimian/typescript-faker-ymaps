import {User} from './User';
// import {Company} from './Company';
import {CustomMap} from "./CustomMap";
import {Company} from "./Company";


const user = new User();
const company = new Company();
ymaps.ready(function () {
    const map = new CustomMap("YMapsID");
    map.addMarker(user);
    map.addMarker(company);
});


