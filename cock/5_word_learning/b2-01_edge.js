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
                            id: 'symbols_animation',
                            symbolName: 'symbols_animation',
                            type: 'rect',
                            rect: ['1px', '-1', '720', '1280', 'auto', 'auto']
                        },
                        {
                            id: 'bg_a1',
                            type: 'image',
                            rect: ['0px', '0px', '720px', '1280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_a1.png",'0px','0px']
                        },
                        {
                            id: 'bu_mandarin',
                            type: 'image',
                            rect: ['477px', '1193px', '83px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_mandarin.png?reloadQuery=1424941271",'0px','0px']
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
                            id: 'play_button2',
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
            "symbols_animation": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '720px', '1280px', 'auto', 'auto'],
                            id: 't01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/t01.png', '0px', '0px']
                        },
                        {
                            type: 'audio',
                            source: ['images/cantonese_1.mp3'],
                            id: 'cantonese_1',
                            preload: 'auto',
                            rect: ['-473px', '993px', '320px', '45px', 'auto', 'auto'],
                            volume: '1',
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            rect: ['58px', '425px', '593px', '61px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle3',
                            stroke: [5, 'rgb(0, 185, 29)', 'dotted'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '720px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 42501,
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
                            6111,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid141",
                            "left",
                            6443,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid143",
                            "left",
                            6897,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid150",
                            "left",
                            12279,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid153",
                            "left",
                            12702,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid161",
                            "left",
                            17989,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid164",
                            "left",
                            18427,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid168",
                            "left",
                            18997,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid173",
                            "left",
                            24149,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid177",
                            "left",
                            24543,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid185",
                            "left",
                            30409,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid188",
                            "left",
                            30795,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid192",
                            "left",
                            31215,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid197",
                            "left",
                            35829,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid200",
                            "left",
                            36300,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid204",
                            "left",
                            36725,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid209",
                            "left",
                            41685,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid212",
                            "left",
                            42028,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid216",
                            "left",
                            42501,
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
                            '425px',
                            '425px'
                        ],
                        [
                            "eid129",
                            "top",
                            6111,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '425px',
                            '425px'
                        ],
                        [
                            "eid147",
                            "top",
                            6443,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '425px',
                            '499px'
                        ],
                        [
                            "eid149",
                            "top",
                            12279,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid158",
                            "top",
                            12702,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '499px',
                            '572px'
                        ],
                        [
                            "eid160",
                            "top",
                            17989,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '572px',
                            '572px'
                        ],
                        [
                            "eid170",
                            "top",
                            18427,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '572px',
                            '646px'
                        ],
                        [
                            "eid172",
                            "top",
                            24149,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '646px',
                            '646px'
                        ],
                        [
                            "eid182",
                            "top",
                            24543,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '646px',
                            '720px'
                        ],
                        [
                            "eid184",
                            "top",
                            30409,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '720px',
                            '720px'
                        ],
                        [
                            "eid194",
                            "top",
                            30795,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '720px',
                            '793px'
                        ],
                        [
                            "eid196",
                            "top",
                            35829,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '793px',
                            '793px'
                        ],
                        [
                            "eid206",
                            "top",
                            36300,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '793px',
                            '867px'
                        ],
                        [
                            "eid208",
                            "top",
                            41685,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '867px',
                            '867px'
                        ],
                        [
                            "eid218",
                            "top",
                            42028,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '867px',
                            '940px'
                        ],
                        [
                            "eid125",
                            "opacity",
                            764,
                            246,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            6111,
                            332,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            6443,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            12279,
                            423,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            12702,
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
                            24149,
                            394,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            24543,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            30409,
                            386,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "opacity",
                            30795,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            35829,
                            471,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "opacity",
                            36300,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "opacity",
                            41685,
                            343,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            42028,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                            [ "eid29", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${cantonese_1}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("b2-01_edgeActions.js");
})("EDGE-11121547");
