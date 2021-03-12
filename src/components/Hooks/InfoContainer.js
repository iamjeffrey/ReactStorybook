import React, { useState } from 'react'
import Info from './Info'
import InfoCustomHooks from './InfoCustomHooks'

const InfoContainer = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <button onClick={
                () => {
                    setVisible(!visible)
                }
            } >
                {visible ? 'HIDE': 'SHOW'}
            </button>
            <hr />
            {visible && <Info />}
            
            {'CUSTOM HOOKS'}
            <InfoCustomHooks />
        </div>
    )
}
export default InfoContainer