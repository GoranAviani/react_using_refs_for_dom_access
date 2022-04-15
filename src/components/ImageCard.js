import React from 'react';

class ImageCard extends React.Component{
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans: 0};
    }

    componentDidMount() {
      this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight)
    }

    render() {
        //const image = this.props.image
        const {description, urls} = this.props.image;

        return(
            <div>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}


export default ImageCard;