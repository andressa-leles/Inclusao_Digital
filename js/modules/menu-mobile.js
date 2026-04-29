export default function initMenuMobile(){
    const btnMenu = document.querySelector('.menu-mobile-btn')
    const nav = document.querySelector('.nav')

    if (!btnMenu || !nav) return

    function toggleMenu(event){
        if (event.type === 'touchstart') event.preventDefault()

        nav.classList.toggle('active')

        const active = nav.classList.contains('active')
        event.currentTarget.setAttribute('aria-expanded', active)
    }

    const links = document.querySelectorAll('.nav a')
    links.forEach(link =>{
        link.addEventListener('click', () =>{
            nav.classList.remove('active')
        })
    })

    btnMenu.addEventListener('click', toggleMenu)
    btnMenu.addEventListener('touchstart', toggleMenu)
}