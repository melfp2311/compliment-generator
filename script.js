
var backgroundColors = [
    "#ff8a80 ",
    "#ff5252",
    "#ff80ab",
    "#ff4081",
    "#f50057 ",
    "#c51162",
    "#ea80fc",
    "#b388ff",
    "#7c4dff ",
    "#8c9eff",
    "#536dfe",
    "#2979ff",
    "#00bcd4 ",
    "#80d8ff",
    "#00e5ff",
    "#64ffda",
    "#1de9b6 ",
    "#4caf50",
    "#00e676",
    "#aeea00",
    "#ffea00 ",
    "#ffd740",
    "#ffc400",
    "#ffab40",
    "#ff9100",
    "#ff9e80 ",
    "#ff6e40",
    "#7986cb",
    "#ec407a",
    "#e57373 ",
    "#0097a7",
    "#8bc34a",
    "#d4e157",
    "#ef9a9a",
    "#ce93d8",
    "#f06292",
    "#1e88e5",
    "#283593 ",
    "#e65100",
]

var compliment = [
    "Cockroaches, mice and other pests avoid your place out of respect.",
    "You could be a professional professional.",
    "Everyone decided that you’re the best.",
    "Successful people wanna be you.",
    "You couldn't be cooler if you tried.",
    "Let's be honest: You most likely have an overseas fans club.",
    "They should hang your photo at every restaurant you've ever eaten at.",
    "You'd make being stuck in traffic fun.",
    "You're a dream come true.",
    "You're better than unicorns and sparkles combined.",
    "You are just so fun.",
    "There's probably a three-year waiting list to be your friend.",
    "Even baby animals think you're cute.",
    "You're big news.",
    "Your pet loves you so much to even run away.",
    "You are the best at making cereal.", 
    "I would definitely trust you my cats.",
    "You are freakishly Good at thumb wars.",
    "Kids think you are a cool old person.",
    "You are predictable in your unpredictability.",
    "You leave a little sparkle wherever you go.",
    "You sign off-key but with great spirit.",
]


// Default
var color = Math.floor(Math.random() * backgroundColors.length)
$("body").css("background-color", backgroundColors[color]);

var com = Math.floor(Math.random() * compliment.length)
$(".header").text(compliment[com]);


//Working Meh button
$(document).ready(function() {

 $("#mehBtn").on("click", function(){
    var color = Math.floor(Math.random() * backgroundColors.length)
    $("body").css("background-color", backgroundColors[color]);
    
    var com = Math.floor(Math.random() * compliment.length)
    $(".header").text(compliment[com]);

    var tuitText = document.getElementById('data-text').getAttribute('value');
    console.log(tuitText);

 });     
});

//Working Loved it button
$(document).ready(function() {

$("#loveditBtn").on("click", function(){
    var tuitText = $('data-text');
    $(tuitText).text(".header");

    });     
   });



