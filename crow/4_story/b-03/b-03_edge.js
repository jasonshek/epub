/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='../images/',
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
                            rect: ['-1886', '-8', '3106', '1288', 'auto', 'auto']
                        },
                        {
                            id: 'bg_a1',
                            type: 'image',
                            rect: ['0', '0', '720px', '1280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_a12.png",'0px','0px']
                        },
                        {
                            id: 'bu_mandarin',
                            type: 'image',
                            rect: ['473px', '1193px', '83px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_mandarin.png",'0px','0px']
                        },
                        {
                            id: 'bu_homeCopy',
                            type: 'image',
                            rect: ['161px', '1193px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_home2.png",'0px','0px']
                        },
                        {
                            id: 'bu_lCopy',
                            type: 'image',
                            rect: ['28px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_l2.png",'0px','0px']
                        },
                        {
                            id: 'bu_rCopy',
                            type: 'image',
                            rect: ['583px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_r2.png",'0px','0px']
                        },
                        {
                            id: 'play_btn',
                            type: 'image',
                            rect: ['310px', '542px', '120px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"play_btn3.png",'0px','0px']
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
                    duration: 0,
                    autoPlay: true,
                    data: [
                            [ "eid290", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${movie}', [] ] ]
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
                            rect: ['0px', '0px', '2605px', '1288px', 'auto', 'auto'],
                            id: 'bg12',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../images/bg12.jpg', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/3.1.mp3'],
                            id: '_31',
                            rect: ['1886px', '8px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            rect: ['1886px', '879px', '720px', '409px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'text',
                            text: '一隻小烏鴉在天空中飛了很長時間，他覺得很口渴，於是他想找點水來喝。',
                            rect: ['1955px', '915px', '588px', '216px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy',
                            text: '一',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['1955px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy2',
                            text: '隻',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['1992px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy3',
                            text: '小',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2029px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy4',
                            text: '烏',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2066px', '916px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy5',
                            text: '鴉',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2102px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy6',
                            text: '在',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2140px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy7',
                            text: '天',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2177px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy9',
                            text: '空',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2214px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy10',
                            text: '中',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2251px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy11',
                            text: '飛',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2288px', '915px', '593px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy12',
                            text: '了',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2325px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy13',
                            text: '很',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2362px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy14',
                            text: '長',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2399px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy15',
                            text: '時',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2436px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy16',
                            text: '間',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['1891px', '984px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy17',
                            text: '他',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['1955px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy18',
                            text: '覺',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['1955px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy19',
                            text: '得',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2039px', '984px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy20',
                            text: '很',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2076px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy21',
                            text: '口',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2113px', '984px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy22',
                            text: '渴',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['1955px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy23',
                            text: '於',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2224px', '984px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy24',
                            text: '是',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2261px', '984px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy25',
                            text: '他',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2296px', '984px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '66px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy26',
                            text: '想',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['1955px', '984px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy27',
                            text: '找',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2372px', '984px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy28',
                            text: '點',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['2409px', '915px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy29',
                            text: '水',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['1891px', '1053px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy30',
                            text: '來',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['1928px', '1053px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'text',
                            id: 'textCopy8',
                            text: '喝',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(250,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            fi: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            align: 'left',
                            rect: ['1965px', '1053px', '588px', '216px', 'auto', 'auto'],
                            textStyle: ['5px', '', '69px', '64px']
                        },
                        {
                            type: 'image',
                            rect: ['2618px', '317px', '469px', '346px', 'auto', 'auto'],
                            display: 'block',
                            id: 'corvus',
                            autoOrient: false,
                            fill: ['rgba(0,0,0,0)', '../images/corvus4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['2612px', '307px', '493px', '365px', 'auto', 'auto'],
                            display: 'none',
                            id: 'corvus2',
                            autoOrient: false,
                            fill: ['rgba(0,0,0,0)', '../images/corvus22.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1423px', '278px', '468px', '346px', 'auto', 'auto'],
                            id: 'corvus3',
                            fill: ['rgba(0,0,0,0)', '../images/corvus32.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['1383px', '263px', '469px', '347px', 'auto', 'auto'],
                            id: 'corvu4',
                            fill: ['rgba(0,0,0,0)', '../images/corvu42.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['2618px', '317px', '469px', '346px', 'auto', 'auto'],
                            display: 'block',
                            id: 'corvusCopy',
                            autoOrient: false,
                            fill: ['rgba(0,0,0,0)', '../images/corvus4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['2613px', '307px', '493px', '365px', 'auto', 'auto'],
                            display: 'block',
                            id: 'corvus2Copy',
                            autoOrient: false,
                            fill: ['rgba(0,0,0,0)', '../images/corvus22.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '3106px', '1288px']
                        }
                    }
                },
                timeline: {
                    duration: 11794,
                    autoPlay: true,
                    data: [
                        [
                            "eid485",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid492",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy2}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid802",
                            "top",
                            0,
                            6237,
                            "easeOutSine",
                            "${textCopy19}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid536",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy7}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid806",
                            "top",
                            0,
                            6981,
                            "easeOutSine",
                            "${textCopy20}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid702",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy28}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid751",
                            "display",
                            2415,
                            0,
                            "linear",
                            "${textCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid753",
                            "display",
                            2655,
                            0,
                            "linear",
                            "${textCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid527",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy6}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid771",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid767",
                            "display",
                            3669,
                            0,
                            "easeOutSine",
                            "${textCopy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid764",
                            "display",
                            3860,
                            0,
                            "easeOutSine",
                            "${textCopy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid566",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy11}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid640",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy20}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid837",
                            "left",
                            0,
                            9415,
                            "easeOutSine",
                            "${textCopy26}",
                            '1955px',
                            '2336px'
                        ],
                        [
                            "eid720",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy30}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid605",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy16}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid669",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy24}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid575",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy12}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid159",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid160",
                            "display",
                            1000,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid172",
                            "display",
                            1500,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            2000,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid174",
                            "display",
                            2500,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid175",
                            "display",
                            3000,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid176",
                            "display",
                            3500,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid177",
                            "display",
                            4000,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid178",
                            "display",
                            4500,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid179",
                            "display",
                            5000,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid180",
                            "display",
                            5500,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            6000,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            6797,
                            0,
                            "easeOutSine",
                            "${corvus2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid685",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy26}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid657",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy22}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid245",
                            "width",
                            5500,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            '469px',
                            '469px'
                        ],
                        [
                            "eid787",
                            "display",
                            4682,
                            0,
                            "easeOutSine",
                            "${textCopy16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid788",
                            "display",
                            5071,
                            0,
                            "easeOutSine",
                            "${textCopy16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid708",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy29}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid649",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy21}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid805",
                            "left",
                            0,
                            6981,
                            "easeOutSine",
                            "${textCopy20}",
                            '1955px',
                            '2076px'
                        ],
                        [
                            "eid607",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy16}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid579",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy12}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid695",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy27}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid661",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy23}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid620",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy18}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid609",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy16}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid792",
                            "top",
                            0,
                            6000,
                            "easeOutSine",
                            "${textCopy17}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid604",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy16}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid648",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy21}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid534",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy7}",
                            '915px',
                            '915px'
                        ],
                        [
                            "eid824",
                            "display",
                            8663,
                            0,
                            "easeOutSine",
                            "${textCopy23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid827",
                            "display",
                            8930,
                            0,
                            "easeOutSine",
                            "${textCopy23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid493",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy2}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid749",
                            "left",
                            0,
                            1377,
                            "linear",
                            "${textCopy6}",
                            '1955px',
                            '2140px'
                        ],
                        [
                            "eid507",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy3}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid782",
                            "display",
                            4061,
                            0,
                            "easeOutSine",
                            "${textCopy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid783",
                            "display",
                            4250,
                            0,
                            "easeOutSine",
                            "${textCopy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid598",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy15}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid700",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy28}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid509",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy4}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid613",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy17}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid813",
                            "left",
                            0,
                            7430,
                            "easeOutSine",
                            "${textCopy22}",
                            '1955px',
                            '2151px'
                        ],
                        [
                            "eid863",
                            "left",
                            7430,
                            70,
                            "easeOutSine",
                            "${textCopy22}",
                            '2151px',
                            '2150px'
                        ],
                        [
                            "eid662",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy23}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid559",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy10}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid659",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy22}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid765",
                            "display",
                            3483,
                            0,
                            "easeOutSine",
                            "${textCopy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid766",
                            "display",
                            3669,
                            0,
                            "easeOutSine",
                            "${textCopy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid829",
                            "left",
                            0,
                            8930,
                            "easeOutSine",
                            "${textCopy24}",
                            '1955px',
                            '2261px'
                        ],
                        [
                            "eid790",
                            "left",
                            0,
                            4682,
                            "easeOutSine",
                            "${textCopy16}",
                            '1955px',
                            '1891px'
                        ],
                        [
                            "eid581",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy13}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid490",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid719",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy30}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid591",
                            "text-indent",
                            56,
                            0,
                            "easeOutSine",
                            "${textCopy14}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid517",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy5}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid684",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy26}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid672",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy24}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid809",
                            "left",
                            0,
                            7203,
                            "easeOutSine",
                            "${textCopy21}",
                            '1955px',
                            '2113px'
                        ],
                        [
                            "eid190",
                            "location",
                            5500,
                            6246,
                            "easeOutSine",
                            "${corvus3}",
                            [[1639, 449, 0, 0, 0, 0,0],[1963.65, 549, 237.97, 0, 494.61, 0,343.38],[2231.81, 428.21, 265.83, -19.2, 274.9, -19.86,640.68],[2482.45, 493.04, 765.63, 8.72, 256.98, 2.93,901.56],[2965, 451, 0, 0, 0, 0,1386.62]]
                        ],
                        [
                            "eid484",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid615",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy17}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid664",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy23}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid756",
                            "display",
                            2655,
                            0,
                            "linear",
                            "${textCopy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid758",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${textCopy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid688",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy26}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid717",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy30}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid707",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy28}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid521",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy5}",
                            '915px',
                            '915px'
                        ],
                        [
                            "eid520",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy5}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid699",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy27}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid580",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy13}",
                            '915px',
                            '915px'
                        ],
                        [
                            "eid593",
                            "width",
                            56,
                            0,
                            "easeOutSine",
                            "${textCopy14}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid528",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy6}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid855",
                            "left",
                            0,
                            10308,
                            "easeOutSine",
                            "${textCopy30}",
                            '1955px',
                            '1928px'
                        ],
                        [
                            "eid624",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy18}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid631",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy19}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid592",
                            "color",
                            2184,
                            0,
                            "easeOutSine",
                            "${textCopy14}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid495",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy2}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid726",
                            "display",
                            866,
                            0,
                            "easeOutSine",
                            "${textCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid728",
                            "display",
                            1077,
                            0,
                            "easeOutSine",
                            "${textCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid843",
                            "left",
                            0,
                            9666,
                            "easeOutSine",
                            "${textCopy27}",
                            '1955px',
                            '2372px'
                        ],
                        [
                            "eid587",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy13}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid729",
                            "left",
                            0,
                            874,
                            "easeOutSine",
                            "${textCopy3}",
                            '1955px',
                            '1962px'
                        ],
                        [
                            "eid733",
                            "left",
                            874,
                            84,
                            "easeOutSine",
                            "${textCopy3}",
                            '1962px',
                            '2029px'
                        ],
                        [
                            "eid653",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy22}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid564",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy11}",
                            '915px',
                            '915px'
                        ],
                        [
                            "eid486",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid551",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy9}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid816",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy8}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid246",
                            "display",
                            9493,
                            0,
                            "easeOutSine",
                            "${corvusCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid253",
                            "display",
                            10056,
                            0,
                            "easeOutSine",
                            "${corvusCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid254",
                            "display",
                            10619,
                            0,
                            "easeOutSine",
                            "${corvusCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid257",
                            "display",
                            11182,
                            0,
                            "easeOutSine",
                            "${corvusCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid229",
                            "display",
                            11794,
                            0,
                            "easeOutSine",
                            "${corvusCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid511",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy4}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid250",
                            "location",
                            9493,
                            2253,
                            "easeOutSine",
                            "${corvus2Copy}",
                            [[2859.5, 489.5, 0, 0, 0, 0,0],[2548.42, 596.85, -216.34, 28.52, -493.47, 65.06,330.84],[2330.57, 553.96, -325.74, 101.51, -191.18, 59.57,555.92],[2153.5, 709.5, 0, 0, 0, 0,796.4]]
                        ],
                        [
                            "eid830",
                            "top",
                            0,
                            8930,
                            "easeOutSine",
                            "${textCopy24}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid652",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy22}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid616",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy17}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid769",
                            "left",
                            0,
                            3669,
                            "easeOutSine",
                            "${textCopy12}",
                            '1955px',
                            '2325px'
                        ],
                        [
                            "eid558",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy10}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid778",
                            "left",
                            0,
                            3860,
                            "easeOutSine",
                            "${textCopy13}",
                            '1955px',
                            '2362px'
                        ],
                        [
                            "eid670",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy24}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid663",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy23}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid732",
                            "display",
                            1321,
                            0,
                            "easeOutSine",
                            "${textCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid734",
                            "display",
                            1536,
                            0,
                            "easeOutSine",
                            "${textCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid709",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy29}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid789",
                            "top",
                            0,
                            4682,
                            "easeOutSine",
                            "${textCopy16}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid8",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${bg12}",
                            '1288px',
                            '1288px'
                        ],
                        [
                            "eid797",
                            "top",
                            0,
                            6126,
                            "easeOutSine",
                            "${textCopy18}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid711",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy29}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid793",
                            "left",
                            0,
                            6000,
                            "easeOutSine",
                            "${textCopy17}",
                            '1955px',
                            '1965px'
                        ],
                        [
                            "eid791",
                            "display",
                            6180,
                            0,
                            "easeOutSine",
                            "${textCopy17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid794",
                            "display",
                            6476,
                            0,
                            "easeOutSine",
                            "${textCopy17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid770",
                            "left",
                            0,
                            3483,
                            "easeOutSine",
                            "${textCopy11}",
                            '1955px',
                            '2288px'
                        ],
                        [
                            "eid612",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy17}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid738",
                            "color",
                            1125,
                            0,
                            "easeOutSine",
                            "${textCopy4}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid796",
                            "left",
                            0,
                            6126,
                            "easeOutSine",
                            "${textCopy18}",
                            '1955px',
                            '2002px'
                        ],
                        [
                            "eid158",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'block',
                            'block'
                        ],
                        [
                            "eid161",
                            "display",
                            1000,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'block',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            1500,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            2000,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "display",
                            2500,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "display",
                            3000,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'block',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            3500,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'none',
                            'block'
                        ],
                        [
                            "eid167",
                            "display",
                            4000,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'block',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            4500,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "display",
                            5000,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            5500,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'none',
                            'block'
                        ],
                        [
                            "eid171",
                            "display",
                            6000,
                            0,
                            "easeOutSine",
                            "${corvus}",
                            'block',
                            'none'
                        ],
                        [
                            "eid251",
                            "location",
                            9493,
                            2253,
                            "easeOutSine",
                            "${corvusCopy}",
                            [[2852.5, 490, 0, 0, 0, 0,0],[2542.05, 597.42, -186.04, 27.01, -518.74, 75.31,330.23],[2330.37, 552.08, -318.02, 99.1, -165.64, 51.62,549.45],[2146.5, 710, 0, 0, 0, 0,796.05]]
                        ],
                        [
                            "eid531",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy6}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid715",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy29}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid489",
                            "left",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy}",
                            '1955px',
                            '1955px'
                        ],
                        [
                            "eid718",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy30}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid183",
                            "display",
                            5500,
                            0,
                            "easeOutSine",
                            "${corvus3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid192",
                            "display",
                            6677,
                            0,
                            "easeOutSine",
                            "${corvus3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid193",
                            "display",
                            7240,
                            0,
                            "easeOutSine",
                            "${corvus3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "display",
                            7803,
                            0,
                            "easeOutSine",
                            "${corvus3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            8367,
                            0,
                            "easeOutSine",
                            "${corvus3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid196",
                            "display",
                            8930,
                            0,
                            "easeOutSine",
                            "${corvus3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid197",
                            "display",
                            9493,
                            0,
                            "easeOutSine",
                            "${corvus3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid198",
                            "display",
                            10056,
                            0,
                            "easeOutSine",
                            "${corvus3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "display",
                            10619,
                            0,
                            "easeOutSine",
                            "${corvus3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid200",
                            "display",
                            11182,
                            0,
                            "easeOutSine",
                            "${corvus3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            11746,
                            0,
                            "easeOutSine",
                            "${corvus3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid595",
                            "font-size",
                            56,
                            0,
                            "easeOutSine",
                            "${textCopy14}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid745",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${textCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid747",
                            "display",
                            1986,
                            0,
                            "linear",
                            "${textCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid519",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy5}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid535",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy7}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid572",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy12}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid692",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy27}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid582",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy13}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid647",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy21}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid523",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy5}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid497",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy2}",
                            '915px',
                            '915px'
                        ],
                        [
                            "eid655",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy22}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid826",
                            "top",
                            0,
                            8663,
                            "easeOutSine",
                            "${textCopy23}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid600",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy15}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid157",
                            "location",
                            0,
                            6797,
                            "easeOutSine",
                            "${corvus2}",
                            [[2858.5, 489.5, 0, 0, 0, 0,0],[2600.23, 407.71, -369.57, -2.45, -471.24, -3.12,275.08],[2173.11, 488.38, -826.01, 65.64, -436.91, 34.72,710.58],[1650.5, 481.5, 0, 0, 0, 0,1233.89]]
                        ],
                        [
                            "eid487",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid503",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy3}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid849",
                            "display",
                            9872,
                            0,
                            "easeOutSine",
                            "${textCopy28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid850",
                            "display",
                            10112,
                            0,
                            "easeOutSine",
                            "${textCopy28}",
                            'block',
                            'none'
                        ],
                        [
                            "eid516",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy5}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid601",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy15}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid845",
                            "display",
                            9666,
                            0,
                            "easeOutSine",
                            "${textCopy27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid846",
                            "display",
                            9872,
                            0,
                            "easeOutSine",
                            "${textCopy27}",
                            'block',
                            'none'
                        ],
                        [
                            "eid716",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy30}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid701",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy28}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid625",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy18}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid861",
                            "display",
                            10500,
                            0,
                            "easeOutSine",
                            "${textCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid862",
                            "display",
                            10750,
                            0,
                            "easeOutSine",
                            "${textCopy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid643",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy20}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid645",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy21}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid574",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy12}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid156",
                            "location",
                            0,
                            6797,
                            "easeOutSine",
                            "${corvus}",
                            [[2852.5, 490, 0, 0, 0, 0,0],[2600.24, 407.01, -373.52, -2.47, -438.73, -2.91,269.49],[2171.52, 487.31, -822.66, 66.67, -446.84, 36.21,706.48],[1644.5, 482, 0, 0, 0, 0,1234.16]]
                        ],
                        [
                            "eid847",
                            "left",
                            0,
                            9872,
                            "easeOutSine",
                            "${textCopy28}",
                            '1955px',
                            '2409px'
                        ],
                        [
                            "eid667",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy23}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid585",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy13}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid272",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${text}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid712",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy29}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid739",
                            "display",
                            1536,
                            0,
                            "easeOutSine",
                            "${textCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid744",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${textCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid619",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy17}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid515",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy4}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid675",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy24}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid75",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${text}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid573",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy12}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid713",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy29}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid553",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy9}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid746",
                            "left",
                            0,
                            1250,
                            "linear",
                            "${textCopy5}",
                            '1955px',
                            '2102px'
                        ],
                        [
                            "eid641",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy20}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid548",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy9}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid57",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${text}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid576",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy12}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid494",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy2}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid555",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy9}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid696",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy27}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid828",
                            "display",
                            8930,
                            0,
                            "easeOutSine",
                            "${textCopy24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid831",
                            "display",
                            9180,
                            0,
                            "easeOutSine",
                            "${textCopy24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid584",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy13}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid533",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy7}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid841",
                            "display",
                            9180,
                            0,
                            "easeOutSine",
                            "${textCopy25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid842",
                            "display",
                            9415,
                            0,
                            "easeOutSine",
                            "${textCopy25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid287",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${text}",
                            '915px',
                            '915px'
                        ],
                        [
                            "eid844",
                            "top",
                            0,
                            9666,
                            "easeOutSine",
                            "${textCopy27}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid638",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy20}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid588",
                            "line-height",
                            56,
                            0,
                            "easeOutSine",
                            "${textCopy14}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid833",
                            "left",
                            0,
                            9180,
                            "easeOutSine",
                            "${textCopy25}",
                            '1955px',
                            '2296px'
                        ],
                        [
                            "eid596",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy15}",
                            '915px',
                            '915px'
                        ],
                        [
                            "eid697",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy27}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid860",
                            "top",
                            0,
                            10500,
                            "easeOutSine",
                            "${textCopy8}",
                            '915px',
                            '1053px'
                        ],
                        [
                            "eid560",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy10}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid633",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy19}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid703",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy28}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid501",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy3}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid532",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy7}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid852",
                            "top",
                            0,
                            10112,
                            "easeOutSine",
                            "${textCopy29}",
                            '915px',
                            '1053px'
                        ],
                        [
                            "eid549",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy9}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid857",
                            "display",
                            10308,
                            0,
                            "easeOutSine",
                            "${textCopy30}",
                            'none',
                            'block'
                        ],
                        [
                            "eid858",
                            "display",
                            10500,
                            0,
                            "easeOutSine",
                            "${textCopy30}",
                            'block',
                            'none'
                        ],
                        [
                            "eid505",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy3}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid665",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy23}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid776",
                            "display",
                            3860,
                            0,
                            "easeOutSine",
                            "${textCopy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid777",
                            "display",
                            4061,
                            0,
                            "easeOutSine",
                            "${textCopy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid488",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy}",
                            '915px',
                            '915px'
                        ],
                        [
                            "eid673",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy24}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid740",
                            "left",
                            0,
                            1125,
                            "easeOutSine",
                            "${textCopy4}",
                            '1955px',
                            '2066px'
                        ],
                        [
                            "eid741",
                            "top",
                            0,
                            1125,
                            "easeOutSine",
                            "${textCopy4}",
                            '915px',
                            '916px'
                        ],
                        [
                            "eid644",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy21}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid637",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy20}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid597",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy15}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid735",
                            "color",
                            958,
                            0,
                            "easeOutSine",
                            "${textCopy3}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid537",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy7}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid825",
                            "left",
                            0,
                            8663,
                            "easeOutSine",
                            "${textCopy23}",
                            '1955px',
                            '2224px'
                        ],
                        [
                            "eid785",
                            "left",
                            0,
                            4250,
                            "easeOutSine",
                            "${textCopy15}",
                            '1955px',
                            '2436px'
                        ],
                        [
                            "eid812",
                            "display",
                            7500,
                            0,
                            "easeOutSine",
                            "${textCopy22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid815",
                            "display",
                            7803,
                            0,
                            "easeOutSine",
                            "${textCopy22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid632",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy19}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid568",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy11}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid820",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy8}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid851",
                            "left",
                            0,
                            10112,
                            "easeOutSine",
                            "${textCopy29}",
                            '1955px',
                            '1891px'
                        ],
                        [
                            "eid524",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy6}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid525",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy6}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid629",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy19}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid539",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy7}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid757",
                            "left",
                            0,
                            1625,
                            "linear",
                            "${textCopy9}",
                            '1955px',
                            '2214px'
                        ],
                        [
                            "eid561",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy10}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid499",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy2}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid9",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${bg12}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid241",
                            "top",
                            11496,
                            0,
                            "easeOutSine",
                            "${bg12}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid567",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy11}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid617",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy17}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid621",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy18}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid800",
                            "display",
                            6719,
                            0,
                            "easeOutSine",
                            "${textCopy19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid803",
                            "display",
                            6981,
                            0,
                            "easeOutSine",
                            "${textCopy19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid513",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy4}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid611",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy16}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid804",
                            "display",
                            6981,
                            0,
                            "easeOutSine",
                            "${textCopy20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid807",
                            "display",
                            7203,
                            0,
                            "easeOutSine",
                            "${textCopy20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid51",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${text}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid6",
                            "left",
                            0,
                            11496,
                            "easeOutSine",
                            "${bg12}",
                            '0px',
                            '1855px'
                        ],
                        [
                            "eid240",
                            "left",
                            11496,
                            0,
                            "easeOutSine",
                            "${bg12}",
                            '1855px',
                            '1855px'
                        ],
                        [
                            "eid759",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${textCopy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid762",
                            "display",
                            3483,
                            0,
                            "linear",
                            "${textCopy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid565",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy11}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid853",
                            "display",
                            10112,
                            0,
                            "easeOutSine",
                            "${textCopy29}",
                            'none',
                            'block'
                        ],
                        [
                            "eid854",
                            "display",
                            10308,
                            0,
                            "easeOutSine",
                            "${textCopy29}",
                            'block',
                            'none'
                        ],
                        [
                            "eid784",
                            "display",
                            4250,
                            0,
                            "easeOutSine",
                            "${textCopy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid786",
                            "display",
                            4682,
                            0,
                            "easeOutSine",
                            "${textCopy15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid821",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy8}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid628",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy19}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid651",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy21}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid550",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy9}",
                            '915px',
                            '915px'
                        ],
                        [
                            "eid836",
                            "display",
                            9415,
                            0,
                            "easeOutSine",
                            "${textCopy26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid839",
                            "display",
                            9666,
                            0,
                            "easeOutSine",
                            "${textCopy26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid563",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy10}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid184",
                            "display",
                            5500,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid191",
                            "display",
                            6677,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid202",
                            "display",
                            7240,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "display",
                            7803,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid204",
                            "display",
                            8367,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid205",
                            "display",
                            8930,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid206",
                            "display",
                            9493,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "display",
                            10056,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid208",
                            "display",
                            10619,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid209",
                            "display",
                            11182,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid210",
                            "display",
                            11746,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${bg12}",
                            '2605px',
                            '2605px'
                        ],
                        [
                            "eid259",
                            "left",
                            0,
                            0,
                            "easeOutSine",
                            "${text}",
                            '1955px',
                            '1955px'
                        ],
                        [
                            "eid808",
                            "display",
                            7203,
                            0,
                            "easeOutSine",
                            "${textCopy21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid811",
                            "display",
                            7500,
                            0,
                            "easeOutSine",
                            "${textCopy21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid838",
                            "top",
                            0,
                            9415,
                            "easeOutSine",
                            "${textCopy26}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid189",
                            "location",
                            5500,
                            6246,
                            "easeOutSine",
                            "${corvu4}",
                            [[1636, 448.5, 0, 0, 0, 0,0],[1965.89, 549, 254.67, 0, 559.87, 0,349.4],[2231.62, 432.94, 255.36, -19.52, 288.42, -22.05,642.69],[2486.09, 490.71, 748.44, 3.91, 247.46, 1.29,905.16],[2945, 451, 0, 0, 0, 0,1366.38]]
                        ],
                        [
                            "eid704",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy28}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid680",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy25}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid795",
                            "display",
                            6476,
                            0,
                            "easeOutSine",
                            "${textCopy18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid798",
                            "display",
                            6719,
                            0,
                            "easeOutSine",
                            "${textCopy18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid590",
                            "top",
                            56,
                            0,
                            "easeOutSine",
                            "${textCopy14}",
                            '915px',
                            '915px'
                        ],
                        [
                            "eid693",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy27}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid50",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${text}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid817",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy8}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid244",
                            "height",
                            5500,
                            0,
                            "easeOutSine",
                            "${corvu4}",
                            '347px',
                            '347px'
                        ],
                        [
                            "eid678",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy25}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid681",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy25}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid723",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy30}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid686",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy26}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid752",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${textCopy7}",
                            '1955px',
                            '2177px'
                        ],
                        [
                            "eid748",
                            "display",
                            1986,
                            0,
                            "linear",
                            "${textCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid750",
                            "display",
                            2415,
                            0,
                            "linear",
                            "${textCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid737",
                            "top",
                            0,
                            958,
                            "easeOutSine",
                            "${textCopy3}",
                            '915px',
                            '913px'
                        ],
                        [
                            "eid772",
                            "top",
                            958,
                            363,
                            "easeOutSine",
                            "${textCopy3}",
                            '913px',
                            '915px'
                        ],
                        [
                            "eid510",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy4}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid848",
                            "top",
                            0,
                            9872,
                            "easeOutSine",
                            "${textCopy28}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid557",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy10}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid814",
                            "top",
                            0,
                            7430,
                            "easeOutSine",
                            "${textCopy22}",
                            '915px',
                            '983px'
                        ],
                        [
                            "eid864",
                            "top",
                            7430,
                            70,
                            "easeOutSine",
                            "${textCopy22}",
                            '983px',
                            '984px'
                        ],
                        [
                            "eid834",
                            "top",
                            0,
                            9180,
                            "easeOutSine",
                            "${textCopy25}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid639",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy20}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid671",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy24}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid569",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy11}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid856",
                            "top",
                            0,
                            10308,
                            "easeOutSine",
                            "${textCopy30}",
                            '915px',
                            '1053px'
                        ],
                        [
                            "eid248",
                            "display",
                            9493,
                            0,
                            "easeOutSine",
                            "${corvus2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid252",
                            "display",
                            10056,
                            0,
                            "easeOutSine",
                            "${corvus2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid255",
                            "display",
                            10619,
                            0,
                            "easeOutSine",
                            "${corvus2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid256",
                            "display",
                            11182,
                            0,
                            "easeOutSine",
                            "${corvus2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid215",
                            "display",
                            11794,
                            0,
                            "easeOutSine",
                            "${corvus2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid724",
                            "display",
                            714,
                            0,
                            "easeOutSine",
                            "${textCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid725",
                            "display",
                            866,
                            0,
                            "easeOutSine",
                            "${textCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid683",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy25}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid691",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy26}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid810",
                            "top",
                            0,
                            7203,
                            "easeOutSine",
                            "${textCopy21}",
                            '915px',
                            '984px'
                        ],
                        [
                            "eid583",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy13}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid603",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy15}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid761",
                            "left",
                            0,
                            1750,
                            "linear",
                            "${textCopy10}",
                            '1955px',
                            '2251px'
                        ],
                        [
                            "eid677",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy25}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid526",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy6}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid823",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy8}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid819",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy8}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid518",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy5}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid801",
                            "left",
                            0,
                            6237,
                            "easeOutSine",
                            "${textCopy19}",
                            '1955px',
                            '2039px'
                        ],
                        [
                            "eid656",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy22}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid731",
                            "left",
                            857,
                            0,
                            "easeOutSine",
                            "${textCopy2}",
                            '1992px',
                            '1992px'
                        ],
                        [
                            "eid608",
                            "color",
                            2128,
                            0,
                            "easeOutSine",
                            "${textCopy16}",
                            'rgba(250,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid627",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy18}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid529",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy6}",
                            '915px',
                            '915px'
                        ],
                        [
                            "eid589",
                            "letter-spacing",
                            56,
                            0,
                            "easeOutSine",
                            "${textCopy14}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid687",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy26}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid599",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy15}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid623",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${textCopy18}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid859",
                            "left",
                            0,
                            10500,
                            "easeOutSine",
                            "${textCopy8}",
                            '1955px',
                            '1965px'
                        ],
                            [ "eid97", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_31}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("b-03_edgeActions.js");
})("EDGE-16827876");
