var typed = new Typed('#element', {
    strings: ['Web Developer', 'Data Analyst','Data Scientist'],
    typeSpeed: 50,
    loop:true,
});
document.title = "Honey's portfolio";
document.getElementById('downloadbutton').addEventListener('click',()=>{
    var pathfile = 'resume.pdf';
    var link = document.createElement('a');
    link.setAttribute('href',pathfile);
    link.setAttribute('download','');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});