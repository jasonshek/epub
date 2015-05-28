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
                            id: 'Text',
                            display: 'block',
                            type: 'text',
                            rect: ['83px', '248px', '575px', '853px', 'auto', 'auto'],
                            text: "　　對於學齡前的孩子來說，聽故事、說故事和讀故事，都是他們樂此不疲的有趣事情，也是他們成長過程中一個非常重要的經驗。在媽媽、老師那溫馨親切的笑語裏，孩子一邊看圖畫，一邊聽故事，他已初步嘗到了「讀書」的樂趣。接着，再在媽媽、老師的教導下，自己學會說故事、讀故事，那更是給了孩子巨大的成功感。<br><br>　　本叢書精選家喻戶曉的著名童話，配上富有童趣的彩色插畫動畫，透過簡單易用的應用程式重新演繹，讓孩子看圖畫，說故事，訓練孩子說故事、讀故事的能力。此外，本應用程式故事後附的「字詞表」也有助於孩子學習語文－詞語由故事內的詞彙擴展到故事外，讓孩子重溫故事內的字詞及學習新字詞，豐富了孩子的詞彙量；而「字詞遊樂園」則透過互動字詞小練習，增加了閱讀的趣味性。",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "47px", ""],
                            filter: [0.02, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'a1_heading',
                            type: 'image',
                            rect: ['110px', '165px', '500px', '83px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"a1_heading.png",'0px','0px']
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
                            "eid32",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '83px',
                            '83px'
                        ],
                        [
                            "eid41",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '575px',
                            '575px'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'block'
                        ],
                        [
                            "eid26",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '47px',
                            '47px'
                        ],
                        [
                            "eid33",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid22",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '853px',
                            '853px'
                        ],
                        [
                            "eid40",
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("a-01_edgeActions.js");
})("EDGE-11121547");
