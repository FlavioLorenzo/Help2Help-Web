import React from 'react'
import FullGradientCard from '../../components/UI/FullGradientCard/FullGradientCard'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

import styles from './Homepage.module.scss'

const homepage = props => {
    return (
        <Auxiliary>
            <FullGradientCard></FullGradientCard>

            <div>Hello</div>
        </Auxiliary>
    )
}

export default homepage