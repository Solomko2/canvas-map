import {Component} from '@angular/core';
import {IFloorCanvasOption} from './models/IFloorCanvasOption';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public options: IFloorCanvasOption;
  public seats: any[];

  constructor() {
    this.options = {
      imgSrc: '/assets/img/3_floor.svg',
      points: [
        {
          'average_occupancy': 17,
          'seat_name': '5-18',
          'id': '5a07775f4a5d280d601ad52b',
          'seat_coordinate': {'x': '1125', 'y': '430'},
          'plugwise_id': 8879
        },
        {
          'average_occupancy': 3,
          'seat_name': '5-18',
          'id': '5a07775f4a5d280d601ad52b',
          'seat_coordinate': {'x': '918.25', 'y': '616.0955200195312'},
          'plugwise_id': 887
        }, {
          'average_occupancy': 2,
          'seat_name': '5-7',
          'id': '5a0777cc4a5d280d601ada0a',
          'seat_coordinate': {'x': '936.645263671875', 'y': '614.4513244628906'},
          'plugwise_id': 877
        }, {
          'average_occupancy': 4,
          'seat_name': '5-20',
          'id': '5a0777d84a5d280d601adafe',
          'seat_coordinate': {'x': '67.41927337646484', 'y': '523.5531005859375'},
          'plugwise_id': 886
        }, {
          'average_occupancy': 4,
          'seat_name': '5-1',
          'id': '5a07784a4a5d280d601ade02',
          'seat_coordinate': {'x': '359.25982666015625', 'y': '554.350341796875'},
          'plugwise_id': 899
        }, {
          'average_occupancy': 3,
          'seat_name': '5-2',
          'id': '5a0778c54a5d280d601ae108',
          'seat_coordinate': {'x': '363.659423828125', 'y': '589.5472412109375'},
          'plugwise_id': 903
        }, {
          'average_occupancy': 3,
          'seat_name': '5-17',
          'id': '5a07794d4a5d280d601ae40d',
          'seat_coordinate': {'x': '161.2775421142578', 'y': '566.0826416015625'},
          'plugwise_id': 905
        }, {
          'average_occupancy': 3,
          'seat_name': '5-19',
          'id': '5a0779b74a5d280d601ae714',
          'seat_coordinate': {'x': '65.9527359008789', 'y': '571.9487915039062'},
          'plugwise_id': 904
        }, {
          'average_occupancy': 3,
          'seat_name': '5-21',
          'id': '5a077a2f4a5d280d601aea1e',
          'seat_coordinate': {'x': '96.7499771118164', 'y': '526.4862060546875'},
          'plugwise_id': 884
        }, {
          'average_occupancy': 3,
          'seat_name': '5-22',
          'id': '5a077ab04a5d280d601aed29',
          'seat_coordinate': {'x': '159.81100463867188', 'y': '525.0196533203125'},
          'plugwise_id': 893
        }, {
          'average_occupancy': 3,
          'seat_name': '5-23',
          'id': '5a077b1b4a5d280d601af035',
          'seat_coordinate': {'x': '196.47438049316406', 'y': '526.4862060546875'},
          'plugwise_id': 898
        }, {
          'average_occupancy': 3,
          'seat_name': '5-24',
          'id': '5a077b944a5d280d601af342',
          'seat_coordinate': {'x': '230.20469665527344', 'y': '526.4862060546875'},
          'plugwise_id': 881
        }, {
          'average_occupancy': 3,
          'seat_name': '5-26',
          'id': '5a077c0e4a5d280d601af650',
          'seat_coordinate': {'x': '159.81100463867188', 'y': '485.4232177734375'},
          'plugwise_id': 889
        }, {
          'average_occupancy': 2,
          'seat_name': '5-11',
          'id': '5a077ca14a5d280d601af955',
          'seat_coordinate': {'x': '275.66729736328125', 'y': '695.1377563476562'},
          'plugwise_id': 909
        }, {
          'average_occupancy': 4,
          'seat_name': '5-14',
          'id': '5a077d014a5d280d601afc5b',
          'seat_coordinate': {'x': '230.20469665527344', 'y': '623.2775268554688'},
          'plugwise_id': 912
        }, {
          'average_occupancy': 3,
          'seat_name': '5-25',
          'id': '5a077d744a5d280d601aff6b',
          'seat_coordinate': {'x': '196.47438049316406', 'y': '488.3562927246094'},
          'plugwise_id': 911
        }, {
          'average_occupancy': 4,
          'seat_name': '5-27',
          'id': '5a077df14a5d280d601b027d',
          'seat_coordinate': {'x': '102.61611938476562', 'y': '489.82281494140625'},
          'plugwise_id': 882
        }, {
          'average_occupancy': 5,
          'seat_name': '5-29',
          'id': '5a077e654a5d280d601b0590',
          'seat_coordinate': {'x': '65.9527359008789', 'y': '442.8936767578125'},
          'plugwise_id': 914
        }, {
          'average_occupancy': 3,
          'seat_name': '5-10',
          'id': '5a077edb4a5d280d601b0895',
          'seat_coordinate': {'x': '275.66729736328125', 'y': '659.94091796875'},
          'plugwise_id': 923
        }, {
          'average_occupancy': 3,
          'seat_name': '5-12',
          'id': '5a077f534a5d280d601b0b9c',
          'seat_coordinate': {'x': '233.1377716064453', 'y': '690.7381591796875'},
          'plugwise_id': 921
        }, {
          'average_occupancy': 3,
          'seat_name': '5-13',
          'id': '5a0780454a5d280d601b11aa',
          'seat_coordinate': {'x': '233.1377716064453', 'y': '657.0078735351562'},
          'plugwise_id': 928
        }, {
          'average_occupancy': 3,
          'seat_name': '5-15',
          'id': '5a0780dc4a5d280d601b14b4',
          'seat_coordinate': {'x': '231.67123413085938', 'y': '566.0826416015625'},
          'plugwise_id': 930
        }, {
          'average_occupancy': 3,
          'seat_name': '5-16',
          'id': '5a0781144a5d280d601b17bf',
          'seat_coordinate': {'x': '195.0078582763672', 'y': '573.4153442382812'},
          'plugwise_id': 931
        }, {
          'average_occupancy': 3,
          'seat_name': '5-28',
          'id': '5a07857b4a5d280d601b1ad7',
          'seat_coordinate': {'x': '61.553131103515625', 'y': '485.4232177734375'},
          'plugwise_id': 926
        }, {
          'average_occupancy': 3,
          'seat_name': '5-3',
          'id': '5a078f444a5d280d601b1df1',
          'seat_coordinate': {'x': '362.19287109375', 'y': '657.0078735351562'},
          'plugwise_id': 891
        }, {
          'average_occupancy': 2,
          'seat_name': '5-30',
          'id': '5a0793c14a5d280d601b210c',
          'seat_coordinate': {'x': '101.14958953857422', 'y': '445.8267517089844'},
          'plugwise_id': 913
        }, {
          'average_occupancy': 3,
          'seat_name': '5-32',
          'id': '5a08586c4a5d280d601c3740',
          'seat_coordinate': {'x': '196.47438049316406', 'y': '441.4271545410156'},
          'plugwise_id': 918
        }, {
          'average_occupancy': 4,
          'seat_name': '5-33',
          'id': '5a0858e94a5d280d601c3dad',
          'seat_coordinate': {'x': '192.0747833251953', 'y': '403.2972412109375'},
          'plugwise_id': 925
        }, {
          'average_occupancy': 3,
          'seat_name': '5-34',
          'id': '5a0858f84a5d280d601c3e0a',
          'seat_coordinate': {'x': '165.67713928222656', 'y': '404.7637634277344'},
          'plugwise_id': 927
        }, {
          'average_occupancy': 2,
          'seat_name': '5-35',
          'id': '5a08595b4a5d280d601c41a5',
          'seat_coordinate': {'x': '99.68305206298828', 'y': '403.2972412109375'},
          'plugwise_id': 910
        }, {
          'average_occupancy': 3,
          'seat_name': '5-36',
          'id': '5a0859d44a5d280d601c4541',
          'seat_coordinate': {'x': '64.4862060546875', 'y': '404.7637634277344'},
          'plugwise_id': 924
        }, {
          'average_occupancy': 3,
          'seat_name': '5-37',
          'id': '5a085a4a4a5d280d601c48de',
          'seat_coordinate': {'x': '63.01966857910156', 'y': '357.8346252441406'},
          'plugwise_id': 908
        }, {
          'average_occupancy': 2,
          'seat_name': '5-38',
          'id': '5a085ac34a5d280d601c4c7c',
          'seat_coordinate': {'x': '96.7499771118164', 'y': '359.3011779785156'},
          'plugwise_id': 916
        }, {
          'average_occupancy': 3,
          'seat_name': '5-39',
          'id': '5a085b394a5d280d601c501b',
          'seat_coordinate': {'x': '165.67713928222656', 'y': '360.7677001953125'},
          'plugwise_id': 917
        }, {
          'average_occupancy': 6,
          'seat_name': '5-4',
          'id': '5a085bb34a5d280d601c53bb',
          'seat_coordinate': {'x': '360.7263488769531', 'y': '695.1377563476562'},
          'plugwise_id': 922
        }, {
          'average_occupancy': 3,
          'seat_name': '5-40',
          'id': '5a085c2c4a5d280d601c575c',
          'seat_coordinate': {'x': '199.40745544433594', 'y': '359.3011779785156'},
          'plugwise_id': 920
        }, {
          'average_occupancy': 4,
          'seat_name': '5-41',
          'id': '5a085e3b4a5d280d601c5d06',
          'seat_coordinate': {'x': '199.40745544433594', 'y': '321.1712341308594'},
          'plugwise_id': 900
        }, {
          'average_occupancy': 4,
          'seat_name': '5-42',
          'id': '5a085e824a5d280d601c60aa',
          'seat_coordinate': {'x': '168.61021423339844', 'y': '318.2381896972656'},
          'plugwise_id': 885
        }, {
          'average_occupancy': 4,
          'seat_name': '5-43',
          'id': '5a085f734a5d280d601c645e',
          'seat_coordinate': {'x': '139.27951049804688', 'y': '319.7047119140625'},
          'plugwise_id': 895
        }, {
          'average_occupancy': 3,
          'seat_name': '5-44',
          'id': '5a085fea4a5d280d601c6805',
          'seat_coordinate': {'x': '102.61611938476562', 'y': '321.1712341308594'},
          'plugwise_id': 897
        }, {
          'average_occupancy': 5,
          'seat_name': '5-45',
          'id': '5a0860654a5d280d601c6bad',
          'seat_coordinate': {'x': '107.01573181152344', 'y': '277.1751708984375'},
          'plugwise_id': 906
        }, {
          'average_occupancy': 4,
          'seat_name': '5-47',
          'id': '5a0860d94a5d280d601c6f56',
          'seat_coordinate': {'x': '173.00982666015625', 'y': '272.77557373046875'},
          'plugwise_id': 902
        }, {
          'average_occupancy': 3,
          'seat_name': '5-48',
          'id': '5a08615a4a5d280d601c7300',
          'seat_coordinate': {'x': '205.2736053466797', 'y': '277.1751708984375'},
          'plugwise_id': 894
        }, {
          'average_occupancy': 3,
          'seat_name': '5-5',
          'id': '5a0861cc4a5d280d601c76ab',
          'seat_coordinate': {'x': '313.7972106933594', 'y': '690.7381591796875'},
          'plugwise_id': 907
        }, {
          'average_occupancy': 0,
          'seat_name': '5-50',
          'id': '5a0862434a5d280d601c7a57',
          'seat_coordinate': {'x': '362.19287109375', 'y': '161.3188934326172'},
          'plugwise_id': 888
        }, {
          'average_occupancy': 0,
          'seat_name': '5-51',
          'id': '5a0862ba4a5d280d601c7e04',
          'seat_coordinate': {'x': '365.1259460449219', 'y': '126.12203979492188'},
          'plugwise_id': 901
        }, {
          'average_occupancy': 0,
          'seat_name': '5-52',
          'id': '5a0863334a5d280d601c81b2',
          'seat_coordinate': {'x': '363.659423828125', 'y': '96.79133605957031'},
          'plugwise_id': 896
        }, {
          'average_occupancy': 1,
          'seat_name': '5-53',
          'id': '5a0863ab4a5d280d601c8561',
          'seat_coordinate': {'x': '363.659423828125', 'y': '67.46062469482422'},
          'plugwise_id': 883
        }, {
          'average_occupancy': 0,
          'seat_name': '5-54',
          'id': '5a0864274a5d280d601c8911',
          'seat_coordinate': {'x': '417.9212341308594', 'y': '67.46062469482422'},
          'plugwise_id': 890
        }, {
          'average_occupancy': 3,
          'seat_name': '5-6',
          'id': '5a0864984a5d280d601c8cc2',
          'seat_coordinate': {'x': '316.73028564453125', 'y': '659.94091796875'},
          'plugwise_id': 929
        }, {
          'average_occupancy': 4,
          'seat_name': '5-8',
          'id': '5a08658a4a5d280d601c90a2',
          'seat_coordinate': {'x': '315.2637634277344', 'y': '552.8838500976562'},
          'plugwise_id': 919
        }, {
          'average_occupancy': 3,
          'seat_name': '5-9',
          'id': '5a0866064a5d280d601c9457',
          'seat_coordinate': {'x': '275.66729736328125', 'y': '621.8109741210938'},
          'plugwise_id': 915
        }, {
          'average_occupancy': 0,
          'seat_name': '5-55',
          'id': '5a254da89fb11d3bd7c290bc',
          'seat_coordinate': {'x': '417.63018798828125', 'y': '100.449462890625'},
          'plugwise_id': 1171
        }, {
          'average_occupancy': 0,
          'seat_name': '5-56',
          'id': '5a2554279fb11d3bd7c290bf',
          'seat_coordinate': {'x': '419.02532958984375', 'y': '132.53746032714844'},
          'plugwise_id': 1170
        }, {
          'average_occupancy': 0,
          'seat_name': '5-57',
          'id': '5a2555419fb11d3bd7c290c0',
          'seat_coordinate': {'x': '419.02532958984375', 'y': '159.04495239257812'},
          'plugwise_id': 1169
        }, {
          'average_occupancy': 0,
          'seat_name': '5-58',
          'id': '5a25558b9fb11d3bd7c290c1',
          'seat_coordinate': {'x': '419.02532958984375', 'y': '188.3426971435547'},
          'plugwise_id': 1172
        }, {
          'average_occupancy': 3,
          'seat_name': '5-62',
          'id': '5a2567569fb11d3bd7c290c3',
          'seat_coordinate': {'x': '953.3605346679688', 'y': '66.96629333496094'},
          'plugwise_id': 1142
        }, {
          'average_occupancy': 3,
          'seat_name': '5-61',
          'id': '5a2567b29fb11d3bd7c290c4',
          'seat_coordinate': {'x': '953.3605346679688', 'y': '103.23970031738281'},
          'plugwise_id': 1139
        }, {
          'average_occupancy': 3,
          'seat_name': '5-63',
          'id': '5a2567f19fb11d3bd7c290c5',
          'seat_coordinate': {'x': '998.0046997070312', 'y': '65.57115936279297'},
          'plugwise_id': 1144
        }, {
          'average_occupancy': 4,
          'seat_name': '5-67',
          'id': '5a25696d9fb11d3bd7c290c6',
          'seat_coordinate': {'x': '1035.67333984375', 'y': '65.57115936279297'},
          'plugwise_id': 1156
        }, {
          'average_occupancy': 4,
          'seat_name': '5-73',
          'id': '5a2569af9fb11d3bd7c290c7',
          'seat_coordinate': {'x': '1080.3173828125', 'y': '100.4494400024414'},
          'plugwise_id': 1161
        }, {
          'average_occupancy': 4,
          'seat_name': '5-74',
          'id': '5a2569e39fb11d3bd7c290c8',
          'seat_coordinate': {'x': '1078.92236328125', 'y': '66.96629333496094'},
          'plugwise_id': 1163
        }, {
          'average_occupancy': 3,
          'seat_name': '5-60',
          'id': '5a256a289fb11d3bd7c290c9',
          'seat_coordinate': {'x': '953.3605346679688', 'y': '170.20599365234375'},
          'plugwise_id': 1138
        }, {
          'average_occupancy': 6,
          'seat_name': '5-65',
          'id': '5a256a5d9fb11d3bd7c290ca',
          'seat_coordinate': {'x': '999.3998413085938', 'y': '171.6011199951172'},
          'plugwise_id': 1154
        }, {
          'average_occupancy': 3,
          'seat_name': '5-66',
          'id': '5a256a979fb11d3bd7c290cb',
          'seat_coordinate': {'x': '995.2144165039062', 'y': '206.47940063476562'},
          'plugwise_id': 876
        }, {
          'average_occupancy': 4,
          'seat_name': '5-70',
          'id': '5a256ad59fb11d3bd7c290cc',
          'seat_coordinate': {'x': '1032.883056640625', 'y': '203.68914794921875'},
          'plugwise_id': 1162
        }, {
          'average_occupancy': 5,
          'seat_name': '5-71',
          'id': '5a256b109fb11d3bd7c290cd',
          'seat_coordinate': {'x': '1078.92236328125', 'y': '200.8988800048828'},
          'plugwise_id': 1152
        }, {
          'average_occupancy': 3,
          'seat_name': '5-75',
          'id': '5a256b4d9fb11d3bd7c290ce',
          'seat_coordinate': {'x': '1117.986083984375', 'y': '103.23970031738281'},
          'plugwise_id': 1159
        }, {
          'average_occupancy': 3,
          'seat_name': '5-82',
          'id': '5a256b8c9fb11d3bd7c290cf',
          'seat_coordinate': {'x': '1162.630126953125', 'y': '104.63483428955078'},
          'plugwise_id': 1146
        }, {
          'average_occupancy': 5,
          'seat_name': '5-76',
          'id': '5a256d039fb11d3bd7c290d1',
          'seat_coordinate': {'x': '1115.19580078125', 'y': '139.5131072998047'},
          'plugwise_id': 1158
        }, {
          'average_occupancy': 5,
          'seat_name': '5-77',
          'id': '5a256d579fb11d3bd7c290d2',
          'seat_coordinate': {'x': '1116.5908203125', 'y': '171.6011199951172'},
          'plugwise_id': 1160
        }, {
          'average_occupancy': 5,
          'seat_name': '5-79',
          'id': '5a256d8b9fb11d3bd7c290d3',
          'seat_coordinate': {'x': '1161.235107421875', 'y': '202.29400634765625'},
          'plugwise_id': 1153
        }, {
          'average_occupancy': 5,
          'seat_name': '5-80',
          'id': '5a256dd09fb11d3bd7c290d4',
          'seat_coordinate': {'x': '1165.42041015625', 'y': '172.9962615966797'},
          'plugwise_id': 1155
        }, {
          'average_occupancy': 3,
          'seat_name': '5-85',
          'id': '5a256e1b9fb11d3bd7c290d5',
          'seat_coordinate': {'x': '1210.064697265625', 'y': '223.22097778320312'},
          'plugwise_id': 1141
        }, {
          'average_occupancy': 6,
          'seat_name': '5-86',
          'id': '5a256e779fb11d3bd7c290d6',
          'seat_coordinate': {'x': '1247.733154296875', 'y': '224.61610412597656'},
          'plugwise_id': 1164
        }, {
          'average_occupancy': 3,
          'seat_name': '5-87',
          'id': '5a256ec59fb11d3bd7c290d7',
          'seat_coordinate': {'x': '1215.645263671875', 'y': '273.4457092285156'},
          'plugwise_id': 1149
        }, {
          'average_occupancy': 4,
          'seat_name': '5-88',
          'id': '5a256f069fb11d3bd7c290d8',
          'seat_coordinate': {'x': '1253.313720703125', 'y': '274.8408203125'},
          'plugwise_id': 1150
        }, {
          'average_occupancy': 3,
          'seat_name': '5-89',
          'id': '5a256f439fb11d3bd7c290d9',
          'seat_coordinate': {'x': '1215.645263671875', 'y': '316.69476318359375'},
          'plugwise_id': 1145
        }, {
          'average_occupancy': 3,
          'seat_name': '5-90',
          'id': '5a256f8e9fb11d3bd7c290da',
          'seat_coordinate': {'x': '1250.5234375', 'y': '322.2752990722656'},
          'plugwise_id': 1151
        }, {
          'average_occupancy': 4,
          'seat_name': '5-91',
          'id': '5a256fe99fb11d3bd7c290db',
          'seat_coordinate': {'x': '1215.645263671875', 'y': '386.4513244628906'},
          'plugwise_id': 1147
        }, {
          'average_occupancy': 4,
          'seat_name': '5-92',
          'id': '5a2570239fb11d3bd7c290dc',
          'seat_coordinate': {'x': '1247.733154296875', 'y': '387.846435546875'},
          'plugwise_id': 1143
        }, {
          'average_occupancy': 3,
          'seat_name': '5-93',
          'id': '5a2570529fb11d3bd7c290dd',
          'seat_coordinate': {'x': '1214.25', 'y': '431.09552001953125'},
          'plugwise_id': 1148
        }, {
          'average_occupancy': 6,
          'seat_name': '5-94',
          'id': '5a2570959fb11d3bd7c290de',
          'seat_coordinate': {'x': '1250.5234375', 'y': '431.09552001953125'},
          'plugwise_id': 1140
        }, {
          'average_occupancy': 4,
          'seat_name': '5-81',
          'id': '5a257e7820eda132b05901a5',
          'seat_coordinate': {'x': '1161.235107421875', 'y': '139.5131072998047'},
          'plugwise_id': 1157
        }, {
          'average_occupancy': 3,
          'seat_name': '5-31',
          'id': '5a7816fd2775221db91f0255',
          'seat_coordinate': {'x': '159.81100463867188', 'y': '441.4271545410156'},
          'plugwise_id': 1176
        }]
    };

    const res = {
      'status': 'success', 'data': {
        'seats': [
          {
            'average_occupancy': 12,
            'seat_name': '5-18',
            'id': '5a07775f4a5d280d601ad52b',
            'seat_coordinate': {'x': '901.0253295898438', 'y': '615.3426971435547'},
            'plugwise_id': 8879
          },
          {
            'average_occupancy': 3,
            'seat_name': '5-18',
            'id': '5a07775f4a5d280d601ad52b',
            'seat_coordinate': {'x': '918.25', 'y': '616.0955200195312'},
            'plugwise_id': 887
          }, {
            'average_occupancy': 2,
            'seat_name': '5-7',
            'id': '5a0777cc4a5d280d601ada0a',
            'seat_coordinate': {'x': '936.645263671875', 'y': '614.4513244628906'},
            'plugwise_id': 877
          }, {
            'average_occupancy': 4,
            'seat_name': '5-20',
            'id': '5a0777d84a5d280d601adafe',
            'seat_coordinate': {'x': '67.41927337646484', 'y': '523.5531005859375'},
            'plugwise_id': 886
          }, {
            'average_occupancy': 4,
            'seat_name': '5-1',
            'id': '5a07784a4a5d280d601ade02',
            'seat_coordinate': {'x': '359.25982666015625', 'y': '554.350341796875'},
            'plugwise_id': 899
          }, {
            'average_occupancy': 3,
            'seat_name': '5-2',
            'id': '5a0778c54a5d280d601ae108',
            'seat_coordinate': {'x': '363.659423828125', 'y': '589.5472412109375'},
            'plugwise_id': 903
          }, {
            'average_occupancy': 3,
            'seat_name': '5-17',
            'id': '5a07794d4a5d280d601ae40d',
            'seat_coordinate': {'x': '161.2775421142578', 'y': '566.0826416015625'},
            'plugwise_id': 905
          }, {
            'average_occupancy': 3,
            'seat_name': '5-19',
            'id': '5a0779b74a5d280d601ae714',
            'seat_coordinate': {'x': '65.9527359008789', 'y': '571.9487915039062'},
            'plugwise_id': 904
          }, {
            'average_occupancy': 3,
            'seat_name': '5-21',
            'id': '5a077a2f4a5d280d601aea1e',
            'seat_coordinate': {'x': '96.7499771118164', 'y': '526.4862060546875'},
            'plugwise_id': 884
          }, {
            'average_occupancy': 3,
            'seat_name': '5-22',
            'id': '5a077ab04a5d280d601aed29',
            'seat_coordinate': {'x': '159.81100463867188', 'y': '525.0196533203125'},
            'plugwise_id': 893
          }, {
            'average_occupancy': 3,
            'seat_name': '5-23',
            'id': '5a077b1b4a5d280d601af035',
            'seat_coordinate': {'x': '196.47438049316406', 'y': '526.4862060546875'},
            'plugwise_id': 898
          }, {
            'average_occupancy': 3,
            'seat_name': '5-24',
            'id': '5a077b944a5d280d601af342',
            'seat_coordinate': {'x': '230.20469665527344', 'y': '526.4862060546875'},
            'plugwise_id': 881
          }, {
            'average_occupancy': 3,
            'seat_name': '5-26',
            'id': '5a077c0e4a5d280d601af650',
            'seat_coordinate': {'x': '159.81100463867188', 'y': '485.4232177734375'},
            'plugwise_id': 889
          }, {
            'average_occupancy': 2,
            'seat_name': '5-11',
            'id': '5a077ca14a5d280d601af955',
            'seat_coordinate': {'x': '275.66729736328125', 'y': '695.1377563476562'},
            'plugwise_id': 909
          }, {
            'average_occupancy': 4,
            'seat_name': '5-14',
            'id': '5a077d014a5d280d601afc5b',
            'seat_coordinate': {'x': '230.20469665527344', 'y': '623.2775268554688'},
            'plugwise_id': 912
          }, {
            'average_occupancy': 3,
            'seat_name': '5-25',
            'id': '5a077d744a5d280d601aff6b',
            'seat_coordinate': {'x': '196.47438049316406', 'y': '488.3562927246094'},
            'plugwise_id': 911
          }, {
            'average_occupancy': 4,
            'seat_name': '5-27',
            'id': '5a077df14a5d280d601b027d',
            'seat_coordinate': {'x': '102.61611938476562', 'y': '489.82281494140625'},
            'plugwise_id': 882
          }, {
            'average_occupancy': 5,
            'seat_name': '5-29',
            'id': '5a077e654a5d280d601b0590',
            'seat_coordinate': {'x': '65.9527359008789', 'y': '442.8936767578125'},
            'plugwise_id': 914
          }, {
            'average_occupancy': 3,
            'seat_name': '5-10',
            'id': '5a077edb4a5d280d601b0895',
            'seat_coordinate': {'x': '275.66729736328125', 'y': '659.94091796875'},
            'plugwise_id': 923
          }, {
            'average_occupancy': 3,
            'seat_name': '5-12',
            'id': '5a077f534a5d280d601b0b9c',
            'seat_coordinate': {'x': '233.1377716064453', 'y': '690.7381591796875'},
            'plugwise_id': 921
          }, {
            'average_occupancy': 3,
            'seat_name': '5-13',
            'id': '5a0780454a5d280d601b11aa',
            'seat_coordinate': {'x': '233.1377716064453', 'y': '657.0078735351562'},
            'plugwise_id': 928
          }, {
            'average_occupancy': 3,
            'seat_name': '5-15',
            'id': '5a0780dc4a5d280d601b14b4',
            'seat_coordinate': {'x': '231.67123413085938', 'y': '566.0826416015625'},
            'plugwise_id': 930
          }, {
            'average_occupancy': 3,
            'seat_name': '5-16',
            'id': '5a0781144a5d280d601b17bf',
            'seat_coordinate': {'x': '195.0078582763672', 'y': '573.4153442382812'},
            'plugwise_id': 931
          }, {
            'average_occupancy': 3,
            'seat_name': '5-28',
            'id': '5a07857b4a5d280d601b1ad7',
            'seat_coordinate': {'x': '61.553131103515625', 'y': '485.4232177734375'},
            'plugwise_id': 926
          }, {
            'average_occupancy': 3,
            'seat_name': '5-3',
            'id': '5a078f444a5d280d601b1df1',
            'seat_coordinate': {'x': '362.19287109375', 'y': '657.0078735351562'},
            'plugwise_id': 891
          }, {
            'average_occupancy': 2,
            'seat_name': '5-30',
            'id': '5a0793c14a5d280d601b210c',
            'seat_coordinate': {'x': '101.14958953857422', 'y': '445.8267517089844'},
            'plugwise_id': 913
          }, {
            'average_occupancy': 3,
            'seat_name': '5-32',
            'id': '5a08586c4a5d280d601c3740',
            'seat_coordinate': {'x': '196.47438049316406', 'y': '441.4271545410156'},
            'plugwise_id': 918
          }, {
            'average_occupancy': 4,
            'seat_name': '5-33',
            'id': '5a0858e94a5d280d601c3dad',
            'seat_coordinate': {'x': '192.0747833251953', 'y': '403.2972412109375'},
            'plugwise_id': 925
          }, {
            'average_occupancy': 3,
            'seat_name': '5-34',
            'id': '5a0858f84a5d280d601c3e0a',
            'seat_coordinate': {'x': '165.67713928222656', 'y': '404.7637634277344'},
            'plugwise_id': 927
          }, {
            'average_occupancy': 2,
            'seat_name': '5-35',
            'id': '5a08595b4a5d280d601c41a5',
            'seat_coordinate': {'x': '99.68305206298828', 'y': '403.2972412109375'},
            'plugwise_id': 910
          }, {
            'average_occupancy': 3,
            'seat_name': '5-36',
            'id': '5a0859d44a5d280d601c4541',
            'seat_coordinate': {'x': '64.4862060546875', 'y': '404.7637634277344'},
            'plugwise_id': 924
          }, {
            'average_occupancy': 3,
            'seat_name': '5-37',
            'id': '5a085a4a4a5d280d601c48de',
            'seat_coordinate': {'x': '63.01966857910156', 'y': '357.8346252441406'},
            'plugwise_id': 908
          }, {
            'average_occupancy': 2,
            'seat_name': '5-38',
            'id': '5a085ac34a5d280d601c4c7c',
            'seat_coordinate': {'x': '96.7499771118164', 'y': '359.3011779785156'},
            'plugwise_id': 916
          }, {
            'average_occupancy': 3,
            'seat_name': '5-39',
            'id': '5a085b394a5d280d601c501b',
            'seat_coordinate': {'x': '165.67713928222656', 'y': '360.7677001953125'},
            'plugwise_id': 917
          }, {
            'average_occupancy': 6,
            'seat_name': '5-4',
            'id': '5a085bb34a5d280d601c53bb',
            'seat_coordinate': {'x': '360.7263488769531', 'y': '695.1377563476562'},
            'plugwise_id': 922
          }, {
            'average_occupancy': 3,
            'seat_name': '5-40',
            'id': '5a085c2c4a5d280d601c575c',
            'seat_coordinate': {'x': '199.40745544433594', 'y': '359.3011779785156'},
            'plugwise_id': 920
          }, {
            'average_occupancy': 4,
            'seat_name': '5-41',
            'id': '5a085e3b4a5d280d601c5d06',
            'seat_coordinate': {'x': '199.40745544433594', 'y': '321.1712341308594'},
            'plugwise_id': 900
          }, {
            'average_occupancy': 4,
            'seat_name': '5-42',
            'id': '5a085e824a5d280d601c60aa',
            'seat_coordinate': {'x': '168.61021423339844', 'y': '318.2381896972656'},
            'plugwise_id': 885
          }, {
            'average_occupancy': 4,
            'seat_name': '5-43',
            'id': '5a085f734a5d280d601c645e',
            'seat_coordinate': {'x': '139.27951049804688', 'y': '319.7047119140625'},
            'plugwise_id': 895
          }, {
            'average_occupancy': 3,
            'seat_name': '5-44',
            'id': '5a085fea4a5d280d601c6805',
            'seat_coordinate': {'x': '102.61611938476562', 'y': '321.1712341308594'},
            'plugwise_id': 897
          }, {
            'average_occupancy': 5,
            'seat_name': '5-45',
            'id': '5a0860654a5d280d601c6bad',
            'seat_coordinate': {'x': '107.01573181152344', 'y': '277.1751708984375'},
            'plugwise_id': 906
          }, {
            'average_occupancy': 4,
            'seat_name': '5-47',
            'id': '5a0860d94a5d280d601c6f56',
            'seat_coordinate': {'x': '173.00982666015625', 'y': '272.77557373046875'},
            'plugwise_id': 902
          }, {
            'average_occupancy': 3,
            'seat_name': '5-48',
            'id': '5a08615a4a5d280d601c7300',
            'seat_coordinate': {'x': '205.2736053466797', 'y': '277.1751708984375'},
            'plugwise_id': 894
          }, {
            'average_occupancy': 3,
            'seat_name': '5-5',
            'id': '5a0861cc4a5d280d601c76ab',
            'seat_coordinate': {'x': '313.7972106933594', 'y': '690.7381591796875'},
            'plugwise_id': 907
          }, {
            'average_occupancy': 0,
            'seat_name': '5-50',
            'id': '5a0862434a5d280d601c7a57',
            'seat_coordinate': {'x': '362.19287109375', 'y': '161.3188934326172'},
            'plugwise_id': 888
          }, {
            'average_occupancy': 0,
            'seat_name': '5-51',
            'id': '5a0862ba4a5d280d601c7e04',
            'seat_coordinate': {'x': '365.1259460449219', 'y': '126.12203979492188'},
            'plugwise_id': 901
          }, {
            'average_occupancy': 0,
            'seat_name': '5-52',
            'id': '5a0863334a5d280d601c81b2',
            'seat_coordinate': {'x': '363.659423828125', 'y': '96.79133605957031'},
            'plugwise_id': 896
          }, {
            'average_occupancy': 1,
            'seat_name': '5-53',
            'id': '5a0863ab4a5d280d601c8561',
            'seat_coordinate': {'x': '363.659423828125', 'y': '67.46062469482422'},
            'plugwise_id': 883
          }, {
            'average_occupancy': 0,
            'seat_name': '5-54',
            'id': '5a0864274a5d280d601c8911',
            'seat_coordinate': {'x': '417.9212341308594', 'y': '67.46062469482422'},
            'plugwise_id': 890
          }, {
            'average_occupancy': 3,
            'seat_name': '5-6',
            'id': '5a0864984a5d280d601c8cc2',
            'seat_coordinate': {'x': '316.73028564453125', 'y': '659.94091796875'},
            'plugwise_id': 929
          }, {
            'average_occupancy': 4,
            'seat_name': '5-8',
            'id': '5a08658a4a5d280d601c90a2',
            'seat_coordinate': {'x': '315.2637634277344', 'y': '552.8838500976562'},
            'plugwise_id': 919
          }, {
            'average_occupancy': 3,
            'seat_name': '5-9',
            'id': '5a0866064a5d280d601c9457',
            'seat_coordinate': {'x': '275.66729736328125', 'y': '621.8109741210938'},
            'plugwise_id': 915
          }, {
            'average_occupancy': 0,
            'seat_name': '5-55',
            'id': '5a254da89fb11d3bd7c290bc',
            'seat_coordinate': {'x': '417.63018798828125', 'y': '100.449462890625'},
            'plugwise_id': 1171
          }, {
            'average_occupancy': 0,
            'seat_name': '5-56',
            'id': '5a2554279fb11d3bd7c290bf',
            'seat_coordinate': {'x': '419.02532958984375', 'y': '132.53746032714844'},
            'plugwise_id': 1170
          }, {
            'average_occupancy': 0,
            'seat_name': '5-57',
            'id': '5a2555419fb11d3bd7c290c0',
            'seat_coordinate': {'x': '419.02532958984375', 'y': '159.04495239257812'},
            'plugwise_id': 1169
          }, {
            'average_occupancy': 0,
            'seat_name': '5-58',
            'id': '5a25558b9fb11d3bd7c290c1',
            'seat_coordinate': {'x': '419.02532958984375', 'y': '188.3426971435547'},
            'plugwise_id': 1172
          }, {
            'average_occupancy': 3,
            'seat_name': '5-62',
            'id': '5a2567569fb11d3bd7c290c3',
            'seat_coordinate': {'x': '953.3605346679688', 'y': '66.96629333496094'},
            'plugwise_id': 1142
          }, {
            'average_occupancy': 3,
            'seat_name': '5-61',
            'id': '5a2567b29fb11d3bd7c290c4',
            'seat_coordinate': {'x': '953.3605346679688', 'y': '103.23970031738281'},
            'plugwise_id': 1139
          }, {
            'average_occupancy': 3,
            'seat_name': '5-63',
            'id': '5a2567f19fb11d3bd7c290c5',
            'seat_coordinate': {'x': '998.0046997070312', 'y': '65.57115936279297'},
            'plugwise_id': 1144
          }, {
            'average_occupancy': 4,
            'seat_name': '5-67',
            'id': '5a25696d9fb11d3bd7c290c6',
            'seat_coordinate': {'x': '1035.67333984375', 'y': '65.57115936279297'},
            'plugwise_id': 1156
          }, {
            'average_occupancy': 4,
            'seat_name': '5-73',
            'id': '5a2569af9fb11d3bd7c290c7',
            'seat_coordinate': {'x': '1080.3173828125', 'y': '100.4494400024414'},
            'plugwise_id': 1161
          }, {
            'average_occupancy': 4,
            'seat_name': '5-74',
            'id': '5a2569e39fb11d3bd7c290c8',
            'seat_coordinate': {'x': '1078.92236328125', 'y': '66.96629333496094'},
            'plugwise_id': 1163
          }, {
            'average_occupancy': 3,
            'seat_name': '5-60',
            'id': '5a256a289fb11d3bd7c290c9',
            'seat_coordinate': {'x': '953.3605346679688', 'y': '170.20599365234375'},
            'plugwise_id': 1138
          }, {
            'average_occupancy': 6,
            'seat_name': '5-65',
            'id': '5a256a5d9fb11d3bd7c290ca',
            'seat_coordinate': {'x': '999.3998413085938', 'y': '171.6011199951172'},
            'plugwise_id': 1154
          }, {
            'average_occupancy': 3,
            'seat_name': '5-66',
            'id': '5a256a979fb11d3bd7c290cb',
            'seat_coordinate': {'x': '995.2144165039062', 'y': '206.47940063476562'},
            'plugwise_id': 876
          }, {
            'average_occupancy': 4,
            'seat_name': '5-70',
            'id': '5a256ad59fb11d3bd7c290cc',
            'seat_coordinate': {'x': '1032.883056640625', 'y': '203.68914794921875'},
            'plugwise_id': 1162
          }, {
            'average_occupancy': 5,
            'seat_name': '5-71',
            'id': '5a256b109fb11d3bd7c290cd',
            'seat_coordinate': {'x': '1078.92236328125', 'y': '200.8988800048828'},
            'plugwise_id': 1152
          }, {
            'average_occupancy': 3,
            'seat_name': '5-75',
            'id': '5a256b4d9fb11d3bd7c290ce',
            'seat_coordinate': {'x': '1117.986083984375', 'y': '103.23970031738281'},
            'plugwise_id': 1159
          }, {
            'average_occupancy': 3,
            'seat_name': '5-82',
            'id': '5a256b8c9fb11d3bd7c290cf',
            'seat_coordinate': {'x': '1162.630126953125', 'y': '104.63483428955078'},
            'plugwise_id': 1146
          }, {
            'average_occupancy': 5,
            'seat_name': '5-76',
            'id': '5a256d039fb11d3bd7c290d1',
            'seat_coordinate': {'x': '1115.19580078125', 'y': '139.5131072998047'},
            'plugwise_id': 1158
          }, {
            'average_occupancy': 5,
            'seat_name': '5-77',
            'id': '5a256d579fb11d3bd7c290d2',
            'seat_coordinate': {'x': '1116.5908203125', 'y': '171.6011199951172'},
            'plugwise_id': 1160
          }, {
            'average_occupancy': 5,
            'seat_name': '5-79',
            'id': '5a256d8b9fb11d3bd7c290d3',
            'seat_coordinate': {'x': '1161.235107421875', 'y': '202.29400634765625'},
            'plugwise_id': 1153
          }, {
            'average_occupancy': 5,
            'seat_name': '5-80',
            'id': '5a256dd09fb11d3bd7c290d4',
            'seat_coordinate': {'x': '1165.42041015625', 'y': '172.9962615966797'},
            'plugwise_id': 1155
          }, {
            'average_occupancy': 3,
            'seat_name': '5-85',
            'id': '5a256e1b9fb11d3bd7c290d5',
            'seat_coordinate': {'x': '1210.064697265625', 'y': '223.22097778320312'},
            'plugwise_id': 1141
          }, {
            'average_occupancy': 6,
            'seat_name': '5-86',
            'id': '5a256e779fb11d3bd7c290d6',
            'seat_coordinate': {'x': '1247.733154296875', 'y': '224.61610412597656'},
            'plugwise_id': 1164
          }, {
            'average_occupancy': 3,
            'seat_name': '5-87',
            'id': '5a256ec59fb11d3bd7c290d7',
            'seat_coordinate': {'x': '1215.645263671875', 'y': '273.4457092285156'},
            'plugwise_id': 1149
          }, {
            'average_occupancy': 4,
            'seat_name': '5-88',
            'id': '5a256f069fb11d3bd7c290d8',
            'seat_coordinate': {'x': '1253.313720703125', 'y': '274.8408203125'},
            'plugwise_id': 1150
          }, {
            'average_occupancy': 3,
            'seat_name': '5-89',
            'id': '5a256f439fb11d3bd7c290d9',
            'seat_coordinate': {'x': '1215.645263671875', 'y': '316.69476318359375'},
            'plugwise_id': 1145
          }, {
            'average_occupancy': 3,
            'seat_name': '5-90',
            'id': '5a256f8e9fb11d3bd7c290da',
            'seat_coordinate': {'x': '1250.5234375', 'y': '322.2752990722656'},
            'plugwise_id': 1151
          }, {
            'average_occupancy': 4,
            'seat_name': '5-91',
            'id': '5a256fe99fb11d3bd7c290db',
            'seat_coordinate': {'x': '1215.645263671875', 'y': '386.4513244628906'},
            'plugwise_id': 1147
          }, {
            'average_occupancy': 4,
            'seat_name': '5-92',
            'id': '5a2570239fb11d3bd7c290dc',
            'seat_coordinate': {'x': '1247.733154296875', 'y': '387.846435546875'},
            'plugwise_id': 1143
          }, {
            'average_occupancy': 3,
            'seat_name': '5-93',
            'id': '5a2570529fb11d3bd7c290dd',
            'seat_coordinate': {'x': '1214.25', 'y': '431.09552001953125'},
            'plugwise_id': 1148
          }, {
            'average_occupancy': 6,
            'seat_name': '5-94',
            'id': '5a2570959fb11d3bd7c290de',
            'seat_coordinate': {'x': '1250.5234375', 'y': '431.09552001953125'},
            'plugwise_id': 1140
          }, {
            'average_occupancy': 4,
            'seat_name': '5-81',
            'id': '5a257e7820eda132b05901a5',
            'seat_coordinate': {'x': '1161.235107421875', 'y': '139.5131072998047'},
            'plugwise_id': 1157
          }, {
            'average_occupancy': 3,
            'seat_name': '5-31',
            'id': '5a7816fd2775221db91f0255',
            'seat_coordinate': {'x': '159.81100463867188', 'y': '441.4271545410156'},
            'plugwise_id': 1176
          }],
        'statistic': [{'id': 0, 'seats_count': 9, 'percent': 11}, {'id': 1, 'seats_count': 46, 'percent': 55}, {
          'id': 2,
          'seats_count': 25,
          'percent': 30
        }, {'id': 3, 'seats_count': 4, 'percent': 5}, {'id': 4, 'seats_count': 0, 'percent': 0}]
      }
    };
    this.seats = res.data.seats;
  }

  changeMap() {
    this.options = {
      imgSrc: '/assets/img/34_floor.svg',
      points: [{'id': '59dbae6c4a5d270ad4ca564f', 'seat_name': '34-34', 'plugwise_id': 577, 'seat_coordinate': {'x': '917.3802490234375', 'y': '563.3115844726562'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59dbaf5c4a5d270ad4ca59ff', 'seat_name': '34-13', 'plugwise_id': 575, 'seat_coordinate': {'x': '823.5602416992188', 'y': '215.11280822753906'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5ddb04a5d280c982f7c76', 'seat_name': '34-14', 'plugwise_id': 631, 'seat_coordinate': {'x': '803.2294311523438', 'y': '203.9636688232422'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5de284a5d280c982f7e6a', 'seat_name': '34-15', 'plugwise_id': 635, 'seat_coordinate': {'x': '779.9949340820312', 'y': '165.57510375976562'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5dea04a5d280c982f805f', 'seat_name': '34-16', 'plugwise_id': 633, 'seat_coordinate': {'x': '778.3130493164062', 'y': '140.51220703125'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5df184a5d280c982f8254', 'seat_name': '34-18', 'plugwise_id': 629, 'seat_coordinate': {'x': '736.3345947265625', 'y': '92.47227478027344'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5df904a5d280c982f844a', 'seat_name': '34-19', 'plugwise_id': 630, 'seat_coordinate': {'x': '782.2427978515625', 'y': '89.84894561767578'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e0084a5d280c982f8641', 'seat_name': '34-20', 'plugwise_id': 627, 'seat_coordinate': {'x': '801.0284423828125', 'y': '98.67447662353516'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e0824a5d280c982f8839', 'seat_name': '34-21', 'plugwise_id': 634, 'seat_coordinate': {'x': '820.5122680664062', 'y': '90.4076919555664'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e0f84a5d280c982f8a32', 'seat_name': '34-22', 'plugwise_id': 628, 'seat_coordinate': {'x': '866.8450927734375', 'y': '89.84894561767578'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e1704a5d280c982f8c2c', 'seat_name': '34-23', 'plugwise_id': 637, 'seat_coordinate': {'x': '847.8259887695312', 'y': '128.5430145263672'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e1e84a5d280c982f8e27', 'seat_name': '34-24', 'plugwise_id': 625, 'seat_coordinate': {'x': '824.8718872070312', 'y': '141.65965270996094'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e2604a5d280c982f901d', 'seat_name': '34-17', 'plugwise_id': 651, 'seat_coordinate': {'x': '760.3124389648438', 'y': '129.89312744140625'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e2d84a5d280c982f921b', 'seat_name': '34-25', 'plugwise_id': 632, 'seat_coordinate': {'x': '824.216064453125', 'y': '165.26959228515625'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e3524a5d280c982f941a', 'seat_name': '34-26', 'plugwise_id': 622, 'seat_coordinate': {'x': '844.4097290039062', 'y': '175.3103790283203'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e3c84a5d280c982f961a', 'seat_name': '34-27', 'plugwise_id': 626, 'seat_coordinate': {'x': '870.124267578125', 'y': '215.11280822753906'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e4414a5d280c982f981b', 'seat_name': '34-28', 'plugwise_id': 638, 'seat_coordinate': {'x': '1023.1141357421875', 'y': '146.2696075439453'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e4b94a5d280c982f9a1d', 'seat_name': '34-30', 'plugwise_id': 639, 'seat_coordinate': {'x': '1080.646240234375', 'y': '172.48374938964844'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e5304a5d280c982f9c20', 'seat_name': '34-31', 'plugwise_id': 624, 'seat_coordinate': {'x': '1095.9520263671875', 'y': '212.93740844726562'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e5a94a5d280c982f9e24', 'seat_name': '34-32', 'plugwise_id': 636, 'seat_coordinate': {'x': '1052.7406005859375', 'y': '207.4736785888672'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e6204a5d280c982fa029', 'seat_name': '34-33', 'plugwise_id': 623, 'seat_coordinate': {'x': '1034.0821533203125', 'y': '191.28579711914062'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e6984a5d280c982fa21b', 'seat_name': '34-10', 'plugwise_id': 652, 'seat_coordinate': {'x': '524.5009765625', 'y': '153.46463012695312'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e7104a5d280c982fa40d', 'seat_name': '34-1', 'plugwise_id': 658, 'seat_coordinate': {'x': '448.4244689941406', 'y': '196.74952697753906'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e7884a5d280c982fa601', 'seat_name': '34-11', 'plugwise_id': 657, 'seat_coordinate': {'x': '499.3825378417969', 'y': '152.00698852539062'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e8004a5d280c982fa7f6', 'seat_name': '34-12', 'plugwise_id': 655, 'seat_coordinate': {'x': '487.7835998535156', 'y': '176.00181579589844'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e85a4a5d280c982fa9f3', 'seat_name': '34-2', 'plugwise_id': 656, 'seat_coordinate': {'x': '449.0534362792969', 'y': '151.94375610351562'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e8784a5d280c982fabfa', 'seat_name': '34-29', 'plugwise_id': 660, 'seat_coordinate': {'x': '1066.1436767578125', 'y': '156.11672973632812'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e8f04a5d280c982fae02', 'seat_name': '34-3', 'plugwise_id': 653, 'seat_coordinate': {'x': '460.22943115234375', 'y': '131.16635131835938'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e96b4a5d280c982fb010', 'seat_name': '34-35', 'plugwise_id': 646, 'seat_coordinate': {'x': '896.0099487304688', 'y': '604.2131958007812'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5e9e14a5d280c982fb21f', 'seat_name': '34-36', 'plugwise_id': 650, 'seat_coordinate': {'x': '875.921142578125', 'y': '614.3812255859375'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5ea584a5d280c982fb42f', 'seat_name': '34-37', 'plugwise_id': 648, 'seat_coordinate': {'x': '829.1495971679688', 'y': '615.7816162109375'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5ead04a5d280c982fb640', 'seat_name': '34-38', 'plugwise_id': 643, 'seat_coordinate': {'x': '809.7877807617188', 'y': '604.6768798828125'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5eb494a5d280c982fb852', 'seat_name': '34-39', 'plugwise_id': 644, 'seat_coordinate': {'x': '790.11279296875', 'y': '616.4818115234375'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5ebc14a5d280c982fba65', 'seat_name': '34-4', 'plugwise_id': 661, 'seat_coordinate': {'x': '449.73614501953125', 'y': '110.83556365966797'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5ec394a5d280c982fbc79', 'seat_name': '34-40', 'plugwise_id': 645, 'seat_coordinate': {'x': '744.8604125976562', 'y': '615.8259887695312'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5ecb04a5d280c982fbe8e', 'seat_name': '34-41', 'plugwise_id': 649, 'seat_coordinate': {'x': '769.7820434570312', 'y': '577.1319580078125'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5ed284a5d280c982fc0a4', 'seat_name': '34-42', 'plugwise_id': 647, 'seat_coordinate': {'x': '787.8869018554688', 'y': '565.2581176757812'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5eda04a5d280c982fc2bb', 'seat_name': '34-43', 'plugwise_id': 640, 'seat_coordinate': {'x': '831.43017578125', 'y': '565.9827880859375'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5ee194a5d280c982fc4d3', 'seat_name': '34-44', 'plugwise_id': 642, 'seat_coordinate': {'x': '855.0401611328125', 'y': '574.5086059570312'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5ee914a5d280c982fc6ec', 'seat_name': '34-45', 'plugwise_id': 641, 'seat_coordinate': {'x': '875.3709106445312', 'y': '565.3269653320312'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5ef094a5d280c982fc907', 'seat_name': '34-5', 'plugwise_id': 664, 'seat_coordinate': {'x': '449.0802917480469', 'y': '67.55066680908203'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5ef804a5d280c982fcb24', 'seat_name': '34-6', 'plugwise_id': 663, 'seat_coordinate': {'x': '489.3077087402344', 'y': '88.32020568847656'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5eff94a5d280c982fcd42', 'seat_name': '34-7', 'plugwise_id': 654, 'seat_coordinate': {'x': '499.579345703125', 'y': '107.55640411376953'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5f0764a5d280c982fcf68', 'seat_name': '34-8', 'plugwise_id': 659, 'seat_coordinate': {'x': '524.4215087890625', 'y': '108.78350830078125'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}, {'id': '59e5f0e94a5d280c982fd18f', 'seat_name': '34-9', 'plugwise_id': 662, 'seat_coordinate': {'x': '563.9255981445312', 'y': '130.5472412109375'}, 'status': 'no_signal', 'user_id': '000000000000000000000000', 'username': ''}]
    };
  }
}
