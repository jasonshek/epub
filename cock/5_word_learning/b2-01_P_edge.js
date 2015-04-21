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
                            id: 't01',
                            type: 'image',
                            rect: ['1px', '-1px', '720px', '1280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"t01.png",'0px','0px']
                        },
                        {
                            id: 'bg_a1',
                            type: 'image',
                            rect: ['0px', '0px', '720px', '1280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_a1.png",'0px','0px']
                        },
                        {
                            id: 'bu_cantonese',
                            type: 'image',
                            rect: ['477px', '1193px', '83px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_cantonese.png?reloadQuery=1424941723",'0px','0px']
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
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['59px', '424px', '593px', '61px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [5,"rgb(0, 185, 29)","dotted"]
                        },
                        {
                            id: 'putonghua_1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['-216', '842', '320px', '45px', 'auto', 'auto'],
                            source: ['images/putonghua_1.mp3'],
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
                    duration: 46181,
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
                            6070,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid141",
                            "left",
                            6402,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid143",
                            "left",
                            6856,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid150",
                            "left",
                            11873,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid153",
                            "left",
                            12296,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid161",
                            "left",
                            17989,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid164",
                            "left",
                            18427,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid168",
                            "left",
                            18997,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid173",
                            "left",
                            24045,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid177",
                            "left",
                            24439,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid185",
                            "left",
                            30641,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid188",
                            "left",
                            31027,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid192",
                            "left",
                            31447,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid197",
                            "left",
                            37713,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid200",
                            "left",
                            38184,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid204",
                            "left",
                            38609,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid209",
                            "left",
                            45365,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid212",
                            "left",
                            45708,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid216",
                            "left",
                            46181,
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
                            6070,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '424px',
                            '424px'
                        ],
                        [
                            "eid147",
                            "top",
                            6402,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '424px',
                            '498px'
                        ],
                        [
                            "eid149",
                            "top",
                            11873,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '498px',
                            '498px'
                        ],
                        [
                            "eid158",
                            "top",
                            12296,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '498px',
                            '571px'
                        ],
                        [
                            "eid160",
                            "top",
                            17989,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '571px',
                            '571px'
                        ],
                        [
                            "eid170",
                            "top",
                            18427,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '571px',
                            '645px'
                        ],
                        [
                            "eid172",
                            "top",
                            24045,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '645px',
                            '645px'
                        ],
                        [
                            "eid182",
                            "top",
                            24439,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '645px',
                            '719px'
                        ],
                        [
                            "eid184",
                            "top",
                            30641,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '719px',
                            '719px'
                        ],
                        [
                            "eid194",
                            "top",
                            31027,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '719px',
                            '792px'
                        ],
                        [
                            "eid196",
                            "top",
                            37713,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '792px',
                            '792px'
                        ],
                        [
                            "eid206",
                            "top",
                            38184,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '792px',
                            '866px'
                        ],
                        [
                            "eid208",
                            "top",
                            45365,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '866px',
                            '866px'
                        ],
                        [
                            "eid218",
                            "top",
                            45708,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '866px',
                            '939px'
                        ],
                        [
                            "eid125",
                            "opacity",
                            654,
                            246,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            6070,
                            332,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            6402,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            11873,
                            423,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            12296,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            17989,
                            438,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            18427,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            24045,
                            394,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            24439,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            30641,
                            386,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "opacity",
                            31027,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            37713,
                            471,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "opacity",
                            38184,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "opacity",
                            45365,
                            343,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            45708,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                            [ "eid219", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${putonghua_1}', [] ] ]
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("b2-01_P_edgeActions.js");
})("EDGE-11121547");
