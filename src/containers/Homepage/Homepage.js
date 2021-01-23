import React from 'react'

import ImageCard from '../../components/UI/ImageCard/ImageCard'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

// import styles from './Homepage.module.scss'

import exampleImage from '../../assets/images/example_environment.jpg'

const homepage = props => {
    return (
        <Auxiliary>
            <ImageCard cardBorder="BorderBottomRight" hasPadding imageSrc={exampleImage} height="200px">
            </ImageCard>
            <div>Hello</div>
        </Auxiliary>
    )
}

export default homepage