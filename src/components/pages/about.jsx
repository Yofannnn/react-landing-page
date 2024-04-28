import '../../assets/style/about.css'
import Footer from '../fragments/footer'
import Navbar from "../fragments/navbar"

export default function About() {
    return(
        <>
        <Navbar />
        <header className='about-header'>
            <div className="about-header-content">
                <div className="wrapper-content-about-header">
                    <p className='mx-5 my-1 unseen'>hallo there ,</p>
                    <h1 className='mx-5 my-1 unseen'>this is Kebunsari</h1>
                </div>
                <div className="about-header-bg unseen">
                </div>
                <h6 className="about-header-rotate-text">About Us &#x02192;</h6>
            </div>
        </header>
        <section className="about-page-section-0">
            <h1 className='mt-4 mb-3'>our Restaurant</h1>
            <div className="container-content-about-page-section-0">
                <div className="wrapper-absolute-left">
                    <div className="content-absolute-left">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolore harum eos. Modi sequi iure nihil ab aliqua.</p>
                        <img src="../../img/about-absolute-left.jpg" alt="" style={{width: '100%'}} />
                    </div>
                </div>
                <div className="wrapper-absolute-center">
                    <img src="../../img/about-0-center.jpg" alt="" style={{width: '100%'}} />
                </div>
                <div className="wrapper-absolute-right">
                    <div className="content-absolute-right">
                        <img src="../../img/about-absolute-right.jpg" alt="" style={{width: '100%'}} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis quam nobis, nihil provident dolores natus architecto? Veritatis aliquam, odio minus vel labore sint possimus .</p>
                    </div>
                </div>
            </div>
        </section>
        <div className="title-section-1 d-flex justify-content-between">
            <h1 style={{fontSize: '5rem'}}>Introduce</h1>
            <h1 style={{fontSize: '5rem'}}>Our Place</h1>
        </div>
        <section className="about-page-section-1">
            <div className="text-static">
                <div className="wrapper-static-text">
                    <h1>Food</h1>
                </div>
                <div className="wrapper-static-text">
                    <h1>Drink</h1>
                </div>
                <div className="wrapper-static-text">
                    <h1>Enjoy</h1>
                </div>
            </div>
            <div className="img-sticky">
                <div className="sticky-image"></div>
                <div className="sticky-image"></div>
                <div className="sticky-image"></div>
            </div>
        </section>
        <Footer />
        </>
    )
}

window.addEventListener('load', () => {
    document.querySelector('.about-header .about-header-content .about-header-bg').classList.remove('unseen')
    document.querySelector('.about-header .about-header-content .wrapper-content-about-header h1').classList.remove('unseen')
    document.querySelector('.about-header .about-header-content .wrapper-content-about-header p').classList.remove('unseen')
})

document.addEventListener('DOMContentLoaded', () => {
    function handleScroll() {
        Array.from(document.querySelector('.about-page-section-0 .container-content-about-page-section-0 .wrapper-absolute-left .content-absolute-left').children).forEach(el => {
            const rect = el.getBoundingClientRect()
            const triggerPoint = window.innerHeight * 0.75
            if (rect.top < triggerPoint && rect.bottom > 0) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0px)"
            } else {
                el.style.opacity = 0;
                el.style.transform = "translateY(10%)"
            }
        })
        document.querySelectorAll('.about-page-section-0 .container-content-about-page-section-0 .wrapper-absolute-center img').forEach(el => {
            const rect = el.getBoundingClientRect()
            const triggerPoint = window.innerHeight * 0.75
            if (rect.top < triggerPoint && rect.bottom > 0) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0px)"
            } else {
                el.style.opacity = 0;
                el.style.transform = "translateY(5%)"
            }
        })
        Array.from(document.querySelector('.about-page-section-0 .container-content-about-page-section-0 .wrapper-absolute-right .content-absolute-right').children).forEach(el => {
            const rect = el.getBoundingClientRect()
            const triggerPoint = window.innerHeight * 0.75
            if (rect.top < triggerPoint && rect.bottom > 0) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0px)"
            } else {
                el.style.opacity = 0;
                el.style.transform = "translateY(10%)"
            }
        })
    }

    document.addEventListener('scroll', handleScroll)
    handleScroll()
})

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    document.querySelector('.about-page-section-0 .container-content-about-page-section-0 .wrapper-absolute-left .content-absolute-left').style.transform = `translateY(${380 + (scroll* -0.4)}px)`;
    document.querySelector('.about-page-section-0 .container-content-about-page-section-0 .wrapper-absolute-right .content-absolute-right').style.transform = `translateY(${220 + (scroll* -0.1)}px)`;


    document.querySelector('.title-section-1').firstElementChild.style.transform = `translate(${-150 + (scroll* 0.3)}px , ${150 + (scroll* -0.15)}px)`
    document.querySelector('.title-section-1').lastElementChild.style.transform = `translate(${50 - (scroll* 0.25)}px , ${150 + (scroll* -0.1) }px)`
})