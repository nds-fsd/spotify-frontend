import MenuDisplay from './MenuDislpay/menudisplay'

import Sidebar from './Sidebar/sidebar'
import './display.css'

const Display = () => {


    return (
        <div className="container-display">
            <Sidebar/>
            <MenuDisplay/>



        </div>
    )
    
}

export default Display;