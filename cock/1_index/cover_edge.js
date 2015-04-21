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
                            id: 'cover-bg',
                            type: 'image',
                            rect: ['0px', '0px', '720px', '1280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'psd/cover-bg.png','0px','0px']
                        },
                        {
                            id: '_01-01',
                            type: 'image',
                            rect: ['164px', '60px', '391px', '104px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'psd/01-01.png','0px','0px']
                        },
                        {
                            id: 'booktitle',
                            symbolName: 'booktitle',
                            type: 'rect',
                            rect: ['27', '184px', '665', '159', 'auto', 'auto']
                        },
                        {
                            id: '_01-bu1',
                            type: 'image',
                            rect: ['396px', '708px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'psd/01-bu1.png','0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 3, 5, 5]
                        },
                        {
                            id: '_01-bu1b2',
                            type: 'image',
                            rect: ['396px', '784px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'psd/01-bu1b.png','0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 3, 5, 5]
                        },
                        {
                            id: '_01-bu2',
                            type: 'image',
                            rect: ['396px', '860px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'psd/01-bu2.png','0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 3, 5, 5]
                        },
                        {
                            id: '_01-bu3',
                            type: 'image',
                            rect: ['396px', '1012px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'psd/01-bu3.png','0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 3, 5, 5]
                        },
                        {
                            id: '_01-bu4',
                            type: 'image',
                            rect: ['396px', '1088px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'psd/01-bu4.png','0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 3, 5, 5]
                        },
                        {
                            id: 'mov_2',
                            symbolName: 'mov_2',
                            type: 'rect',
                            rect: ['38', '398', '111', '94', 'auto', 'auto']
                        },
                        {
                            id: 'mov_01',
                            symbolName: 'mov_01',
                            type: 'rect',
                            rect: ['555', '35', '135', '170', 'auto', 'auto']
                        },
                        {
                            id: '_01-bu2b2',
                            type: 'image',
                            rect: ['396px', '936px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'psd/01-bu2b.png','0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 3, 5, 5]
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
                    duration: 1623,
                    autoPlay: true,
                    data: [
                            [ "eid45", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${booktitle}', [] ] ]
                    ]
                }
            },
            "booktitle": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: '_01-02',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '665px', '159px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'psd/01-02.png', '0px', '0px', '100%', '100%', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '665px', '159px']
                        }
                    }
                },
                timeline: {
                    duration: 538,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "scaleX",
                            0,
                            250,
                            "easeInQuad",
                            "${_01-02}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid11",
                            "scaleX",
                            250,
                            288,
                            "easeInQuad",
                            "${_01-02}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid12",
                            "scaleX",
                            538,
                            0,
                            "linear",
                            "${_01-02}",
                            '1',
                            '1'
                        ],
                        [
                            "eid10",
                            "scaleY",
                            0,
                            250,
                            "easeInQuad",
                            "${_01-02}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid13",
                            "scaleY",
                            250,
                            288,
                            "easeInQuad",
                            "${_01-02}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid14",
                            "scaleY",
                            538,
                            0,
                            "linear",
                            "${_01-02}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "mov_01": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_01-g01',
                            rect: ['0px', '0px', '135px', '170px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'psd/01-g01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '135px', '170px']
                        }
                    }
                },
                timeline: {
                    duration: 539,
                    autoPlay: true,
                    data: [
                        [
                            "eid16",
                            "rotateZ",
                            0,
                            182,
                            "easeInQuad",
                            "${_01-g01}",
                            '0deg',
                            '-9deg'
                        ],
                        [
                            "eid17",
                            "rotateZ",
                            182,
                            193,
                            "easeInQuad",
                            "${_01-g01}",
                            '-9deg',
                            '5deg'
                        ],
                        [
                            "eid18",
                            "rotateZ",
                            375,
                            164,
                            "easeInQuad",
                            "${_01-g01}",
                            '5deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "mov_2": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_01-g02',
                            rect: ['-191px', '0px', '111px', '94px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'psd/01-g02.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '111px', '94px']
                        }
                    }
                },
                timeline: {
                    duration: 1623,
                    autoPlay: true,
                    data: [
                        [
                            "eid25",
                            "top",
                            0,
                            388,
                            "easeInQuad",
                            "${_01-g02}",
                            '0px',
                            '47px'
                        ],
                        [
                            "eid38",
                            "top",
                            388,
                            364,
                            "easeInQuad",
                            "${_01-g02}",
                            '47px',
                            '-47px'
                        ],
                        [
                            "eid40",
                            "top",
                            751,
                            367,
                            "easeInQuad",
                            "${_01-g02}",
                            '-47px',
                            '47px'
                        ],
                        [
                            "eid42",
                            "top",
                            1118,
                            505,
                            "easeInQuad",
                            "${_01-g02}",
                            '47px',
                            '-35px'
                        ],
                        [
                            "eid26",
                            "left",
                            0,
                            388,
                            "easeInQuad",
                            "${_01-g02}",
                            '-191px',
                            '56px'
                        ],
                        [
                            "eid37",
                            "left",
                            388,
                            364,
                            "easeInQuad",
                            "${_01-g02}",
                            '56px',
                            '93px'
                        ],
                        [
                            "eid39",
                            "left",
                            751,
                            367,
                            "easeInQuad",
                            "${_01-g02}",
                            '93px',
                            '56px'
                        ],
                        [
                            "eid41",
                            "left",
                            1118,
                            505,
                            "easeInQuad",
                            "${_01-g02}",
                            '56px',
                            '-151px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("cover_edgeActions.js");
})("EDGE-6758604");
