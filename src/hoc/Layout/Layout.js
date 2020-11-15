import React from 'react'

import Aux from '../Auxiliary/Auxiliary'

const layout = props => {
    return (
        <Aux>
            <div>Header</div>
            <main>{props.children}Body</main>
        </Aux>
    )
}

export default layout