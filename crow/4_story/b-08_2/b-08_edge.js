/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'movie',
                            symbolName: 'movie',
                            type: 'rect',
                            rect: ['-52px', '10', '1182', '1270', 'auto', 'auto']
                        },
                        {
                            id: 'bg_a1',
                            type: 'image',
                            rect: ['1px', '1px', '720px', '1280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_a12.png",'0px','0px']
                        },
                        {
                            id: 'bu_home',
                            type: 'image',
                            rect: ['161px', '1193px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_home2.png",'0px','0px']
                        },
                        {
                            id: 'bu_l',
                            type: 'image',
                            rect: ['28px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_l2.png",'0px','0px']
                        },
                        {
                            id: 'bu_r',
                            type: 'image',
                            rect: ['583px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_r2.png",'0px','0px']
                        },
                        {
                            id: 'play_btn',
                            type: 'image',
                            rect: ['310px', '542px', '120px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"play_btn3.png",'0px','0px']
                        },
                        {
                            id: 'bu_cantonese',
                            type: 'image',
                            rect: ['473px', '1193px', '83px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_cantonese.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '720px', '1280px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 17700.7,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "movie": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '115px', '1077px', '762px', 'auto', 'auto'],
                            id: 'bg_without_corvus',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bg_without_corvus.jpg', '0px', '0px']
                        },
                        {
                            rect: ['89px', '245px', '503px', '606px', 'auto', 'auto'],
                            id: 'vase',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/vase.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['255px', '518px', '179px', '79px', 'auto', 'auto'],
                            id: 'water1',
                            fill: ['rgba(0,0,0,0)', 'images/water1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['265px', '476px', '153px', '112px', 'auto', 'auto'],
                            id: 'water2',
                            fill: ['rgba(0,0,0,0)', 'images/water2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['317px', '0px', '110px', '81px', 'auto', 'auto'],
                            id: 'stone',
                            fill: ['rgba(0,0,0,0)', 'images/stone.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['772px', '387px', '410px', '333px', 'auto', 'auto'],
                            id: 'c4',
                            fill: ['rgba(0,0,0,0)', 'images/c4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['317px', '0px', '110px', '81px', 'auto', 'auto'],
                            id: 'stoneCopy',
                            fill: ['rgba(0,0,0,0)', 'images/stone.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['372px', '41px', '110px', '81px', 'auto', 'auto'],
                            id: 'stoneCopy2',
                            fill: ['rgba(0,0,0,0)', 'images/stone.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['372px', '41px', '110px', '81px', 'auto', 'auto'],
                            id: 'stoneCopy3',
                            fill: ['rgba(0,0,0,0)', 'images/stone.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            rect: ['52px', '872px', '720px', '398px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'text1',
                            text: '小石子一顆一顆地沉到瓶底，瓶子裏的水慢慢地升高起來了。小烏鴉非常高興。',
                            rect: ['118px', '885px', '627px', '124px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy12',
                            text: '小',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['141px', '886px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy11',
                            text: '石',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['155px', '884px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy10',
                            text: '子',
                            rect: ['192px', '885px', '627px', '124px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy9',
                            text: '一',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['230px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy8',
                            text: '顆',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['266px', '884px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy7',
                            text: '一',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['303px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy6',
                            text: '顆',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['340px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy5',
                            text: '地',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['401px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy',
                            text: '沉',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['414px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy13',
                            text: '到',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['451px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy14',
                            text: '瓶',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['118px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy15',
                            text: '底',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['525px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy16',
                            text: '瓶',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['599px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy17',
                            text: '子',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['636px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy18',
                            text: '裏',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['55px', '954px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy19',
                            text: '的',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['92px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy20',
                            text: '水',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['128px', '954px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy21',
                            text: '慢',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['165px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy22',
                            text: '慢',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['202px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy23',
                            text: '地',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['240px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy24',
                            text: '升',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['276px', '954px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy25',
                            text: '高',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['118px', '954px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy26',
                            text: '起',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['350px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy27',
                            text: '來',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['387px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy28',
                            text: '了',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['425px', '953px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy29',
                            text: '小',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['498px', '954px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy30',
                            text: '烏',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['535px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy31',
                            text: '鴉',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['572px', '954px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy32',
                            text: '非',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['609px', '954px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy33',
                            text: '常',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['53px', '1023px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy34',
                            text: '高',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['91px', '1023px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'text1Copy35',
                            text: '興',
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['128px', '885px', '627px', '124px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/3.6.mp3'],
                            id: '_36',
                            rect: ['538px', '850px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1182px', '1270px']
                        }
                    }
                },
                timeline: {
                    duration: 17700.7,
                    autoPlay: true,
                    data: [
                        [
                            "eid2235",
                            "left",
                            1039,
                            0,
                            "easeOutSine",
                            "${text1Copy10}",
                            '192px',
                            '192px'
                        ],
                        [
                            "eid2157",
                            "left",
                            0,
                            4658,
                            "easeOutSine",
                            "${text1Copy16}",
                            '118px',
                            '599px'
                        ],
                        [
                            "eid1807",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy11}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1965",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy19}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2013",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy25}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1959",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy19}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1759",
                            "display",
                            3425,
                            0,
                            "easeOutSine",
                            "${text1Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1760",
                            "display",
                            3946,
                            0,
                            "easeOutSine",
                            "${text1Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1795",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy10}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2179",
                            "top",
                            0,
                            6157,
                            "easeOutSine",
                            "${text1Copy22}",
                            '885px',
                            '953px'
                        ],
                        [
                            "eid2101",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy35}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1744",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy5}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1538",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${stone}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid2222",
                            "display",
                            15815,
                            0,
                            "easeOutSine",
                            "${text1Copy33}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2225",
                            "display",
                            16250,
                            0,
                            "easeOutSine",
                            "${text1Copy33}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2196",
                            "display",
                            11854,
                            0,
                            "easeOutSine",
                            "${text1Copy27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2199",
                            "display",
                            12191,
                            0,
                            "easeOutSine",
                            "${text1Copy27}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2210",
                            "display",
                            14428,
                            0,
                            "easeOutSine",
                            "${text1Copy30}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2213",
                            "display",
                            14851,
                            0,
                            "easeOutSine",
                            "${text1Copy30}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1991",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy22}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2192",
                            "display",
                            11554,
                            0,
                            "easeOutSine",
                            "${text1Copy26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2195",
                            "display",
                            11854,
                            0,
                            "easeOutSine",
                            "${text1Copy26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1767",
                            "top",
                            0,
                            1750,
                            "easeOutSine",
                            "${text1Copy7}",
                            '788px',
                            '885px'
                        ],
                        [
                            "eid1975",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy21}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2178",
                            "left",
                            0,
                            6157,
                            "easeOutSine",
                            "${text1Copy22}",
                            '118px',
                            '202px'
                        ],
                        [
                            "eid2080",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy32}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1749",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy5}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1904",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy14}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1783",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy8}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2030",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy27}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1756",
                            "top",
                            0,
                            2000,
                            "easeOutSine",
                            "${text1Copy6}",
                            '788px',
                            '885px'
                        ],
                        [
                            "eid1583",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2051",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy29}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1755",
                            "width",
                            0,
                            2000,
                            "easeOutSine",
                            "${text1Copy6}",
                            '627px',
                            '629px'
                        ],
                        [
                            "eid1830",
                            "left",
                            1914,
                            287,
                            "easeOutSine",
                            "${text1Copy5}",
                            '401px',
                            '377px'
                        ],
                        [
                            "eid1758",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy6}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1551",
                            "height",
                            3250,
                            0,
                            "easeOutSine",
                            "${stoneCopy2}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid1804",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy10}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1785",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy9}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1752",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy6}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2024",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy26}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1779",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy8}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1536",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${stone}",
                            'block',
                            'block'
                        ],
                        [
                            "eid2216",
                            "top",
                            0,
                            11000,
                            "easeOutSine",
                            "${text1Copy31}",
                            '885px',
                            '954px'
                        ],
                        [
                            "eid2091",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy33}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2084",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy33}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1966",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy20}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2169",
                            "display",
                            8804,
                            0,
                            "easeOutSine",
                            "${text1Copy20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2172",
                            "display",
                            9197,
                            0,
                            "easeOutSine",
                            "${text1Copy20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1992",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy22}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1773",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy8}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2010",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy24}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1575",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid2240",
                            "left",
                            1250,
                            0,
                            "easeOutSine",
                            "${text1Copy9}",
                            '229px',
                            '229px'
                        ],
                        [
                            "eid1824",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy12}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2175",
                            "top",
                            0,
                            5935,
                            "easeOutSine",
                            "${text1Copy21}",
                            '885px',
                            '955px'
                        ],
                        [
                            "eid2060",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy30}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid960",
                            "left",
                            0,
                            0,
                            "easeOutSine",
                            "${text1}",
                            '118px',
                            '118px'
                        ],
                        [
                            "eid1782",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy8}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1917",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy15}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1944",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy17}",
                            '885px',
                            '885px'
                        ],
                        [
                            "eid1815",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy11}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2181",
                            "display",
                            10500,
                            0,
                            "easeOutSine",
                            "${text1Copy23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2184",
                            "display",
                            10809,
                            0,
                            "easeOutSine",
                            "${text1Copy23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid418",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1822",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy12}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2223",
                            "left",
                            0,
                            11626,
                            "easeOutSine",
                            "${text1Copy33}",
                            '118px',
                            '53px'
                        ],
                        [
                            "eid2177",
                            "display",
                            9953,
                            0,
                            "easeOutSine",
                            "${text1Copy22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2180",
                            "display",
                            10500,
                            0,
                            "easeOutSine",
                            "${text1Copy22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1746",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy5}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2021",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy26}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1882",
                            "left",
                            1750,
                            0,
                            "easeOutSine",
                            "${text1Copy7}",
                            '303px',
                            '303px'
                        ],
                        [
                            "eid1745",
                            "top",
                            0,
                            1914,
                            "easeOutSine",
                            "${text1Copy5}",
                            '788px',
                            '857px'
                        ],
                        [
                            "eid1829",
                            "top",
                            1914,
                            287,
                            "easeOutSine",
                            "${text1Copy5}",
                            '857px',
                            '885px'
                        ],
                        [
                            "eid2090",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy33}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1897",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy13}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1994",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy23}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2162",
                            "left",
                            0,
                            5250,
                            "easeOutSine",
                            "${text1Copy18}",
                            '118px',
                            '55px'
                        ],
                        [
                            "eid1552",
                            "width",
                            3250,
                            0,
                            "easeOutSine",
                            "${stoneCopy2}",
                            '110px',
                            '110px'
                        ],
                        [
                            "eid2107",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy35}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1861",
                            "left",
                            1500,
                            0,
                            "easeOutSine",
                            "${text1Copy8}",
                            '267px',
                            '267px'
                        ],
                        [
                            "eid1906",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy14}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2009",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy24}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2062",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy30}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1761",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy6}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1801",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy10}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1900",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy14}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1923",
                            "left",
                            0,
                            2541,
                            "easeOutSine",
                            "${text1Copy13}",
                            '118px',
                            '451px'
                        ],
                        [
                            "eid1549",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${stoneCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1550",
                            "display",
                            3250,
                            0,
                            "easeOutSine",
                            "${stoneCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1911",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy15}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2074",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy32}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1957",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy19}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2019",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy25}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2182",
                            "left",
                            0,
                            6360,
                            "easeOutSine",
                            "${text1Copy23}",
                            '118px',
                            '240px'
                        ],
                        [
                            "eid2208",
                            "top",
                            0,
                            10315,
                            "easeOutSine",
                            "${text1Copy29}",
                            '885px',
                            '954px'
                        ],
                        [
                            "eid2075",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy32}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1757",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy6}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2227",
                            "left",
                            0,
                            12000,
                            "easeOutSine",
                            "${text1Copy34}",
                            '118px',
                            '91px'
                        ],
                        [
                            "eid1901",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy14}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1982",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy21}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2011",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy25}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1928",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy16}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2046",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy28}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2186",
                            "left",
                            0,
                            6574,
                            "easeOutSine",
                            "${text1Copy24}",
                            '118px',
                            '276px'
                        ],
                        [
                            "eid2174",
                            "left",
                            0,
                            5935,
                            "easeOutSine",
                            "${text1Copy21}",
                            '118px',
                            '165px'
                        ],
                        [
                            "eid843",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${text1}",
                            '885px',
                            '885px'
                        ],
                        [
                            "eid1896",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy13}",
                            '885px',
                            '885px'
                        ],
                        [
                            "eid2001",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy23}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1932",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy16}",
                            '885px',
                            '885px'
                        ],
                        [
                            "eid2002",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy24}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1890",
                            "left",
                            2000,
                            0,
                            "easeOutSine",
                            "${text1Copy6}",
                            '340px',
                            '340px'
                        ],
                        [
                            "eid1946",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy17}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1902",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy14}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2105",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy35}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1916",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy15}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1934",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy16}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1819",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy12}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1763",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy7}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1964",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy19}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1827",
                            "display",
                            611,
                            0,
                            "easeOutSine",
                            "${text1Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1841",
                            "display",
                            902,
                            0,
                            "easeOutSine",
                            "${text1Copy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2087",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy33}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2064",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy30}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1812",
                            "top",
                            0,
                            829,
                            "easeOutSine",
                            "${text1Copy11}",
                            '788px',
                            '884px'
                        ],
                        [
                            "eid1557",
                            "width",
                            5250,
                            0,
                            "easeOutSine",
                            "${stoneCopy3}",
                            '110px',
                            '110px'
                        ],
                        [
                            "eid1985",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy22}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1898",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy13}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1806",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy11}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1576",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1913",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy15}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1952",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy18}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1802",
                            "display",
                            1295,
                            0,
                            "easeOutSine",
                            "${text1Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1803",
                            "display",
                            1799,
                            0,
                            "easeOutSine",
                            "${text1Copy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1788",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy9}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1935",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy16}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1742",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy5}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2206",
                            "display",
                            14000,
                            0,
                            "easeOutSine",
                            "${text1Copy29}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2209",
                            "display",
                            14428,
                            0,
                            "easeOutSine",
                            "${text1Copy29}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1741",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy5}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2004",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy24}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1983",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy21}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1786",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy9}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2093",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy34}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1750",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy5}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2189",
                            "left",
                            0,
                            6750,
                            "easeOutSine",
                            "${text1Copy25}",
                            '118px',
                            '314px'
                        ],
                        [
                            "eid2165",
                            "display",
                            8408,
                            0,
                            "easeOutSine",
                            "${text1Copy19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2168",
                            "display",
                            8698,
                            0,
                            "easeOutSine",
                            "${text1Copy19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1938",
                            "left",
                            0,
                            2824,
                            "easeOutSine",
                            "${text1Copy15}",
                            '118px',
                            '525px'
                        ],
                        [
                            "eid1766",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy7}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2218",
                            "display",
                            15292,
                            0,
                            "easeOutSine",
                            "${text1Copy32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2221",
                            "display",
                            15750,
                            0,
                            "easeOutSine",
                            "${text1Copy32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1909",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy15}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1570",
                            "location",
                            9500,
                            1250,
                            "easeOutSine",
                            "${c4}",
                            [[977, 553.5, 0, 0, 0, 0,0],[635, 505.5, 0, 0, 0, 0,345.35]]
                        ],
                        [
                            "eid1571",
                            "location",
                            10750,
                            750,
                            "easeOutSine",
                            "${c4}",
                            [[635, 505.5, 0, 0, 0, 0,0],[592, 391.5, 0, 0, 0, 0,121.84]]
                        ],
                        [
                            "eid1572",
                            "location",
                            11500,
                            500,
                            "easeOutSine",
                            "${c4}",
                            [[592, 391.5, 0, 0, 0, 0,0],[623, 517.5, 0, 0, 0, 0,129.76]]
                        ],
                        [
                            "eid1573",
                            "location",
                            12000,
                            500,
                            "easeOutSine",
                            "${c4}",
                            [[623, 517.5, 0, 0, 0, 0,0],[618, 397.5, 0, 0, 0, 0,120.1]]
                        ],
                        [
                            "eid1574",
                            "location",
                            12500,
                            500,
                            "easeOutSine",
                            "${c4}",
                            [[618, 397.5, 0, 0, 0, 0,0],[635, 505.5, 0, 0, 0, 0,109.33]]
                        ],
                        [
                            "eid1997",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy23}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1799",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy10}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1958",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy19}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1554",
                            "height",
                            5250,
                            0,
                            "easeOutSine",
                            "${stoneCopy3}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid2100",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy34}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2053",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy29}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1816",
                            "display",
                            902,
                            0,
                            "easeOutSine",
                            "${text1Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1817",
                            "display",
                            1295,
                            0,
                            "easeOutSine",
                            "${text1Copy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1990",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy22}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2187",
                            "top",
                            0,
                            6574,
                            "easeOutSine",
                            "${text1Copy24}",
                            '885px',
                            '954px'
                        ],
                        [
                            "eid1915",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy15}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1924",
                            "display",
                            5402,
                            0,
                            "easeOutSine",
                            "${text1Copy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1925",
                            "display",
                            5809,
                            0,
                            "easeOutSine",
                            "${text1Copy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1943",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy17}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1977",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy21}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1907",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy14}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1789",
                            "top",
                            0,
                            1250,
                            "easeOutSine",
                            "${text1Copy9}",
                            '788px',
                            '885px'
                        ],
                        [
                            "eid1919",
                            "left",
                            0,
                            2382,
                            "easeOutSine",
                            "${text1Copy}",
                            '118px',
                            '414px'
                        ],
                        [
                            "eid2039",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy28}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1762",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy7}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2029",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy27}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1421",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2166",
                            "left",
                            0,
                            5500,
                            "easeOutSine",
                            "${text1Copy19}",
                            '118px',
                            '92px'
                        ],
                        [
                            "eid2193",
                            "left",
                            0,
                            6921,
                            "easeOutSine",
                            "${text1Copy26}",
                            '118px',
                            '350px'
                        ],
                        [
                            "eid1963",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy19}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2012",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy25}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1914",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy15}",
                            '885px',
                            '885px'
                        ],
                        [
                            "eid2020",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy26}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2078",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy32}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2171",
                            "top",
                            0,
                            5723,
                            "easeOutSine",
                            "${text1Copy20}",
                            '885px',
                            '954px'
                        ],
                        [
                            "eid1823",
                            "top",
                            0,
                            611,
                            "easeOutSine",
                            "${text1Copy12}",
                            '788px',
                            '886px'
                        ],
                        [
                            "eid1751",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy6}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid436",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1910",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy15}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2185",
                            "display",
                            10809,
                            0,
                            "easeOutSine",
                            "${text1Copy24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2188",
                            "display",
                            11105,
                            0,
                            "easeOutSine",
                            "${text1Copy24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1548",
                            "location",
                            3250,
                            3500,
                            "easeOutSine",
                            "${stoneCopy2}",
                            [[371.5, 40.5, 0, 0, 0, 0,0],[361.25, 123.49, -19.45, 87.45, -32.32, 145.3,83.76],[343.21, 218.47, -3.97, 38.61, -9.98, 97.13,180.49],[360.83, 260.23, -4.66, 180.14, -0.95, 36.6,226.27],[338, 366.5, 0, 0, 0, 0,335.56],[340.09, 460.58, 0, 0, 0, 0,429.66],[324.47, 525.39, 0, 0, 0, 0,496.33],[264, 712.5, 0, 0, 0, 0,692.97]]
                        ],
                        [
                            "eid2232",
                            "top",
                            0,
                            12324,
                            "easeOutSine",
                            "${text1Copy35}",
                            '885px',
                            '1023px'
                        ],
                        [
                            "eid2071",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy31}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2083",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy33}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1899",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy13}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1936",
                            "display",
                            5809,
                            0,
                            "easeOutSine",
                            "${text1Copy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1937",
                            "display",
                            6130,
                            0,
                            "easeOutSine",
                            "${text1Copy15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1950",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy18}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1805",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy10}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1825",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy12}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2081",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy32}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2089",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy33}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2219",
                            "left",
                            0,
                            11332,
                            "easeOutSine",
                            "${text1Copy32}",
                            '118px',
                            '609px'
                        ],
                        [
                            "eid2099",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy34}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1970",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy20}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1544",
                            "location",
                            1750,
                            3500,
                            "easeOutSine",
                            "${stoneCopy}",
                            [[371.5, 40.5, 0, 0, 0, 0,0],[361.25, 123.49, -19.45, 87.45, -32.32, 145.3,83.76],[343.21, 218.47, -3.97, 38.61, -9.98, 97.13,180.49],[360.83, 260.23, -4.66, 180.14, -0.95, 36.6,226.27],[338, 366.5, 0, 0, 0, 0,335.56],[340.09, 460.58, 0, 0, 0, 0,429.66],[324.47, 525.39, 0, 0, 0, 0,496.33],[418, 646.5, 0, 0, 0, 0,649.35]]
                        ],
                        [
                            "eid2036",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy27}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1768",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy7}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1976",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy21}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2098",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy34}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2000",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy23}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1753",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy6}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1769",
                            "display",
                            2924,
                            0,
                            "easeOutSine",
                            "${text1Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1770",
                            "display",
                            3425,
                            0,
                            "easeOutSine",
                            "${text1Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1797",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy10}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2063",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy30}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2040",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy28}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid411",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid838",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1541",
                            "location",
                            0,
                            3500,
                            "easeOutSine",
                            "${stone}",
                            [[371.5, 40.5, 0, 0, 0, 0,0],[333.21, 220.47, -23.5, 228.64, -26.57, 258.52,184.23],[338, 366.5, 0, 0, 0, 0,330.72],[340.09, 460.58, -18.56, 59.06, -40.74, 129.64,425.98],[324.47, 525.39, -87.71, 195.63, -27.31, 60.91,492.75],[250, 646.5, 0, 0, 0, 0,635.23]]
                        ],
                        [
                            "eid2170",
                            "left",
                            0,
                            5723,
                            "easeOutSine",
                            "${text1Copy20}",
                            '118px',
                            '128px'
                        ],
                        [
                            "eid1961",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy19}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1905",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy14}",
                            '885px',
                            '885px'
                        ],
                        [
                            "eid1818",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy12}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2155",
                            "display",
                            7351,
                            0,
                            "easeOutSine",
                            "${text1Copy16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2156",
                            "display",
                            7750,
                            0,
                            "easeOutSine",
                            "${text1Copy16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2212",
                            "top",
                            0,
                            10654,
                            "easeOutSine",
                            "${text1Copy30}",
                            '885px',
                            '955px'
                        ],
                        [
                            "eid2108",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy35}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1547",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${stoneCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1545",
                            "display",
                            1750,
                            0,
                            "easeOutSine",
                            "${stoneCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1895",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy13}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1892",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy13}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1790",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy9}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2006",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy24}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1968",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy20}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2214",
                            "display",
                            14851,
                            0,
                            "easeOutSine",
                            "${text1Copy31}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2217",
                            "display",
                            15292,
                            0,
                            "easeOutSine",
                            "${text1Copy31}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1546",
                            "width",
                            1750,
                            0,
                            "easeOutSine",
                            "${stoneCopy}",
                            '110px',
                            '110px'
                        ],
                        [
                            "eid1967",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy20}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1995",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy23}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2065",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy31}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1986",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy22}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1811",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy11}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2026",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy26}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2082",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy32}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2204",
                            "display",
                            11158,
                            0,
                            "easeOutSine",
                            "${text1Copy25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2205",
                            "display",
                            11500,
                            0,
                            "easeOutSine",
                            "${text1Copy25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2211",
                            "left",
                            0,
                            10654,
                            "easeOutSine",
                            "${text1Copy30}",
                            '118px',
                            '535px'
                        ],
                        [
                            "eid1929",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy16}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1939",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy17}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2047",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy29}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1891",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy13}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2054",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy29}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2069",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy31}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2173",
                            "display",
                            9329,
                            0,
                            "easeOutSine",
                            "${text1Copy21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2176",
                            "display",
                            9905,
                            0,
                            "easeOutSine",
                            "${text1Copy21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1988",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy22}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid412",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2017",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy25}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2008",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy24}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1771",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy7}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1561",
                            "display",
                            9500,
                            0,
                            "easeOutSine",
                            "${c4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1560",
                            "display",
                            8750,
                            0,
                            "easeOutSine",
                            "${water2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1941",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy17}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1839",
                            "left",
                            611,
                            0,
                            "easeOutSine",
                            "${text1Copy12}",
                            '118px',
                            '118px'
                        ],
                        [
                            "eid1840",
                            "left",
                            664,
                            0,
                            "easeOutSine",
                            "${text1Copy12}",
                            '118px',
                            '118px'
                        ],
                        [
                            "eid1780",
                            "display",
                            2382,
                            0,
                            "easeOutSine",
                            "${text1Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1781",
                            "display",
                            2924,
                            0,
                            "easeOutSine",
                            "${text1Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1947",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy17}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2015",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy25}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2038",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy28}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1792",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy9}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2018",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy25}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2073",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy31}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2194",
                            "top",
                            0,
                            6921,
                            "easeOutSine",
                            "${text1Copy26}",
                            '885px',
                            '954px'
                        ],
                        [
                            "eid2096",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy34}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1847",
                            "left",
                            829,
                            0,
                            "easeOutSine",
                            "${text1Copy11}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid1584",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1948",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy18}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1577",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2042",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy28}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1774",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy8}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2207",
                            "left",
                            0,
                            10315,
                            "easeOutSine",
                            "${text1Copy29}",
                            '118px',
                            '498px'
                        ],
                        [
                            "eid1945",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy17}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2226",
                            "display",
                            16314,
                            0,
                            "easeOutSine",
                            "${text1Copy34}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2229",
                            "display",
                            16800,
                            0,
                            "easeOutSine",
                            "${text1Copy34}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1555",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${stoneCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1556",
                            "display",
                            5250,
                            0,
                            "easeOutSine",
                            "${stoneCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1740",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy5}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1949",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy18}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1955",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy18}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1581",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy}",
                            '885px',
                            '885px'
                        ],
                        [
                            "eid2056",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy30}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1820",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy12}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2058",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy30}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2003",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy24}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2190",
                            "top",
                            0,
                            6750,
                            "easeOutSine",
                            "${text1Copy25}",
                            '885px',
                            '954px'
                        ],
                        [
                            "eid2045",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy28}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1775",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy8}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1793",
                            "display",
                            1799,
                            0,
                            "easeOutSine",
                            "${text1Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1794",
                            "display",
                            2382,
                            0,
                            "easeOutSine",
                            "${text1Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2202",
                            "top",
                            0,
                            7289,
                            "easeOutSine",
                            "${text1Copy28}",
                            '885px',
                            '953px'
                        ],
                        [
                            "eid2230",
                            "display",
                            16885,
                            0,
                            "easeOutSine",
                            "${text1Copy35}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2233",
                            "display",
                            17400,
                            0,
                            "easeOutSine",
                            "${text1Copy35}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2085",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy33}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1973",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy20}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1784",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy9}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1543",
                            "height",
                            1750,
                            0,
                            "easeOutSine",
                            "${stoneCopy}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid1926",
                            "left",
                            0,
                            2675,
                            "easeOutSine",
                            "${text1Copy14}",
                            '118px',
                            '488px'
                        ],
                        [
                            "eid2161",
                            "display",
                            8049,
                            0,
                            "easeOutSine",
                            "${text1Copy18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2164",
                            "display",
                            8347,
                            0,
                            "easeOutSine",
                            "${text1Copy18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1777",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy8}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2076",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy32}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2231",
                            "left",
                            0,
                            12324,
                            "easeOutSine",
                            "${text1Copy35}",
                            '118px',
                            '128px'
                        ],
                        [
                            "eid2055",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy29}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1956",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy18}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2103",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy35}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1808",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy11}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1539",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${stone}",
                            '110px',
                            '110px'
                        ],
                        [
                            "eid1931",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy16}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2027",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy26}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1979",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy21}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2048",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy29}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2201",
                            "left",
                            0,
                            7289,
                            "easeOutSine",
                            "${text1Copy28}",
                            '118px',
                            '425px'
                        ],
                        [
                            "eid2037",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy27}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1791",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy9}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1796",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy10}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2197",
                            "left",
                            0,
                            7113,
                            "easeOutSine",
                            "${text1Copy27}",
                            '118px',
                            '387px'
                        ],
                        [
                            "eid2198",
                            "top",
                            0,
                            7113,
                            "easeOutSine",
                            "${text1Copy27}",
                            '885px',
                            '954px'
                        ],
                        [
                            "eid1582",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1984",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy22}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1814",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy11}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid2066",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy31}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1580",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2158",
                            "display",
                            7750,
                            0,
                            "easeOutSine",
                            "${text1Copy17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2159",
                            "display",
                            8049,
                            0,
                            "easeOutSine",
                            "${text1Copy17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1999",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy23}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2033",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy27}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1764",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy7}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2228",
                            "top",
                            0,
                            12000,
                            "easeOutSine",
                            "${text1Copy34}",
                            '885px',
                            '1023px'
                        ],
                        [
                            "eid1559",
                            "display",
                            8000,
                            0,
                            "easeOutSine",
                            "${water1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1933",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy16}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2160",
                            "left",
                            0,
                            4961,
                            "easeOutSine",
                            "${text1Copy17}",
                            '118px',
                            '636px'
                        ],
                        [
                            "eid1927",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy16}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid1908",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy14}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1954",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy18}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2200",
                            "display",
                            12191,
                            0,
                            "easeOutSine",
                            "${text1Copy28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2203",
                            "display",
                            12559,
                            0,
                            "easeOutSine",
                            "${text1Copy28}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1893",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy13}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1747",
                            "display",
                            3946,
                            0,
                            "easeOutSine",
                            "${text1Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1748",
                            "display",
                            4458,
                            0,
                            "easeOutSine",
                            "${text1Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2035",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy27}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2022",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy26}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2215",
                            "left",
                            0,
                            11000,
                            "easeOutSine",
                            "${text1Copy31}",
                            '118px',
                            '572px'
                        ],
                        [
                            "eid1972",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy20}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2072",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy31}",
                            '124px',
                            '124px'
                        ],
                        [
                            "eid1993",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy23}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2028",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy26}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1778",
                            "top",
                            0,
                            1500,
                            "easeOutSine",
                            "${text1Copy8}",
                            '788px',
                            '884px'
                        ],
                        [
                            "eid2067",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy31}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2183",
                            "top",
                            0,
                            6360,
                            "easeOutSine",
                            "${text1Copy23}",
                            '885px',
                            '955px'
                        ],
                        [
                            "eid1772",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy7}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid1813",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy11}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2224",
                            "top",
                            0,
                            11626,
                            "easeOutSine",
                            "${text1Copy33}",
                            '885px',
                            '1023px'
                        ],
                        [
                            "eid1920",
                            "display",
                            4458,
                            0,
                            "easeOutSine",
                            "${text1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1921",
                            "display",
                            4961,
                            0,
                            "easeOutSine",
                            "${text1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2163",
                            "top",
                            0,
                            5250,
                            "easeOutSine",
                            "${text1Copy18}",
                            '885px',
                            '954px'
                        ],
                        [
                            "eid2167",
                            "top",
                            0,
                            5500,
                            "easeOutSine",
                            "${text1Copy19}",
                            '885px',
                            '953px'
                        ],
                        [
                            "eid2057",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy30}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid2094",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy34}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2044",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy28}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2049",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy29}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1800",
                            "top",
                            0,
                            1039,
                            "easeOutSine",
                            "${text1Copy10}",
                            '788px',
                            '885px'
                        ],
                        [
                            "eid1553",
                            "location",
                            5250,
                            3500,
                            "easeOutSine",
                            "${stoneCopy3}",
                            [[371.5, 40.5, 0, 0, 0, 0,0],[361.25, 123.49, -19.45, 87.45, -32.32, 145.3,83.76],[343.21, 218.47, -3.97, 38.61, -9.98, 97.13,180.49],[360.83, 260.23, -4.66, 180.14, -0.95, 36.6,226.27],[338, 366.5, 0, 0, 0, 0,335.56],[340.09, 460.58, 0, 0, 0, 0,429.66],[324.47, 525.39, 0, 0, 0, 0,496.33],[377, 760.5, 0, 0, 0, 0,737.24]]
                        ],
                        [
                            "eid1918",
                            "display",
                            4961,
                            0,
                            "easeOutSine",
                            "${text1Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1922",
                            "display",
                            5402,
                            0,
                            "easeOutSine",
                            "${text1Copy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2220",
                            "top",
                            0,
                            11332,
                            "easeOutSine",
                            "${text1Copy32}",
                            '885px',
                            '954px'
                        ],
                        [
                            "eid1826",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy12}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1974",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy20}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1940",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy17}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1585",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid2092",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy34}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid2109",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy35}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2031",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy27}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1981",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy21}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2102",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text1Copy35}",
                            '5px',
                            '5px'
                        ],
                            [ "eid1558", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_36}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("b-08_edgeActions.js");
})("EDGE-16827876");
