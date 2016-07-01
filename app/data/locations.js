"use strict";
var conference_model_1 = require('../models/conference.model');
var hotel_model_1 = require('../models/hotel.model');
var sight_model_1 = require('../models/sight.model');
//http://www.pragueconvention.cz/plan-your-event/conference-facilities/
exports.CONFERENCESITES = [
    new conference_model_1.Conference('Prague Congress Centre', 14.428664445877075, 50.062173759085155),
    new conference_model_1.Conference('City Conference Center', 14.438663721084595, 50.04090062832067),
    new conference_model_1.Conference('Conference Centre u Hájků', 14.436107575893402, 50.09013722160664)
];
exports.HOTELS = [
    new hotel_model_1.Hotel('Hilton Prague', 14.43973, 50.09260),
    new hotel_model_1.Hotel('Hotel Ametyst', 14.43630, 50.07060),
    new hotel_model_1.Hotel('Hotel International Prague', 14.39375, 50.10937)
];
exports.SIGHTS = [
    new sight_model_1.Sight('Břevnov Monastery', 14.356539845466614, 50.0849726539924),
    new sight_model_1.Sight('Charles Bridge', 14.411466121673584, 50.0865009145791),
    new sight_model_1.Sight('Old Town Square', 14.420725107192993, 50.087554146889936),
    new sight_model_1.Sight('St. Vitus Cathedral', 14.400640726089478, 50.09085825491626)
];
//# sourceMappingURL=locations.js.map