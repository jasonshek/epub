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
                            id: 'Symbol_12',
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
                            id: 'bu_cantonese',
                            type: 'image',
                            rect: ['478px', '1193px', '83px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_cantonese.png?reloadQuery=1424942560",'0px','0px']
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
                            rect: ['0px', '0px', '720px', '1280px', 'auto', 'auto'],
                            id: 't04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/t04.png', '0px', '0px']
                        },
                        {
                            rect: ['60px', '423px', '593px', '61px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle3',
                            stroke: [5, 'rgb(0, 185, 29)', 'dotted'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['images/putonghua_4.mp3'],
                            id: 'putonghua_4',
                            rect: ['96px', '605px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '720px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 50440,
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
                            7267,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid141",
                            "left",
                            7599,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid143",
                            "left",
                            8053,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid150",
                            "left",
                            13973,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid153",
                            "left",
                            14396,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid161",
                            "left",
                            20516,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid164",
                            "left",
                            20954,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid168",
                            "left",
                            21524,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid173",
                            "left",
                            27771,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid177",
                            "left",
                            28165,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid185",
                            "left",
                            35387,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid188",
                            "left",
                            35773,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid192",
                            "left",
                            36193,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid197",
                            "left",
                            42155,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid200",
                            "left",
                            42626,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid204",
                            "left",
                            43051,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid209",
                            "left",
                            49624,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid212",
                            "left",
                            49967,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid216",
                            "left",
                            50440,
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
                            7267,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '423px',
                            '423px'
                        ],
                        [
                            "eid147",
                            "top",
                            7599,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '423px',
                            '497px'
                        ],
                        [
                            "eid149",
                            "top",
                            13973,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '497px',
                            '497px'
                        ],
                        [
                            "eid158",
                            "top",
                            14396,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '497px',
                            '570px'
                        ],
                        [
                            "eid160",
                            "top",
                            20516,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '570px',
                            '570px'
                        ],
                        [
                            "eid170",
                            "top",
                            20954,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '570px',
                            '644px'
                        ],
                        [
                            "eid172",
                            "top",
                            27771,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid182",
                            "top",
                            28165,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '644px',
                            '718px'
                        ],
                        [
                            "eid184",
                            "top",
                            35387,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '718px',
                            '718px'
                        ],
                        [
                            "eid194",
                            "top",
                            35773,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '718px',
                            '791px'
                        ],
                        [
                            "eid196",
                            "top",
                            42155,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '791px',
                            '791px'
                        ],
                        [
                            "eid206",
                            "top",
                            42626,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '791px',
                            '865px'
                        ],
                        [
                            "eid208",
                            "top",
                            49624,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '865px',
                            '865px'
                        ],
                        [
                            "eid218",
                            "top",
                            49967,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '865px',
                            '938px'
                        ],
                        [
                            "eid125",
                            "opacity",
                            631,
                            246,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            7267,
                            332,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            7599,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            13973,
                            423,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            14396,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            20516,
                            438,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            20954,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            27771,
                            394,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            28165,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            35387,
                            386,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "opacity",
                            35773,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            42155,
                            471,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "opacity",
                            42626,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "opacity",
                            49624,
                            343,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            49967,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                            [ "eid223", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${putonghua_4}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("b2-04_P_edgeActions.js");
})("EDGE-11121547");
