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
                id: 'cloud-12',
                type: 'image',
                rect: ['-72px', '-830px','392px','1094px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloud-12.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'cloud-42',
                type: 'image',
                rect: ['836px', '-842px','286px','1110px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloud-42.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'cloud-32',
                type: 'image',
                rect: ['763px', '-639px','108px','834px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloud-32.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'cloud-22',
                type: 'image',
                rect: ['276px', '-647px','148px','850px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloud-22.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_cloud-32}": [
                ["motion", "location", '817px -222.5px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_cloud-12}": [
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["motion", "location", '124px -283.1796875px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(236,247,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '1102px']
            ],
            "${_cloud-42}": [
                ["motion", "location", '979px -287.5px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_cloud-22}": [
                ["motion", "location", '350px -222.5px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid379", tween: [ "motion", "${_cloud-42}", [[979, -287.5, 0, 0],[979, 17, 0, 0]]], position: 0, duration: 1822, easing: "easeOutElastic" },
                { id: "eid375", tween: [ "motion", "${_cloud-22}", [[350, -222.5, 0, 0],[350, -38, 0, 0]]], position: 0, duration: 1630, easing: "easeOutElastic" },
                { id: "eid377", tween: [ "motion", "${_cloud-32}", [[817, -222.5, 0, 0],[817, -66, 0, 0]]], position: 0, duration: 1413, easing: "easeOutElastic" },
                { id: "eid373", tween: [ "motion", "${_cloud-12}", [[124, -283.18, 0, 0],[124, 40, 0, 0]]], position: 0, duration: 2000, easing: "easeOutElastic" }            ]
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
