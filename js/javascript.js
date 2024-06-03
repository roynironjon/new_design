// auto text html js code
var typed = new Typed (".text", {
    strings: ["Javascript", "জাভাস্ক্রিপ্ট হল একটি ক্লাইন্ট সাইড স্ক্রিপ্টিং ল্যাংগুয়েজ বা ব্রাউজার স্ক্রিপ্টিং।"],
    typeSpeed: 80,
    backSpeed: 30,
    loop : true
})
let all = document.querySelectorAll('.flex-question');
all.forEach(main => {
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