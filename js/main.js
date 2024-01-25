

let width = $('.slider').outerWidth()
$('.slider').css({ left: `-${width}px` })
$('.open').on('click', function () {

    let left = $('.slider').css('left')
    if (left == '0px') {

        $('.slider').animate({ left: `-${width}px` }, 2000)
        $('.open').animate({ left: `2%` }, 2000)
    } else {
        $('.slider').animate({ left: 0 }, 2000)
        $('.open').animate({ left: `${width}px` }, 2000)
    }
})



$('#close').on('click', function () {
    $('.slider').animate({ left: `-${width}px` }, 2000)
    $('.open').animate({ left: `2%` }, 2000)
})



$('.links').on('click', function (e) {
    let href = $(e.target).attr('href')
    let offsetTop = $(href).offset().top

    $('body,html').animate({ scrollTop: offsetTop }, {
           queue: false,
           duration: 2500
       
    })
})





$('.duration h3').on('click',function(e){
    $('.slide').not($(e.target).next()).slideUp(500);
    $(e.target).next().slideToggle(500);
})





let countDownDate = new Date("sep 2,2024 09:00:00").getTime()
let counter = setInterval(()=>{
    let Now = new Date().getTime()
    let Defrance = countDownDate - Now 
 

    let days = Math.floor(Defrance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(Defrance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
    let min = Math.floor(Defrance % (1000 * 60 * 60 ) / (1000 * 60  ))
    let sec = Math.floor(Defrance % (1000 * 60 ) / (1000 ))
    $(".days").html(`${days} d`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ min } m`);
    $('.seconds').html(`${ sec} s`)
},1000)







let maxLength = $('textarea').attr('maxlength')
console.log(maxLength);
$('#countCharcter').html(maxLength)
$('textarea').keyup(function(){
    let textLength = $(this).val().length
    let remainText = maxLength - textLength
    if(remainText<=0){
        $('#countCharcter').text(" your available character finished")
    }else{

        $('#countCharcter').html(remainText)
    }
 
})
