var slideBox = document.getElementsByClassName("slideInnerContainer")[0];

var upstreamers = document.querySelectorAll(".upstream");

//add click handler for upstream button
for(var i=0; i<upstreamers.length; i++){
    upstreamers[i].addEventListener('click',function(item){
        slideBox.classList.toggle("showUpstream");

    });
}

//add click handler for downstream button
var downstreamers = document.querySelectorAll(".downstream");
for(var i=0; i<downstreamers.length; i++){
    downstreamers[i].addEventListener('click',function(item){

        slideBox.classList.toggle("showDownstream");
    });
}

//add the click handler to return to the main smartfigure
var upstr = document.getElementById("backButtonUpstream");
upstr.addEventListener('click', function(){ slideBox.classList.toggle("showUpstream"); });

var downstr = document.getElementById("backButtonDownstream");
downstr.addEventListener('click', function(){ slideBox.classList.toggle("showDownstream"); });

//add click handlers to add more filter rows
var addFilterUp = document.querySelector(".addFilterUp");
var addFilterDown = document.querySelector(".addFilterDown");


//when addFilter button is clicked, add a new filter row
addFilterUp.addEventListener("click", function(item){
    document.querySelector(".slideItemUpstream .filters").appendChild(this.parentElement.cloneNode(true));

});
addFilterDown.addEventListener("click", function(item){
    document.querySelector(".slideItemDownstream .filters").appendChild(this.parentElement.cloneNode(true));

});

//click handler for reveal button
var revealers = document.getElementsByClassName("reveal");

for(var i=0; i<revealers.length;i++){
    revealers[i].addEventListener("click", function(){
        document.getElementById(this.getAttribute("data-revealitem")).classList.toggle("show");
    });
}

//click handler for back navigation
document.querySelector("#slideItemDownstream .backNavigation").addEventListener("click", function(){
    slideBox.classList.toggle("showDownstream");
});

//click handler for back navigation
document.querySelector("#slideItemUpstream .backNavigation").addEventListener("click", function(){
    slideBox.classList.toggle("showUpstream");
});


//click handler for element buttons dropdown
var elements = document.querySelectorAll(".btn-info-group .element");
for(var i=0; i<elements.length;i++){
    elements[i].addEventListener("click",function(){
        this.nextElementSibling.classList.toggle("open");
        this.firstElementChild.classList.toggle("fa-chevron-right");
        this.firstElementChild.classList.toggle("fa-chevron-down");
    });
}

//modify the colour of previous sibling in Explore icons
var upstreamIcons = document.querySelectorAll(".interventionNav .upstream");
for(var i=0; i<upstreamIcons.length;i++){
    upstreamIcons[i].addEventListener("mouseover",function(){
        this.nextElementSibling.nextElementSibling.classList.toggle("inverseColor");
    });
    upstreamIcons[i].addEventListener("mouseout",function(){
        this.nextElementSibling.nextElementSibling.classList.toggle("inverseColor");
    });
}    

var downstreamIcons = document.querySelectorAll(".assayNav .downstream");
for(var i=0; i<downstreamIcons.length;i++){
    downstreamIcons[i].addEventListener("mouseover",function(){
        this.previousElementSibling.previousElementSibling.classList.toggle("inverseColor");
    });
    downstreamIcons[i].addEventListener("mouseout",function(){
        this.previousElementSibling.previousElementSibling.classList.toggle("inverseColor");
    });
} 

// open and close the related data
var relatedOpenClose = document.querySelector(".openCloseButton");

relatedOpenClose.addEventListener("click",function(){
    this.firstElementChild.classList.toggle("fa-minus");
    this.firstElementChild.classList.toggle("fa-plus");
    document.querySelector(".relatedDataCarouselOuterContainer").classList.toggle("hide");
    document.querySelector(".furtherInfoPanelList").classList.toggle("hide");
});