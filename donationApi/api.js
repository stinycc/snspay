function animation(element,animationStyle){
    targetElement = id(element)
    targetElement.style.animation = ''
    void targetElement.offsetWidth;
    targetElement.style.animation = animationStyle
}

function id(elementId){
    return document.getElementById(elementId)
}

$(document).ready(function(){
    window.addEventListener('message',function(e){if(e.origin=='https://smini.link'){eval(e.data)}})
    document.getElementById('ParanDonationBackground').style.display=''
    id('ParanDonationButton').addEventListener('click', function() {
        pageIn()
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
