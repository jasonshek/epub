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
                            id: 'copyright',
                            type: 'image',
                            rect: ['40px', '230px', '680px', '857px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'psd/copyright.png','0px','0px']
                        },
                        {
                            id: 'wrong2',
                            symbolName: 'wrong',
                            type: 'rect',
                            rect: ['83', '1050', '575', '91', 'auto', 'auto']
                        },
                        {
                            id: 'bg_a1',
                            type: 'image',
                            rect: ['0', '0', '720px', '1280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_a1.png",'0px','0px']
                        },
                        {
                            id: 'bu_home',
                            type: 'image',
                            rect: ['218px', '1193px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_home.png",'0px','0px']
                        },
                        {
                            id: 'bu_l',
                            type: 'image',
                            rect: ['28px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_l.png",'0px','0px']
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
                    duration: 2195,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bu1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.825', '0.825']],
                            borderRadius: ['1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px'],
                            rect: ['-7px', '-7px', '80px', '80px', 'auto', 'auto'],
                            id: 'RoundRect3',
                            stroke: [5, 'rgb(228, 155, 17)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,167,0,1.00)']
                        },
                        {
                            rect: ['5px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', '700', 'none solid rgb(255, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2',
                            text: '屋',
                            transform: [[], [], [], ['0.825', '0.825']],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '66px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bu2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.825', '0.825']],
                            borderRadius: ['1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px'],
                            rect: ['-7px', '-7px', '80px', '80px', 'auto', 'auto'],
                            id: 'RoundRect3Copy',
                            stroke: [5, 'rgb(228, 155, 17)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,167,0,1.00)']
                        },
                        {
                            rect: ['5px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', '700', 'none solid rgb(255, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy',
                            text: '女',
                            transform: [[], [], [], ['0.825', '0.825']],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '66px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bu3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.825', '0.825']],
                            borderRadius: ['1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px'],
                            rect: ['-7px', '-7px', '80px', '80px', 'auto', 'auto'],
                            id: 'RoundRect3Copy2',
                            stroke: [5, 'rgb(228, 155, 17)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,167,0,1.00)']
                        },
                        {
                            rect: ['5px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', '700', 'none solid rgb(255, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy2',
                            text: '昌',
                            transform: [[], [], [], ['0.825', '0.825']],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '66px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bu4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.825', '0.825']],
                            borderRadius: ['1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px'],
                            rect: ['-7px', '-7px', '80px', '80px', 'auto', 'auto'],
                            id: 'RoundRect3Copy3',
                            stroke: [5, 'rgb(228, 155, 17)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,167,0,1.00)']
                        },
                        {
                            rect: ['5px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', '700', 'none solid rgb(255, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy3',
                            text: '和',
                            transform: [[], [], [], ['0.825', '0.825']],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '66px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bu5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.825', '0.825']],
                            borderRadius: ['1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px'],
                            rect: ['-7px', '-7px', '80px', '80px', 'auto', 'auto'],
                            id: 'RoundRect3Copy4',
                            stroke: [5, 'rgb(228, 155, 17)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,167,0,1.00)']
                        },
                        {
                            rect: ['5px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', '700', 'none solid rgb(255, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy4',
                            text: '哈',
                            transform: [[], [], [], ['0.825', '0.825']],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '66px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bu6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.825', '0.825']],
                            borderRadius: ['1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px', '1.03px 4.74px'],
                            rect: ['-7px', '-7px', '80px', '80px', 'auto', 'auto'],
                            id: 'RoundRect3Copy5',
                            stroke: [5, 'rgb(228, 155, 17)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,167,0,1.00)']
                        },
                        {
                            rect: ['5px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', '700', 'none solid rgb(255, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy5',
                            text: '口',
                            transform: [[], [], [], ['0.825', '0.825']],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '66px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "wrong": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: '答錯了!',
                            textStyle: ['', '', '59px', ''],
                            id: 'wrong',
                            rect: ['0px', '0px', '575px', '91px', 'auto', 'auto'],
                            fi: [0.02, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0.02, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'block',
                            font: ['Arial, Helvetica, sans-serif', [98, 'px'], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'normal'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '575px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 2195,
                    autoPlay: true,
                    data: [
                        [
                            "eid49",
                            "scaleX",
                            0,
                            1310,
                            "linear",
                            "${wrong}",
                            '0.8',
                            '0.98'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            0,
                            1310,
                            "linear",
                            "${wrong}",
                            '0.8',
                            '0.98'
                        ],
                        [
                            "eid52",
                            "opacity",
                            0,
                            1310,
                            "linear",
                            "${wrong}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            1310,
                            885,
                            "linear",
                            "${wrong}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "right": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            id: 'right',
                            text: '答對了!',
                            textStyle: ['', '', '59px', ''],
                            rect: ['0px', '0px', '575px', '91px', 'auto', 'auto'],
                            align: 'center',
                            filter: [0.02, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'block',
                            font: ['Arial, Helvetica, sans-serif', [98, 'px'], 'rgba(29,158,0,1.00)', '700', 'none', '', 'break-word', 'normal'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '575px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 2195,
                    autoPlay: true,
                    data: [
                        [
                            "eid58",
                            "color",
                            1150,
                            0,
                            "linear",
                            "${right}",
                            'rgba(29,158,0,1.00)',
                            'rgba(29,158,0,1.00)'
                        ],
                        [
                            "eid52",
                            "opacity",
                            0,
                            1310,
                            "linear",
                            "${right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            1310,
                            885,
                            "linear",
                            "${right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            0,
                            1310,
                            "linear",
                            "${right}",
                            '0.8',
                            '0.98'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            0,
                            1310,
                            "linear",
                            "${right}",
                            '0.8',
                            '0.98'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("copyright_edgeActions.js");
})("EDGE-11121547");
