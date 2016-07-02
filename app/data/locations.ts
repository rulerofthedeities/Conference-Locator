import {Conference} from '../models/conference.model';
import {Hotel} from '../models/hotel.model';
import {Sight} from '../models/sight.model';

//http://www.pragueconvention.cz/plan-your-event/conference-facilities/
//http://en.convention.parisinfo.com/events/our-members/conference-and-exhibition-centres

export const CONFERENCESITES: { [city: string]: Conference[]; } = { };
CONFERENCESITES['paris'] = [
    new Conference(2.2883641719818115, 48.831746813763154),
    new Conference(2.388002872467041, 48.89580198301541)
];
CONFERENCESITES['paris'][0].name = 'Le Palais des Congrès de Paris';
CONFERENCESITES['paris'][1].name = 'Centre des Congrès de la Villette';

CONFERENCESITES['prague'] = [
    new Conference(14.428664445877075, 50.062173759085155),
    new Conference(14.438663721084595, 50.04090062832067),
    new Conference(14.436107575893402, 50.09013722160664)
];
CONFERENCESITES['prague'][0].name = 'Prague Congress Centre';
CONFERENCESITES['prague'][1].name = 'City Conference Center';
CONFERENCESITES['prague'][2].name = 'Conference Centre u Hájků';



export const HOTELS: Hotel[] = [
	new Hotel(14.43973, 50.09260),
	new Hotel(14.43630, 50.07060),
	new Hotel(14.39375, 50.10937)
];

export const SIGHTS: Sight[] = [
	new Sight(14.356539845466614, 50.0849726539924),
	new Sight(14.411466121673584, 50.0865009145791),
	new Sight(14.420725107192993, 50.087554146889936),
	new Sight(14.400640726089478, 50.09085825491626)
];
