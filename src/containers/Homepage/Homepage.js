import React from 'react'
import SplitGradientCard from '../../components/UI/SplitGradientCard/SplitGradientCard'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

import styles from './Homepage.module.scss'

const homepage = props => {
    return (
        <Auxiliary>
            <SplitGradientCard cardBorder="BorderBottomRight" height="400px" hasPadding>
                Ciao Mamma!
            </SplitGradientCard>
            <div>Hello</div>
        </Auxiliary>
    )
}

export default homepage