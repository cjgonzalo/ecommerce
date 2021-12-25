import React, {useState} from 'react'
import "./ScrollTopBtn.css"

const ScrollTopBtn = () => {

    // const [visibility, setVisibility] = useState(false)

    const scrollToTop = () => {
        document.documentElement.scrollTop = 0
        setVisibility(false)
    }

    return (
        <button onClick={scrollToTop} className='scroll-top btn btn-primary'>
            <i className="fas fa-chevron-up"></i>
        </button>
    )
}

export default ScrollTopBtn
