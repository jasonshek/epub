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
                            rect: ['1', '-2', '720', '1280', 'auto', 'auto']
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
                            id: 'bu_cantonese',
                            type: 'image',
                            rect: ['473px', '1193px', '83px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_cantonese.png",'0px','0px']
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
                            id: 't02',
                            type: 'image',
                            rect: ['0px', '0px', '720px', '1280px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/t02.png', '0px', '0px']
                        },
                        {
                            rect: ['58px', '426px', '593px', '61px', 'auto', 'auto'],
                            stroke: [5, 'rgb(0, 185, 29)', 'dotted'],
                            id: 'Rectangle3',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['images/putonghua_2.mp3'],
                            id: 'putonghua_2',
                            rect: ['137px', '733px', '320px', '45px', 'auto', 'auto'],
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
                    duration: 55505,
                    autoPlay: false,
                    data: [
                        [
                            "eid126",
                            "left",
                            1868,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid140",
                            "left",
                            9281,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid141",
                            "left",
                            9613,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid143",
                            "left",
                            10067,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid150",
                            "left",
                            16593,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid153",
                            "left",
                            17016,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid161",
                            "left",
                            24786,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid164",
                            "left",
                            25224,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid168",
                            "left",
                            25794,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid173",
                            "left",
                            32084,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid177",
                            "left",
                            32478,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid185",
                            "left",
                            39723,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid188",
                            "left",
                            40109,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid192",
                            "left",
                            40529,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid197",
                            "left",
                            46890,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid200",
                            "left",
                            47361,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid204",
                            "left",
                            47786,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid209",
                            "left",
                            54689,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid212",
                            "left",
                            55032,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid216",
                            "left",
                            55505,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid127",
                            "top",
                            1868,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '426px',
                            '426px'
                        ],
                        [
                            "eid129",
                            "top",
                            9281,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '426px',
                            '426px'
                        ],
                        [
                            "eid147",
                            "top",
                            9613,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '426px',
                            '500px'
                        ],
                        [
                            "eid149",
                            "top",
                            16593,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '500px',
                            '500px'
                        ],
                        [
                            "eid158",
                            "top",
                            17016,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '500px',
                            '573px'
                        ],
                        [
                            "eid160",
                            "top",
                            24786,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '573px',
                            '573px'
                        ],
                        [
                            "eid170",
                            "top",
                            25224,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '573px',
                            '647px'
                        ],
                        [
                            "eid172",
                            "top",
                            32084,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '647px',
                            '647px'
                        ],
                        [
                            "eid182",
                            "top",
                            32478,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '647px',
                            '721px'
                        ],
                        [
                            "eid184",
                            "top",
                            39723,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '721px',
                            '721px'
                        ],
                        [
                            "eid194",
                            "top",
                            40109,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '721px',
                            '794px'
                        ],
                        [
                            "eid196",
                            "top",
                            46890,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '794px',
                            '794px'
                        ],
                        [
                            "eid206",
                            "top",
                            47361,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '794px',
                            '868px'
                        ],
                        [
                            "eid208",
                            "top",
                            54689,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '868px',
                            '868px'
                        ],
                        [
                            "eid218",
                            "top",
                            55032,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '868px',
                            '941px'
                        ],
                        [
                            "eid125",
                            "opacity",
                            988,
                            246,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            9281,
                            332,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            9613,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            16593,
                            423,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            17016,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            24786,
                            438,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            25224,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            32084,
                            394,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            32478,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            39723,
                            386,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "opacity",
                            40109,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            46890,
                            471,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "opacity",
                            47361,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "opacity",
                            54689,
                            343,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            55032,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                            [ "eid220", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${putonghua_2}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("b2-02_P_edgeActions.js");
})("EDGE-11121547");
