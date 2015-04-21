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
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['-1', '1', '720', '1280', 'auto', 'auto']
                        },
                        {
                            id: 'bg_a1',
                            type: 'image',
                            rect: ['0px', '0px', '720px', '1280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_a1.png",'0px','0px']
                        },
                        {
                            id: 'bu_home',
                            type: 'image',
                            rect: ['161px', '1193px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_home.png",'0px','0px']
                        },
                        {
                            id: 'bu_l',
                            type: 'image',
                            rect: ['28px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_l.png",'0px','0px']
                        },
                        {
                            id: 'bu_mandarin',
                            type: 'image',
                            rect: ['473px', '1193px', '83px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_mandarin.png",'0px','0px']
                        },
                        {
                            id: 'bu_r',
                            type: 'image',
                            rect: ['583px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_r.png",'0px','0px']
                        },
                        {
                            id: 'play_button',
                            type: 'image',
                            rect: ['310px', '542px', '120px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"play_button.png",'0px','0px']
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

                    ]
                }
            },
            "highlight": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '593px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [6, 'rgba(255,0,0,0.50)', 'dotted'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '605px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 789,
                    autoPlay: true,
                    data: [
                        [
                            "eid46",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            503,
                            139,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0.3'
                        ],
                        [
                            "eid52",
                            "opacity",
                            642,
                            147,
                            "linear",
                            "${Rectangle}",
                            '0.300000',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 't04',
                            type: 'image',
                            rect: ['0px', '0px', '720px', '1280px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/t04.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['images/cantonese_4.mp3'],
                            id: 'cantonese_4',
                            rect: ['146px', '715px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            rect: ['60px', '423px', '593px', '61px', 'auto', 'auto'],
                            stroke: [5, 'rgb(0, 185, 29)', 'dotted'],
                            id: 'Rectangle3',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '720px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 31371,
                    autoPlay: false,
                    data: [
                        [
                            "eid126",
                            "left",
                            1868,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid140",
                            "left",
                            4082,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid141",
                            "left",
                            4414,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid143",
                            "left",
                            4868,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid150",
                            "left",
                            8500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid153",
                            "left",
                            8923,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid161",
                            "left",
                            12714,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid164",
                            "left",
                            13152,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid168",
                            "left",
                            13722,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid173",
                            "left",
                            17053,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid177",
                            "left",
                            17447,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid185",
                            "left",
                            21555,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid188",
                            "left",
                            21941,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid192",
                            "left",
                            22361,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid197",
                            "left",
                            26032,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid200",
                            "left",
                            26503,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid204",
                            "left",
                            26928,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid209",
                            "left",
                            30555,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid212",
                            "left",
                            30898,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid216",
                            "left",
                            31371,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid127",
                            "top",
                            1868,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '423px',
                            '423px'
                        ],
                        [
                            "eid129",
                            "top",
                            4082,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '423px',
                            '423px'
                        ],
                        [
                            "eid147",
                            "top",
                            4414,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '423px',
                            '497px'
                        ],
                        [
                            "eid149",
                            "top",
                            8500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '497px',
                            '497px'
                        ],
                        [
                            "eid158",
                            "top",
                            8923,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '497px',
                            '570px'
                        ],
                        [
                            "eid160",
                            "top",
                            12714,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '570px',
                            '570px'
                        ],
                        [
                            "eid170",
                            "top",
                            13152,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '570px',
                            '644px'
                        ],
                        [
                            "eid172",
                            "top",
                            17053,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid182",
                            "top",
                            17447,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '644px',
                            '718px'
                        ],
                        [
                            "eid184",
                            "top",
                            21555,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '718px',
                            '718px'
                        ],
                        [
                            "eid194",
                            "top",
                            21941,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '718px',
                            '791px'
                        ],
                        [
                            "eid196",
                            "top",
                            26032,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '791px',
                            '791px'
                        ],
                        [
                            "eid206",
                            "top",
                            26503,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '791px',
                            '865px'
                        ],
                        [
                            "eid208",
                            "top",
                            30555,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '865px',
                            '865px'
                        ],
                        [
                            "eid218",
                            "top",
                            30898,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '865px',
                            '938px'
                        ],
                        [
                            "eid125",
                            "opacity",
                            427,
                            246,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            4082,
                            332,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            4414,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            8500,
                            423,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            8923,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            12714,
                            438,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            13152,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            17053,
                            394,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            17447,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            21555,
                            386,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "opacity",
                            21941,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            26032,
                            471,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "opacity",
                            26503,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "opacity",
                            30555,
                            343,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            30898,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                            [ "eid222", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${cantonese_4}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("b2-04_edgeActions.js");
})("EDGE-11121547");
