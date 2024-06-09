let t = gsap.timeline()  // 

  // timeline   it make the components synchronous
  // it 

t.to("h1",{
    y:-10,
    duration:4,
    delay:0.5  
})

t.from("h3",{
    x:4,
    duration:4
})

// Here in the above code , first h1 tag animation will execute and 
// then the h3 tag animation will run 

// so it is going Synchronous

// "Lets moves towards ScrollTrigger"

t.to("",{
    x:500,
    y:30,
    scrollTrigger:{
        trigger:'#item',/// when this #item(bole tho kya , id) then 
                         // animation si triggred
        markers:''
    }
})
