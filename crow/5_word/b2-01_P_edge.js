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
                            rect: ['1', '-1', '720', '1280', 'auto', 'auto']
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
                            rect: ['473px', '1193px', '83px', '66px', 'auto', 'auto'],
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
                            id: 't01',
                            type: 'image',
                            rect: ['0px', '0px', '720px', '1280px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/t01.png', '0px', '0px']
                        },
                        {
                            rect: ['58px', '425px', '593px', '61px', 'auto', 'auto'],
                            stroke: [5, 'rgb(0, 185, 29)', 'dotted'],
                            id: 'Rectangle3',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['images/putonghua_1.mp3'],
                            id: 'putonghua_1',
                            rect: ['-217px', '843px', '320px', '45px', 'auto', 'auto'],
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
                    duration: 58922.625,
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
                            7276,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid141",
                            "left",
                            7608,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid143",
                            "left",
                            8062,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid150",
                            "left",
                            13832,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid153",
                            "left",
                            14255,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid161",
                            "left",
                            21420,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid164",
                            "left",
                            21858,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid168",
                            "left",
                            22428,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid173",
                            "left",
                            30078,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid177",
                            "left",
                            30472,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid185",
                            "left",
                            36872,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid188",
                            "left",
                            37258,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid192",
                            "left",
                            37678,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid197",
                            "left",
                            44055,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid200",
                            "left",
                            44526,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid204",
                            "left",
                            44951,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid209",
                            "left",
                            51405,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid212",
                            "left",
                            51748,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid216",
                            "left",
                            52221,
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
                            7276,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '425px',
                            '425px'
                        ],
                        [
                            "eid147",
                            "top",
                            7608,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '425px',
                            '499px'
                        ],
                        [
                            "eid149",
                            "top",
                            13832,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '499px',
                            '499px'
                        ],
                        [
                            "eid158",
                            "top",
                            14255,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '499px',
                            '572px'
                        ],
                        [
                            "eid160",
                            "top",
                            21420,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '572px',
                            '572px'
                        ],
                        [
                            "eid170",
                            "top",
                            21858,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '572px',
                            '646px'
                        ],
                        [
                            "eid172",
                            "top",
                            30078,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '646px',
                            '646px'
                        ],
                        [
                            "eid182",
                            "top",
                            30472,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '646px',
                            '720px'
                        ],
                        [
                            "eid184",
                            "top",
                            36872,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '720px',
                            '720px'
                        ],
                        [
                            "eid194",
                            "top",
                            37258,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '720px',
                            '793px'
                        ],
                        [
                            "eid196",
                            "top",
                            44055,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '793px',
                            '793px'
                        ],
                        [
                            "eid206",
                            "top",
                            44526,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '793px',
                            '867px'
                        ],
                        [
                            "eid208",
                            "top",
                            51405,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '867px',
                            '867px'
                        ],
                        [
                            "eid218",
                            "top",
                            51748,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '867px',
                            '940px'
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
                            7276,
                            332,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            7608,
                            454,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            13832,
                            423,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            14255,
                            555,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            21420,
                            438,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            21858,
                            570,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            30078,
                            394,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            30472,
                            533,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            36872,
                            386,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "opacity",
                            37258,
                            420,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            44055,
                            471,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "opacity",
                            44526,
                            425,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "opacity",
                            51405,
                            343,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            51748,
                            473,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                            [ "eid219", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${putonghua_1}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("b2-01_P_edgeActions.js");
})("EDGE-11121547");
