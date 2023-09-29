Let section = document.querySelectorAll('section');

window.onscroll = () =>{
    sections.forEach(sec =>{
        Let top = window.scrollY;
        Let offset= sec.offsetTop -150s;
        Let height = sec.offsetHeight;


        if (top >= offset && top < offset + height){
            sec.classList.add('show-animate');

        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}
