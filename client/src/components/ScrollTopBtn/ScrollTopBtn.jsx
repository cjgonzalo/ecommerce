import React, {useState, useEffect} from 'react'
import "./ScrollTopBtn.css"

const ScrollTopBtn = () => {

    const [visibility, setVisibility] = useState(false)

    const scrollToTop = () => {
        document.documentElement.scrollTop = 0
    }

    useEffect(() => {
        const updateScrollPos = () => {
            document.documentElement.scrollTop > 0 ? setVisibility(true) : setVisibility(false)
        }
        window.addEventListener("scroll", updateScrollPos)

        return () => {
            window.removeEventListener("scroll", updateScrollPos)
        }
    })

        return visibility ?
            <button onClick={scrollToTop} className='scroll-top btn btn-primary'>
                <i className="fas fa-chevron-up"></i>
            </button>
        :
            <></>
    
}

export default ScrollTopBtn
