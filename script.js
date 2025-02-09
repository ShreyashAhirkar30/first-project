 var crsr = document.querySelector("#cursor")
 var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x- 200 +"px"
    blur.style.top = dets.y- 200 +"px"

})

  var h4all= document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border= "1px solid #fff",
        crsr.style.backgroundColor ="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border= "0px solid #rgb(6, 107, 201)",
        crsr.style.backgroundColor ="#rgb(6, 107, 201)"
    })
})


gsap.to("#nav",{
    backgroundColor : "#000",
    height:"130px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       start:"top -10%",
       end:"top -11%",
       scrub:1

    }
    
})
gsap.to("#main",{
    backgroundColor :"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -100%",
        scrub:2


        

    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1


    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }           

})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }           

})