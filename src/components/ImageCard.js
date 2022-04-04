import React from 'react';

class ImageCard extends React.Component{

    render() {
        const image = this.props.image
        return(
            <div>
                <img alt={image.description} src={image.urls.regular} />
            </div>
        )
    }
}


export default ImageCard;