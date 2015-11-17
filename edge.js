/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'truckmove',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'cunstruction',
                type: 'image',
                rect: ['0', '0','2280px','1740px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'svg/cunstruction.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'hill2',
                type: 'image',
                rect: ['-3811px', '-512px','9000px','1570px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'svg/hill.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'text',
                type: 'image',
                rect: ['-1536px', '-161px','4450px','464px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'svg/text.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'cloud',
                type: 'rect',
                rect: ['629', '194','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'cloud',
                symbolName: 'cloud',
                autoPlay: {

                }
            },
            {
                id: 'truckmove',
                symbolName: 'truckmove',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_truckmove}": [
                ["style", "top", '530px'],
                ["style", "opacity", '0'],
                ["style", "left", '1262px']
            ],
            "${_hill2}": [
                ["style", "top", '-512px'],
                ["style", "height", '1570px'],
                ["style", "left", '-3811px'],
                ["style", "width", '9000px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(223,234,234,1.00)'],
                ["style", "min-width", '0px'],
                ["style", "overflow", 'scroll'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_text}": [
                ["style", "height", '464px'],
                ["style", "top", '-161px'],
                ["style", "left", '-1536px'],
                ["style", "width", '4450px']
            ],
            "${_cunstruction}": [
                ["style", "top", '-400px'],
                ["transform", "scaleY", '0.12299'],
                ["transform", "scaleX", '0.12299'],
                ["style", "height", '1603px'],
                ["style", "left", '-382px'],
                ["style", "width", '2101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid644", tween: [ "style", "${_truckmove}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1350 },
                { id: "eid873", tween: [ "style", "${_truckmove}", "opacity", '0', { fromValue: '1'}], position: 13000, duration: 2000 },
                { id: "eid541", tween: [ "transform", "${_cunstruction}", "scaleY", '0.12299', { fromValue: '0.12299'}], position: 0, duration: 0 },
                { id: "eid498", tween: [ "style", "${_Stage}", "height", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
                { id: "eid3095", tween: [ "style", "${_cunstruction}", "top", '-400px', { fromValue: '-400px'}], position: 0, duration: 0 },
                { id: "eid430", tween: [ "style", "${_Stage}", "width", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
                { id: "eid2522", tween: [ "style", "${_cunstruction}", "left", '-382px', { fromValue: '-382px'}], position: 0, duration: 0 },
                { id: "eid1893", tween: [ "style", "${_cunstruction}", "width", '2101px', { fromValue: '2101px'}], position: 0, duration: 0 },
                { id: "eid1890", tween: [ "style", "${_cunstruction}", "height", '1603px', { fromValue: '1603px'}], position: 0, duration: 0 },
                { id: "eid647", tween: [ "style", "${_truckmove}", "left", '50px', { fromValue: '1262px'}], position: 0, duration: 13000 },
                { id: "eid872", tween: [ "style", "${_truckmove}", "left", '-158px', { fromValue: '50px'}], position: 13000, duration: 2000 },
                { id: "eid540", tween: [ "transform", "${_cunstruction}", "scaleX", '0.12299', { fromValue: '0.12299'}], position: 0, duration: 0 },
                { id: "eid3106", tween: [ "style", "${_truckmove}", "top", '530px', { fromValue: '530px'}], position: 0, duration: 0 }            ]
        }
    }
},
"minitruck": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-6300px', '-4500px', '14000px', '10000px', 'auto', 'auto'],
                    id: 'minitruck-01',
                    transform: [[0, 0], [], [], ['0.1', '0.1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'svg/minitruck-01.svg', '0px', '0px']
                },
                {
                    rect: ['-6765px', '-4529px', '14000px', '10000px', 'auto', 'auto'],
                    id: 'tyre',
                    transform: [[0, 0], [], [], ['0.1', '0.1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'svg/tyre.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_minitruck-01}": [
                ["style", "left", '-6300px'],
                ["style", "top", '-4500px']
            ],
            "${_tyre}": [
                ["style", "left", '-6765px'],
                ["style", "top", '-4529px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1000px'],
                ["style", "width", '1400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"truckmove": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '700px', '500px', 'auto', 'auto'],
                    id: 'truckbody',
                    transform: [[], [], [], ['0.1', '0.1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'svg/truckbody.svg', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '700px', '500px', 'auto', 'auto'],
                    id: 'tyreL-01',
                    transform: [[], [], [], ['0.1', '0.1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'svg/tyreL-01.svg', '0px', '0px']
                },
                {
                    rect: ['100', '130', '700px', '500px', 'auto', 'auto'],
                    id: 'tyreR',
                    transform: [[], [], [], ['0.1', '0.1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'svg/tyreL-01.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '70px']
            ],
            "${_truckbody}": [
                ["style", "left", '-315px'],
                ["style", "top", '-225px']
            ],
            "${_tyreL-01}": [
                ["style", "-webkit-transform-origin", [44.29,78], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [44.29,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [44.29,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [44.29,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [44.29,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-351px'],
                ["style", "left", '-279px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_tyreR}": [
                ["style", "-webkit-transform-origin", [44.29,78], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [44.29,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [44.29,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [44.29,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [44.29,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-351px'],
                ["style", "left", '-250px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid110", tween: [ "transform", "${_tyreL-01}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 1500 },
                { id: "eid109", tween: [ "style", "${_tyreR}", "top", '-351px', { fromValue: '-351px'}], position: 0, duration: 0 },
                { id: "eid44", tween: [ "style", "${_tyreL-01}", "top", '-351px', { fromValue: '-351px'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_tyreL-01}", "left", '-279px', { fromValue: '-279px'}], position: 0, duration: 0 },
                { id: "eid111", tween: [ "transform", "${_tyreR}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 1500 },
                { id: "eid42", tween: [ "style", "${_tyreL-01}", "-webkit-transform-origin", [44.29,78], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.29,78]}], position: 0, duration: 0 },
                { id: "eid3107", tween: [ "style", "${_tyreL-01}", "-moz-transform-origin", [44.29,78], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.29,78]}], position: 0, duration: 0 },
                { id: "eid3108", tween: [ "style", "${_tyreL-01}", "-ms-transform-origin", [44.29,78], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.29,78]}], position: 0, duration: 0 },
                { id: "eid3109", tween: [ "style", "${_tyreL-01}", "msTransformOrigin", [44.29,78], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.29,78]}], position: 0, duration: 0 },
                { id: "eid3110", tween: [ "style", "${_tyreL-01}", "-o-transform-origin", [44.29,78], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.29,78]}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_truckbody}", "left", '-315px', { fromValue: '-315px'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_truckbody}", "top", '-225px', { fromValue: '-225px'}], position: 0, duration: 0 },
                { id: "eid106", tween: [ "style", "${_tyreR}", "left", '-250px', { fromValue: '-250px'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_tyreR}", "-webkit-transform-origin", [44.29,78], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.29,78]}], position: 0, duration: 0 },
                { id: "eid3111", tween: [ "style", "${_tyreR}", "-moz-transform-origin", [44.29,78], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.29,78]}], position: 0, duration: 0 },
                { id: "eid3112", tween: [ "style", "${_tyreR}", "-ms-transform-origin", [44.29,78], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.29,78]}], position: 0, duration: 0 },
                { id: "eid3113", tween: [ "style", "${_tyreR}", "msTransformOrigin", [44.29,78], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.29,78]}], position: 0, duration: 0 },
                { id: "eid3114", tween: [ "style", "${_tyreR}", "-o-transform-origin", [44.29,78], { valueTemplate: '@@0@@% @@1@@%', fromValue: [44.29,78]}], position: 0, duration: 0 }            ]
        }
    }
},
"cloud": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-351px', '-225px', '780px', '500px', 'auto', 'auto'],
                    id: '_1CLOUD',
                    transform: [[], [], [], ['0.1', '0.1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'svg/1CLOUD.svg', '0px', '0px']
                },
                {
                    rect: ['0', '0', '780px', '500px', 'auto', 'auto'],
                    id: 'clowd2',
                    transform: [[], [], [], ['0.1', '0.1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'svg/clowd2.svg', '0px', '0px']
                },
                {
                    rect: ['0', '0', '780px', '500px', 'auto', 'auto'],
                    id: 'clowd3',
                    transform: [[], [], [], ['0.1', '0.1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'svg/clowd3.svg', '0px', '0px']
                },
                {
                    rect: ['0', '0', '780px', '500px', 'auto', 'auto'],
                    id: 'clowd32',
                    transform: [[], [], [], ['0.1', '0.1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'svg/clowd3.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_clowd3}": [
                ["style", "top", '-154px'],
                ["style", "height", '280px'],
                ["style", "opacity", '0'],
                ["style", "left", '-491px'],
                ["style", "width", '437px']
            ],
            "${_clowd2}": [
                ["style", "top", '-110px'],
                ["style", "height", '280px'],
                ["style", "opacity", '0'],
                ["style", "left", '-341px'],
                ["style", "width", '437px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '78px']
            ],
            "${_clowd32}": [
                ["style", "top", '-90px'],
                ["style", "height", '280px'],
                ["style", "opacity", '0.008130081300813'],
                ["style", "left", '2px'],
                ["style", "width", '437px']
            ],
            "${__1CLOUD}": [
                ["style", "top", '-222px'],
                ["style", "height", '280px'],
                ["style", "opacity", '0'],
                ["style", "left", '-149px'],
                ["style", "width", '437px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid2775", tween: [ "style", "${_clowd2}", "top", '-110px', { fromValue: '-110px'}], position: 0, duration: 0 },
                { id: "eid2638", tween: [ "style", "${_clowd2}", "height", '280px', { fromValue: '280px'}], position: 0, duration: 0 },
                { id: "eid2777", tween: [ "style", "${__1CLOUD}", "top", '-222px', { fromValue: '-222px'}], position: 0, duration: 0 },
                { id: "eid2773", tween: [ "style", "${_clowd3}", "top", '-154px', { fromValue: '-154px'}], position: 0, duration: 0 },
                { id: "eid2637", tween: [ "style", "${_clowd32}", "width", '437px', { fromValue: '437px'}], position: 0, duration: 0 },
                { id: "eid2640", tween: [ "style", "${_clowd2}", "width", '437px', { fromValue: '437px'}], position: 0, duration: 0 },
                { id: "eid2808", tween: [ "style", "${_clowd2}", "left", '63px', { fromValue: '-341px'}], position: 0, duration: 15000 },
                { id: "eid2810", tween: [ "style", "${__1CLOUD}", "left", '-23px', { fromValue: '-149px'}], position: 0, duration: 15000 },
                { id: "eid2981", tween: [ "style", "${_clowd2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid2982", tween: [ "style", "${_clowd2}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
                { id: "eid2983", tween: [ "style", "${_clowd2}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 1000 },
                { id: "eid2635", tween: [ "style", "${_clowd32}", "height", '280px', { fromValue: '280px'}], position: 0, duration: 0 },
                { id: "eid2809", tween: [ "style", "${_clowd32}", "left", '212px', { fromValue: '2px'}], position: 0, duration: 15000 },
                { id: "eid2807", tween: [ "style", "${_clowd3}", "left", '-251px', { fromValue: '-491px'}], position: 0, duration: 15000 },
                { id: "eid2860", tween: [ "style", "${_clowd3}", "opacity", '0.54471544715447', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid2984", tween: [ "style", "${_clowd3}", "opacity", '0.55284552845528', { fromValue: '0.5447149872779846'}], position: 1000, duration: 13000 },
                { id: "eid2985", tween: [ "style", "${_clowd3}", "opacity", '0', { fromValue: '0.55284552845528'}], position: 14000, duration: 1000 },
                { id: "eid2778", tween: [ "style", "${_clowd32}", "top", '-90px', { fromValue: '-90px'}], position: 0, duration: 0 },
                { id: "eid2977", tween: [ "style", "${__1CLOUD}", "opacity", '0.67479678915768', { fromValue: '0'}], position: 0, duration: 17 },
                { id: "eid2978", tween: [ "style", "${__1CLOUD}", "opacity", '0.6260162601626', { fromValue: '0.674796998500824'}], position: 17, duration: 13983 },
                { id: "eid2979", tween: [ "style", "${__1CLOUD}", "opacity", '0', { fromValue: '0.6260162601626'}], position: 14000, duration: 1000 },
                { id: "eid2949", tween: [ "style", "${_clowd32}", "opacity", '0.78861788617886', { fromValue: '0.008130081300813'}], position: 0, duration: 1000 },
                { id: "eid2975", tween: [ "style", "${_clowd32}", "opacity", '1', { fromValue: '0.78861788617886'}], position: 1000, duration: 500 },
                { id: "eid2976", tween: [ "style", "${_clowd32}", "opacity", '0.73414634295353', { fromValue: '1'}], position: 1500, duration: 12000 },
                { id: "eid2950", tween: [ "style", "${_clowd32}", "opacity", '0', { fromValue: '0.73414634295353'}], position: 13500, duration: 1500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-8640982");
