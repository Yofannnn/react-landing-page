import '../../assets/style/home.css'
import Navbar from "../fragments/navbar"
import Footer from '../fragments/footer'

export default function Home() {
    return(
        <>
        <Navbar />
        <header className="home-header">
            <div className="container-text">
                <h1 className="unseen">WARUNG KEBUNSARI</h1>
                <p className="pb-0 unseen">Cafe & Restaurant Est. 2019</p>
            </div>
            <div className="container-image unseen"></div>
        </header>
        <section className="about">
            <div className="left-container">
                <div className="wrapped-image">
                    <img src="./img/gallery2.jpg" alt="" />
                </div>
            </div>
            <div className="right-container">
                <div className="wrapper">
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit fuga beatae facere repudiandae ut praesentium nulla, minima odio harum perspiciatis, nobis laborum porro dolores nemo quo illo, quod hic ullam.</h1>
                    <a href='/about' type="button" className='btn btn-dark rounded-pill py-3 mt-4' style={{width: '40%'}}> Read more</a>
                </div>
            </div>
        </section>
        <section className='highlight-menu'>
            <div className="container-highlight-menu">
                <div className="content-highlight-menu">
                    <div className="wrapped-btn-to-menu">
                        <a href="/menu" className='btn-highlight-menu btn-highlight-menu-spin btn-highlight-menu-circle'>Menu&apos;s</a>
                    </div>
                    <div className="wrapped-text-highlight-menu">
                        <h1>Our <br /> Special Menu&apos;s</h1>
                        <p>This is explain about our menu and describe it. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis architecto exercitationem atque! Aliquid maiores voluptatibus accusantium rem, sint quae, sequi mollitia quis inventore fuga ipsa eum hic earum beatae reprehenderit.</p>
                    </div>
                </div>
                <div className="wrapped-bg-img">
                </div>
                <h6 className='rotate-text'>Kebunsari</h6>
            </div>
        </section>
        <Footer />
        </>
    )
}

window.addEventListener('load', () => {
    document.querySelector('.home-header .container-image').classList.remove('unseen')
    document.querySelector('.home-header .container-text h1').classList.remove('unseen')
    document.querySelector('.home-header .container-text p').classList.remove('unseen')
})

window.addEventListener('scroll', () => {
    const scroll = window.scrollY
    document.querySelector('.home-header .container-image').style.transform = `translateY(${0 + (scroll* 0.1)}px)`;
    document.querySelector('.home-header .container-image').style.transition = `all 0s`;
})

document.addEventListener('DOMContentLoaded', () => {
    function handleScroll() {
        handleScrollAction(document.querySelectorAll('.about .left-container .wrapped-image img'), "translateX(0px)", 'translateX(-25%)')
        handleScrollAction(document.querySelectorAll('.about .right-container .wrapper h1'), "translateX(0px)", 'translateX(25%)')
        handleScrollAction(document.querySelectorAll('.about .right-container .wrapper a'), "rotateX(0deg)", "rotateX(90deg)")
    }

    document.addEventListener('scroll', handleScroll)
    handleScroll()
})

function handleScrollAction(elements, moveIf, moveElse) {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        const triggerPoint = window.innerHeight * 0.75
        if (rect.top < triggerPoint && rect.bottom > 0) {
            el.style.opacity = 1;
            el.style.transform = moveIf
        } else {
            el.style.opacity = 0;
            el.style.transform = moveElse
        }
    })
}
