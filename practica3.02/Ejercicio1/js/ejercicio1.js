function censorDOM(){
    const nodos = document.body.childNodes; //accedo a los nodos hijos de body.

    nodos.forEach((n) => { //recorro esos nodos.
        if(n.textContent.includes('sexo')){ //compruebo si el contenido del nodo contiene sexo.
            n.innerHTML = "Contenido Bloqueado"; //añado el texto
            n.classList.add('bloqueado'); //añado una clase css
        }
    
    });
}

censorDOM();