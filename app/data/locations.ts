import {Conference} from '../models/conference.model';
import {Hotel} from '../models/hotel.model';
import {Sight} from '../models/sight.model';

//http://www.pragueconvention.cz/plan-your-event/conference-facilities/
export const CONFERENCESITES: Conference[] = [
    new Conference('Prague Congress Centre', 14.428664445877075, 50.062173759085155),
    new Conference('City Conference Center', 14.438663721084595, 50.04090062832067),
    new Conference('Conference Centre u Hájků', 14.436107575893402, 50.09013722160664)
];

export const HOTELS: Hotel[] = [
	new Hotel('Hilton Prague', 14.43973, 50.09260),
	new Hotel('Hotel Ametyst', 14.43630, 50.07060),
	new Hotel('Hotel International Prague', 14.39375, 50.10937)
];

export const SIGHTS: Sight[] = [
	new Sight('Břevnov Monastery', 14.356539845466614, 50.0849726539924),
	new Sight('Charles Bridge', 14.411466121673584, 50.0865009145791),
	new Sight('Old Town Square', 14.420725107192993, 50.087554146889936),
	new Sight('St. Vitus Cathedral', 14.400640726089478, 50.09085825491626)
];
