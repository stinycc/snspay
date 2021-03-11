function animation(element,animationStyle){
    targetElement = id(element)
    targetElement.style.animation = ''
    void targetElement.offsetWidth;
    targetElement.style.animation = animationStyle
}

function id(elementId){
    return document.getElementById(elementId)
}

function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      //return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      return false;
    }
    // other browser
    return false;
}

$(document).ready(function(){
    window.addEventListener('message',function(e){if(e.origin=='https://smini.link'){eval(e.data)}})
    document.getElementById('ParanDonationBackground').style.display=''
    id('ParanDonationButton').addEventListener('click', function() {
        if ( detectIE() ){
            alert("😥 인터넷 익스플로러 브라우저에서는 사용할 수 없는 기능이에요. 엣지 익스플로러 브라우저로 이동할게요!")
            location.href = "microsoft-edge:" + location.href
        }else{
            pageIn()
        }
    })
})
  
function pageIn(){
    animation('ParanDonationBackground','blurIn .5s cubic-bezier(.25,.46,.45,.94) both')
    animation('ParanDonationButton','slideIn .5s cubic-bezier(.25,.46,.45,.94) reverse both')
    document.getElementById('ParanDonationBackground').style.pointerEvents = 'auto'
    setTimeout(function(){
        document.getElementById('ParanDonationIframe').style.pointerEvents = 'auto'
        animation('ParanDonationIframe','slideIn .5s cubic-bezier(.25,.46,.45,.94) both')
    },500);
};
  
function pageOut(){
    id('ParanDonationIframe').style.pointerEvents = 'none'
    animation('ParanDonationIframe','slideIn .5s cubic-bezier(.25,.46,.45,.94) reverse both')
    setTimeout(function(){
        animation('ParanDonationBackground','blurIn .5s cubic-bezier(.25,.46,.45,.94) reverse both')
        animation('ParanDonationButton','slideIn .5s cubic-bezier(.25,.46,.45,.94) both')
        id('ParanDonationBackground').style.pointerEvents = 'none'
    },500)
}
