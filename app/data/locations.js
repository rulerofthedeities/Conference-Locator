"use strict";
var conference_model_1 = require('../models/conference.model');
var hotel_model_1 = require('../models/hotel.model');
var sight_model_1 = require('../models/sight.model');
//http://www.pragueconvention.cz/plan-your-event/conference-facilities/
//http://en.convention.parisinfo.com/events/our-members/conference-and-exhibition-centres
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
exports.HOTELS = [
    new hotel_model_1.Hotel(14.43973, 50.09260),
    new hotel_model_1.Hotel(14.43630, 50.07060),
    new hotel_model_1.Hotel(14.39375, 50.10937)
];
exports.SIGHTS = [
    new sight_model_1.Sight(14.356539845466614, 50.0849726539924),
    new sight_model_1.Sight(14.411466121673584, 50.0865009145791),
    new sight_model_1.Sight(14.420725107192993, 50.087554146889936),
    new sight_model_1.Sight(14.400640726089478, 50.09085825491626)
];
//# sourceMappingURL=locations.js.map