//PERFILES
function cambiarColorRedes() {
    const imafacebook = document.querySelectorAll('.facebook');
    const imagtwitter = document.querySelectorAll('.twitter');
    const imaginstagram = document.querySelectorAll('.instagram');

    imafacebook.forEach(element=>{

        element.addEventListener('mouseover', () => {
            element.src = 'img/facenaranja.jpg'; // Cambia a la nueva imagen
        });

        element.addEventListener('mouseout', () => {
            element.src = 'img/Logoface.jpg.png'; // Regresa a la imagen original
        });

    })

    imagtwitter.forEach(element=>{
       
        element.addEventListener('mouseover',()=>{
            element.src='img/twittwernaranja.jpg'
        })
       element.addEventListener('mouseout',()=>{
        element.src='img/logo-instar.jpg.png'

       })

    })

    imaginstagram.forEach(element=>{
        
        element.addEventListener('mouseover', ()=>{
            element.src='img/insta-naranja.jpg'

        })
        element.addEventListener('mouseout',()=>{
            element.src="img/logo-ins.jpg.png";

        })
        
    }) 
}

cambiarColorRedes();
