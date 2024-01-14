var rect=document.querySelector("#center");
document.querySelector("#center").addEventListener("mousemove",function(details){
    let rectLoc=document.querySelector("#center").getBoundingClientRect();
    // console.log(rectLoc);
    //231.6671 left ko + 400 half width  so rectangleko centre in x axis is  631.6671
    let xofRect=details.clientX-rectLoc.left;
    if(xofRect<rectLoc.width/2){
        var redcolor=gsap.utils.mapRange(0,rectLoc.width/2,255,0,xofRect);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power1,
        })

    }
    else{
        var greencolor=gsap.utils.mapRange(rectLoc.width/2,rectLoc.width,0,255,xofRect);
        gsap.to(rect,{
            backgroundColor:`rgb(0,${greencolor},0)`,
            ease:Power4,
        })
    }
})
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor : "white",
    })
})


