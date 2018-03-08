// get the slide container which will slide back and forth
var slider = document.querySelector(".relatedDataCarouselInnerContainer ul");

//get the list of individual slides/panels
var carouselItems = document.getElementsByClassName("relatedDataCarouselItem");
var carouselItemCount = carouselItems.length;
var carouselItemData = [];

//get the Panel List container
var carouselListContainer = document.getElementsByClassName("furtherInfoPanelList")[0];

//get the forward and backward triggers
var carouselAdvanceTrigger = document.querySelector(".relatedData .navigateRight");
carouselAdvanceTrigger.addEventListener("click", function(event){ advanceCarousel(1); event.preventDefault(); });
var carouselReverseTrigger = document.querySelector(".relatedData .navigateLeft");
carouselReverseTrigger.addEventListener("click", function(event){ advanceCarousel(-1); event.preventDefault(); });

//this is the offset that will be used for the slider
var smartOffset = 0;

//data for the currently active slide
var selectedSlideData = {};

//if there are slides to show, do the prep work of setting up the carousel
if(carouselItemCount > 0) {

    var slide, newListItem, newListIcon;
    var slideList = document.createElement("UL");
    slideList.className="relatedDataSlideList";

    //loop through every slide
    for(var x=0; x < carouselItemCount; x++){
        // current slide
        slide = carouselItems[x];
        slide.id = "smartSlide_" + (x+1).toString();
        slide.dataset.left = 220 * x;
        carouselItemData.push({
            id: slide.id,
            position: (x+1),
            leftOffset: 220 * x,
            positionFromEnd: carouselItemCount - (x)

        });

        //create item for list
        newListItem = document.createElement("LI");
        newListItem.dataset.slideref = "smartSlide_" + (x+1).toString();
        newListItem.addEventListener("click", function(){jumpToSlide(this, slideList);});

        newListIcon = document.createElement("I");
        newListIcon.classList.add("fas");
        newListIcon.classList.add("fa-chart-bar");
        newListItem.appendChild(newListIcon);

        // add new item to the list
        slideList.appendChild(newListItem);

    }

    carouselListContainer.appendChild(slideList);

    //set first slide as active by default;
    selectedSlideData = carouselItemData[0];
    addActiveStyling(carouselItemData[0].id);

}


//advance slide to chosen item
function jumpToSlide(selection, slideList){ 

    //data for the selected slide
    for(var n=0; n<carouselItemCount; n++){
        if(carouselItemData[n].id === selection.dataset.slideref) selectedSlideData = carouselItemData[n];
    }

    //clear active status from slides and icons
    clearCarouselStyling();


    //set the offset based on number of slides and current position
    if(carouselItemCount < 4){
        smartOffset = 0;
    } else if(selectedSlideData.positionFromEnd < 4){
        smartOffset = ((carouselItemCount - 3) * 220);
    }
    else {
        smartOffset = selectedSlideData.leftOffset;
    }

    // only offset the slideshow if there are more than 3 slides
    if(carouselItemCount >= 3) slider.style.transform = "translateX(-" + smartOffset + "px)";
    

    //make the items visually active
    addActiveStyling(selection.dataset.slideref);


}

//move the carousel left or right with the chevrons
function advanceCarousel(direction){

    //various conditions can affect the behaviour
    if(direction === 1){ // i.e. moving forwards
        if(carouselItemCount < 4){
            smartOffset = 0;
        }else if(selectedSlideData.positionFromEnd < 7){
            smartOffset = ((carouselItemCount - 3) * 220);     
            //set the new selected slide
            for(var n=0; n<carouselItemCount; n++){
                if(carouselItemData[n].position === (carouselItemCount - 2)) selectedSlideData = carouselItemData[n];
            }      
        }else{ 
            //the slide in this position will become the first displayed slide
            var interval = (Math.floor(parseFloat(selectedSlideData.position) / 3) * 3)+4;
            //set the new selected slide
            for(var n=0; n<carouselItemCount; n++){
                if(carouselItemData[n].position === interval) selectedSlideData = carouselItemData[n];
            }

            smartOffset = selectedSlideData.leftOffset;
        }

        slider.style.transform = "translateX(-" + smartOffset + "px)";
        addActiveStyling(selectedSlideData.id);
    }

    if(direction === -1){ // i.e. moving backwards
        if(carouselItemCount < 4){
            smartOffset = 0;
            selectedSlideData = carouselItemData[0];
        }else if(selectedSlideData.position < 6){
            smartOffset = 0;     
            //set the new selected slide
            selectedSlideData = carouselItemData[0];      
        }else{ 
            //the slide in this position will become the first displayed slide
            var interval = (Math.floor(parseFloat(selectedSlideData.position) / 3) * 3)-3;
            //set the new selected slide
            for(var n=0; n<carouselItemCount; n++){
                if(carouselItemData[n].position === interval) selectedSlideData = carouselItemData[n];
            }

            smartOffset = selectedSlideData.leftOffset;
        }

        slider.style.transform = "translateX(-" + smartOffset + "px)";
        addActiveStyling(selectedSlideData.id);
    }

}

// add the active styles to the slide and list item below the carousel
function addActiveStyling(id){
    clearCarouselStyling();
    document.getElementById(id).classList.add("active");
    for(var y=0; y < carouselItemCount; y++){ if(slideList.childNodes[y].dataset.slideref==id) slideList.childNodes[y].classList.add("active"); }

}

function clearCarouselStyling(){
    for(var y=0; y < carouselItemCount; y++){ slideList.childNodes[y].classList.remove("active"); }
    for(var z=0; z < carouselItemCount; z++){ carouselItems[z].classList.remove("active"); }

}