// let btn2 = document.querySelectorAll(".btn2")
// let product1 = document.getElementById("product1")

// let arr = [
//     { 
//         name: "Shoulder  bags",
        
//         img: "./svg/kisspng-bag-laptop-backpack-knomo-beauchamp-5b0bf6a37cde46 7.svg"
//     },
//     {
//         name: "Hand bag",
        
//         img: "./svg/kisspng-handbag-baggage-hand-luggage-leather-women-bag-5acd4069b62017 1.svg"
//     },
//     {
//         name: "Backpack",
        
//         img: "./svg/kisspng-handbag-satchel-leather-coach-inc-tapestry-5adb94da175541 2.svg"
//     },
//     {
//         name: "bmw5",
        
//         img: "https://ag-spots-2021.o.auroraobjects.eu/2021/04/08/bmw-m3-f80-sedan-2016-c315408042021210817_7.jpg"
//     },
//     {
//         name: "bmw5",
        
//         img: "https://ag-spots-2020.o.auroraobjects.eu/2020/01/11/bmw-m3-f80-sedan-2017-c346111012020185353_1.jpg"
//     },
//     {
//         name: "bmw5",
        
//         img: "https://bmw.obves.kiev.ua/wp-content/uploads/2019/05/BMW_M3_F80_57.jpg"
//     },
//     {
//         name: "bmw7",
        
//         img: "https://i1.wp.com/www.mishimoto.com/engineering/wp-content/uploads/2020/02/NLT_6997-Edit.jpg?resize=1038%2C576&ssl=1"
//     },
//     {
//         name: "bmw7",
        
//         img: "https://www.tuningblog.eu/wp-content/uploads/2018/02/Airride-BMW-M3-F80-Limousine-Tuning-7.jpg"
//     },
//     {
//         name: "bmw7",
        
//         img: "https://auto.vercity.ru/img/magazine/old/91060.jpg",
//     }
// ]


//     arr.slice(0,3).forEach (e =>{
//         product1.innerHTML += `<div>${e.name} <img width='250' heigth='150px'src="${e.img}"></div>`
//     });

//     [...btn2].forEach(index => {
//         console.log('ghdsgghsg')
//         index.addEventListener("click", () =>{
//             if (index.innerText == 1){
//                 product1.innerHTML = " "
//                 arr.slice(0,3).forEach (e =>{
//                     product1.innerHTML += `<div>${e.name} <img width='250' heigth='150px'src="${e.img}"></div>`
//                     console.log(e)
//                 })
//             }
//             else if (index.innerText == 2){
//                 product1.innerHTML = " "
//                 arr.slice(3,6).forEach (e =>{
//                     product1.innerHTML += `<div>${e.name} <img width='250' heigth='150px'src="${e.img}"></div>`
//                     console.log(e)
//                 })
//             }
//             else if (index.innerText == 3){
//                 product1.innerHTML = " "
//                 arr.slice(6,9).forEach (e =>{
//                     product1.innerHTML += `<div>${e.name} <img width='250' heigth='150px'src="${e.img}"></div>`
//                 })
//             }
            
//         })
//     });




// $(document).on("click", ".carousel-button-right", function () {
//     var carusel = $(this).parents(".carousel");
//     right_carusel(carusel);
//     return false;
//   });
//   $(document).on("click", ".carousel-button-left", function () {
//     var carusel = $(this).parents(".carousel");
//     left_carusel(carusel);
//     return false;
//   });
//   function left_carusel(carusel) {
//     var block_width = $(carusel).find(".carousel-block").outerWidth();
//     $(carusel)
//       .find(".carousel-items .carousel-block")
//       .eq(-1)
//       .clone()
//       .prependTo($(carusel).find(".carousel-items"));
//     $(carusel)
//       .find(".carousel-items")
//       .css({ left: "-" + block_width + "px" });
//     $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();
//     $(carusel).find(".carousel-items").animate({ left: "0px" }, 200);
//   }
//   function right_carusel(carusel) {
//     var block_width = $(carusel).find(".carousel-block").outerWidth();
//     $(carusel)
//       .find(".carousel-items")
//       .animate({ left: "-" + block_width + "px" }, 200, function () {
//         $(carusel)
//           .find(".carousel-items .carousel-block")
//           .eq(0)
//           .clone()
//           .appendTo($(carusel).find(".carousel-items"));
//         $(carusel).find(".carousel-items .carousel-block").eq(0).remove();
//         $(carusel).find(".carousel-items").css({ left: "0px" });
//       });
//   }
  
//   $(function () {
//     auto_right(".carousel:first");
//   });
  
//   function auto_right(carusel) {
//     setInterval(function () {
//       if (!$(carusel).is(".hover")) right_carusel(carusel);
//     }, 3000);
//   }
//   $(document).on("mouseenter", ".carousel", function () {
//     $(this).addClass("hover");
//   });
//   $(document).on("mouseleave", ".carousel", function () {
//     $(this).removeClass("hover");
//   });
  





