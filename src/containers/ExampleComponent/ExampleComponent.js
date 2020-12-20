import React from 'react'
import {FormattedMessage} from 'react-intl'


const exampleComponent = props => {
    let device = "mobile"
    if (!props.isMobile) {
        device = "web"
    }

    return (
        <div>
            <FormattedMessage
                id="exampleMessage"
                defaultMessage="Ciao, stai accedendo via {device}"
                description="Example message with device's name injection"
                values={{device: device}}
            />
        </div>
    )
}

export default exampleComponent