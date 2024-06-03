// auto text css js code
var typed = new Typed(".text", {
    strings: ["Cascading Style Sheets"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true 
});

// faq question js code start
let allcol = document.querySelectorAll('.flex-question');

allcol.forEach(main => {
    let icon = main.querySelector('.icon');
    let answer = main.querySelector('.html-answer');
    main.addEventListener('click', () =>{
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
})
// faq question js code end
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// Show the scroll button when user scrolls down
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}