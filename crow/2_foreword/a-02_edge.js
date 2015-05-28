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
                        },
                        {
                            id: 'bu_r',
                            type: 'image',
                            rect: ['583px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_r.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            display: 'block',
                            type: 'text',
                            rect: ['83px', '248px', '575px', '501px', 'auto', 'auto'],
                            text: "　　說故事是一種啟發性的思維訓練，家長和老師除了按故事內的文字給孩子說故事之外，還可以啟發孩子細看圖畫，用自己的語言來說一個自己「創作」的故事，這對提升孩子的語言表達能力和想像力會有莫大裨益。<br><br>　　願這套文字簡明淺白，圖畫富童趣的小叢書，陪伴孩子度過一個個愉快的親子共讀夜或愉快的校園閱讀樂時光，也願這套小叢書為孩子插上想像的翅膀！",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "47px", ""],
                            filter: [0.02, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
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
                        [
                            "eid26",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'block'
                        ],
                        [
                            "eid28",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '47px',
                            '47px'
                        ],
                        [
                            "eid25",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid32",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '501px',
                            '501px'
                        ],
                        [
                            "eid33",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '28px',
                            '28px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("a-02_edgeActions.js");
})("EDGE-11121547");
