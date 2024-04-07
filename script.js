var typed = new Typed('#element', {
    strings: ['Web Developer', 'Data Analyst', 'Data Scientist'],
    typeSpeed: 50,
    loop: true,
});
document.title = "Honey's portfolio";
document.getElementById('downloadbutton').addEventListener('click', () => {
    var pathfile = 'resume.pdf';
    var link = document.createElement('a');
    link.setAttribute('href', pathfile);
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false);
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);