// how to use gsap animations

  // The way we navigate to css files from html 
  // the same way we are going to refer to the elements 
  // but this time we will be going to do animations


gsap.to('#box',{
    // here we are gonna provide the 
    // key value pair way to animate
  x:1000, //"this will move the items at #box to 1000 pixels horizontally"
  duration:2 ,// this will be the time take to complete the animation
  delay:1 // this is the delay of time to start the animation
   
})

 // Two ways to write the gsap 
 //1) to 
 //2) from 

 gsap.to // it is used when we want to move animation from 
         // initial to final 

 gsap.from // it will move the animation from final to inital 
           // animation , it will do the opposite of "gsap.to"




           //For example 

           gsap.from("h1",{
            opacity:0,     // first the object opacity will be zero
            duraction:4,   // 
            delay:4,
            stagger:1, // this is start the animation by picking elements one by one
            repeat: 3 ,// the animation will going to repeat . 
            yoyo:true, // it will do the process vice sa versa 

           })

           // STAGGER 
           // for example , if have 4 h1 tags and i appliend the animation on 
           // h1 , so all the h1 elemets will start running , so to run the 
           // animation one by one , we have to use stagger 

           // YOYO
          // for example , a box is running on x axis , and we want the box
          // to come back again , so do that , we have to use yoyo,
          // the the process will run but in reverse order , 
            

           

