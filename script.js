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
    "You should have your own late night talk show.",
    "Everyone could learn a thing or two from you.",
    "But seriously though - everyone wants to date you.",
    "You're like a magnet for good things.",
    "Even a double rainbow has nothing on you.",
    "Being cool isn't a competition, but you're winning.",
    "Your local diner probably has a meal named after you.",
    "You're the good kind of impulsive.",
    "You make livin' look easy.",
    "Wow, you're glowing.",
    "You're everyone's favorite.",
    "You're the best version of you.",
    "You're more fun than those cookies with the icing and sprinkles.",
    "Kindergarteners wanna be you when they grow up.",
    "You're so good at taking care of yourself.",
    "You're somehow both strong and vulnerable.",
    "An autographed photo of you is probably worth a million dollars.",
    "Face it: You're a role model.",
    "You know how to keep your cool.",
    "Everyone feels good when you are around.",
    "Other people's grandmas wanna bake cookies for you.",
    "Talent scouts rushed to the hospital when you were born.",
    "You have so much to offer.",
    "You leave a little sparkle wherever you go.",
    "You sign off-key but with great spirit.",
]


// Default
var com = Math.floor(Math.random() * compliment.length)
$(".header").text(compliment[com]);

//Working Meh button
$(document).ready(function() {
    $("#mehBtn").on("click", function(){
            var com = Math.floor(Math.random() * compliment.length)
        $(".header").text(compliment[com]);

    });     
});

//Working Loved it button
$(document).ready(function() {
    $("#loveditBtn").on("click", function(){
        var tuitText = $('data-text');
        $(tuitText).text(".header");

        });     
   });



