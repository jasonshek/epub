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
                            id: 'symbols_animation_p2',
                            symbolName: 'symbols_animation_p2',
                            type: 'rect',
                            rect: ['-157px', '301px', '759', '750', 'auto', 'auto'],
                            transform: [[],[],[],['1.45','1.45']]
                        },
                        {
                            id: 'bg_a1',
                            type: 'image',
                            rect: ['0', '0', '720px', '1280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_a1.png",'0px','0px']
                        },
                        {
                            id: 'bu_mandarin',
                            type: 'image',
                            rect: ['477px', '1193px', '83px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_mandarin.png",'0px','0px']
                        },
                        {
                            id: 'bu_home',
                            type: 'image',
                            rect: ['167px', '1193px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_home.png",'0px','0px']
                        },
                        {
                            id: 'bu_l',
                            type: 'image',
                            rect: ['28px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_l.png",'0px','0px']
                        },
                        {
                            id: 'bu_r',
                            type: 'image',
                            rect: ['583px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_r.png",'0px','0px']
                        },
                        {
                            id: 'play_btn',
                            type: 'image',
                            rect: ['300px', '580px', '120px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"play_btn.png",'0px','0px']
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
                    duration: 15750,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "symbols_animation_p2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pg_2Copy',
                            type: 'image',
                            rect: ['191px', '0px', '657px', '463px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/pg_2.jpg', '0px', '0px']
                        },
                        {
                            rect: ['228px', '454px', '500px', '296px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/3.2.mp3'],
                            id: '_32Copy',
                            rect: ['436px', '483px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            textStyle: ['5px', '', '50px', '55px'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'test0',
                            text: '小公雞來到花園裏，要和小蜜蜂比一比。小蜜蜂嗡嗡叫：「我要採花蜜，沒空跟你比。」',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'test1',
                            text: '小',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '50px', '55px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test2',
                            text: '公',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '50px', '82px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test3',
                            text: '雞',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '50px', '109px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test4',
                            text: '來',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '50px', '136px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test5',
                            text: '到',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '50px', '163px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test6',
                            text: '花',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '50px', '190px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test7',
                            text: '園',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '50px', '217px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test8',
                            text: '裏',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '50px', '244px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test9',
                            text: '要',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '50px', '298px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test10',
                            text: '和',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '50px', '325px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test11',
                            text: '小',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '149px', '0px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test12',
                            text: '蜜',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '149px', '27px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test13',
                            text: '蜂',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '149px', '54px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test14',
                            text: '比',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '149px', '81px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test15',
                            text: '一',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '149px', '108px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test16',
                            text: '比',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '149px', '135px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test17',
                            text: '小',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '149px', '189px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test18',
                            text: '蜜',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '149px', '216px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test19',
                            text: '蜂',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '149px', '243px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test20',
                            text: '嗡',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '149px', '297px'],
                            rect: ['267px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test21',
                            text: '嗡',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '149px', '324px'],
                            rect: ['267px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test22',
                            text: '叫',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '249px', '0px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test23',
                            text: '我',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '249px', '81px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test24',
                            text: '要',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '249px', '108px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test25',
                            text: '採',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '249px', '135px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test26',
                            text: '花',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '249px', '162px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test27',
                            text: '蜜',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '249px', '189px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test28',
                            text: '沒',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '249px', '243px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test29',
                            text: '空',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '249px', '270px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test30',
                            text: '跟',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '249px', '297px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test31',
                            text: '你',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '249px', '324px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'test32',
                            text: '比',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            filter: [0, 0, 1, 1, 0, 0, 0.02, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            textStyle: ['5px', '', '350px', '0px'],
                            rect: ['294px', '484px', '364px', '205px', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            rect: ['205px', '55px', '120px', '67px', 'auto', 'auto'],
                            id: 'bee_2Copy',
                            opacity: '0.2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../images/bee_2.png', '0px', '0px']
                        },
                        {
                            rect: ['671px', '121px', '88px', '81px', 'auto', 'auto'],
                            id: 'bee_1Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../images/bee_1.png', '0px', '0px']
                        },
                        {
                            id: 'chicken2Copy',
                            type: 'image',
                            rect: ['280px', '99px', '228px', '266px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/chicken2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '759px', '750px']
                        }
                    }
                },
                timeline: {
                    duration: 15728.25,
                    autoPlay: false,
                    data: [
                        [
                            "eid1197",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test18}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1319",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test28}",
                            '243px',
                            '243px'
                        ],
                        [
                            "eid1167",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test15}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1093",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test9}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1315",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test28}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1311",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test28}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1312",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${test28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1313",
                            "display",
                            14250,
                            0,
                            "linear",
                            "${test28}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1057",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test5}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1080",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test7}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1128",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test11}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1310",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test28}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1113",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test10}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1217",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test19}",
                            '243px',
                            '243px'
                        ],
                        [
                            "eid1213",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test19}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1084",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1085",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${test8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1086",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${test8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1225",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test20}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1073",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test7}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1068",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test6}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1206",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test18}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid1224",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test20}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1241",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test22}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1059",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test5}",
                            '163px',
                            '163px'
                        ],
                        [
                            "eid979",
                            "line-height",
                            0,
                            0,
                            "easeOutSine",
                            "${test1_chCopy}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1260",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test23}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1261",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${test23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1262",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${test23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1200",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test18}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid998",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test0}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1174",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test16}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1153",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test14}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1082",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test8}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1078",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test7}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1317",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test28}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1083",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test8}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1359",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test32}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1362",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test32}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid970",
                            "left",
                            1000,
                            6750,
                            "linear",
                            "${pg_2Copy}",
                            '72px',
                            '191px'
                        ],
                        [
                            "eid1131",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test12}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1007",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test1}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1105",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test10}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1331",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test30}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1095",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test9}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1299",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test27}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1061",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test6}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1340",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test30}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1186",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test17}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1075",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1076",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${test7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1077",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${test7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1316",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test28}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid986",
                            "height",
                            0,
                            0,
                            "easeOutSine",
                            "${test1_chCopy}",
                            '146px',
                            '146px'
                        ],
                        [
                            "eid918",
                            "left",
                            1000,
                            14728,
                            "linear",
                            "${bee_2Copy}",
                            '205px',
                            '645px'
                        ],
                        [
                            "eid916",
                            "opacity",
                            1000,
                            2750,
                            "linear",
                            "${bee_2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid917",
                            "opacity",
                            14000,
                            1728,
                            "linear",
                            "${bee_2Copy}",
                            '1',
                            '0.2'
                        ],
                        [
                            "eid1229",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test21}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1273",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test24}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1154",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test14}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1329",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test29}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1067",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test6}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1027",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test3}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1101",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test9}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1280",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test25}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1172",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test15}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1028",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test3}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1291",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test26}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1278",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test25}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid985",
                            "width",
                            0,
                            0,
                            "easeOutSine",
                            "${test1_chCopy}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1001",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test1}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1089",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test8}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid962",
                            "letter-spacing",
                            0,
                            0,
                            "easeOutSine",
                            "${test1_chCopy}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1208",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test19}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid997",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test0}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid914",
                            "opacity",
                            7250,
                            1500,
                            "linear",
                            "${bee_1Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1248",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test22}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1265",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test24}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1328",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test29}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1005",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test1}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1230",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test21}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1158",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1159",
                            "display",
                            6107,
                            0,
                            "linear",
                            "${test14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1160",
                            "display",
                            6357,
                            0,
                            "linear",
                            "${test14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1130",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test12}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1092",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test8}",
                            '244px',
                            '244px'
                        ],
                        [
                            "eid1117",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test11}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1064",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1065",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${test6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1066",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${test6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1043",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test4}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1183",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test16}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid898",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${chicken2Copy}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid899",
                            "top",
                            7750,
                            0,
                            "linear",
                            "${chicken2Copy}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid1104",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test10}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1220",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1221",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${test20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1222",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${test20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1195",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test17}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid1050",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test5}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1372",
                            "left",
                            9250,
                            0,
                            "linear",
                            "${test20}",
                            '267px',
                            '267px'
                        ],
                        [
                            "eid1026",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test2}",
                            '82px',
                            '82px'
                        ],
                        [
                            "eid1156",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test14}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1333",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test30}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1233",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test21}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1320",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test29}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1016",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test2}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1134",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test12}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1108",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test10}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1300",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test27}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1143",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test13}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1175",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test16}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1263",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test23}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1302",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test27}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1269",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test24}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1270",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${test24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1271",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${test24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1184",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test16}",
                            '135px',
                            '135px'
                        ],
                        [
                            "eid1249",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test22}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid900",
                            "left",
                            1000,
                            6750,
                            "linear",
                            "${chicken2Copy}",
                            '0px',
                            '280px'
                        ],
                        [
                            "eid1038",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test4}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1322",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test29}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1227",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test20}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1234",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test21}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1235",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${test21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1236",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${test21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1281",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test25}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1332",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test30}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid996",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test0}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1226",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test20}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1124",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test11}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1287",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test26}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1324",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test29}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1325",
                            "display",
                            14250,
                            0,
                            "linear",
                            "${test29}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1326",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${test29}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1149",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test13}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1296",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test26}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1185",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test17}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1048",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test4}",
                            '136px',
                            '136px'
                        ],
                        [
                            "eid915",
                            "top",
                            1000,
                            14728,
                            "linear",
                            "${bee_2Copy}",
                            '55px',
                            '53px'
                        ],
                        [
                            "eid1181",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test16}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1264",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test23}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid1193",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test17}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1012",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test2}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1255",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test23}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1151",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test13}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid1109",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test10}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1194",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test17}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1308",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test27}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid1307",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test27}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1037",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test3}",
                            '109px',
                            '109px'
                        ],
                        [
                            "eid1219",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test20}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1141",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test13}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1091",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test8}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1239",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test21}",
                            '324px',
                            '324px'
                        ],
                        [
                            "eid1088",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test8}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1161",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test14}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1214",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test19}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1321",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test29}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1173",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test15}",
                            '108px',
                            '108px'
                        ],
                        [
                            "eid1152",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test14}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1346",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test31}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1029",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test3}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1102",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test9}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1318",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test28}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1342",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test31}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1215",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test19}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1355",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test32}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1356",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${test32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1357",
                            "display",
                            15250,
                            0,
                            "linear",
                            "${test32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1044",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1045",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${test4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1046",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${test4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1238",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test21}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1369",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test32}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid1103",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test9}",
                            '298px',
                            '298px'
                        ],
                        [
                            "eid1231",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test21}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1062",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test6}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1298",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test27}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1129",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test11}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1069",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test6}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1018",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1019",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${test2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1020",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${test2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1253",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test22}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1021",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test2}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid992",
                            "color",
                            0,
                            0,
                            "easeOutSine",
                            "${test1_chCopy}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid993",
                            "color",
                            149,
                            0,
                            "easeOutSine",
                            "${test1_chCopy}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid1049",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test5}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1140",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test12}",
                            '27px',
                            '27px'
                        ],
                        [
                            "eid1216",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test19}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1259",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test23}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1120",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1121",
                            "display",
                            5357,
                            0,
                            "linear",
                            "${test11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1122",
                            "display",
                            5607,
                            0,
                            "linear",
                            "${test11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1094",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test9}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1254",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test23}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1198",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test18}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1148",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test13}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1288",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test26}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid963",
                            "text-indent",
                            0,
                            0,
                            "easeOutSine",
                            "${test1_chCopy}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid1339",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test30}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1150",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test13}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1110",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1111",
                            "display",
                            5132,
                            0,
                            "linear",
                            "${test10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1112",
                            "display",
                            5357,
                            0,
                            "linear",
                            "${test10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1352",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test31}",
                            '324px',
                            '324px'
                        ],
                        [
                            "eid1145",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1146",
                            "display",
                            5857,
                            0,
                            "linear",
                            "${test13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1147",
                            "display",
                            6107,
                            0,
                            "linear",
                            "${test13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1252",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test22}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid999",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test0}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid1373",
                            "left",
                            9500,
                            0,
                            "linear",
                            "${test21}",
                            '267px',
                            '267px'
                        ],
                        [
                            "eid1218",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test20}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1338",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test30}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1090",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test8}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid994",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test0}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1247",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test22}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1201",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1202",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${test18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1203",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${test18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1204",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test18}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1165",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test15}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1139",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test12}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1292",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test26}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1014",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test2}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1242",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1243",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${test22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1244",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${test22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1276",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test25}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1058",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test5}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1116",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test11}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1196",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test18}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1040",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test4}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1272",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test24}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1347",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test31}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1035",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test3}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1034",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test3}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1343",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test31}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1293",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test26}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1294",
                            "display",
                            12750,
                            0,
                            "linear",
                            "${test26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1295",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${test26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1054",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1055",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${test5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1056",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${test5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1344",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test31}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1258",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test23}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1187",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test17}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1042",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test4}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid995",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test0}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1002",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test1}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid968",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${pg_2Copy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid969",
                            "top",
                            7750,
                            0,
                            "linear",
                            "${pg_2Copy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1189",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test17}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1106",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test10}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1205",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test18}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1354",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test32}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1072",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test7}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1097",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test9}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1309",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test28}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1081",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test7}",
                            '217px',
                            '217px'
                        ],
                        [
                            "eid1361",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test32}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1135",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1136",
                            "display",
                            5607,
                            0,
                            "linear",
                            "${test12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1137",
                            "display",
                            5857,
                            0,
                            "linear",
                            "${test12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid905",
                            "location",
                            7250,
                            750,
                            "linear",
                            "${bee_1Copy}",
                            [[715.44, 161.51, 0, 0, 0, 0,0],[647.01, 191.51, 0, 0, 0, 0,74.72]]
                        ],
                        [
                            "eid906",
                            "location",
                            8000,
                            750,
                            "linear",
                            "${bee_1Copy}",
                            [[647.01, 191.51, -95.73, -26.5, 0, 0,0],[598, 129, 0, 0, 0, 0,82.02]]
                        ],
                        [
                            "eid907",
                            "location",
                            8750,
                            1000,
                            "linear",
                            "${bee_1Copy}",
                            [[598, 129, 0, 0, 0, 0,0],[585.58, 140, 0, 0, 0, 0,16.59]]
                        ],
                        [
                            "eid908",
                            "location",
                            9750,
                            888,
                            "linear",
                            "${bee_1Copy}",
                            [[585.58, 140, 0, 0, 0, 0,0],[577.42, 121, 0, 0, 0, 0,20.68]]
                        ],
                        [
                            "eid909",
                            "location",
                            10638,
                            862,
                            "linear",
                            "${bee_1Copy}",
                            [[577.42, 121, 0, 0, 0, 0,0],[598, 128.5, 0, 0, 0, 0,21.9]]
                        ],
                        [
                            "eid910",
                            "location",
                            11500,
                            1000,
                            "linear",
                            "${bee_1Copy}",
                            [[598, 129, 0, 0, 0, 0,0],[585.58, 140, 0, 0, 0, 0,16.59]]
                        ],
                        [
                            "eid911",
                            "location",
                            12500,
                            888,
                            "linear",
                            "${bee_1Copy}",
                            [[585.58, 140, 0, 0, 0, 0,0],[577.42, 121, 0, 0, 0, 0,20.68]]
                        ],
                        [
                            "eid912",
                            "location",
                            13388,
                            1112,
                            "linear",
                            "${bee_1Copy}",
                            [[577.42, 121, 0, 0, 0, 0,0],[598, 128.5, 0, 0, 0, 0,21.9]]
                        ],
                        [
                            "eid913",
                            "location",
                            14500,
                            1228,
                            "linear",
                            "${bee_1Copy}",
                            [[598, 129, 0, 0, 0, 0,0],[585.58, 140, 0, 0, 0, 0,16.59]]
                        ],
                        [
                            "eid1004",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test1}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid989",
                            "top",
                            0,
                            0,
                            "easeOutSine",
                            "${test1_chCopy}",
                            '484px',
                            '484px'
                        ],
                        [
                            "eid1098",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1099",
                            "display",
                            4904,
                            0,
                            "linear",
                            "${test9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1100",
                            "display",
                            5132,
                            0,
                            "linear",
                            "${test9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1138",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test12}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1168",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test15}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1142",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test13}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1176",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1177",
                            "display",
                            6607,
                            0,
                            "linear",
                            "${test16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1178",
                            "display",
                            6857,
                            0,
                            "linear",
                            "${test16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1114",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test10}",
                            '325px',
                            '325px'
                        ],
                        [
                            "eid1157",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test14}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid901",
                            "rotateZ",
                            1000,
                            1500,
                            "linear",
                            "${chicken2Copy}",
                            '0deg',
                            '6deg'
                        ],
                        [
                            "eid902",
                            "rotateZ",
                            2500,
                            1750,
                            "linear",
                            "${chicken2Copy}",
                            '6deg',
                            '-6deg'
                        ],
                        [
                            "eid903",
                            "rotateZ",
                            4250,
                            1750,
                            "linear",
                            "${chicken2Copy}",
                            '-6deg',
                            '6deg'
                        ],
                        [
                            "eid904",
                            "rotateZ",
                            6000,
                            1750,
                            "linear",
                            "${chicken2Copy}",
                            '6deg',
                            '0deg'
                        ],
                        [
                            "eid990",
                            "left",
                            0,
                            0,
                            "easeOutSine",
                            "${test1_chCopy}",
                            '294px',
                            '294px'
                        ],
                        [
                            "eid1132",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test12}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1070",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test6}",
                            '190px',
                            '190px'
                        ],
                        [
                            "eid1031",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1032",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${test3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1033",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${test3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1267",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test24}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1266",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test24}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1060",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test6}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1277",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test25}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1348",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test31}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1349",
                            "display",
                            14750,
                            0,
                            "linear",
                            "${test31}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1350",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${test31}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1237",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test21}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1071",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test7}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1285",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test25}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1286",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test25}",
                            '135px',
                            '135px'
                        ],
                        [
                            "eid1003",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test1}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid1289",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test26}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1303",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test27}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1367",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test32}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1341",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test30}",
                            '297px',
                            '297px'
                        ],
                        [
                            "eid1119",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test11}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1180",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test16}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1047",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test4}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1228",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test20}",
                            '297px',
                            '297px'
                        ],
                        [
                            "eid1282",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test25}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1283",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${test25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1284",
                            "display",
                            12750,
                            0,
                            "linear",
                            "${test25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1256",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test23}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1360",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test32}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1275",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test24}",
                            '108px',
                            '108px'
                        ],
                        [
                            "eid1246",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test22}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1297",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test26}",
                            '162px',
                            '162px'
                        ],
                        [
                            "eid1013",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test2}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1163",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test15}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1190",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1191",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${test17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1192",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${test17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1036",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test3}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1017",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test2}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1009",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1010",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${test1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1011",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${test1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1351",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test31}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1053",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test5}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid1162",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test14}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid987",
                            "font-size",
                            0,
                            0,
                            "easeOutSine",
                            "${test1_chCopy}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1039",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test4}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1335",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test30}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1336",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${test30}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1337",
                            "display",
                            14750,
                            0,
                            "linear",
                            "${test30}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1209",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1210",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${test19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1211",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${test19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1274",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test24}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1051",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test5}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1164",
                            "letter-spacing",
                            0,
                            0,
                            "linear",
                            "${test15}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1123",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${test11}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid1006",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test1}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1079",
                            "height",
                            0,
                            0,
                            "linear",
                            "${test7}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid1169",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1170",
                            "display",
                            6357,
                            0,
                            "linear",
                            "${test15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1171",
                            "display",
                            6607,
                            0,
                            "linear",
                            "${test15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1207",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${test19}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid1182",
                            "width",
                            0,
                            0,
                            "linear",
                            "${test16}",
                            '364px',
                            '364px'
                        ],
                        [
                            "eid1304",
                            "display",
                            0,
                            0,
                            "linear",
                            "${test27}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1305",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${test27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1306",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${test27}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1330",
                            "text-indent",
                            0,
                            0,
                            "linear",
                            "${test29}",
                            '270px',
                            '270px'
                        ],
                        [
                            "eid1327",
                            "color",
                            0,
                            0,
                            "linear",
                            "${test29}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                            [ "eid971", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_32Copy}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("b-04_edgeActions.js");
})("EDGE-20141121-P2");
