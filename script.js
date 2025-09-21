document.addEventListener('DOMContentLoaded', () => {
    const lluviaContenedor = document.querySelector('.girasol-contenedor');
    const corazonContenedor = document.querySelector('.corazon-girasoles-contenedor');
    const mensajeFinal = document.querySelector('.mensaje-final');
    
    function crearGirasolLluvia() {
        const girasol = document.createElement('div');
        girasol.classList.add('girasol');
        
        const startX = Math.random() * window.innerWidth;
        girasol.style.left = `${startX}px`;

        lluviaContenedor.appendChild(girasol);

        setTimeout(() => {
            girasol.remove();
        }, 10000);
    }

    const lluviaInterval = setInterval(crearGirasolLluvia, 100);

    function crearCorazonDeGirasoles() {
        const scale = 12;
        const centerOffset = window.innerWidth / 2;
        const centerOffsetY = window.innerHeight / 2 - 50;

        for (let i = 0; i <= 2 * Math.PI; i += 0.1) {
            const t = i;
            const x = scale * (16 * Math.sin(t)**3);
            const y = -scale * (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));

            const girasolCorazon = document.createElement('div');
            girasolCorazon.classList.add('girasol-corazon');
            girasolCorazon.style.left = `${centerOffset + x}px`;
            girasolCorazon.style.top = `${centerOffsetY + y}px`;
            
            corazonContenedor.appendChild(girasolCorazon);
            
            setTimeout(() => {
                girasolCorazon.style.opacity = '1';
            }, Math.random() * 1000);
        }
    }

    setTimeout(() => {
        mensajeFinal.style.opacity = '1';
        crearCorazonDeGirasoles();
    }, 10000);
});