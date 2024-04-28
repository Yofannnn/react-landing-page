import { useEffect, useState } from 'react';
import '../../assets/style/menu.css'
import Navbar from "../fragments/navbar";
import Footer from '../fragments/footer';

export default function Menu() {
    const [menus, setMenus] = useState([])

    useEffect(() => {
        fetch('../menu.json')
        .then(response => {
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then(response => {
            if (response.Response === 'False') throw new Error(response.Error)
            setMenus(response.menus)
        })
    }, [])

    let rupiah = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits : 0 ,
    });

    return(
        <>
        <Navbar />
        <header className="menus-header">
            <div className="menus-header-container-left">
                <div className="menus-header-container-left-content">
                    <h1 className='unseen'>Discovery <br /> our Menu&apos;s</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio aliquid quas consectetur a sit praesentium odio, error aperiam. Eos tempora hic vitae nulla amet modi consequatur illo in. Quibusdam.</p>
                </div>
            </div>
            <div className="menus-header-container-right"></div>
            <h5 className='d-flex row justify-content-center g-2'>Scroll
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
            </h5>
        </header>
        <div className="container-card-menus">
            {
                menus.map(menu => (
                    <a href={`/category/${menu.id}`} className="card-product" key={menu.id}>
                        <div className="wrapped-content-product">
                            <img src={`./img-menu/${menu.image}`} alt="" />
                            <div className="wrapped-desc-product">
                                <h1>{menu.name}</h1>
                                <p>{Array.isArray(menu.price) ? `${rupiah.format(menu.price[0])} - ${rupiah.format(menu.price[1])}` : rupiah.format(menu.price)}</p>
                            </div>
                        </div>
                    </a>
                ))
            }
        </div>
        <Footer />
        </>
    )
}

window.addEventListener('load', () => {
    document.querySelector('.menus-header .menus-header-container-left .menus-header-container-left-content h1').classList.remove('unseen')
})
