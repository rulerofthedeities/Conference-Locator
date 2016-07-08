"use strict";
var conference_model_1 = require('../models/conference.model');
var hotel_model_1 = require('../models/hotel.model');
var sight_model_1 = require('../models/sight.model');
//http://www.pragueconvention.cz/plan-your-event/conference-facilities/
//http://en.convention.parisinfo.com/events/our-members/conference-and-exhibition-centres
//Conference centers
exports.CONFERENCESITES = {};
exports.CONFERENCESITES['paris'] = [
    new conference_model_1.Conference(2.2883641719818115, 48.831746813763154),
    new conference_model_1.Conference(2.388002872467041, 48.89580198301541)
];
exports.CONFERENCESITES['paris'][0].name = 'Le Palais des Congrès de Paris';
exports.CONFERENCESITES['paris'][1].name = 'Centre des Congrès de la Villette';
exports.CONFERENCESITES['prague'] = [
    new conference_model_1.Conference(14.428664445877075, 50.062173759085155),
    new conference_model_1.Conference(14.438663721084595, 50.04090062832067),
    new conference_model_1.Conference(14.436107575893402, 50.09013722160664)
];
exports.CONFERENCESITES['prague'][0].name = 'Prague Congress Centre';
exports.CONFERENCESITES['prague'][1].name = 'City Conference Center';
exports.CONFERENCESITES['prague'][2].name = 'Conference Centre u Hájků';
//Hotels
exports.HOTELS = [
    new hotel_model_1.Hotel(14.43973, 50.09260),
    new hotel_model_1.Hotel(14.43630, 50.07060),
    new hotel_model_1.Hotel(14.39375, 50.10937),
    new hotel_model_1.Hotel(2.32538, 48.87315),
    new hotel_model_1.Hotel(2.32459, 48.88144),
    new hotel_model_1.Hotel(2.34954, 48.84324)
];
exports.HOTELS[0].name = 'Hilton Prague';
exports.HOTELS[1].name = 'Hotel Ametyst';
exports.HOTELS[2].name = 'Hotel International Prague';
exports.HOTELS[3].name = 'Hotel Cordelia';
exports.HOTELS[4].name = 'Hôtel Elysées-Opéra';
exports.HOTELS[5].name = 'QUALYS-HOTEL Apolonia Paris';
//Sights
exports.SIGHTS = [
    new sight_model_1.Sight(14.356539845466614, 50.0849726539924),
    new sight_model_1.Sight(14.411466121673584, 50.0865009145791),
    new sight_model_1.Sight(14.420725107192993, 50.087554146889936),
    new sight_model_1.Sight(14.400640726089478, 50.09085825491626),
    new sight_model_1.Sight(2.294415235519409, 48.85831994216277),
    new sight_model_1.Sight(2.2950536012649536, 48.87373917228756),
    new sight_model_1.Sight(2.3358741402626038, 48.86062810043568)
];
exports.SIGHTS[0].name = 'Břevnov Monastery';
exports.SIGHTS[1].name = 'Charles Bridge';
exports.SIGHTS[2].name = 'Old Town Square';
exports.SIGHTS[3].name = 'St. Vitus Cathedral';
exports.SIGHTS[4].name = 'Eiffel Tower';
exports.SIGHTS[5].name = 'Arc de Triomphe';
exports.SIGHTS[6].name = 'Louvre Museum';
//# sourceMappingURL=locations.js.map