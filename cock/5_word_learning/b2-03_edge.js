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
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 't03',
                            type: 'image',
                            rect: ['0px', '4px', '720px', '1280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"t03.png",'0px','0px']
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
                            rect: ['167px', '1193px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_home.png",'0px','0px']
                        },
                        {
                            id: 'bu_mandarin',
                            type: 'image',
                            rect: ['477px', '1193px', '83px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_mandarin.png?reloadQuery=1424942284",'0px','0px']
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
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['59px', '424px', '593px', '61px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [5,"rgb(0, 185, 29)","dotted"]
                        },
                        {
                            id: 'cantonese_3',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['-77', '876', '320px', '45px', 'auto', 'auto'],
                            source: ['images/cantonese_3.mp3'],
                            preload: 'auto'
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
                    duration: 44875,
                    autoPlay: true,
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
                            6450,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid141",
                            "left",
                            6782,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid143",
                            "left",
                            7236,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid150",
                            "left",
                            11437,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid153",
                            "left",
                            11860,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid161",
                            "left",
                            17357,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid164",
                            "left",
                            17795,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid168",
                            "left",
                            18365,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid173",
                            "left",
                            23589,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid177",
                            "left",
                            23983,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid185",
                            "left",
                            29322,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid188",
                            "left",
                            29708,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid192",
                            "left",
                            30128,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid197",
                            "left",
                            34312,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid200",
                            "left",
                            34783,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid204",
                            "left",
                            35208,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid209",
                            "left",
                            40698,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid212",
                            "left",
                            41041,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid216",
                            "left",
                            41514,
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
                            '424px',
                            '424px'
                        ],
                        [
                            "eid129",
                            "top",
                            6450,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '424px',
                            '424px'
                        ],
                        [
                            "eid147",
                            "top",
                            6782,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '424px',
                            '498px'
                        ],
                        [
                            "eid149",
                            "top",
                            11437,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '498px',
                            '498px'
                        ],
                        [
                            "eid158",
                            "top",
                            11860,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '498px',
                            '571px'
                        ],
                        [
                            "eid160",
                            "top",
                            17357,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '571px',
                            '571px'
                        ],
                        [
                            "eid170",
                            "top",
                            17795,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '571px',
                            '645px'
                        ],
                        [
                            "eid172",
                            "top",
                            23589,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '645px',
                            '645px'
                        ],
                        [
                            "eid182",
                            "top",
                            23983,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '645px',
                            '719px'
                        ],
                        [
                            "eid184",
                            "top",
                            29322,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '719px',
                            '719px'
                        ],
                        [
                            "eid194",
                            "top",
                            29708,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '719px',
                            '792px'
                        ],
                        [
                            "eid196",
                            "top",
                            34312,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '792px',
                            '792px'
                        ],
                        [
                            "eid206",
                            "top",
                            34783,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '792px',
                            '866px'
                        ],
                        [
                            "eid208",
                            "top",
                            40698,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '866px',
                            '866px'
                        ],
                        [
                            "eid218",
                            "top",
                            41041,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '866px',
                            '939px'
                        ],
                        [
                            "eid125",
                            "opacity",
                            1310,
                            246,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            6450,
                            332,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            6782,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            11437,
                            423,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            11860,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            17357,
                            438,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            17795,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            23589,
                            394,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            23983,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            29322,
                            386,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "opacity",
                            29708,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            34312,
                            471,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "opacity",
                            34783,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "opacity",
                            40698,
                            343,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            41041,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                            [ "eid220", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${cantonese_3}', [] ] ],
                            [ "eid221", "trigger", 44875, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${cantonese_3}', [] ] ]
                    ]
                }
            },
            "highlight": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("b2-03_edgeActions.js");
})("EDGE-11121547");
