let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});
function logout(){
    firebase.auth().signOut()
    window.location.href = "login.html";
    document.querySelector('#proimg').src= "./assets/noimage.png"
}

const unsubscribe  = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user)
      // getuserInfo(user.uid)
      document.getElementById("loginli").style.display = "none"
      document.getElementById("signupli").style.display = "none"
      document.getElementById("logoutli").style.display = "block"
      getuserInfoRealtime(user.uid)
      if(user.uid=='TSS0ckznnpM2UkjxHIxp2Y8ivFc2'){
        allUserDetails()
      }
     
    
    } else {
      getuserInfoRealtime(null)
      console.log('signout success')
      document.getElementById('table').style.display = 'none'
      document.getElementById("logoutli").style.display = "none"
      document.getElementById("loginli").style.display = "block"
      document.getElementById("signupli").style.display = "block"
      // M.toast({html: "signout success",classes:"green"})
    }
  });