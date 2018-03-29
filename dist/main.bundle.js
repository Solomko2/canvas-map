webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-canvas {\n  /*max-width: 1440px;*/\n  /*margin: 0 auto;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"root\">\n  <div style=\"position: fixed; top:0; left: 0; z-index: 9999\">\n    <button type=\"button\" (click)=\"changeMap();\">map 1</button>\n    <button type=\"button\" (click)=\"changeMap2();\">map 2</button>\n    <button type=\"button\" (click)=\"changeMap3();\">map 3</button>\n  </div>\n\n  <div class=\"container-canvas\">\n    <app-floor-canvas [options]=\"options\"\n                      colorPoint=\"cornflowerblue\"></app-floor-canvas>\n  </div>\n\n\n  <!--<h1>SVG</h1>-->\n  <!--<img src=\"/assets/img/1x-svg.svg\" alt=\"sss\">-->\n\n  <!--<h1>CANVAS NATIVE</h1>-->\n  <!--<app-floor-canvas-native *ngIf=\"options\" [options]=\"options\"></app-floor-canvas-native>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.options = {
            imgSrc: '/assets/img/3_floor.svg',
            points: [
                {
                    'average_occupancy': 17,
                    'seat_name': '5-18',
                    'id': '5a07775f4a5d280d601ad52b',
                    'seat_coordinate': { 'x': '1125', 'y': '430' },
                    'plugwise_id': 8879
                },
                {
                    'average_occupancy': 3,
                    'seat_name': '5-18',
                    'id': '5a07775f4a5d280d601ad52b',
                    'seat_coordinate': { 'x': '918.25', 'y': '616.0955200195312' },
                    'plugwise_id': 887
                }, {
                    'average_occupancy': 2,
                    'seat_name': '5-7',
                    'id': '5a0777cc4a5d280d601ada0a',
                    'seat_coordinate': { 'x': '936.645263671875', 'y': '614.4513244628906' },
                    'plugwise_id': 877
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-20',
                    'id': '5a0777d84a5d280d601adafe',
                    'seat_coordinate': { 'x': '67.41927337646484', 'y': '523.5531005859375' },
                    'plugwise_id': 886
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-1',
                    'id': '5a07784a4a5d280d601ade02',
                    'seat_coordinate': { 'x': '359.25982666015625', 'y': '554.350341796875' },
                    'plugwise_id': 899
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-2',
                    'id': '5a0778c54a5d280d601ae108',
                    'seat_coordinate': { 'x': '363.659423828125', 'y': '589.5472412109375' },
                    'plugwise_id': 903
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-17',
                    'id': '5a07794d4a5d280d601ae40d',
                    'seat_coordinate': { 'x': '161.2775421142578', 'y': '566.0826416015625' },
                    'plugwise_id': 905
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-19',
                    'id': '5a0779b74a5d280d601ae714',
                    'seat_coordinate': { 'x': '65.9527359008789', 'y': '571.9487915039062' },
                    'plugwise_id': 904
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-21',
                    'id': '5a077a2f4a5d280d601aea1e',
                    'seat_coordinate': { 'x': '96.7499771118164', 'y': '526.4862060546875' },
                    'plugwise_id': 884
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-22',
                    'id': '5a077ab04a5d280d601aed29',
                    'seat_coordinate': { 'x': '159.81100463867188', 'y': '525.0196533203125' },
                    'plugwise_id': 893
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-23',
                    'id': '5a077b1b4a5d280d601af035',
                    'seat_coordinate': { 'x': '196.47438049316406', 'y': '526.4862060546875' },
                    'plugwise_id': 898
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-24',
                    'id': '5a077b944a5d280d601af342',
                    'seat_coordinate': { 'x': '230.20469665527344', 'y': '526.4862060546875' },
                    'plugwise_id': 881
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-26',
                    'id': '5a077c0e4a5d280d601af650',
                    'seat_coordinate': { 'x': '159.81100463867188', 'y': '485.4232177734375' },
                    'plugwise_id': 889
                }, {
                    'average_occupancy': 2,
                    'seat_name': '5-11',
                    'id': '5a077ca14a5d280d601af955',
                    'seat_coordinate': { 'x': '275.66729736328125', 'y': '695.1377563476562' },
                    'plugwise_id': 909
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-14',
                    'id': '5a077d014a5d280d601afc5b',
                    'seat_coordinate': { 'x': '230.20469665527344', 'y': '623.2775268554688' },
                    'plugwise_id': 912
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-25',
                    'id': '5a077d744a5d280d601aff6b',
                    'seat_coordinate': { 'x': '196.47438049316406', 'y': '488.3562927246094' },
                    'plugwise_id': 911
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-27',
                    'id': '5a077df14a5d280d601b027d',
                    'seat_coordinate': { 'x': '102.61611938476562', 'y': '489.82281494140625' },
                    'plugwise_id': 882
                }, {
                    'average_occupancy': 5,
                    'seat_name': '5-29',
                    'id': '5a077e654a5d280d601b0590',
                    'seat_coordinate': { 'x': '65.9527359008789', 'y': '442.8936767578125' },
                    'plugwise_id': 914
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-10',
                    'id': '5a077edb4a5d280d601b0895',
                    'seat_coordinate': { 'x': '275.66729736328125', 'y': '659.94091796875' },
                    'plugwise_id': 923
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-12',
                    'id': '5a077f534a5d280d601b0b9c',
                    'seat_coordinate': { 'x': '233.1377716064453', 'y': '690.7381591796875' },
                    'plugwise_id': 921
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-13',
                    'id': '5a0780454a5d280d601b11aa',
                    'seat_coordinate': { 'x': '233.1377716064453', 'y': '657.0078735351562' },
                    'plugwise_id': 928
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-15',
                    'id': '5a0780dc4a5d280d601b14b4',
                    'seat_coordinate': { 'x': '231.67123413085938', 'y': '566.0826416015625' },
                    'plugwise_id': 930
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-16',
                    'id': '5a0781144a5d280d601b17bf',
                    'seat_coordinate': { 'x': '195.0078582763672', 'y': '573.4153442382812' },
                    'plugwise_id': 931
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-28',
                    'id': '5a07857b4a5d280d601b1ad7',
                    'seat_coordinate': { 'x': '61.553131103515625', 'y': '485.4232177734375' },
                    'plugwise_id': 926
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-3',
                    'id': '5a078f444a5d280d601b1df1',
                    'seat_coordinate': { 'x': '362.19287109375', 'y': '657.0078735351562' },
                    'plugwise_id': 891
                }, {
                    'average_occupancy': 2,
                    'seat_name': '5-30',
                    'id': '5a0793c14a5d280d601b210c',
                    'seat_coordinate': { 'x': '101.14958953857422', 'y': '445.8267517089844' },
                    'plugwise_id': 913
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-32',
                    'id': '5a08586c4a5d280d601c3740',
                    'seat_coordinate': { 'x': '196.47438049316406', 'y': '441.4271545410156' },
                    'plugwise_id': 918
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-33',
                    'id': '5a0858e94a5d280d601c3dad',
                    'seat_coordinate': { 'x': '192.0747833251953', 'y': '403.2972412109375' },
                    'plugwise_id': 925
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-34',
                    'id': '5a0858f84a5d280d601c3e0a',
                    'seat_coordinate': { 'x': '165.67713928222656', 'y': '404.7637634277344' },
                    'plugwise_id': 927
                }, {
                    'average_occupancy': 2,
                    'seat_name': '5-35',
                    'id': '5a08595b4a5d280d601c41a5',
                    'seat_coordinate': { 'x': '99.68305206298828', 'y': '403.2972412109375' },
                    'plugwise_id': 910
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-36',
                    'id': '5a0859d44a5d280d601c4541',
                    'seat_coordinate': { 'x': '64.4862060546875', 'y': '404.7637634277344' },
                    'plugwise_id': 924
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-37',
                    'id': '5a085a4a4a5d280d601c48de',
                    'seat_coordinate': { 'x': '63.01966857910156', 'y': '357.8346252441406' },
                    'plugwise_id': 908
                }, {
                    'average_occupancy': 2,
                    'seat_name': '5-38',
                    'id': '5a085ac34a5d280d601c4c7c',
                    'seat_coordinate': { 'x': '96.7499771118164', 'y': '359.3011779785156' },
                    'plugwise_id': 916
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-39',
                    'id': '5a085b394a5d280d601c501b',
                    'seat_coordinate': { 'x': '165.67713928222656', 'y': '360.7677001953125' },
                    'plugwise_id': 917
                }, {
                    'average_occupancy': 6,
                    'seat_name': '5-4',
                    'id': '5a085bb34a5d280d601c53bb',
                    'seat_coordinate': { 'x': '360.7263488769531', 'y': '695.1377563476562' },
                    'plugwise_id': 922
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-40',
                    'id': '5a085c2c4a5d280d601c575c',
                    'seat_coordinate': { 'x': '199.40745544433594', 'y': '359.3011779785156' },
                    'plugwise_id': 920
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-41',
                    'id': '5a085e3b4a5d280d601c5d06',
                    'seat_coordinate': { 'x': '199.40745544433594', 'y': '321.1712341308594' },
                    'plugwise_id': 900
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-42',
                    'id': '5a085e824a5d280d601c60aa',
                    'seat_coordinate': { 'x': '168.61021423339844', 'y': '318.2381896972656' },
                    'plugwise_id': 885
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-43',
                    'id': '5a085f734a5d280d601c645e',
                    'seat_coordinate': { 'x': '139.27951049804688', 'y': '319.7047119140625' },
                    'plugwise_id': 895
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-44',
                    'id': '5a085fea4a5d280d601c6805',
                    'seat_coordinate': { 'x': '102.61611938476562', 'y': '321.1712341308594' },
                    'plugwise_id': 897
                }, {
                    'average_occupancy': 5,
                    'seat_name': '5-45',
                    'id': '5a0860654a5d280d601c6bad',
                    'seat_coordinate': { 'x': '107.01573181152344', 'y': '277.1751708984375' },
                    'plugwise_id': 906
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-47',
                    'id': '5a0860d94a5d280d601c6f56',
                    'seat_coordinate': { 'x': '173.00982666015625', 'y': '272.77557373046875' },
                    'plugwise_id': 902
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-48',
                    'id': '5a08615a4a5d280d601c7300',
                    'seat_coordinate': { 'x': '205.2736053466797', 'y': '277.1751708984375' },
                    'plugwise_id': 894
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-5',
                    'id': '5a0861cc4a5d280d601c76ab',
                    'seat_coordinate': { 'x': '313.7972106933594', 'y': '690.7381591796875' },
                    'plugwise_id': 907
                }, {
                    'average_occupancy': 0,
                    'seat_name': '5-50',
                    'id': '5a0862434a5d280d601c7a57',
                    'seat_coordinate': { 'x': '362.19287109375', 'y': '161.3188934326172' },
                    'plugwise_id': 888
                }, {
                    'average_occupancy': 0,
                    'seat_name': '5-51',
                    'id': '5a0862ba4a5d280d601c7e04',
                    'seat_coordinate': { 'x': '365.1259460449219', 'y': '126.12203979492188' },
                    'plugwise_id': 901
                }, {
                    'average_occupancy': 0,
                    'seat_name': '5-52',
                    'id': '5a0863334a5d280d601c81b2',
                    'seat_coordinate': { 'x': '363.659423828125', 'y': '96.79133605957031' },
                    'plugwise_id': 896
                }, {
                    'average_occupancy': 1,
                    'seat_name': '5-53',
                    'id': '5a0863ab4a5d280d601c8561',
                    'seat_coordinate': { 'x': '363.659423828125', 'y': '67.46062469482422' },
                    'plugwise_id': 883
                }, {
                    'average_occupancy': 0,
                    'seat_name': '5-54',
                    'id': '5a0864274a5d280d601c8911',
                    'seat_coordinate': { 'x': '417.9212341308594', 'y': '67.46062469482422' },
                    'plugwise_id': 890
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-6',
                    'id': '5a0864984a5d280d601c8cc2',
                    'seat_coordinate': { 'x': '316.73028564453125', 'y': '659.94091796875' },
                    'plugwise_id': 929
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-8',
                    'id': '5a08658a4a5d280d601c90a2',
                    'seat_coordinate': { 'x': '315.2637634277344', 'y': '552.8838500976562' },
                    'plugwise_id': 919
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-9',
                    'id': '5a0866064a5d280d601c9457',
                    'seat_coordinate': { 'x': '275.66729736328125', 'y': '621.8109741210938' },
                    'plugwise_id': 915
                }, {
                    'average_occupancy': 0,
                    'seat_name': '5-55',
                    'id': '5a254da89fb11d3bd7c290bc',
                    'seat_coordinate': { 'x': '417.63018798828125', 'y': '100.449462890625' },
                    'plugwise_id': 1171
                }, {
                    'average_occupancy': 0,
                    'seat_name': '5-56',
                    'id': '5a2554279fb11d3bd7c290bf',
                    'seat_coordinate': { 'x': '419.02532958984375', 'y': '132.53746032714844' },
                    'plugwise_id': 1170
                }, {
                    'average_occupancy': 0,
                    'seat_name': '5-57',
                    'id': '5a2555419fb11d3bd7c290c0',
                    'seat_coordinate': { 'x': '419.02532958984375', 'y': '159.04495239257812' },
                    'plugwise_id': 1169
                }, {
                    'average_occupancy': 0,
                    'seat_name': '5-58',
                    'id': '5a25558b9fb11d3bd7c290c1',
                    'seat_coordinate': { 'x': '419.02532958984375', 'y': '188.3426971435547' },
                    'plugwise_id': 1172
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-62',
                    'id': '5a2567569fb11d3bd7c290c3',
                    'seat_coordinate': { 'x': '953.3605346679688', 'y': '66.96629333496094' },
                    'plugwise_id': 1142
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-61',
                    'id': '5a2567b29fb11d3bd7c290c4',
                    'seat_coordinate': { 'x': '953.3605346679688', 'y': '103.23970031738281' },
                    'plugwise_id': 1139
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-63',
                    'id': '5a2567f19fb11d3bd7c290c5',
                    'seat_coordinate': { 'x': '998.0046997070312', 'y': '65.57115936279297' },
                    'plugwise_id': 1144
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-67',
                    'id': '5a25696d9fb11d3bd7c290c6',
                    'seat_coordinate': { 'x': '1035.67333984375', 'y': '65.57115936279297' },
                    'plugwise_id': 1156
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-73',
                    'id': '5a2569af9fb11d3bd7c290c7',
                    'seat_coordinate': { 'x': '1080.3173828125', 'y': '100.4494400024414' },
                    'plugwise_id': 1161
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-74',
                    'id': '5a2569e39fb11d3bd7c290c8',
                    'seat_coordinate': { 'x': '1078.92236328125', 'y': '66.96629333496094' },
                    'plugwise_id': 1163
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-60',
                    'id': '5a256a289fb11d3bd7c290c9',
                    'seat_coordinate': { 'x': '953.3605346679688', 'y': '170.20599365234375' },
                    'plugwise_id': 1138
                }, {
                    'average_occupancy': 6,
                    'seat_name': '5-65',
                    'id': '5a256a5d9fb11d3bd7c290ca',
                    'seat_coordinate': { 'x': '999.3998413085938', 'y': '171.6011199951172' },
                    'plugwise_id': 1154
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-66',
                    'id': '5a256a979fb11d3bd7c290cb',
                    'seat_coordinate': { 'x': '995.2144165039062', 'y': '206.47940063476562' },
                    'plugwise_id': 876
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-70',
                    'id': '5a256ad59fb11d3bd7c290cc',
                    'seat_coordinate': { 'x': '1032.883056640625', 'y': '203.68914794921875' },
                    'plugwise_id': 1162
                }, {
                    'average_occupancy': 5,
                    'seat_name': '5-71',
                    'id': '5a256b109fb11d3bd7c290cd',
                    'seat_coordinate': { 'x': '1078.92236328125', 'y': '200.8988800048828' },
                    'plugwise_id': 1152
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-75',
                    'id': '5a256b4d9fb11d3bd7c290ce',
                    'seat_coordinate': { 'x': '1117.986083984375', 'y': '103.23970031738281' },
                    'plugwise_id': 1159
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-82',
                    'id': '5a256b8c9fb11d3bd7c290cf',
                    'seat_coordinate': { 'x': '1162.630126953125', 'y': '104.63483428955078' },
                    'plugwise_id': 1146
                }, {
                    'average_occupancy': 5,
                    'seat_name': '5-76',
                    'id': '5a256d039fb11d3bd7c290d1',
                    'seat_coordinate': { 'x': '1115.19580078125', 'y': '139.5131072998047' },
                    'plugwise_id': 1158
                }, {
                    'average_occupancy': 5,
                    'seat_name': '5-77',
                    'id': '5a256d579fb11d3bd7c290d2',
                    'seat_coordinate': { 'x': '1116.5908203125', 'y': '171.6011199951172' },
                    'plugwise_id': 1160
                }, {
                    'average_occupancy': 5,
                    'seat_name': '5-79',
                    'id': '5a256d8b9fb11d3bd7c290d3',
                    'seat_coordinate': { 'x': '1161.235107421875', 'y': '202.29400634765625' },
                    'plugwise_id': 1153
                }, {
                    'average_occupancy': 5,
                    'seat_name': '5-80',
                    'id': '5a256dd09fb11d3bd7c290d4',
                    'seat_coordinate': { 'x': '1165.42041015625', 'y': '172.9962615966797' },
                    'plugwise_id': 1155
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-85',
                    'id': '5a256e1b9fb11d3bd7c290d5',
                    'seat_coordinate': { 'x': '1210.064697265625', 'y': '223.22097778320312' },
                    'plugwise_id': 1141
                }, {
                    'average_occupancy': 6,
                    'seat_name': '5-86',
                    'id': '5a256e779fb11d3bd7c290d6',
                    'seat_coordinate': { 'x': '1247.733154296875', 'y': '224.61610412597656' },
                    'plugwise_id': 1164
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-87',
                    'id': '5a256ec59fb11d3bd7c290d7',
                    'seat_coordinate': { 'x': '1215.645263671875', 'y': '273.4457092285156' },
                    'plugwise_id': 1149
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-88',
                    'id': '5a256f069fb11d3bd7c290d8',
                    'seat_coordinate': { 'x': '1253.313720703125', 'y': '274.8408203125' },
                    'plugwise_id': 1150
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-89',
                    'id': '5a256f439fb11d3bd7c290d9',
                    'seat_coordinate': { 'x': '1215.645263671875', 'y': '316.69476318359375' },
                    'plugwise_id': 1145
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-90',
                    'id': '5a256f8e9fb11d3bd7c290da',
                    'seat_coordinate': { 'x': '1250.5234375', 'y': '322.2752990722656' },
                    'plugwise_id': 1151
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-91',
                    'id': '5a256fe99fb11d3bd7c290db',
                    'seat_coordinate': { 'x': '1215.645263671875', 'y': '386.4513244628906' },
                    'plugwise_id': 1147
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-92',
                    'id': '5a2570239fb11d3bd7c290dc',
                    'seat_coordinate': { 'x': '1247.733154296875', 'y': '387.846435546875' },
                    'plugwise_id': 1143
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-93',
                    'id': '5a2570529fb11d3bd7c290dd',
                    'seat_coordinate': { 'x': '1214.25', 'y': '431.09552001953125' },
                    'plugwise_id': 1148
                }, {
                    'average_occupancy': 6,
                    'seat_name': '5-94',
                    'id': '5a2570959fb11d3bd7c290de',
                    'seat_coordinate': { 'x': '1250.5234375', 'y': '431.09552001953125' },
                    'plugwise_id': 1140
                }, {
                    'average_occupancy': 4,
                    'seat_name': '5-81',
                    'id': '5a257e7820eda132b05901a5',
                    'seat_coordinate': { 'x': '1161.235107421875', 'y': '139.5131072998047' },
                    'plugwise_id': 1157
                }, {
                    'average_occupancy': 3,
                    'seat_name': '5-31',
                    'id': '5a7816fd2775221db91f0255',
                    'seat_coordinate': { 'x': '159.81100463867188', 'y': '441.4271545410156' },
                    'plugwise_id': 1176
                }
            ]
        };
        var res = {
            'status': 'success', 'data': {
                'seats': [
                    {
                        'average_occupancy': 12,
                        'seat_name': '5-18',
                        'id': '5a07775f4a5d280d601ad52b',
                        'seat_coordinate': { 'x': '901.0253295898438', 'y': '615.3426971435547' },
                        'plugwise_id': 8879
                    },
                    {
                        'average_occupancy': 3,
                        'seat_name': '5-18',
                        'id': '5a07775f4a5d280d601ad52b',
                        'seat_coordinate': { 'x': '918.25', 'y': '616.0955200195312' },
                        'plugwise_id': 887
                    }, {
                        'average_occupancy': 2,
                        'seat_name': '5-7',
                        'id': '5a0777cc4a5d280d601ada0a',
                        'seat_coordinate': { 'x': '936.645263671875', 'y': '614.4513244628906' },
                        'plugwise_id': 877
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-20',
                        'id': '5a0777d84a5d280d601adafe',
                        'seat_coordinate': { 'x': '67.41927337646484', 'y': '523.5531005859375' },
                        'plugwise_id': 886
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-1',
                        'id': '5a07784a4a5d280d601ade02',
                        'seat_coordinate': { 'x': '359.25982666015625', 'y': '554.350341796875' },
                        'plugwise_id': 899
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-2',
                        'id': '5a0778c54a5d280d601ae108',
                        'seat_coordinate': { 'x': '363.659423828125', 'y': '589.5472412109375' },
                        'plugwise_id': 903
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-17',
                        'id': '5a07794d4a5d280d601ae40d',
                        'seat_coordinate': { 'x': '161.2775421142578', 'y': '566.0826416015625' },
                        'plugwise_id': 905
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-19',
                        'id': '5a0779b74a5d280d601ae714',
                        'seat_coordinate': { 'x': '65.9527359008789', 'y': '571.9487915039062' },
                        'plugwise_id': 904
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-21',
                        'id': '5a077a2f4a5d280d601aea1e',
                        'seat_coordinate': { 'x': '96.7499771118164', 'y': '526.4862060546875' },
                        'plugwise_id': 884
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-22',
                        'id': '5a077ab04a5d280d601aed29',
                        'seat_coordinate': { 'x': '159.81100463867188', 'y': '525.0196533203125' },
                        'plugwise_id': 893
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-23',
                        'id': '5a077b1b4a5d280d601af035',
                        'seat_coordinate': { 'x': '196.47438049316406', 'y': '526.4862060546875' },
                        'plugwise_id': 898
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-24',
                        'id': '5a077b944a5d280d601af342',
                        'seat_coordinate': { 'x': '230.20469665527344', 'y': '526.4862060546875' },
                        'plugwise_id': 881
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-26',
                        'id': '5a077c0e4a5d280d601af650',
                        'seat_coordinate': { 'x': '159.81100463867188', 'y': '485.4232177734375' },
                        'plugwise_id': 889
                    }, {
                        'average_occupancy': 2,
                        'seat_name': '5-11',
                        'id': '5a077ca14a5d280d601af955',
                        'seat_coordinate': { 'x': '275.66729736328125', 'y': '695.1377563476562' },
                        'plugwise_id': 909
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-14',
                        'id': '5a077d014a5d280d601afc5b',
                        'seat_coordinate': { 'x': '230.20469665527344', 'y': '623.2775268554688' },
                        'plugwise_id': 912
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-25',
                        'id': '5a077d744a5d280d601aff6b',
                        'seat_coordinate': { 'x': '196.47438049316406', 'y': '488.3562927246094' },
                        'plugwise_id': 911
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-27',
                        'id': '5a077df14a5d280d601b027d',
                        'seat_coordinate': { 'x': '102.61611938476562', 'y': '489.82281494140625' },
                        'plugwise_id': 882
                    }, {
                        'average_occupancy': 5,
                        'seat_name': '5-29',
                        'id': '5a077e654a5d280d601b0590',
                        'seat_coordinate': { 'x': '65.9527359008789', 'y': '442.8936767578125' },
                        'plugwise_id': 914
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-10',
                        'id': '5a077edb4a5d280d601b0895',
                        'seat_coordinate': { 'x': '275.66729736328125', 'y': '659.94091796875' },
                        'plugwise_id': 923
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-12',
                        'id': '5a077f534a5d280d601b0b9c',
                        'seat_coordinate': { 'x': '233.1377716064453', 'y': '690.7381591796875' },
                        'plugwise_id': 921
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-13',
                        'id': '5a0780454a5d280d601b11aa',
                        'seat_coordinate': { 'x': '233.1377716064453', 'y': '657.0078735351562' },
                        'plugwise_id': 928
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-15',
                        'id': '5a0780dc4a5d280d601b14b4',
                        'seat_coordinate': { 'x': '231.67123413085938', 'y': '566.0826416015625' },
                        'plugwise_id': 930
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-16',
                        'id': '5a0781144a5d280d601b17bf',
                        'seat_coordinate': { 'x': '195.0078582763672', 'y': '573.4153442382812' },
                        'plugwise_id': 931
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-28',
                        'id': '5a07857b4a5d280d601b1ad7',
                        'seat_coordinate': { 'x': '61.553131103515625', 'y': '485.4232177734375' },
                        'plugwise_id': 926
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-3',
                        'id': '5a078f444a5d280d601b1df1',
                        'seat_coordinate': { 'x': '362.19287109375', 'y': '657.0078735351562' },
                        'plugwise_id': 891
                    }, {
                        'average_occupancy': 2,
                        'seat_name': '5-30',
                        'id': '5a0793c14a5d280d601b210c',
                        'seat_coordinate': { 'x': '101.14958953857422', 'y': '445.8267517089844' },
                        'plugwise_id': 913
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-32',
                        'id': '5a08586c4a5d280d601c3740',
                        'seat_coordinate': { 'x': '196.47438049316406', 'y': '441.4271545410156' },
                        'plugwise_id': 918
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-33',
                        'id': '5a0858e94a5d280d601c3dad',
                        'seat_coordinate': { 'x': '192.0747833251953', 'y': '403.2972412109375' },
                        'plugwise_id': 925
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-34',
                        'id': '5a0858f84a5d280d601c3e0a',
                        'seat_coordinate': { 'x': '165.67713928222656', 'y': '404.7637634277344' },
                        'plugwise_id': 927
                    }, {
                        'average_occupancy': 2,
                        'seat_name': '5-35',
                        'id': '5a08595b4a5d280d601c41a5',
                        'seat_coordinate': { 'x': '99.68305206298828', 'y': '403.2972412109375' },
                        'plugwise_id': 910
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-36',
                        'id': '5a0859d44a5d280d601c4541',
                        'seat_coordinate': { 'x': '64.4862060546875', 'y': '404.7637634277344' },
                        'plugwise_id': 924
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-37',
                        'id': '5a085a4a4a5d280d601c48de',
                        'seat_coordinate': { 'x': '63.01966857910156', 'y': '357.8346252441406' },
                        'plugwise_id': 908
                    }, {
                        'average_occupancy': 2,
                        'seat_name': '5-38',
                        'id': '5a085ac34a5d280d601c4c7c',
                        'seat_coordinate': { 'x': '96.7499771118164', 'y': '359.3011779785156' },
                        'plugwise_id': 916
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-39',
                        'id': '5a085b394a5d280d601c501b',
                        'seat_coordinate': { 'x': '165.67713928222656', 'y': '360.7677001953125' },
                        'plugwise_id': 917
                    }, {
                        'average_occupancy': 6,
                        'seat_name': '5-4',
                        'id': '5a085bb34a5d280d601c53bb',
                        'seat_coordinate': { 'x': '360.7263488769531', 'y': '695.1377563476562' },
                        'plugwise_id': 922
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-40',
                        'id': '5a085c2c4a5d280d601c575c',
                        'seat_coordinate': { 'x': '199.40745544433594', 'y': '359.3011779785156' },
                        'plugwise_id': 920
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-41',
                        'id': '5a085e3b4a5d280d601c5d06',
                        'seat_coordinate': { 'x': '199.40745544433594', 'y': '321.1712341308594' },
                        'plugwise_id': 900
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-42',
                        'id': '5a085e824a5d280d601c60aa',
                        'seat_coordinate': { 'x': '168.61021423339844', 'y': '318.2381896972656' },
                        'plugwise_id': 885
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-43',
                        'id': '5a085f734a5d280d601c645e',
                        'seat_coordinate': { 'x': '139.27951049804688', 'y': '319.7047119140625' },
                        'plugwise_id': 895
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-44',
                        'id': '5a085fea4a5d280d601c6805',
                        'seat_coordinate': { 'x': '102.61611938476562', 'y': '321.1712341308594' },
                        'plugwise_id': 897
                    }, {
                        'average_occupancy': 5,
                        'seat_name': '5-45',
                        'id': '5a0860654a5d280d601c6bad',
                        'seat_coordinate': { 'x': '107.01573181152344', 'y': '277.1751708984375' },
                        'plugwise_id': 906
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-47',
                        'id': '5a0860d94a5d280d601c6f56',
                        'seat_coordinate': { 'x': '173.00982666015625', 'y': '272.77557373046875' },
                        'plugwise_id': 902
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-48',
                        'id': '5a08615a4a5d280d601c7300',
                        'seat_coordinate': { 'x': '205.2736053466797', 'y': '277.1751708984375' },
                        'plugwise_id': 894
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-5',
                        'id': '5a0861cc4a5d280d601c76ab',
                        'seat_coordinate': { 'x': '313.7972106933594', 'y': '690.7381591796875' },
                        'plugwise_id': 907
                    }, {
                        'average_occupancy': 0,
                        'seat_name': '5-50',
                        'id': '5a0862434a5d280d601c7a57',
                        'seat_coordinate': { 'x': '362.19287109375', 'y': '161.3188934326172' },
                        'plugwise_id': 888
                    }, {
                        'average_occupancy': 0,
                        'seat_name': '5-51',
                        'id': '5a0862ba4a5d280d601c7e04',
                        'seat_coordinate': { 'x': '365.1259460449219', 'y': '126.12203979492188' },
                        'plugwise_id': 901
                    }, {
                        'average_occupancy': 0,
                        'seat_name': '5-52',
                        'id': '5a0863334a5d280d601c81b2',
                        'seat_coordinate': { 'x': '363.659423828125', 'y': '96.79133605957031' },
                        'plugwise_id': 896
                    }, {
                        'average_occupancy': 1,
                        'seat_name': '5-53',
                        'id': '5a0863ab4a5d280d601c8561',
                        'seat_coordinate': { 'x': '363.659423828125', 'y': '67.46062469482422' },
                        'plugwise_id': 883
                    }, {
                        'average_occupancy': 0,
                        'seat_name': '5-54',
                        'id': '5a0864274a5d280d601c8911',
                        'seat_coordinate': { 'x': '417.9212341308594', 'y': '67.46062469482422' },
                        'plugwise_id': 890
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-6',
                        'id': '5a0864984a5d280d601c8cc2',
                        'seat_coordinate': { 'x': '316.73028564453125', 'y': '659.94091796875' },
                        'plugwise_id': 929
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-8',
                        'id': '5a08658a4a5d280d601c90a2',
                        'seat_coordinate': { 'x': '315.2637634277344', 'y': '552.8838500976562' },
                        'plugwise_id': 919
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-9',
                        'id': '5a0866064a5d280d601c9457',
                        'seat_coordinate': { 'x': '275.66729736328125', 'y': '621.8109741210938' },
                        'plugwise_id': 915
                    }, {
                        'average_occupancy': 0,
                        'seat_name': '5-55',
                        'id': '5a254da89fb11d3bd7c290bc',
                        'seat_coordinate': { 'x': '417.63018798828125', 'y': '100.449462890625' },
                        'plugwise_id': 1171
                    }, {
                        'average_occupancy': 0,
                        'seat_name': '5-56',
                        'id': '5a2554279fb11d3bd7c290bf',
                        'seat_coordinate': { 'x': '419.02532958984375', 'y': '132.53746032714844' },
                        'plugwise_id': 1170
                    }, {
                        'average_occupancy': 0,
                        'seat_name': '5-57',
                        'id': '5a2555419fb11d3bd7c290c0',
                        'seat_coordinate': { 'x': '419.02532958984375', 'y': '159.04495239257812' },
                        'plugwise_id': 1169
                    }, {
                        'average_occupancy': 0,
                        'seat_name': '5-58',
                        'id': '5a25558b9fb11d3bd7c290c1',
                        'seat_coordinate': { 'x': '419.02532958984375', 'y': '188.3426971435547' },
                        'plugwise_id': 1172
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-62',
                        'id': '5a2567569fb11d3bd7c290c3',
                        'seat_coordinate': { 'x': '953.3605346679688', 'y': '66.96629333496094' },
                        'plugwise_id': 1142
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-61',
                        'id': '5a2567b29fb11d3bd7c290c4',
                        'seat_coordinate': { 'x': '953.3605346679688', 'y': '103.23970031738281' },
                        'plugwise_id': 1139
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-63',
                        'id': '5a2567f19fb11d3bd7c290c5',
                        'seat_coordinate': { 'x': '998.0046997070312', 'y': '65.57115936279297' },
                        'plugwise_id': 1144
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-67',
                        'id': '5a25696d9fb11d3bd7c290c6',
                        'seat_coordinate': { 'x': '1035.67333984375', 'y': '65.57115936279297' },
                        'plugwise_id': 1156
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-73',
                        'id': '5a2569af9fb11d3bd7c290c7',
                        'seat_coordinate': { 'x': '1080.3173828125', 'y': '100.4494400024414' },
                        'plugwise_id': 1161
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-74',
                        'id': '5a2569e39fb11d3bd7c290c8',
                        'seat_coordinate': { 'x': '1078.92236328125', 'y': '66.96629333496094' },
                        'plugwise_id': 1163
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-60',
                        'id': '5a256a289fb11d3bd7c290c9',
                        'seat_coordinate': { 'x': '953.3605346679688', 'y': '170.20599365234375' },
                        'plugwise_id': 1138
                    }, {
                        'average_occupancy': 6,
                        'seat_name': '5-65',
                        'id': '5a256a5d9fb11d3bd7c290ca',
                        'seat_coordinate': { 'x': '999.3998413085938', 'y': '171.6011199951172' },
                        'plugwise_id': 1154
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-66',
                        'id': '5a256a979fb11d3bd7c290cb',
                        'seat_coordinate': { 'x': '995.2144165039062', 'y': '206.47940063476562' },
                        'plugwise_id': 876
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-70',
                        'id': '5a256ad59fb11d3bd7c290cc',
                        'seat_coordinate': { 'x': '1032.883056640625', 'y': '203.68914794921875' },
                        'plugwise_id': 1162
                    }, {
                        'average_occupancy': 5,
                        'seat_name': '5-71',
                        'id': '5a256b109fb11d3bd7c290cd',
                        'seat_coordinate': { 'x': '1078.92236328125', 'y': '200.8988800048828' },
                        'plugwise_id': 1152
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-75',
                        'id': '5a256b4d9fb11d3bd7c290ce',
                        'seat_coordinate': { 'x': '1117.986083984375', 'y': '103.23970031738281' },
                        'plugwise_id': 1159
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-82',
                        'id': '5a256b8c9fb11d3bd7c290cf',
                        'seat_coordinate': { 'x': '1162.630126953125', 'y': '104.63483428955078' },
                        'plugwise_id': 1146
                    }, {
                        'average_occupancy': 5,
                        'seat_name': '5-76',
                        'id': '5a256d039fb11d3bd7c290d1',
                        'seat_coordinate': { 'x': '1115.19580078125', 'y': '139.5131072998047' },
                        'plugwise_id': 1158
                    }, {
                        'average_occupancy': 5,
                        'seat_name': '5-77',
                        'id': '5a256d579fb11d3bd7c290d2',
                        'seat_coordinate': { 'x': '1116.5908203125', 'y': '171.6011199951172' },
                        'plugwise_id': 1160
                    }, {
                        'average_occupancy': 5,
                        'seat_name': '5-79',
                        'id': '5a256d8b9fb11d3bd7c290d3',
                        'seat_coordinate': { 'x': '1161.235107421875', 'y': '202.29400634765625' },
                        'plugwise_id': 1153
                    }, {
                        'average_occupancy': 5,
                        'seat_name': '5-80',
                        'id': '5a256dd09fb11d3bd7c290d4',
                        'seat_coordinate': { 'x': '1165.42041015625', 'y': '172.9962615966797' },
                        'plugwise_id': 1155
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-85',
                        'id': '5a256e1b9fb11d3bd7c290d5',
                        'seat_coordinate': { 'x': '1210.064697265625', 'y': '223.22097778320312' },
                        'plugwise_id': 1141
                    }, {
                        'average_occupancy': 6,
                        'seat_name': '5-86',
                        'id': '5a256e779fb11d3bd7c290d6',
                        'seat_coordinate': { 'x': '1247.733154296875', 'y': '224.61610412597656' },
                        'plugwise_id': 1164
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-87',
                        'id': '5a256ec59fb11d3bd7c290d7',
                        'seat_coordinate': { 'x': '1215.645263671875', 'y': '273.4457092285156' },
                        'plugwise_id': 1149
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-88',
                        'id': '5a256f069fb11d3bd7c290d8',
                        'seat_coordinate': { 'x': '1253.313720703125', 'y': '274.8408203125' },
                        'plugwise_id': 1150
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-89',
                        'id': '5a256f439fb11d3bd7c290d9',
                        'seat_coordinate': { 'x': '1215.645263671875', 'y': '316.69476318359375' },
                        'plugwise_id': 1145
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-90',
                        'id': '5a256f8e9fb11d3bd7c290da',
                        'seat_coordinate': { 'x': '1250.5234375', 'y': '322.2752990722656' },
                        'plugwise_id': 1151
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-91',
                        'id': '5a256fe99fb11d3bd7c290db',
                        'seat_coordinate': { 'x': '1215.645263671875', 'y': '386.4513244628906' },
                        'plugwise_id': 1147
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-92',
                        'id': '5a2570239fb11d3bd7c290dc',
                        'seat_coordinate': { 'x': '1247.733154296875', 'y': '387.846435546875' },
                        'plugwise_id': 1143
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-93',
                        'id': '5a2570529fb11d3bd7c290dd',
                        'seat_coordinate': { 'x': '1214.25', 'y': '431.09552001953125' },
                        'plugwise_id': 1148
                    }, {
                        'average_occupancy': 6,
                        'seat_name': '5-94',
                        'id': '5a2570959fb11d3bd7c290de',
                        'seat_coordinate': { 'x': '1250.5234375', 'y': '431.09552001953125' },
                        'plugwise_id': 1140
                    }, {
                        'average_occupancy': 4,
                        'seat_name': '5-81',
                        'id': '5a257e7820eda132b05901a5',
                        'seat_coordinate': { 'x': '1161.235107421875', 'y': '139.5131072998047' },
                        'plugwise_id': 1157
                    }, {
                        'average_occupancy': 3,
                        'seat_name': '5-31',
                        'id': '5a7816fd2775221db91f0255',
                        'seat_coordinate': { 'x': '159.81100463867188', 'y': '441.4271545410156' },
                        'plugwise_id': 1176
                    }
                ],
                'statistic': [{ 'id': 0, 'seats_count': 9, 'percent': 11 }, { 'id': 1, 'seats_count': 46, 'percent': 55 }, {
                        'id': 2,
                        'seats_count': 25,
                        'percent': 30
                    }, { 'id': 3, 'seats_count': 4, 'percent': 5 }, { 'id': 4, 'seats_count': 0, 'percent': 0 }]
            }
        };
        this.seats = res.data.seats;
    }
    AppComponent.prototype.changeMap = function () {
        this.options = {
            imgSrc: '/assets/img/34_floor.svg',
            points: [{
                    'id': '59dbae6c4a5d270ad4ca564f',
                    'seat_name': '34-34',
                    'plugwise_id': 577,
                    'seat_coordinate': { 'x': '917.3802490234375', 'y': '563.3115844726562' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59dbaf5c4a5d270ad4ca59ff',
                    'seat_name': '34-13',
                    'plugwise_id': 575,
                    'seat_coordinate': { 'x': '823.5602416992188', 'y': '215.11280822753906' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5ddb04a5d280c982f7c76',
                    'seat_name': '34-14',
                    'plugwise_id': 631,
                    'seat_coordinate': { 'x': '803.2294311523438', 'y': '203.9636688232422' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5de284a5d280c982f7e6a',
                    'seat_name': '34-15',
                    'plugwise_id': 635,
                    'seat_coordinate': { 'x': '779.9949340820312', 'y': '165.57510375976562' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5dea04a5d280c982f805f',
                    'seat_name': '34-16',
                    'plugwise_id': 633,
                    'seat_coordinate': { 'x': '778.3130493164062', 'y': '140.51220703125' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5df184a5d280c982f8254',
                    'seat_name': '34-18',
                    'plugwise_id': 629,
                    'seat_coordinate': { 'x': '736.3345947265625', 'y': '92.47227478027344' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5df904a5d280c982f844a',
                    'seat_name': '34-19',
                    'plugwise_id': 630,
                    'seat_coordinate': { 'x': '782.2427978515625', 'y': '89.84894561767578' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e0084a5d280c982f8641',
                    'seat_name': '34-20',
                    'plugwise_id': 627,
                    'seat_coordinate': { 'x': '801.0284423828125', 'y': '98.67447662353516' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e0824a5d280c982f8839',
                    'seat_name': '34-21',
                    'plugwise_id': 634,
                    'seat_coordinate': { 'x': '820.5122680664062', 'y': '90.4076919555664' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e0f84a5d280c982f8a32',
                    'seat_name': '34-22',
                    'plugwise_id': 628,
                    'seat_coordinate': { 'x': '866.8450927734375', 'y': '89.84894561767578' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e1704a5d280c982f8c2c',
                    'seat_name': '34-23',
                    'plugwise_id': 637,
                    'seat_coordinate': { 'x': '847.8259887695312', 'y': '128.5430145263672' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e1e84a5d280c982f8e27',
                    'seat_name': '34-24',
                    'plugwise_id': 625,
                    'seat_coordinate': { 'x': '824.8718872070312', 'y': '141.65965270996094' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e2604a5d280c982f901d',
                    'seat_name': '34-17',
                    'plugwise_id': 651,
                    'seat_coordinate': { 'x': '760.3124389648438', 'y': '129.89312744140625' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e2d84a5d280c982f921b',
                    'seat_name': '34-25',
                    'plugwise_id': 632,
                    'seat_coordinate': { 'x': '824.216064453125', 'y': '165.26959228515625' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e3524a5d280c982f941a',
                    'seat_name': '34-26',
                    'plugwise_id': 622,
                    'seat_coordinate': { 'x': '844.4097290039062', 'y': '175.3103790283203' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e3c84a5d280c982f961a',
                    'seat_name': '34-27',
                    'plugwise_id': 626,
                    'seat_coordinate': { 'x': '870.124267578125', 'y': '215.11280822753906' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e4414a5d280c982f981b',
                    'seat_name': '34-28',
                    'plugwise_id': 638,
                    'seat_coordinate': { 'x': '1023.1141357421875', 'y': '146.2696075439453' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e4b94a5d280c982f9a1d',
                    'seat_name': '34-30',
                    'plugwise_id': 639,
                    'seat_coordinate': { 'x': '1080.646240234375', 'y': '172.48374938964844' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e5304a5d280c982f9c20',
                    'seat_name': '34-31',
                    'plugwise_id': 624,
                    'seat_coordinate': { 'x': '1095.9520263671875', 'y': '212.93740844726562' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e5a94a5d280c982f9e24',
                    'seat_name': '34-32',
                    'plugwise_id': 636,
                    'seat_coordinate': { 'x': '1052.7406005859375', 'y': '207.4736785888672' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e6204a5d280c982fa029',
                    'seat_name': '34-33',
                    'plugwise_id': 623,
                    'seat_coordinate': { 'x': '1034.0821533203125', 'y': '191.28579711914062' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e6984a5d280c982fa21b',
                    'seat_name': '34-10',
                    'plugwise_id': 652,
                    'seat_coordinate': { 'x': '524.5009765625', 'y': '153.46463012695312' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e7104a5d280c982fa40d',
                    'seat_name': '34-1',
                    'plugwise_id': 658,
                    'seat_coordinate': { 'x': '448.4244689941406', 'y': '196.74952697753906' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e7884a5d280c982fa601',
                    'seat_name': '34-11',
                    'plugwise_id': 657,
                    'seat_coordinate': { 'x': '499.3825378417969', 'y': '152.00698852539062' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e8004a5d280c982fa7f6',
                    'seat_name': '34-12',
                    'plugwise_id': 655,
                    'seat_coordinate': { 'x': '487.7835998535156', 'y': '176.00181579589844' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e85a4a5d280c982fa9f3',
                    'seat_name': '34-2',
                    'plugwise_id': 656,
                    'seat_coordinate': { 'x': '449.0534362792969', 'y': '151.94375610351562' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e8784a5d280c982fabfa',
                    'seat_name': '34-29',
                    'plugwise_id': 660,
                    'seat_coordinate': { 'x': '1066.1436767578125', 'y': '156.11672973632812' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e8f04a5d280c982fae02',
                    'seat_name': '34-3',
                    'plugwise_id': 653,
                    'seat_coordinate': { 'x': '460.22943115234375', 'y': '131.16635131835938' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e96b4a5d280c982fb010',
                    'seat_name': '34-35',
                    'plugwise_id': 646,
                    'seat_coordinate': { 'x': '896.0099487304688', 'y': '604.2131958007812' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5e9e14a5d280c982fb21f',
                    'seat_name': '34-36',
                    'plugwise_id': 650,
                    'seat_coordinate': { 'x': '875.921142578125', 'y': '614.3812255859375' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5ea584a5d280c982fb42f',
                    'seat_name': '34-37',
                    'plugwise_id': 648,
                    'seat_coordinate': { 'x': '829.1495971679688', 'y': '615.7816162109375' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5ead04a5d280c982fb640',
                    'seat_name': '34-38',
                    'plugwise_id': 643,
                    'seat_coordinate': { 'x': '809.7877807617188', 'y': '604.6768798828125' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5eb494a5d280c982fb852',
                    'seat_name': '34-39',
                    'plugwise_id': 644,
                    'seat_coordinate': { 'x': '790.11279296875', 'y': '616.4818115234375' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5ebc14a5d280c982fba65',
                    'seat_name': '34-4',
                    'plugwise_id': 661,
                    'seat_coordinate': { 'x': '449.73614501953125', 'y': '110.83556365966797' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5ec394a5d280c982fbc79',
                    'seat_name': '34-40',
                    'plugwise_id': 645,
                    'seat_coordinate': { 'x': '744.8604125976562', 'y': '615.8259887695312' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5ecb04a5d280c982fbe8e',
                    'seat_name': '34-41',
                    'plugwise_id': 649,
                    'seat_coordinate': { 'x': '769.7820434570312', 'y': '577.1319580078125' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5ed284a5d280c982fc0a4',
                    'seat_name': '34-42',
                    'plugwise_id': 647,
                    'seat_coordinate': { 'x': '787.8869018554688', 'y': '565.2581176757812' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5eda04a5d280c982fc2bb',
                    'seat_name': '34-43',
                    'plugwise_id': 640,
                    'seat_coordinate': { 'x': '831.43017578125', 'y': '565.9827880859375' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5ee194a5d280c982fc4d3',
                    'seat_name': '34-44',
                    'plugwise_id': 642,
                    'seat_coordinate': { 'x': '855.0401611328125', 'y': '574.5086059570312' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5ee914a5d280c982fc6ec',
                    'seat_name': '34-45',
                    'plugwise_id': 641,
                    'seat_coordinate': { 'x': '875.3709106445312', 'y': '565.3269653320312' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5ef094a5d280c982fc907',
                    'seat_name': '34-5',
                    'plugwise_id': 664,
                    'seat_coordinate': { 'x': '449.0802917480469', 'y': '67.55066680908203' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5ef804a5d280c982fcb24',
                    'seat_name': '34-6',
                    'plugwise_id': 663,
                    'seat_coordinate': { 'x': '489.3077087402344', 'y': '88.32020568847656' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5eff94a5d280c982fcd42',
                    'seat_name': '34-7',
                    'plugwise_id': 654,
                    'seat_coordinate': { 'x': '499.579345703125', 'y': '107.55640411376953' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5f0764a5d280c982fcf68',
                    'seat_name': '34-8',
                    'plugwise_id': 659,
                    'seat_coordinate': { 'x': '524.4215087890625', 'y': '108.78350830078125' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }, {
                    'id': '59e5f0e94a5d280c982fd18f',
                    'seat_name': '34-9',
                    'plugwise_id': 662,
                    'seat_coordinate': { 'x': '563.9255981445312', 'y': '130.5472412109375' },
                    'status': 'no_signal',
                    'user_id': '000000000000000000000000',
                    'username': ''
                }]
        };
    };
    AppComponent.prototype.changeMap2 = function () {
        this.options = {
            imgSrc: '/assets/img/35_floor.svg',
            points: [{
                    "id": "5a7818fc2775221db91fbc50",
                    "seat_name": "6-1",
                    "plugwise_id": 23,
                    "seat_coordinate": { "x": "1679.3582763671875", "y": "140.57823181152344" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fc2775221db91fbc62",
                    "seat_name": "6-100",
                    "plugwise_id": 131,
                    "seat_coordinate": { "x": "2319.231689453125", "y": "1008.2850952148438" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fc2775221db91fbc75",
                    "seat_name": "6-101",
                    "plugwise_id": 119,
                    "seat_coordinate": { "x": "2319.231689453125", "y": "1080.998046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fc2775221db91fbc87",
                    "seat_name": "6-102",
                    "plugwise_id": 124,
                    "seat_coordinate": { "x": "2382.24951171875", "y": "853.164306640625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fc2775221db91fbc97",
                    "seat_name": "6-103",
                    "plugwise_id": 137,
                    "seat_coordinate": { "x": "2387.096923828125", "y": "894.3682861328125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fc2775221db91fbcac",
                    "seat_name": "6-104",
                    "plugwise_id": 136,
                    "seat_coordinate": { "x": "2387.096923828125", "y": "959.8098754882812" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fd2775221db91fbcc1",
                    "seat_name": "6-105",
                    "plugwise_id": 132,
                    "seat_coordinate": { "x": "2387.096923828125", "y": "1005.861328125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fd2775221db91fbcd1",
                    "seat_name": "6-106",
                    "plugwise_id": 148,
                    "seat_coordinate": { "x": "2384.673095703125", "y": "1093.1168212890625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fd2775221db91fbcfd",
                    "seat_name": "6-107",
                    "plugwise_id": 113,
                    "seat_coordinate": { "x": "2530.098876953125", "y": "858.0118408203125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fe2775221db91fbd10",
                    "seat_name": "6-108",
                    "plugwise_id": 141,
                    "seat_coordinate": { "x": "2532.522705078125", "y": "906.4871215820312" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fe2775221db91fbd25",
                    "seat_name": "6-109",
                    "plugwise_id": 115,
                    "seat_coordinate": { "x": "2530.098876953125", "y": "964.6574096679688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fe2775221db91fbd3c",
                    "seat_name": "6-11",
                    "plugwise_id": 27,
                    "seat_coordinate": { "x": "1395.7781982421875", "y": "143.00196838378906" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fe2775221db91fbd51",
                    "seat_name": "6-110",
                    "plugwise_id": 120,
                    "seat_coordinate": { "x": "2527.67529296875", "y": "1010.7088623046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fe2775221db91fbd66",
                    "seat_name": "6-111",
                    "plugwise_id": 145,
                    "seat_coordinate": { "x": "2530.098876953125", "y": "1085.845458984375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818fe2775221db91fbd78",
                    "seat_name": "6-112",
                    "plugwise_id": 134,
                    "seat_coordinate": { "x": "2597.96435546875", "y": "855.5880737304688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818ff2775221db91fbd89",
                    "seat_name": "6-113",
                    "plugwise_id": 117,
                    "seat_coordinate": { "x": "2597.96435546875", "y": "899.2158203125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818ff2775221db91fbd9f",
                    "seat_name": "6-114",
                    "plugwise_id": 127,
                    "seat_coordinate": { "x": "2600.387939453125", "y": "964.6574096679688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818ff2775221db91fbdb1",
                    "seat_name": "6-115",
                    "plugwise_id": 143,
                    "seat_coordinate": { "x": "2590.693115234375", "y": "1010.7088623046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818ff2775221db91fbdc5",
                    "seat_name": "6-116",
                    "plugwise_id": 138,
                    "seat_coordinate": { "x": "2597.96435546875", "y": "1085.845458984375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7818ff2775221db91fbdd8",
                    "seat_name": "6-117",
                    "plugwise_id": 126,
                    "seat_coordinate": { "x": "2724", "y": "855.5880737304688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819002775221db91fbdec",
                    "seat_name": "6-118",
                    "plugwise_id": 111,
                    "seat_coordinate": { "x": "2731.271240234375", "y": "901.6395874023438" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819002775221db91fbdff",
                    "seat_name": "6-119",
                    "plugwise_id": 114,
                    "seat_coordinate": { "x": "2731.271240234375", "y": "969.5049438476562" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819002775221db91fbe13",
                    "seat_name": "6-12",
                    "plugwise_id": 26,
                    "seat_coordinate": { "x": "1393.3543701171875", "y": "220.56236267089844" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819002775221db91fbe23",
                    "seat_name": "6-120",
                    "plugwise_id": 147,
                    "seat_coordinate": { "x": "2728.847412109375", "y": "1013.1326293945312" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819002775221db91fbe37",
                    "seat_name": "6-121",
                    "plugwise_id": 118,
                    "seat_coordinate": { "x": "2726.423583984375", "y": "1083.4217529296875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819002775221db91fbe4a",
                    "seat_name": "6-122",
                    "plugwise_id": 139,
                    "seat_coordinate": { "x": "2505.861328125", "y": "688.3485107421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819012775221db91fbe5f",
                    "seat_name": "6-123",
                    "plugwise_id": 112,
                    "seat_coordinate": { "x": "2510.708740234375", "y": "642.2969970703125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819012775221db91fbe70",
                    "seat_name": "6-124",
                    "plugwise_id": 125,
                    "seat_coordinate": { "x": "2505.861328125", "y": "574.431640625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819012775221db91fbe81",
                    "seat_name": "6-125",
                    "plugwise_id": 121,
                    "seat_coordinate": { "x": "2508.28515625", "y": "535.6514892578125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819012775221db91fbe98",
                    "seat_name": "6-126",
                    "plugwise_id": 13,
                    "seat_coordinate": { "x": "2578.57421875", "y": "688.3485107421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819012775221db91fbea9",
                    "seat_name": "6-127",
                    "plugwise_id": 110,
                    "seat_coordinate": { "x": "2578.57421875", "y": "644.7207641601562" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819022775221db91fbec0",
                    "seat_name": "6-128",
                    "plugwise_id": 122,
                    "seat_coordinate": { "x": "2573.7265625", "y": "572.0078735351562" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819022775221db91fbeda",
                    "seat_name": "6-129",
                    "plugwise_id": 140,
                    "seat_coordinate": { "x": "2576.150390625", "y": "535.6514892578125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819022775221db91fbef4",
                    "seat_name": "6-13",
                    "plugwise_id": 20,
                    "seat_coordinate": { "x": "1390.9306640625", "y": "266.6138610839844" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819022775221db91fbf12",
                    "seat_name": "6-130",
                    "plugwise_id": 146,
                    "seat_coordinate": { "x": "2707.03369140625", "y": "688.3485107421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819022775221db91fbf2b",
                    "seat_name": "6-131",
                    "plugwise_id": 128,
                    "seat_coordinate": { "x": "2707.03369140625", "y": "642.2969970703125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819022775221db91fbf48",
                    "seat_name": "6-132",
                    "plugwise_id": 142,
                    "seat_coordinate": { "x": "2704.60986328125", "y": "576.8554077148438" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819032775221db91fbf61",
                    "seat_name": "6-133",
                    "plugwise_id": 123,
                    "seat_coordinate": { "x": "2709.457275390625", "y": "533.2277221679688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819032775221db91fbf72",
                    "seat_name": "6-134",
                    "plugwise_id": 129,
                    "seat_coordinate": { "x": "2777.32275390625", "y": "683.5009765625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819032775221db91fbf85",
                    "seat_name": "6-135",
                    "plugwise_id": 135,
                    "seat_coordinate": { "x": "2774.89892578125", "y": "637.449462890625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819032775221db91fbf9f",
                    "seat_name": "6-136",
                    "plugwise_id": 116,
                    "seat_coordinate": { "x": "2772.47509765625", "y": "579.2791748046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819032775221db91fbfb2",
                    "seat_name": "6-137",
                    "plugwise_id": 133,
                    "seat_coordinate": { "x": "2770.051513671875", "y": "523.5326538085938" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc8db421aa94a0b8ec303",
                    "seat_name": "6-138",
                    "plugwise_id": 725,
                    "seat_coordinate": { "x": "896.483154296875", "y": "853.1643676757812" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc6ec421aa94a0b8eac71",
                    "seat_name": "6-139",
                    "plugwise_id": 713,
                    "seat_coordinate": { "x": "901.3306884765625", "y": "906.4871215820312" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819042775221db91fbfca",
                    "seat_name": "6-14",
                    "plugwise_id": 32,
                    "seat_coordinate": { "x": "1393.3543701171875", "y": "322.3603820800781" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc6b8421aa94a0b8ea9a7",
                    "seat_name": "6-141",
                    "plugwise_id": 712,
                    "seat_coordinate": { "x": "901.3306884765625", "y": "1013.1326293945312" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc566421aa94a0b8e98fb",
                    "seat_name": "6-142",
                    "plugwise_id": 703,
                    "seat_coordinate": { "x": "903.7544555664062", "y": "1085.845458984375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc4fc421aa94a0b8e937e",
                    "seat_name": "6-143",
                    "plugwise_id": 700,
                    "seat_coordinate": { "x": "971.6197509765625", "y": "850.7405395507812" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc5a8421aa94a0b8e9bbd",
                    "seat_name": "6-144",
                    "plugwise_id": 705,
                    "seat_coordinate": { "x": "969.196044921875", "y": "904.0633544921875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc6b8421aa94a0b8ea9a8",
                    "seat_name": "6-145",
                    "plugwise_id": 711,
                    "seat_coordinate": { "x": "964.3485107421875", "y": "969.5049438476562" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc808421aa94a0b8eb7a9",
                    "seat_name": "6-146",
                    "plugwise_id": 717,
                    "seat_coordinate": { "x": "964.3485107421875", "y": "1013.1326293945312" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc41c421aa94a0b8e8891",
                    "seat_name": "6-147",
                    "plugwise_id": 699,
                    "seat_coordinate": { "x": "964.3485107421875", "y": "1080.998046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc64f421aa94a0b8ea411",
                    "seat_name": "6-148",
                    "plugwise_id": 709,
                    "seat_coordinate": { "x": "1109.774169921875", "y": "850.7405395507812" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc7d4421aa94a0b8eb4dc",
                    "seat_name": "6-149",
                    "plugwise_id": 716,
                    "seat_coordinate": { "x": "1112.197998046875", "y": "896.7920532226562" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819042775221db91fbfe1",
                    "seat_name": "6-15",
                    "plugwise_id": 24,
                    "seat_coordinate": { "x": "1390.9306640625", "y": "378.10693359375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc61a421aa94a0b8ea142",
                    "seat_name": "6-150",
                    "plugwise_id": 707,
                    "seat_coordinate": { "x": "1114.6217041015625", "y": "964.6574096679688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc5dd421aa94a0b8e9e7f",
                    "seat_name": "6-151",
                    "plugwise_id": 706,
                    "seat_coordinate": { "x": "1117.0455322265625", "y": "1005.861328125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc788421aa94a0b8eaf44",
                    "seat_name": "6-152",
                    "plugwise_id": 714,
                    "seat_coordinate": { "x": "1107.3504638671875", "y": "1083.4217529296875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc8a6421aa94a0b8ec02e",
                    "seat_name": "6-153",
                    "plugwise_id": 723,
                    "seat_coordinate": { "x": "1182.487060546875", "y": "850.7405395507812" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc83d421aa94a0b8eba79",
                    "seat_name": "6-154",
                    "plugwise_id": 719,
                    "seat_coordinate": { "x": "1182.487060546875", "y": "899.2158203125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc61a421aa94a0b8ea143",
                    "seat_name": "6-155",
                    "plugwise_id": 708,
                    "seat_coordinate": { "x": "1182.487060546875", "y": "964.6574096679688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc531421aa94a0b8e963b",
                    "seat_name": "6-156",
                    "plugwise_id": 701,
                    "seat_coordinate": { "x": "1189.7584228515625", "y": "1010.7088623046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc808421aa94a0b8eb7aa",
                    "seat_name": "6-157",
                    "plugwise_id": 718,
                    "seat_coordinate": { "x": "1177.6395263671875", "y": "1078.57421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc531421aa94a0b8e963c",
                    "seat_name": "6-158",
                    "plugwise_id": 702,
                    "seat_coordinate": { "x": "1330.3365478515625", "y": "860.4356079101562" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccddb421aa94a0b8f04a7",
                    "seat_name": "6-159",
                    "plugwise_id": 735,
                    "seat_coordinate": { "x": "1332.7603759765625", "y": "904.0633544921875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819042775221db91fbff5",
                    "seat_name": "6-16",
                    "plugwise_id": 44,
                    "seat_coordinate": { "x": "1327.912841796875", "y": "140.57821655273438" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccd9f421aa94a0b8f01c7",
                    "seat_name": "6-160",
                    "plugwise_id": 731,
                    "seat_coordinate": { "x": "1323.0653076171875", "y": "976.7761840820312" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccd36421aa94a0b8efc11",
                    "seat_name": "6-161",
                    "plugwise_id": 728,
                    "seat_coordinate": { "x": "1327.912841796875", "y": "1017.9801635742188" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccccc421aa94a0b8ef650",
                    "seat_name": "6-162",
                    "plugwise_id": 726,
                    "seat_coordinate": { "x": "1323.0653076171875", "y": "1078.57421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccd9f421aa94a0b8f01c8",
                    "seat_name": "6-163",
                    "plugwise_id": 733,
                    "seat_coordinate": { "x": "1398.201904296875", "y": "858.0118408203125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cceaf421aa94a0b8f1036",
                    "seat_name": "6-164",
                    "plugwise_id": 739,
                    "seat_coordinate": { "x": "1395.7781982421875", "y": "901.6395874023438" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccee4421aa94a0b8f131c",
                    "seat_name": "6-165",
                    "plugwise_id": 741,
                    "seat_coordinate": { "x": "1398.201904296875", "y": "964.6574096679688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a311",
                    "seat_name": "6-166",
                    "plugwise_id": 2,
                    "seat_coordinate": { "x": "1393.3543701171875", "y": "1015.556396484375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cceaf421aa94a0b8f1037",
                    "seat_name": "6-167",
                    "plugwise_id": 740,
                    "seat_coordinate": { "x": "1395.7781982421875", "y": "1085.845458984375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cd542421aa94a0b8f6d84",
                    "seat_name": "6-168",
                    "plugwise_id": 745,
                    "seat_coordinate": { "x": "1609.0692138671875", "y": "850.7405395507812" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cce7a421aa94a0b8f0d52",
                    "seat_name": "6-169",
                    "plugwise_id": 738,
                    "seat_coordinate": { "x": "1611.4930419921875", "y": "904.0633544921875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819042775221db91fc007",
                    "seat_name": "6-17",
                    "plugwise_id": 30,
                    "seat_coordinate": { "x": "1325.489013671875", "y": "222.9861297607422" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccf4e421aa94a0b8f18f2",
                    "seat_name": "6-170",
                    "plugwise_id": 744,
                    "seat_coordinate": { "x": "1606.6455078125", "y": "962.233642578125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccd9f421aa94a0b8f01c9",
                    "seat_name": "6-171",
                    "plugwise_id": 732,
                    "seat_coordinate": { "x": "1604.2216796875", "y": "1010.7088623046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccf19421aa94a0b8f160b",
                    "seat_name": "6-172",
                    "plugwise_id": 742,
                    "seat_coordinate": { "x": "1606.6455078125", "y": "1080.998046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cce10421aa94a0b8f0791",
                    "seat_name": "6-173",
                    "plugwise_id": 736,
                    "seat_coordinate": { "x": "1676.9345703125", "y": "858.0118408203125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cce7a421aa94a0b8f0d53",
                    "seat_name": "6-174",
                    "plugwise_id": 737,
                    "seat_coordinate": { "x": "1684.2059326171875", "y": "899.2158203125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccddb421aa94a0b8f04a8",
                    "seat_name": "6-175",
                    "plugwise_id": 734,
                    "seat_coordinate": { "x": "1679.3583984375", "y": "967.0811767578125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccd01421aa94a0b8ef927",
                    "seat_name": "6-176",
                    "plugwise_id": 727,
                    "seat_coordinate": { "x": "1679.3583984375", "y": "1010.7088623046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccf4e421aa94a0b8f18f3",
                    "seat_name": "6-177",
                    "plugwise_id": 743,
                    "seat_coordinate": { "x": "1676.9345703125", "y": "1083.4217529296875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccd6b421aa94a0b8efeec",
                    "seat_name": "6-178",
                    "plugwise_id": 730,
                    "seat_coordinate": { "x": "1824.7840576171875", "y": "853.164306640625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8ccd36421aa94a0b8efc12",
                    "seat_name": "6-179",
                    "plugwise_id": 729,
                    "seat_coordinate": { "x": "1827.2078857421875", "y": "901.6395874023438" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2e2",
                    "seat_name": "6-18",
                    "plugwise_id": 28,
                    "seat_coordinate": { "x": "1325.489013671875", "y": "269.0376281738281" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc788421aa94a0b8eaf45",
                    "seat_name": "6-180",
                    "plugwise_id": 715,
                    "seat_coordinate": { "x": "1822.3603515625", "y": "957.3861083984375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc871421aa94a0b8ebd5b",
                    "seat_name": "6-181",
                    "plugwise_id": 721,
                    "seat_coordinate": { "x": "1822.3603515625", "y": "1001.0138549804688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc871421aa94a0b8ebd5c",
                    "seat_name": "6-182",
                    "plugwise_id": 720,
                    "seat_coordinate": { "x": "1819.9365234375", "y": "1071.3028564453125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc306421aa94a0b8e7d9f",
                    "seat_name": "6-183",
                    "plugwise_id": 695,
                    "seat_coordinate": { "x": "1890.2257080078125", "y": "853.164306640625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc566421aa94a0b8e98fc",
                    "seat_name": "6-184",
                    "plugwise_id": 704,
                    "seat_coordinate": { "x": "1890.2257080078125", "y": "906.4871215820312" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc683421aa94a0b8ea6d7",
                    "seat_name": "6-185",
                    "plugwise_id": 710,
                    "seat_coordinate": { "x": "1890.2257080078125", "y": "969.5049438476562" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc157421aa94a0b8e67e3",
                    "seat_name": "6-186",
                    "plugwise_id": 692,
                    "seat_coordinate": { "x": "1890.2257080078125", "y": "1015.556396484375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc36f421aa94a0b8e8313",
                    "seat_name": "6-187",
                    "plugwise_id": 698,
                    "seat_coordinate": { "x": "1885.378173828125", "y": "1078.57421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc33a421aa94a0b8e8058",
                    "seat_name": "6-189",
                    "plugwise_id": 696,
                    "seat_coordinate": { "x": "2035.6513671875", "y": "899.2158203125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819042775221db91fc01f",
                    "seat_name": "6-19",
                    "plugwise_id": 31,
                    "seat_coordinate": { "x": "1323.0653076171875", "y": "327.2079162597656" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc157421aa94a0b8e67e4",
                    "seat_name": "6-190",
                    "plugwise_id": 691,
                    "seat_coordinate": { "x": "2038.0751953125", "y": "959.8098754882812" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc8a6421aa94a0b8ec02f",
                    "seat_name": "6-191",
                    "plugwise_id": 722,
                    "seat_coordinate": { "x": "2035.6513671875", "y": "1005.861328125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc8db421aa94a0b8ec304",
                    "seat_name": "6-192",
                    "plugwise_id": 724,
                    "seat_coordinate": { "x": "2033.2276611328125", "y": "1083.4217529296875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc33a421aa94a0b8e8059",
                    "seat_name": "6-193",
                    "plugwise_id": 697,
                    "seat_coordinate": { "x": "2101.093017578125", "y": "855.5880737304688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc122421aa94a0b8e6527",
                    "seat_name": "6-194",
                    "plugwise_id": 690,
                    "seat_coordinate": { "x": "2103.516845703125", "y": "901.6395874023438" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc306421aa94a0b8e7da0",
                    "seat_name": "6-195",
                    "plugwise_id": 694,
                    "seat_coordinate": { "x": "2101.093017578125", "y": "964.6574096679688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc0ed421aa94a0b8e626c",
                    "seat_name": "6-196",
                    "plugwise_id": 689,
                    "seat_coordinate": { "x": "2098.669189453125", "y": "1015.556396484375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8cc18b421aa94a0b8e6a99",
                    "seat_name": "6-197",
                    "plugwise_id": 693,
                    "seat_coordinate": { "x": "2103.516845703125", "y": "1085.845458984375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e0171421aa94a0ba01cfd",
                    "seat_name": "6-199",
                    "plugwise_id": 793,
                    "seat_coordinate": { "x": "472.3247375488281", "y": "215.7147979736328" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819042775221db91fc031",
                    "seat_name": "6-2",
                    "plugwise_id": 34,
                    "seat_coordinate": { "x": "1681.7821044921875", "y": "218.13861083984375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819052775221db91fc043",
                    "seat_name": "6-20",
                    "plugwise_id": 45,
                    "seat_coordinate": { "x": "1323.0653076171875", "y": "370.83563232421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e0103421aa94a0ba016cb",
                    "seat_name": "6-200",
                    "plugwise_id": 789,
                    "seat_coordinate": { "x": "482.019775390625", "y": "259.3425598144531" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e0098421aa94a0ba0109a",
                    "seat_name": "6-201",
                    "plugwise_id": 786,
                    "seat_coordinate": { "x": "467.4772033691406", "y": "315.089111328125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e00ce421aa94a0ba013ae",
                    "seat_name": "6-202",
                    "plugwise_id": 787,
                    "seat_coordinate": { "x": "477.1722717285156", "y": "368.411865234375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e0138421aa94a0ba019e2",
                    "seat_name": "6-204",
                    "plugwise_id": 792,
                    "seat_coordinate": { "x": "404.45941162109375", "y": "215.71484375" },
                    "status": "occupied",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e0138421aa94a0ba019e3",
                    "seat_name": "6-205",
                    "plugwise_id": 791,
                    "seat_coordinate": { "x": "406.8831481933594", "y": "264.1900939941406" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e0103421aa94a0ba016cc",
                    "seat_name": "6-206",
                    "plugwise_id": 788,
                    "seat_coordinate": { "x": "397.1881103515625", "y": "322.3603820800781" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e0138421aa94a0ba019e4",
                    "seat_name": "6-207",
                    "plugwise_id": 790,
                    "seat_coordinate": { "x": "409.3069152832031", "y": "368.411865234375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e002f421aa94a0ba00a70",
                    "seat_name": "6-208",
                    "plugwise_id": 781,
                    "seat_coordinate": { "x": "278.4236755371094", "y": "138.15444946289062" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e0064421aa94a0ba00d7f",
                    "seat_name": "6-209",
                    "plugwise_id": 783,
                    "seat_coordinate": { "x": "273.5762939453125", "y": "210.86732482910156" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819052775221db91fc055",
                    "seat_name": "6-21",
                    "plugwise_id": 25,
                    "seat_coordinate": { "x": "1182.487060546875", "y": "138.15444946289062" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e0064421aa94a0ba00d80",
                    "seat_name": "6-210",
                    "plugwise_id": 784,
                    "seat_coordinate": { "x": "276.00006103515625", "y": "261.7663269042969" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8e0098421aa94a0ba0109b",
                    "seat_name": "6-211",
                    "plugwise_id": 785,
                    "seat_coordinate": { "x": "275.9999694824219", "y": "327.2079162597656" },
                    "status": "occupied",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfc46421aa94a0b9fd084",
                    "seat_name": "6-213",
                    "plugwise_id": 768,
                    "seat_coordinate": { "x": "205.71087646484375", "y": "538.0751953125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfcb0421aa94a0b9fd692",
                    "seat_name": "6-214",
                    "plugwise_id": 771,
                    "seat_coordinate": { "x": "203.2871551513672", "y": "576.8554077148438" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfc7b421aa94a0b9fd38e",
                    "seat_name": "6-215",
                    "plugwise_id": 770,
                    "seat_coordinate": { "x": "208.13462829589844", "y": "644.7207641601562" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfb3f421aa94a0b9fc16e",
                    "seat_name": "6-216",
                    "plugwise_id": 765,
                    "seat_coordinate": { "x": "205.71087646484375", "y": "693.1959838867188" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfbdc421aa94a0b9fca85",
                    "seat_name": "6-218",
                    "plugwise_id": 767,
                    "seat_coordinate": { "x": "276", "y": "574.431640625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfdb7421aa94a0b9fe5c2",
                    "seat_name": "6-219",
                    "plugwise_id": 779,
                    "seat_coordinate": { "x": "268.7286376953125", "y": "642.2969970703125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819052775221db91fc06f",
                    "seat_name": "6-22",
                    "plugwise_id": 37,
                    "seat_coordinate": { "x": "1182.487060546875", "y": "213.29107666015625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfd4e421aa94a0b9fdfac",
                    "seat_name": "6-220",
                    "plugwise_id": 775,
                    "seat_coordinate": { "x": "278.4237976074219", "y": "683.5009765625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfd82421aa94a0b9fe2b6",
                    "seat_name": "6-222",
                    "plugwise_id": 778,
                    "seat_coordinate": { "x": "414.1544494628906", "y": "576.8554077148438" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfce4421aa94a0b9fd996",
                    "seat_name": "6-223",
                    "plugwise_id": 772,
                    "seat_coordinate": { "x": "414.1544494628906", "y": "639.8732299804688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfd19421aa94a0b9fdca4",
                    "seat_name": "6-224",
                    "plugwise_id": 773,
                    "seat_coordinate": { "x": "406.8831481933594", "y": "688.3485107421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfd4e421aa94a0b9fdfad",
                    "seat_name": "6-225",
                    "plugwise_id": 776,
                    "seat_coordinate": { "x": "203.287109375", "y": "853.164306640625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfdb7421aa94a0b9fe5c3",
                    "seat_name": "6-226",
                    "plugwise_id": 780,
                    "seat_coordinate": { "x": "210.55841064453125", "y": "904.0633544921875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfd82421aa94a0b9fe2b7",
                    "seat_name": "6-227",
                    "plugwise_id": 777,
                    "seat_coordinate": { "x": "210.5583953857422", "y": "959.8098754882812" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfb3f421aa94a0b9fc16f",
                    "seat_name": "6-229",
                    "plugwise_id": 766,
                    "seat_coordinate": { "x": "280.8475341796875", "y": "850.7406005859375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819052775221db91fc083",
                    "seat_name": "6-23",
                    "plugwise_id": 43,
                    "seat_coordinate": { "x": "1184.910888671875", "y": "264.1900939941406" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfd19421aa94a0b9fdca5",
                    "seat_name": "6-230",
                    "plugwise_id": 774,
                    "seat_coordinate": { "x": "273.5762939453125", "y": "901.6395874023438" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8dfc7b421aa94a0b9fd38f",
                    "seat_name": "6-231",
                    "plugwise_id": 769,
                    "seat_coordinate": { "x": "278.42376708984375", "y": "962.233642578125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df685421aa94a0b9f7c76",
                    "seat_name": "6-232",
                    "plugwise_id": 753,
                    "seat_coordinate": { "x": "273.5762939453125", "y": "1010.7088623046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df5b2421aa94a0b9f70b8",
                    "seat_name": "6-233",
                    "plugwise_id": 748,
                    "seat_coordinate": { "x": "404.45941162109375", "y": "850.7406005859375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df6ef421aa94a0b9f8272",
                    "seat_name": "6-235",
                    "plugwise_id": 758,
                    "seat_coordinate": { "x": "402.03564453125", "y": "959.8098754882812" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df6ef421aa94a0b9f8273",
                    "seat_name": "6-236",
                    "plugwise_id": 759,
                    "seat_coordinate": { "x": "399.61187744140625", "y": "1013.1326293945312" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df6ef421aa94a0b9f8274",
                    "seat_name": "6-237",
                    "plugwise_id": 757,
                    "seat_coordinate": { "x": "479.5960388183594", "y": "848.3168334960938" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df57d421aa94a0b9f6dcd",
                    "seat_name": "6-238",
                    "plugwise_id": 746,
                    "seat_coordinate": { "x": "479.5960388183594", "y": "896.7920532226562" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df78d421aa94a0b9f8b7f",
                    "seat_name": "6-239",
                    "plugwise_id": 764,
                    "seat_coordinate": { "x": "474.7485046386719", "y": "957.3861083984375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819052775221db91fc094",
                    "seat_name": "6-24",
                    "plugwise_id": 42,
                    "seat_coordinate": { "x": "1182.487060546875", "y": "317.5128479003906" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df650421aa94a0b9f7985",
                    "seat_name": "6-240",
                    "plugwise_id": 752,
                    "seat_coordinate": { "x": "469.9009704589844", "y": "1005.861328125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df5e7421aa94a0b9f73a6",
                    "seat_name": "6-241",
                    "plugwise_id": 749,
                    "seat_coordinate": { "x": "622.5980224609375", "y": "853.164306640625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df723421aa94a0b9f857e",
                    "seat_name": "6-242",
                    "plugwise_id": 760,
                    "seat_coordinate": { "x": "612.9029541015625", "y": "896.7920532226562" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df61c421aa94a0b9f7694",
                    "seat_name": "6-243",
                    "plugwise_id": 750,
                    "seat_coordinate": { "x": "622.5980224609375", "y": "964.6574096679688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df685421aa94a0b9f7c77",
                    "seat_name": "6-244",
                    "plugwise_id": 754,
                    "seat_coordinate": { "x": "617.75048828125", "y": "1010.7088623046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df723421aa94a0b9f857f",
                    "seat_name": "6-245",
                    "plugwise_id": 761,
                    "seat_coordinate": { "x": "615.3267211914062", "y": "1083.4217529296875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df6ba421aa94a0b9f7f7d",
                    "seat_name": "6-246",
                    "plugwise_id": 756,
                    "seat_coordinate": { "x": "685.6158447265625", "y": "853.164306640625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df61c421aa94a0b9f7695",
                    "seat_name": "6-247",
                    "plugwise_id": 751,
                    "seat_coordinate": { "x": "685.6158447265625", "y": "899.2158203125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df758421aa94a0b9f8879",
                    "seat_name": "6-248",
                    "plugwise_id": 762,
                    "seat_coordinate": { "x": "688.0396118164062", "y": "959.8098754882812" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df758421aa94a0b9f887a",
                    "seat_name": "6-249",
                    "plugwise_id": 763,
                    "seat_coordinate": { "x": "685.6158447265625", "y": "1010.7088623046875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819062775221db91fc0a5",
                    "seat_name": "6-25",
                    "plugwise_id": 38,
                    "seat_coordinate": { "x": "1177.6395263671875", "y": "373.2593994140625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a8df5b2421aa94a0b9f70b9",
                    "seat_name": "6-250",
                    "plugwise_id": 747,
                    "seat_coordinate": { "x": "692.8870849609375", "y": "1078.57421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819062775221db91fc0b7",
                    "seat_name": "6-26",
                    "plugwise_id": 53,
                    "seat_coordinate": { "x": "1107.3504638671875", "y": "143.00196838378906" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819062775221db91fc0cc",
                    "seat_name": "6-28",
                    "plugwise_id": 16,
                    "seat_coordinate": { "x": "1109.774169921875", "y": "261.7663269042969" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819062775221db91fc0e2",
                    "seat_name": "6-29",
                    "plugwise_id": 40,
                    "seat_coordinate": { "x": "1104.9267578125", "y": "319.9366149902344" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819062775221db91fc0f3",
                    "seat_name": "6-30",
                    "plugwise_id": 35,
                    "seat_coordinate": { "x": "1109.774169921875", "y": "375.68316650390625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819062775221db91fc103",
                    "seat_name": "6-31",
                    "plugwise_id": 64,
                    "seat_coordinate": { "x": "974.0435180664062", "y": "138.15444946289062" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819072775221db91fc116",
                    "seat_name": "6-32",
                    "plugwise_id": 49,
                    "seat_coordinate": { "x": "966.7722778320312", "y": "218.13861083984375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819072775221db91fc12b",
                    "seat_name": "6-33",
                    "plugwise_id": 59,
                    "seat_coordinate": { "x": "969.196044921875", "y": "256.9187927246094" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819072775221db91fc140",
                    "seat_name": "6-34",
                    "plugwise_id": 58,
                    "seat_coordinate": { "x": "969.196044921875", "y": "324.7841491699219" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819072775221db91fc150",
                    "seat_name": "6-35",
                    "plugwise_id": 55,
                    "seat_coordinate": { "x": "969.196044921875", "y": "363.5643310546875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819072775221db91fc163",
                    "seat_name": "6-36",
                    "plugwise_id": 61,
                    "seat_coordinate": { "x": "901.3306884765625", "y": "135.73068237304688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819082775221db91fc17a",
                    "seat_name": "6-37",
                    "plugwise_id": 56,
                    "seat_coordinate": { "x": "896.483154296875", "y": "213.29107666015625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819082775221db91fc195",
                    "seat_name": "6-38",
                    "plugwise_id": 57,
                    "seat_coordinate": { "x": "898.9069213867188", "y": "254.4950408935547" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819082775221db91fc1aa",
                    "seat_name": "6-39",
                    "plugwise_id": 60,
                    "seat_coordinate": { "x": "903.7544555664062", "y": "317.5128479003906" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819082775221db91fc1bd",
                    "seat_name": "6-4",
                    "plugwise_id": 21,
                    "seat_coordinate": { "x": "1676.9345703125", "y": "324.7841491699219" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819082775221db91fc1ce",
                    "seat_name": "6-40",
                    "plugwise_id": 54,
                    "seat_coordinate": { "x": "901.3306884765625", "y": "370.83563232421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819082775221db91fc1e1",
                    "seat_name": "6-41",
                    "plugwise_id": 63,
                    "seat_coordinate": { "x": "685.6158447265625", "y": "138.15444946289062" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819092775221db91fc1f4",
                    "seat_name": "6-42",
                    "plugwise_id": 62,
                    "seat_coordinate": { "x": "690.46337890625", "y": "210.86732482910156" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819092775221db91fc206",
                    "seat_name": "6-43",
                    "plugwise_id": 39,
                    "seat_coordinate": { "x": "685.6158447265625", "y": "256.9187927246094" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819092775221db91fc21b",
                    "seat_name": "6-44",
                    "plugwise_id": 50,
                    "seat_coordinate": { "x": "678.3445434570312", "y": "319.9366149902344" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819092775221db91fc22c",
                    "seat_name": "6-45",
                    "plugwise_id": 52,
                    "seat_coordinate": { "x": "685.6158447265625", "y": "375.68316650390625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a7819092775221db91fc245",
                    "seat_name": "6-46",
                    "plugwise_id": 41,
                    "seat_coordinate": { "x": "608.055419921875", "y": "135.73068237304688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a78190a2775221db91fc255",
                    "seat_name": "6-47",
                    "plugwise_id": 48,
                    "seat_coordinate": { "x": "617.75048828125", "y": "215.71484375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a78190a2775221db91fc267",
                    "seat_name": "6-48",
                    "plugwise_id": 51,
                    "seat_coordinate": { "x": "620.1742553710938", "y": "261.7663269042969" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a78190a2775221db91fc27c",
                    "seat_name": "6-49",
                    "plugwise_id": 47,
                    "seat_coordinate": { "x": "615.3267211914062", "y": "324.7841491699219" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a78190a2775221db91fc28e",
                    "seat_name": "6-5",
                    "plugwise_id": 33,
                    "seat_coordinate": { "x": "1679.3583984375", "y": "368.411865234375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a78190a2775221db91fc2a2",
                    "seat_name": "6-50",
                    "plugwise_id": 46,
                    "seat_coordinate": { "x": "615.3267211914062", "y": "373.2593994140625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2e3",
                    "seat_name": "6-51",
                    "plugwise_id": 99,
                    "seat_coordinate": { "x": "1822.3604736328125", "y": "140.57821655273438" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2e4",
                    "seat_name": "6-52",
                    "plugwise_id": 71,
                    "seat_coordinate": { "x": "1824.7840576171875", "y": "210.86732482910156" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2e5",
                    "seat_name": "6-53",
                    "plugwise_id": 66,
                    "seat_coordinate": { "x": "1817.5128173828125", "y": "252.07127380371094" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2e6",
                    "seat_name": "6-54",
                    "plugwise_id": 103,
                    "seat_coordinate": { "x": "1824.7840576171875", "y": "317.5128479003906" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2e7",
                    "seat_name": "6-55",
                    "plugwise_id": 86,
                    "seat_coordinate": { "x": "1822.3603515625", "y": "363.5643310546875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2e8",
                    "seat_name": "6-56",
                    "plugwise_id": 73,
                    "seat_coordinate": { "x": "1892.6494140625", "y": "133.3069305419922" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2e9",
                    "seat_name": "6-57",
                    "plugwise_id": 82,
                    "seat_coordinate": { "x": "1890.2257080078125", "y": "222.9861297607422" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2ea",
                    "seat_name": "6-58",
                    "plugwise_id": 74,
                    "seat_coordinate": { "x": "1897.4969482421875", "y": "259.3425598144531" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2eb",
                    "seat_name": "6-59",
                    "plugwise_id": 97,
                    "seat_coordinate": { "x": "1887.8018798828125", "y": "322.3603820800781" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a78190a2775221db91fc2b3",
                    "seat_name": "6-6",
                    "plugwise_id": 18,
                    "seat_coordinate": { "x": "1609.0692138671875", "y": "147.84950256347656" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2ec",
                    "seat_name": "6-60",
                    "plugwise_id": 100,
                    "seat_coordinate": { "x": "1892.6494140625", "y": "368.411865234375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2ed",
                    "seat_name": "6-61",
                    "plugwise_id": 70,
                    "seat_coordinate": { "x": "2035.6513671875", "y": "135.73068237304688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2ee",
                    "seat_name": "6-62",
                    "plugwise_id": 80,
                    "seat_coordinate": { "x": "2033.2276611328125", "y": "215.71484375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2ef",
                    "seat_name": "6-63",
                    "plugwise_id": 102,
                    "seat_coordinate": { "x": "2035.6513671875", "y": "264.1900939941406" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2f0",
                    "seat_name": "6-64",
                    "plugwise_id": 81,
                    "seat_coordinate": { "x": "2038.0751953125", "y": "329.6316833496094" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2f1",
                    "seat_name": "6-65",
                    "plugwise_id": 87,
                    "seat_coordinate": { "x": "2035.6513671875", "y": "365.98809814453125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2f2",
                    "seat_name": "6-66",
                    "plugwise_id": 105,
                    "seat_coordinate": { "x": "2103.516845703125", "y": "145.4257354736328" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2f3",
                    "seat_name": "6-67",
                    "plugwise_id": 107,
                    "seat_coordinate": { "x": "2103.516845703125", "y": "213.29107666015625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2f4",
                    "seat_name": "6-68",
                    "plugwise_id": 104,
                    "seat_coordinate": { "x": "2103.516845703125", "y": "254.4950408935547" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2f5",
                    "seat_name": "6-69",
                    "plugwise_id": 108,
                    "seat_coordinate": { "x": "2101.093017578125", "y": "334.47918701171875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a782b432775221db925766b",
                    "seat_name": "6-7",
                    "plugwise_id": 19,
                    "seat_coordinate": { "x": "1611.4930419921875", "y": "215.71484375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2f6",
                    "seat_name": "6-70",
                    "plugwise_id": 106,
                    "seat_coordinate": { "x": "2103.516845703125", "y": "370.83563232421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2f7",
                    "seat_name": "6-72",
                    "plugwise_id": 84,
                    "seat_coordinate": { "x": "2316.807861328125", "y": "208.4435577392578" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2f8",
                    "seat_name": "6-73",
                    "plugwise_id": 17,
                    "seat_coordinate": { "x": "2314.384033203125", "y": "259.3425598144531" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2f9",
                    "seat_name": "6-74",
                    "plugwise_id": 78,
                    "seat_coordinate": { "x": "2328.9267578125", "y": "319.9366149902344" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2fa",
                    "seat_name": "6-75",
                    "plugwise_id": 98,
                    "seat_coordinate": { "x": "2319.231689453125", "y": "373.2593994140625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2fb",
                    "seat_name": "6-76",
                    "plugwise_id": 91,
                    "seat_coordinate": { "x": "2394.3681640625", "y": "135.73068237304688" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2fc",
                    "seat_name": "6-77",
                    "plugwise_id": 79,
                    "seat_coordinate": { "x": "2377.40185546875", "y": "213.29107666015625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2fd",
                    "seat_name": "6-78",
                    "plugwise_id": 95,
                    "seat_coordinate": { "x": "2389.520751953125", "y": "256.9187927246094" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2fe",
                    "seat_name": "6-79",
                    "plugwise_id": 65,
                    "seat_coordinate": { "x": "2384.673095703125", "y": "322.3603820800781" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a782b432775221db9257678",
                    "seat_name": "6-8",
                    "plugwise_id": 22,
                    "seat_coordinate": { "x": "1613.916748046875", "y": "261.7663269042969" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a2ff",
                    "seat_name": "6-80",
                    "plugwise_id": 85,
                    "seat_coordinate": { "x": "2389.520751953125", "y": "358.7168273925781" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a300",
                    "seat_name": "6-81",
                    "plugwise_id": 77,
                    "seat_coordinate": { "x": "2530.098876953125", "y": "210.86732482910156" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a301",
                    "seat_name": "6-82",
                    "plugwise_id": 94,
                    "seat_coordinate": { "x": "2532.522705078125", "y": "259.3425598144531" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a302",
                    "seat_name": "6-83",
                    "plugwise_id": 90,
                    "seat_coordinate": { "x": "2534.946533203125", "y": "322.3603820800781" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a303",
                    "seat_name": "6-84",
                    "plugwise_id": 92,
                    "seat_coordinate": { "x": "2532.522705078125", "y": "365.98809814453125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a304",
                    "seat_name": "6-85",
                    "plugwise_id": 101,
                    "seat_coordinate": { "x": "2605.235595703125", "y": "215.71484375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a305",
                    "seat_name": "6-86",
                    "plugwise_id": 68,
                    "seat_coordinate": { "x": "2597.96435546875", "y": "256.9187927246094" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a306",
                    "seat_name": "6-87",
                    "plugwise_id": 72,
                    "seat_coordinate": { "x": "2605.235595703125", "y": "319.9366149902344" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a307",
                    "seat_name": "6-88",
                    "plugwise_id": 93,
                    "seat_coordinate": { "x": "2600.387939453125", "y": "365.98809814453125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a308",
                    "seat_name": "6-89",
                    "plugwise_id": 75,
                    "seat_coordinate": { "x": "2728.847412109375", "y": "210.86732482910156" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a782b432775221db9257686",
                    "seat_name": "6-9",
                    "plugwise_id": 29,
                    "seat_coordinate": { "x": "1606.6455078125", "y": "324.7841491699219" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a309",
                    "seat_name": "6-90",
                    "plugwise_id": 67,
                    "seat_coordinate": { "x": "2736.11865234375", "y": "261.7663269042969" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a30a",
                    "seat_name": "6-91",
                    "plugwise_id": 69,
                    "seat_coordinate": { "x": "2733.695068359375", "y": "317.5128479003906" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a30b",
                    "seat_name": "6-92",
                    "plugwise_id": 96,
                    "seat_coordinate": { "x": "2736.11865234375", "y": "370.83563232421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a30c",
                    "seat_name": "6-93",
                    "plugwise_id": 76,
                    "seat_coordinate": { "x": "2794.2890625", "y": "215.71484375" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a30d",
                    "seat_name": "6-94",
                    "plugwise_id": 89,
                    "seat_coordinate": { "x": "2796.712890625", "y": "259.3425598144531" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a30e",
                    "seat_name": "6-95",
                    "plugwise_id": 88,
                    "seat_coordinate": { "x": "2801.560302734375", "y": "327.2079162597656" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a80e617421aa90b4642a30f",
                    "seat_name": "6-96",
                    "plugwise_id": 83,
                    "seat_coordinate": { "x": "2801.560302734375", "y": "370.83563232421875" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a782b432775221db9257693",
                    "seat_name": "6-97",
                    "plugwise_id": 130,
                    "seat_coordinate": { "x": "2319.231689453125", "y": "853.164306640625" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a782b432775221db92576a1",
                    "seat_name": "6-98",
                    "plugwise_id": 144,
                    "seat_coordinate": { "x": "2321.6552734375", "y": "899.2158203125" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }, {
                    "id": "5a782b442775221db92576ae",
                    "seat_name": "6-99",
                    "plugwise_id": 109,
                    "seat_coordinate": { "x": "2324.0791015625", "y": "959.8098754882812" },
                    "status": "free",
                    "user_id": "000000000000000000000000",
                    "username": ""
                }]
        };
    };
    AppComponent.prototype.changeMap3 = function () {
        this.options = {
            imgSrc: '/assets/img/36_floor.svg',
            points: [{ "id": "5a7818af2775221db91f9b28", "seat_name": "2-1", "plugwise_id": 208, "seat_coordinate": { "x": "261.4574279785156", "y": "111.4930648803711" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818af2775221db91f9b42", "seat_name": "2-10", "plugwise_id": 157, "seat_coordinate": { "x": "351.1366271972656", "y": "378.10693359375" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a29a", "seat_name": "2-100", "plugwise_id": 241, "seat_coordinate": { "x": "1604.2216796875", "y": "116.34059143066406" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a29b", "seat_name": "2-101", "plugwise_id": 216, "seat_coordinate": { "x": "1618.7642822265625", "y": "181.78216552734375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a29c", "seat_name": "2-102", "plugwise_id": 211, "seat_coordinate": { "x": "1599.374267578125", "y": "242.37623596191406" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818af2775221db91f9b5e", "seat_name": "2-103", "plugwise_id": 286, "seat_coordinate": { "x": "1827.2078857421875", "y": "101.79801940917969" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818af2775221db91f9b7a", "seat_name": "2-104", "plugwise_id": 268, "seat_coordinate": { "x": "1834.4791259765625", "y": "172.08712768554688" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b02775221db91f9b91", "seat_name": "2-105", "plugwise_id": 271, "seat_coordinate": { "x": "1829.631591796875", "y": "239.9524688720703" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b02775221db91f9ba7", "seat_name": "2-106", "plugwise_id": 260, "seat_coordinate": { "x": "1829.631591796875", "y": "302.97027587890625" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b02775221db91f9bbe", "seat_name": "2-107", "plugwise_id": 264, "seat_coordinate": { "x": "1832.055419921875", "y": "363.5643310546875" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b02775221db91f9bd4", "seat_name": "2-108", "plugwise_id": 258, "seat_coordinate": { "x": "1919.310791015625", "y": "104.2217788696289" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b02775221db91f9be7", "seat_name": "2-109", "plugwise_id": 255, "seat_coordinate": { "x": "1914.4632568359375", "y": "181.78216552734375" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b12775221db91f9bfb", "seat_name": "2-11", "plugwise_id": 168, "seat_coordinate": { "x": "435.96832275390625", "y": "126.03563690185547" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b12775221db91f9c0f", "seat_name": "2-110", "plugwise_id": 275, "seat_coordinate": { "x": "1914.4632568359375", "y": "237.52870178222656" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b12775221db91f9c22", "seat_name": "2-111", "plugwise_id": 281, "seat_coordinate": { "x": "1907.1920166015625", "y": "300.5465393066406" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b12775221db91f9c3c", "seat_name": "2-112", "plugwise_id": 256, "seat_coordinate": { "x": "1914.4632568359375", "y": "365.98809814453125" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b12775221db91f9c4c", "seat_name": "2-113", "plugwise_id": 274, "seat_coordinate": { "x": "2023.5325927734375", "y": "104.2217788696289" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b12775221db91f9c5e", "seat_name": "2-114", "plugwise_id": 282, "seat_coordinate": { "x": "2028.380126953125", "y": "179.35841369628906" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b22775221db91f9c70", "seat_name": "2-115", "plugwise_id": 278, "seat_coordinate": { "x": "2025.9564208984375", "y": "235.10494995117188" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b22775221db91f9c83", "seat_name": "2-116", "plugwise_id": 279, "seat_coordinate": { "x": "2028.380126953125", "y": "305.39404296875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b22775221db91f9c9b", "seat_name": "2-117", "plugwise_id": 249, "seat_coordinate": { "x": "2030.803955078125", "y": "363.5643310546875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b22775221db91f9cac", "seat_name": "2-118", "plugwise_id": 248, "seat_coordinate": { "x": "2096.24560546875", "y": "111.4930648803711" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b22775221db91f9cbf", "seat_name": "2-119", "plugwise_id": 287, "seat_coordinate": { "x": "2105.9404296875", "y": "179.35841369628906" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b32775221db91f9ccf", "seat_name": "2-12", "plugwise_id": 180, "seat_coordinate": { "x": "445.6633605957031", "y": "184.2059326171875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b32775221db91f9ce5", "seat_name": "2-120", "plugwise_id": 265, "seat_coordinate": { "x": "2103.516845703125", "y": "235.10494995117188" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b32775221db91f9cf5", "seat_name": "2-121", "plugwise_id": 251, "seat_coordinate": { "x": "2103.516845703125", "y": "317.5128479003906" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b32775221db91f9d07", "seat_name": "2-122", "plugwise_id": 280, "seat_coordinate": { "x": "2096.24560546875", "y": "368.411865234375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b32775221db91f9d1a", "seat_name": "2-123", "plugwise_id": 273, "seat_coordinate": { "x": "2215.009765625", "y": "106.64553833007812" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b32775221db91f9d31", "seat_name": "2-124", "plugwise_id": 289, "seat_coordinate": { "x": "2217.43359375", "y": "172.08712768554688" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b42775221db91f9d44", "seat_name": "2-125", "plugwise_id": 15, "seat_coordinate": { "x": "2222.281005859375", "y": "235.10494995117188" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b42775221db91f9d5b", "seat_name": "2-126", "plugwise_id": 266, "seat_coordinate": { "x": "2212.586181640625", "y": "293.2752380371094" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b42775221db91f9d6c", "seat_name": "2-127", "plugwise_id": 253, "seat_coordinate": { "x": "2224.704833984375", "y": "368.411865234375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b42775221db91f9d7e", "seat_name": "2-128", "plugwise_id": 259, "seat_coordinate": { "x": "2297.417724609375", "y": "111.4930648803711" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b42775221db91f9d93", "seat_name": "2-129", "plugwise_id": 284, "seat_coordinate": { "x": "2299.841552734375", "y": "172.08712768554688" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b52775221db91f9da3", "seat_name": "2-13", "plugwise_id": 179, "seat_coordinate": { "x": "448.0871276855469", "y": "244.79998779296875" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b52775221db91f9db5", "seat_name": "2-131", "plugwise_id": 277, "seat_coordinate": { "x": "2294.993896484375", "y": "293.2752380371094" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b52775221db91f9dc9", "seat_name": "2-132", "plugwise_id": 262, "seat_coordinate": { "x": "2302.265380859375", "y": "365.98809814453125" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b52775221db91f9ddd", "seat_name": "2-133", "plugwise_id": 261, "seat_coordinate": { "x": "2408.910888671875", "y": "121.18811798095703" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b52775221db91f9df1", "seat_name": "2-134", "plugwise_id": 247, "seat_coordinate": { "x": "2413.75830078125", "y": "179.35841369628906" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b52775221db91f9e02", "seat_name": "2-135", "plugwise_id": 254, "seat_coordinate": { "x": "2416.18212890625", "y": "239.9524688720703" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b62775221db91f9e15", "seat_name": "2-136", "plugwise_id": 285, "seat_coordinate": { "x": "2416.18212890625", "y": "298.1227722167969" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b62775221db91f9e2b", "seat_name": "2-138", "plugwise_id": 283, "seat_coordinate": { "x": "2509.74658203125", "y": "181.32530212402344" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b62775221db91f9e46", "seat_name": "2-139", "plugwise_id": 288, "seat_coordinate": { "x": "2503.4375", "y": "242.37623596191406" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b62775221db91f9e56", "seat_name": "2-14", "plugwise_id": 166, "seat_coordinate": { "x": "448.0871276855469", "y": "302.97027587890625" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b62775221db91f9e67", "seat_name": "2-140", "plugwise_id": 252, "seat_coordinate": { "x": "2501.013671875", "y": "305.39404296875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b72775221db91f9e79", "seat_name": "2-141", "plugwise_id": 267, "seat_coordinate": { "x": "2491.31884765625", "y": "370.83563232421875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b72775221db91f9e8b", "seat_name": "2-142", "plugwise_id": 250, "seat_coordinate": { "x": "2616.20556640625", "y": "158.74310302734375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b72775221db91f9e9d", "seat_name": "2-143", "plugwise_id": 269, "seat_coordinate": { "x": "2622.201904296875", "y": "225.40989685058594" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b72775221db91f9eb1", "seat_name": "2-144", "plugwise_id": 257, "seat_coordinate": { "x": "2624.625732421875", "y": "298.1227722167969" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b72775221db91f9ec2", "seat_name": "2-145", "plugwise_id": 270, "seat_coordinate": { "x": "2622.201904296875", "y": "375.68316650390625" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b72775221db91f9ed7", "seat_name": "2-146", "plugwise_id": 272, "seat_coordinate": { "x": "2697.338623046875", "y": "145.4257354736328" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b82775221db91f9ef2", "seat_name": "2-147", "plugwise_id": 276, "seat_coordinate": { "x": "2699.76220703125", "y": "227.8336639404297" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b82775221db91f9f15", "seat_name": "2-148", "plugwise_id": 263, "seat_coordinate": { "x": "2702.18603515625", "y": "290.8514709472656" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b82775221db91f9f27", "seat_name": "2-15", "plugwise_id": 178, "seat_coordinate": { "x": "450.5108947753906", "y": "368.411865234375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b82775221db91f9f35", "seat_name": "2-16", "plugwise_id": 186, "seat_coordinate": { "x": "545.03759765625", "y": "113.91683197021484" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b82775221db91f9f45", "seat_name": "2-17", "plugwise_id": 159, "seat_coordinate": { "x": "530.4950561523438", "y": "179.35841369628906" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b92775221db91f9f56", "seat_name": "2-18", "plugwise_id": 172, "seat_coordinate": { "x": "532.9188232421875", "y": "244.79998779296875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b92775221db91f9f65", "seat_name": "2-19", "plugwise_id": 201, "seat_coordinate": { "x": "532.9188232421875", "y": "307.81781005859375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b92775221db91f9f73", "seat_name": "2-2", "plugwise_id": 190, "seat_coordinate": { "x": "256.6098937988281", "y": "176.9346466064453" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b92775221db91f9f82", "seat_name": "2-20", "plugwise_id": 177, "seat_coordinate": { "x": "542.6138305664062", "y": "375.68316650390625" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b92775221db91f9fa2", "seat_name": "2-21", "plugwise_id": 184, "seat_coordinate": { "x": "641.9880981445312", "y": "109.06930541992188" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818b92775221db91f9fb7", "seat_name": "2-22", "plugwise_id": 176, "seat_coordinate": { "x": "644.411865234375", "y": "174.51087951660156" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818ba2775221db91f9fc7", "seat_name": "2-23", "plugwise_id": 155, "seat_coordinate": { "x": "644.411865234375", "y": "242.37623596191406" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818ba2775221db91f9fdf", "seat_name": "2-24", "plugwise_id": 163, "seat_coordinate": { "x": "649.2593994140625", "y": "302.97027587890625" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818ba2775221db91f9ff1", "seat_name": "2-25", "plugwise_id": 195, "seat_coordinate": { "x": "646.8356323242188", "y": "370.83563232421875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818ba2775221db91fa006", "seat_name": "2-26", "plugwise_id": 149, "seat_coordinate": { "x": "738.9385986328125", "y": "109.06930541992188" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818ba2775221db91fa018", "seat_name": "2-27", "plugwise_id": 181, "seat_coordinate": { "x": "729.2435302734375", "y": "191.4772186279297" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bb2775221db91fa028", "seat_name": "2-28", "plugwise_id": 182, "seat_coordinate": { "x": "726.8197631835938", "y": "256.9187927246094" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bb2775221db91fa03a", "seat_name": "2-29", "plugwise_id": 160, "seat_coordinate": { "x": "726.8197631835938", "y": "324.7841491699219" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bb2775221db91fa04f", "seat_name": "2-3", "plugwise_id": 198, "seat_coordinate": { "x": "259.0336608886719", "y": "242.37623596191406" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bb2775221db91fa061", "seat_name": "2-30", "plugwise_id": 188, "seat_coordinate": { "x": "724.39599609375", "y": "380.5306701660156" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bb2775221db91fa074", "seat_name": "2-31", "plugwise_id": 150, "seat_coordinate": { "x": "128.15045166015625", "y": "572.0078735351562" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bb2775221db91fa084", "seat_name": "2-32", "plugwise_id": 154, "seat_coordinate": { "x": "181.47329711914062", "y": "576.8554077148438" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bc2775221db91fa096", "seat_name": "2-33", "plugwise_id": 205, "seat_coordinate": { "x": "305.0851745605469", "y": "567.1603393554688" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bc2775221db91fa0b0", "seat_name": "2-34", "plugwise_id": 10, "seat_coordinate": { "x": "365.6792297363281", "y": "569.5841674804688" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bc2775221db91fa0c4", "seat_name": "2-35", "plugwise_id": 152, "seat_coordinate": { "x": "440.8157958984375", "y": "574.4317016601562" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bc2775221db91fa0d4", "seat_name": "2-36", "plugwise_id": 192, "seat_coordinate": { "x": "501.4099426269531", "y": "572.0079345703125" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bc2775221db91fa0e8", "seat_name": "2-37", "plugwise_id": 161, "seat_coordinate": { "x": "113.60785675048828", "y": "678.6534423828125" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bd2775221db91fa104", "seat_name": "2-38", "plugwise_id": 151, "seat_coordinate": { "x": "181.4732666015625", "y": "678.6534423828125" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bd2775221db91fa120", "seat_name": "2-39", "plugwise_id": 165, "seat_coordinate": { "x": "290.54254150390625", "y": "668.9584350585938" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bd2775221db91fa13a", "seat_name": "2-4", "plugwise_id": 171, "seat_coordinate": { "x": "261.4574279785156", "y": "302.97027587890625" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bd2775221db91fa154", "seat_name": "2-40", "plugwise_id": 207, "seat_coordinate": { "x": "353.560302734375", "y": "666.5346069335938" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bd2775221db91fa16d", "seat_name": "2-41", "plugwise_id": 200, "seat_coordinate": { "x": "421.42578125", "y": "668.9584350585938" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bd2775221db91fa18e", "seat_name": "2-42", "plugwise_id": 197, "seat_coordinate": { "x": "472.3247375488281", "y": "676.2296752929688" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818be2775221db91fa1a6", "seat_name": "2-43", "plugwise_id": 173, "seat_coordinate": { "x": "108.76051330566406", "y": "816.8079223632812" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818be2775221db91fa1b9", "seat_name": "2-44", "plugwise_id": 199, "seat_coordinate": { "x": "174.20201110839844", "y": "816.807861328125" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818be2775221db91fa1cc", "seat_name": "2-45", "plugwise_id": 153, "seat_coordinate": { "x": "290.54254150390625", "y": "821.6553955078125" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818be2775221db91fa1e0", "seat_name": "2-46", "plugwise_id": 169, "seat_coordinate": { "x": "360.8316955566406", "y": "819.2316284179688" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818be2775221db91fa1f7", "seat_name": "2-47", "plugwise_id": 193, "seat_coordinate": { "x": "426.2732238769531", "y": "814.3840942382812" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bf2775221db91fa20b", "seat_name": "2-48", "plugwise_id": 158, "seat_coordinate": { "x": "479.5960388183594", "y": "824.0791625976562" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bf2775221db91fa21e", "seat_name": "2-49", "plugwise_id": 167, "seat_coordinate": { "x": "101.48920440673828", "y": "904.0633544921875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bf2775221db91fa22f", "seat_name": "2-5", "plugwise_id": 174, "seat_coordinate": { "x": "256.6098937988281", "y": "368.411865234375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bf2775221db91fa247", "seat_name": "2-50", "plugwise_id": 162, "seat_coordinate": { "x": "171.77816772460938", "y": "901.6395874023438" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bf2775221db91fa258", "seat_name": "2-51", "plugwise_id": 191, "seat_coordinate": { "x": "290.5425720214844", "y": "896.7920532226562" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818bf2775221db91fa26b", "seat_name": "2-52", "plugwise_id": 203, "seat_coordinate": { "x": "353.5604248046875", "y": "896.7920532226562" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a29d", "seat_name": "2-53", "plugwise_id": 204, "seat_coordinate": { "x": "428.69708251953125", "y": "899.2158203125" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c02775221db91fa282", "seat_name": "2-54", "plugwise_id": 209, "seat_coordinate": { "x": "489.29107666015625", "y": "899.2158203125" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c02775221db91fa294", "seat_name": "2-55", "plugwise_id": 187, "seat_coordinate": { "x": "611.688720703125", "y": "848.00537109375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c02775221db91fa2aa", "seat_name": "2-56", "plugwise_id": 189, "seat_coordinate": { "x": "622.5980224609375", "y": "918.6058959960938" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c02775221db91fa2bb", "seat_name": "2-57", "plugwise_id": 196, "seat_coordinate": { "x": "622.5980224609375", "y": "986.4712524414062" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c02775221db91fa2cd", "seat_name": "2-58", "plugwise_id": 202, "seat_coordinate": { "x": "622.5980224609375", "y": "1044.6416015625" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c12775221db91fa2de", "seat_name": "2-6", "plugwise_id": 194, "seat_coordinate": { "x": "339.017822265625", "y": "111.4930648803711" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c12775221db91fa2f0", "seat_name": "2-61", "plugwise_id": 175, "seat_coordinate": { "x": "700.1583862304688", "y": "923.4534301757812" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c12775221db91fa302", "seat_name": "2-62", "plugwise_id": 206, "seat_coordinate": { "x": "700.1583862304688", "y": "984.0474853515625" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c12775221db91fa313", "seat_name": "2-63", "plugwise_id": 183, "seat_coordinate": { "x": "702.5821533203125", "y": "1056.7603759765625" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c12775221db91fa327", "seat_name": "2-64", "plugwise_id": 185, "seat_coordinate": { "x": "697.734619140625", "y": "1117.3543701171875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a29e", "seat_name": "2-65", "plugwise_id": 221, "seat_coordinate": { "x": "935.2633666992188", "y": "106.64553833007812" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a29f", "seat_name": "2-66", "plugwise_id": 244, "seat_coordinate": { "x": "937.6871337890625", "y": "184.2059326171875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2a0", "seat_name": "2-67", "plugwise_id": 233, "seat_coordinate": { "x": "932.839599609375", "y": "239.9524688720703" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2a1", "seat_name": "2-68", "plugwise_id": 212, "seat_coordinate": { "x": "937.6871337890625", "y": "300.5465393066406" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a8eb27e421aa94a0ba3bfba", "seat_name": "2-69", "plugwise_id": 242, "seat_coordinate": { "x": "935.2633666992188", "y": "370.83563232421875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c12775221db91fa33f", "seat_name": "2-7", "plugwise_id": 170, "seat_coordinate": { "x": "343.8653259277344", "y": "181.78216552734375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2a2", "seat_name": "2-70", "plugwise_id": 226, "seat_coordinate": { "x": "1024.9425048828125", "y": "99.37425231933594" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2a3", "seat_name": "2-71", "plugwise_id": 210, "seat_coordinate": { "x": "1017.6712646484375", "y": "181.78216552734375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2a4", "seat_name": "2-72", "plugwise_id": 240, "seat_coordinate": { "x": "1017.6712646484375", "y": "237.52870178222656" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2a5", "seat_name": "2-73", "plugwise_id": 219, "seat_coordinate": { "x": "1012.82373046875", "y": "295.6990051269531" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2a6", "seat_name": "2-74", "plugwise_id": 227, "seat_coordinate": { "x": "1007.9761962890625", "y": "358.7168273925781" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2a7", "seat_name": "2-75", "plugwise_id": 220, "seat_coordinate": { "x": "1124.3167724609375", "y": "109.06930541992188" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2a8", "seat_name": "2-76", "plugwise_id": 238, "seat_coordinate": { "x": "1131.588134765625", "y": "181.78216552734375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2a9", "seat_name": "2-77", "plugwise_id": 232, "seat_coordinate": { "x": "1131.588134765625", "y": "239.9524688720703" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2aa", "seat_name": "2-78", "plugwise_id": 239, "seat_coordinate": { "x": "1131.588134765625", "y": "298.1227722167969" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2ab", "seat_name": "2-79", "plugwise_id": 234, "seat_coordinate": { "x": "1129.164306640625", "y": "365.98809814453125" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c22775221db91fa35b", "seat_name": "2-8", "plugwise_id": 156, "seat_coordinate": { "x": "346.2890930175781", "y": "249.64752197265625" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2ac", "seat_name": "2-80", "plugwise_id": 243, "seat_coordinate": { "x": "1209.1484375", "y": "113.91683197021484" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2ad", "seat_name": "2-81", "plugwise_id": 237, "seat_coordinate": { "x": "1209.1484375", "y": "174.51087951660156" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2ae", "seat_name": "2-82", "plugwise_id": 231, "seat_coordinate": { "x": "1204.3009033203125", "y": "239.9524688720703" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2af", "seat_name": "2-83", "plugwise_id": 223, "seat_coordinate": { "x": "1204.3009033203125", "y": "298.1227722167969" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2b0", "seat_name": "2-84", "plugwise_id": 225, "seat_coordinate": { "x": "1211.572265625", "y": "370.83563232421875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2b1", "seat_name": "2-85", "plugwise_id": 235, "seat_coordinate": { "x": "1325.489013671875", "y": "113.91683197021484" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2b2", "seat_name": "2-86", "plugwise_id": 246, "seat_coordinate": { "x": "1332.7603759765625", "y": "176.9346466064453" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2b3", "seat_name": "2-87", "plugwise_id": 5, "seat_coordinate": { "x": "1327.912841796875", "y": "239.9524688720703" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2b4", "seat_name": "2-88", "plugwise_id": 229, "seat_coordinate": { "x": "1327.912841796875", "y": "302.97027587890625" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2b5", "seat_name": "2-89", "plugwise_id": 215, "seat_coordinate": { "x": "1323.0653076171875", "y": "358.7168273925781" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a7818c22775221db91fa36c", "seat_name": "2-9", "plugwise_id": 164, "seat_coordinate": { "x": "348.7128601074219", "y": "317.5128479003906" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2b6", "seat_name": "2-90", "plugwise_id": 236, "seat_coordinate": { "x": "1412.7445068359375", "y": "121.18811798095703" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2b7", "seat_name": "2-91", "plugwise_id": 230, "seat_coordinate": { "x": "1405.4732666015625", "y": "181.78216552734375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2b8", "seat_name": "2-92", "plugwise_id": 218, "seat_coordinate": { "x": "1407.89697265625", "y": "259.3425598144531" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2b9", "seat_name": "2-93", "plugwise_id": 214, "seat_coordinate": { "x": "1398.201904296875", "y": "307.81781005859375" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2ba", "seat_name": "2-94", "plugwise_id": 224, "seat_coordinate": { "x": "1405.4732666015625", "y": "382.9544372558594" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2bb", "seat_name": "2-95", "plugwise_id": 222, "seat_coordinate": { "x": "1516.96630859375", "y": "106.64553833007812" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2bc", "seat_name": "2-96", "plugwise_id": 217, "seat_coordinate": { "x": "1516.96630859375", "y": "174.51087951660156" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2bd", "seat_name": "2-97", "plugwise_id": 228, "seat_coordinate": { "x": "1524.237548828125", "y": "237.52870178222656" }, "status": "occupied", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2be", "seat_name": "2-98", "plugwise_id": 213, "seat_coordinate": { "x": "1514.54248046875", "y": "302.97027587890625" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }, { "id": "5a80e617421aa90b4642a2bf", "seat_name": "2-99", "plugwise_id": 245, "seat_coordinate": { "x": "1531.5089111328125", "y": "370.83563232421875" }, "status": "free", "user_id": "000000000000000000000000", "username": "" }]
        };
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__floor_canvas_native_floor_canvas_native_component__ = __webpack_require__("../../../../../src/app/floor-canvas-native/floor-canvas-native.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__floor_canvas_floor_canvas_component__ = __webpack_require__("../../../../../src/app/floor-canvas/floor-canvas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__floor_canvas_native_floor_canvas_native_component__["a" /* FloorCanvasNativeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__floor_canvas_floor_canvas_component__["a" /* FloorCanvasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/floor-canvas-native/floor-canvas-native.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/floor-canvas-native/floor-canvas-native.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"floor-canvas\">\n  <canvas #canvas class=\"floor-canvas__entity\"\n          [height]=\"options.height\"\n          [width]=\"options.width\"></canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/floor-canvas-native/floor-canvas-native.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloorCanvasNativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FloorCanvasNativeComponent = (function () {
    function FloorCanvasNativeComponent() {
    }
    FloorCanvasNativeComponent.prototype.ngOnInit = function () {
    };
    FloorCanvasNativeComponent.prototype.ngAfterViewInit = function () {
        this._initCanvas(this.canvas.nativeElement, this.options);
    };
    FloorCanvasNativeComponent.prototype._initCanvas = function (el, options) {
        var context = el.getContext('2d'), imageObj = new Image(), cv = options.width, ch = options.height;
        var src = this.options.imgSrc;
        imageObj.src = src;
        imageObj.onload = function () {
            context.clearRect(0, 0, cv, ch);
            context.drawImage(imageObj, 0, 0);
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('canvas'),
        __metadata("design:type", Object)
    ], FloorCanvasNativeComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], FloorCanvasNativeComponent.prototype, "options", void 0);
    FloorCanvasNativeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-floor-canvas-native',
            template: __webpack_require__("../../../../../src/app/floor-canvas-native/floor-canvas-native.component.html"),
            styles: [__webpack_require__("../../../../../src/app/floor-canvas-native/floor-canvas-native.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FloorCanvasNativeComponent);
    return FloorCanvasNativeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/floor-canvas/floor-canvas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".crosshair {cursor: crosshair;}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/floor-canvas/floor-canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<div #floor class=\"floor-container crosshair\"></div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/floor-canvas/floor-canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloorCanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
};
var FloorCanvasComponent = (function () {
    function FloorCanvasComponent() {
    }
    Object.defineProperty(FloorCanvasComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (val) {
            this._options = val;
            this._initCanvas(this._options.points);
        },
        enumerable: true,
        configurable: true
    });
    FloorCanvasComponent.prototype._initCanvas = function (seats) {
        var _this = this;
        this.destroy();
        var width = window.innerWidth, height = window.innerHeight;
        this.stage = new __WEBPACK_IMPORTED_MODULE_2_konva__["Stage"]({
            container: this.canvas.nativeElement,
            width: window.innerWidth,
            height: window.innerHeight,
            draggable: true
        });
        this.pointRadius = 8;
        this.layer = new __WEBPACK_IMPORTED_MODULE_2_konva__["Layer"]();
        var imageObj = new Image();
        imageObj.onload = function () {
            _this.setImageToDOM(_this.options.imgSrc)
                .subscribe(function (r) {
                var maxScreen = 2200;
                var k = r.width / r.height;
                var calcHeight = height > r.height ? r.height : height;
                if (r.width > r.height) {
                    if (r.width > maxScreen) {
                        calcHeight *= maxScreen / r.width;
                    }
                }
                else {
                    if (r.height > maxScreen) {
                        calcHeight = maxScreen;
                    }
                }
                _this.planWidth = k * calcHeight;
                _this.planHeight = calcHeight;
                _this.centerPositionX = width / 2 - _this.planWidth / 2;
                _this.centerPositionY = height / 2 - _this.planHeight / 2;
                _this.zoomK = _this.planHeight / r.height;
                _this.pointRadius = _this.planWidth < 1000 ? 4 : 8;
                _this.addFloorToLayer({
                    x: _this.centerPositionX,
                    y: _this.centerPositionY,
                    image: imageObj,
                    width: _this.planWidth,
                    height: _this.planHeight
                });
                // add seats
                _this.addSeatsToLayer(seats);
                // add all layer
                _this.stage.add(_this.layer);
                // add zoom
                _this.addZoomToStage(_this.stage);
            });
        };
        imageObj.src = this.options.imgSrc;
    };
    FloorCanvasComponent.prototype.destroy = function () {
        if (this.stage) {
            this.stage.clear();
            this.stage.clearCache();
            this.stage.destroy();
        }
    };
    FloorCanvasComponent.prototype.setImageToDOM = function (src) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (obs) {
            var imageOfPlan = document.createElement('img');
            imageOfPlan.style.maxWidth = 'none';
            imageOfPlan.style.position = 'absolute';
            imageOfPlan.style.top = '0px';
            imageOfPlan.style.left = '-9999%';
            imageOfPlan.style.zIndex = '-20';
            imageOfPlan.crossOrigin = 'Anonymous';
            imageOfPlan.src = src;
            imageOfPlan.onerror = function (err) { return obs.error(err); };
            imageOfPlan.onabort = function (err) { return obs.error(err); };
            imageOfPlan.onload = function () { return obs.next(imageOfPlan); };
            document.body.appendChild(imageOfPlan);
            // IE fix
            setTimeout(function () {
                document.body.removeChild(imageOfPlan);
            }, 100);
        });
    };
    FloorCanvasComponent.prototype.addFloorToLayer = function (floorOptions) {
        var _this = this;
        var floor = new __WEBPACK_IMPORTED_MODULE_2_konva__["Image"](floorOptions);
        floor.on('click', function (e) {
            var _a = e.evt, layerX = _a.layerX, layerY = _a.layerY;
            var _b = _this.stage.getAttrs(), stageX = _b.x, stageY = _b.y, scaleX = _b.scaleX, scaleY = _b.scaleY;
            var newCircle = _this.createNewSeats({
                x: (layerX - (stageX)) / scaleX,
                y: (layerY - (stageY)) / scaleY,
                radius: _this.pointRadius,
                fill: _this.colorPoint,
                stroke: _this.colorPoint,
                strokeWidth: 0,
                draggable: true
            });
            _this.layer.add(newCircle);
            _this.stage.batchDraw();
        });
        this.layer.add(floor);
    };
    FloorCanvasComponent.prototype.addSeatsToLayer = function (seats) {
        var _this = this;
        seats.map(function (item) {
            var circle = _this.createNewSeats({
                x: _this.fixPositionX(item.seat_coordinate.x),
                y: _this.fixPositionY(item.seat_coordinate.y),
                radius: _this.pointRadius,
                fill: _this.colorPoint,
                stroke: _this.colorPoint,
                strokeWidth: 0,
                draggable: true
            });
            _this.layer.add(circle);
        });
    };
    FloorCanvasComponent.prototype.addZoomToStage = function (stage) {
        var scaleBy = 1.1;
        this.canvas.nativeElement.addEventListener('wheel', function (e) {
            e.preventDefault();
            var oldScale = stage.scaleX();
            var pointerCoord = stage.getPointerPosition();
            var pointerXDefault = __WEBPACK_IMPORTED_MODULE_3_ramda__["a" /* defaultTo */](1);
            var pointerYDefault = __WEBPACK_IMPORTED_MODULE_3_ramda__["a" /* defaultTo */](1);
            var pointerX = pointerXDefault(__WEBPACK_IMPORTED_MODULE_3_ramda__["b" /* prop */]('x', pointerCoord));
            var pointerY = pointerYDefault(__WEBPACK_IMPORTED_MODULE_3_ramda__["b" /* prop */]('y', pointerCoord));
            var mousePointTo = {
                x: pointerX / oldScale - stage.x() / oldScale,
                y: pointerY / oldScale - stage.y() / oldScale,
            };
            var delta = e.wheelDelta ? e.wheelDelta / 40 : e.detail ? -e.detail : 0;
            var newScale = delta > 0 ? oldScale * scaleBy : oldScale / scaleBy;
            if (newScale > 2 || newScale < .5)
                return;
            stage.scale({ x: newScale, y: newScale });
            var newPos = {
                x: -(mousePointTo.x - pointerX / newScale) * newScale,
                y: -(mousePointTo.y - pointerY / newScale) * newScale
            };
            stage.position(newPos);
            stage.batchDraw();
        });
    };
    FloorCanvasComponent.prototype.createNewSeats = function (point) {
        var circle = new __WEBPACK_IMPORTED_MODULE_2_konva__["Circle"](point);
        circle.on('dragend', function (e) {
            console.log(e);
        });
        circle.on('click', function () {
            console.log(point);
        });
        return circle;
    };
    // HELPERS
    FloorCanvasComponent.prototype.fixPositionX = function (val) {
        return ((+val) * this.zoomK) + this.centerPositionX;
    };
    FloorCanvasComponent.prototype.fixPositionY = function (val) {
        return ((+val) * this.zoomK) + this.centerPositionY;
    };
    FloorCanvasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var redrawFloor = debounce(function () {
            _this._initCanvas(_this.options.points);
        }, 250);
        window.addEventListener('resize', redrawFloor);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], FloorCanvasComponent.prototype, "colorPoint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FloorCanvasComponent.prototype, "options", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('floor'),
        __metadata("design:type", Object)
    ], FloorCanvasComponent.prototype, "canvas", void 0);
    FloorCanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-floor-canvas',
            template: __webpack_require__("../../../../../src/app/floor-canvas/floor-canvas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/floor-canvas/floor-canvas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FloorCanvasComponent);
    return FloorCanvasComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map