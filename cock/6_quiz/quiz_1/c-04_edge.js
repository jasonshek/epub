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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['6px', '266px', '708px', '952px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'ex',
                            type: 'image',
                            rect: ['77px', '561px', '584px', '122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'psd/ex.png','0px','0px']
                        },
                        {
                            id: 'c01-title',
                            type: 'image',
                            rect: ['13px', '116px', '694px', '189px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'psd/c01-title.png','0px','0px']
                        },
                        {
                            id: 'bg_a1',
                            type: 'image',
                            rect: ['0px', '0', '720px', '1280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg_a1.png",'0px','0px']
                        },
                        {
                            id: 'bu_homeCopy',
                            type: 'image',
                            rect: ['217px', '1191px', '286px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_home.png",'0px','0px']
                        },
                        {
                            id: 'bu_lCopy',
                            type: 'image',
                            rect: ['28px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_l.png",'0px','0px']
                        },
                        {
                            id: 'bu_rCopy',
                            type: 'image',
                            rect: ['583px', '1185px', '110px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bu_r.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            tag: 'h1',
                            rect: ['226px', '312px', '286px', '50px', 'auto', 'auto'],
                            text: "「口」字朋友多",
                            align: "center",
                            userClass: "Text_id",
                            font: ['Arial, Helvetica, sans-serif', [33, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['87px', '371px', '565px', '177px', 'auto', 'auto'],
                            text: "小朋友，請你找找看，這個故事裏有好多個字是由「口」字加上別的字組成的呢！請你仿照例子填一填，並讀一讀這些字吧！（請把正確答案拖放到橫線上方）",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [29, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "41px", ""]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['256px', '683px', '207px', '50px', 'auto', 'auto'],
                            text: "問題4",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(255,0,0,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '720px', '1280px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 13248,
                    autoPlay: false,
                    data: [
                        [
                            "eid521",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid510",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid509",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '720px',
                            '720px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("c-04_edgeActions.js");
})("EDGE-20141121-P1");
