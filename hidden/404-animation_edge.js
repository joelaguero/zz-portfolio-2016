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
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'cloud_2',
                type: 'image',
                rect: ['1134px', '-538px','215px','648px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloud%202.png",'0px','0px'],
                transform: [[],[],[],['0.66','0.66']]
            },
            {
                id: 'cloud_1',
                type: 'image',
                rect: ['29px', '-735px','392px','872px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloud%201.png",'0px','0px'],
                transform: [[],[],[],['0.66','0.66']]
            },
            {
                id: '_404_zeppelin2',
                type: 'image',
                rect: ['962px', '-299px','149px','297px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"404%20zeppelin2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__404_zeppelin2}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["motion", "location", '1036.5px -150.75px']
            ],
            "${_cloud_2}": [
                ["transform", "scaleX", '0.66'],
                ["motion", "location", '1241.5px -214.01203125px'],
                ["transform", "scaleY", '0.66'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(236,247,255,0.00)'],
                ["style", "width", '1440px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cloud_1}": [
                ["motion", "location", '225px -299px'],
                ["transform", "scaleY", '0.66'],
                ["transform", "scaleX", '0.66']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2162,
            autoPlay: true,
            timeline: [
                { id: "eid6", tween: [ "motion", "${_cloud_2}", [[1241.5, -214.01, 0, 0],[1241.5, 86.16, 0, 0]]], position: 0, duration: 1750, easing: "easeOutElastic" },
                { id: "eid98", tween: [ "style", "${__404_zeppelin2}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid333", tween: [ "style", "${__404_zeppelin2}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid334", tween: [ "style", "${__404_zeppelin2}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid335", tween: [ "style", "${__404_zeppelin2}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid336", tween: [ "style", "${__404_zeppelin2}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid337", tween: [ "style", "${__404_zeppelin2}", "transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid100", tween: [ "style", "${__404_zeppelin2}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid338", tween: [ "style", "${__404_zeppelin2}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid339", tween: [ "style", "${__404_zeppelin2}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid340", tween: [ "style", "${__404_zeppelin2}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid341", tween: [ "style", "${__404_zeppelin2}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid342", tween: [ "style", "${__404_zeppelin2}", "transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "style", "${_cloud_2}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid343", tween: [ "style", "${_cloud_2}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid344", tween: [ "style", "${_cloud_2}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid345", tween: [ "style", "${_cloud_2}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid346", tween: [ "style", "${_cloud_2}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid347", tween: [ "style", "${_cloud_2}", "transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid101", tween: [ "motion", "${__404_zeppelin2}", [[1036.5, -150.75, 0, 0],[1036.5, 77.73, 0, 0]]], position: 0, duration: 2000, easing: "easeOutElastic" },
                { id: "eid2", tween: [ "motion", "${_cloud_1}", [[225, -299, 0, 0],[225, -34.29, 0, 0]]], position: 0, duration: 2162, easing: "easeOutElastic" }            ]
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
})(jQuery, AdobeEdge, "EDGE-540193219");
