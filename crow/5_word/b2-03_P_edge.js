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
                            rect: ['0', '4', '720', '1280', 'auto', 'auto']
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
                            id: 'bu_r',
                            type: 'image',
                            rect: ['583px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_r.png",'0px','0px']
                        },
                        {
                            id: 'bu_cantonese',
                            type: 'image',
                            rect: ['473px', '1193', '83px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_cantonese.png",'0px','0px']
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
                            stroke: [6, 'rgba(255,0,0,0.50)', 'dotted'],
                            id: 'Rectangle',
                            opacity: '0',
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
                            id: 't03',
                            type: 'image',
                            rect: ['0px', '0px', '720px', '1280px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/t03.png', '0px', '0px']
                        },
                        {
                            rect: ['59px', '420px', '593px', '61px', 'auto', 'auto'],
                            stroke: [5, 'rgb(0, 185, 29)', 'dotted'],
                            id: 'Rectangle3',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['images/putonghua_3.mp3'],
                            id: 'putonghua_3',
                            rect: ['-184px', '764px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
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
                    duration: 52359,
                    autoPlay: false,
                    data: [
                        [
                            "eid126",
                            "left",
                            1868,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid140",
                            "left",
                            7659,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid141",
                            "left",
                            7991,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid143",
                            "left",
                            8445,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid150",
                            "left",
                            14794,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid153",
                            "left",
                            15217,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid161",
                            "left",
                            21606,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid164",
                            "left",
                            22044,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid168",
                            "left",
                            22614,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid173",
                            "left",
                            29022,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid177",
                            "left",
                            29416,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid185",
                            "left",
                            36443,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid188",
                            "left",
                            36829,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid192",
                            "left",
                            37249,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid197",
                            "left",
                            43870,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid200",
                            "left",
                            44341,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid204",
                            "left",
                            44766,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid209",
                            "left",
                            51543,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid212",
                            "left",
                            51886,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid216",
                            "left",
                            52359,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid127",
                            "top",
                            1868,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '420px',
                            '420px'
                        ],
                        [
                            "eid129",
                            "top",
                            7659,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '420px',
                            '420px'
                        ],
                        [
                            "eid147",
                            "top",
                            7991,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '420px',
                            '494px'
                        ],
                        [
                            "eid149",
                            "top",
                            14794,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '494px',
                            '494px'
                        ],
                        [
                            "eid158",
                            "top",
                            15217,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '494px',
                            '567px'
                        ],
                        [
                            "eid160",
                            "top",
                            21606,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '567px',
                            '567px'
                        ],
                        [
                            "eid170",
                            "top",
                            22044,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '567px',
                            '641px'
                        ],
                        [
                            "eid172",
                            "top",
                            29022,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '641px',
                            '641px'
                        ],
                        [
                            "eid182",
                            "top",
                            29416,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '641px',
                            '715px'
                        ],
                        [
                            "eid184",
                            "top",
                            36443,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '715px',
                            '715px'
                        ],
                        [
                            "eid194",
                            "top",
                            36829,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '715px',
                            '788px'
                        ],
                        [
                            "eid196",
                            "top",
                            43870,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '788px',
                            '788px'
                        ],
                        [
                            "eid206",
                            "top",
                            44341,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '788px',
                            '862px'
                        ],
                        [
                            "eid208",
                            "top",
                            51543,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '862px',
                            '862px'
                        ],
                        [
                            "eid218",
                            "top",
                            51886,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '862px',
                            '935px'
                        ],
                        [
                            "eid125",
                            "opacity",
                            769,
                            246,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            7659,
                            332,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            7991,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            14794,
                            423,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            15217,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            21606,
                            438,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            22044,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            29022,
                            394,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            29416,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            36443,
                            386,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "opacity",
                            36829,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            43870,
                            471,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "opacity",
                            44341,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "opacity",
                            51543,
                            343,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            51886,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                            [ "eid222", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${putonghua_3}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("b2-03_P_edgeActions.js");
})("EDGE-11121547");
