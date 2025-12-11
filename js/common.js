
//aos 초기화
AOS.init({
  duration: 2000,  //mọi hiệu ứng đều chậm 2s
  once: false, //chọn true nếu muốn chỉ hiệu ứng 1 lần khi f5 trang, lúc sroll lên xuống thì ko lặp lại
  disable: window.innerWidth < 768, //chỉ hiện ở window, ko hiện trên đt
});




//depth2
/* để chuột lên thì hiện ra menu2 và boder bottom, bỏ chuột ra thì mất */
$(".gnb > li").mouseenter(function () {
  $(this).find(".depth2").stop().slideDown(); /* 2차 menu */
});

$(".gnb > li").mouseleave(function () {
  $(this).find(".depth2").stop().slideUp();
});


//nhấn nút ham thì hiện màn hình và các menu
$(".ham").click(function () {
  $(".mgnb_wrap").addClass("active"); // Thêm class để xuất hiện từ bên phải
  $(".search").fadeOut(); // Ẩn phần search
  $(".util").fadeOut(); // Ẩn phần util
  $(".btn_search").removeClass("active");

});
$(".mgnb_close").click(function () {
  $(".mgnb_wrap").removeClass("active"); // Xóa class để ẩn
  $(".util").fadeIn(); // hiện lại util
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").stop().slideUp();
});







// Khi trang vừa load → chỉ hiện tuần đầu tiên
$(".weeks_info li").hide().eq(0).show();
$(".weeks_btn button").eq(0).addClass("active"); // button đầu active luôn

// Xử lý khi click button
$(".weeks_btn button").click(function () {

  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  let number = $(this).index();
  $(".weeks_info li").eq(number).fadeIn().siblings().hide();
});







document.querySelectorAll(".menu-title").forEach(title => {
  title.addEventListener("click", () => {
    const target = document.getElementById(title.dataset.target);

    // Đóng tất cả submenu trước
    document.querySelectorAll(".submenu").forEach(sub => {
      if (sub !== target) sub.style.display = "none";
    });

    // Toggle menu đúng 1 lần
    target.style.display = (target.style.display === "block") ? "none" : "block";

    // Khi chuyển tab menu -> đóng hết nội dung con
    document.querySelectorAll(".content").forEach(c => c.style.display = "none");
  });
});

document.querySelectorAll(".submenu-title").forEach(item => {
  item.addEventListener("click", () => {
    const content = document.getElementById(item.dataset.target);

    // Đóng các content khác trong cùng submenu
    const parentSubmenu = item.closest(".submenu");
    parentSubmenu.querySelectorAll(".content").forEach(c => {
      if (c !== content) c.style.display = "none";
    });

    // Toggle nội dung
    content.style.display = (content.style.display === "block") ? "none" : "block";
  });
});


const prd_list = new Swiper('.prd_list', {
  centeredSlides: true,
  loop: true,
  speed: 2000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  //add more 반응형 slide option 
  breakpoints: {
    0: {
      slidesPerView: 4,
    },
    768: { //768px 이상에서 
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});



const age_list = new Swiper('.age_list', {
  loop: true,
  speed: 2000,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  spaceBetween: 20, // chỉnh số px theo ý bạn

  // căn giữa slide
  centeredSlides: true,

  //add more 반응형 slide option 
  breakpoints: {
    0: {
      slidesPerView: 2.5,
    },
    768: { //768px 이상에서 
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4.5,
    },
  },
});
