import React from 'react'
import loading from '../img/spinner.gif'

const Loading = () => {
    return (
        <img src={loading} style={{width: '100px', margin: 'auto', display:'block'}} alt='Loading...' />
    )
}

export default Loading;