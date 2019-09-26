import React, { Component, Fragment} from 'react'
import PicCarousel from 'react-bootstrap/Carousel';
import sf from './images/goldenGate.jpg'
import monterey from './images/monterey.jpg'
import yosemite from './images/yosemite.jpg'
import napa from './images/napa.jpg'
import './../App.css'

const styles = (theme) => ({
    ...theme.spreadThis,
});


class Carousel extends Component {
    state={
        index: 0,
        direction: null,
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({ index: selectedIndex})
        this.setState({ direction: e.direction})
    }


    render() {
        const { index, direction } = this.state;
        return (
            <Fragment>
                <PicCarousel 
                    activeIndex={index} 
                    direction={direction} 
                    interval="2000"
                    onSelect={this.handleSelect}>
                <PicCarousel.Item>
                    <img
                    // width={400}
                    // height={300}
                    className="d-block w-100"
                    src={sf} 
                    alt=""
                    />
                    <PicCarousel.Caption>
                    <h3>San Francisco</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </PicCarousel.Caption>
                </PicCarousel.Item>

                <PicCarousel.Item>
                    <img
                    // width={400}
                    // height={300}
                    className="d-block w-100"
                    src={yosemite}
                    alt=""

                    />
                    <PicCarousel.Caption>
                    <h3>Yosemite Valley</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </PicCarousel.Caption>
                </PicCarousel.Item>

                <PicCarousel.Item>
                    <img
                    // width={400}
                    // height={300}
                    className="d-block w-100"
                    src={napa}
                    alt=""
                    
                    />
                    <PicCarousel.Caption>
                    <h3>Napa Valley</h3>
                    </PicCarousel.Caption>
                </PicCarousel.Item>

                <PicCarousel.Item>
                    <img
                    // style={{ width: '640px', height:'300'}}
                    // width={400}
                    // height={300}
                    className="d-block w-100"
                    src={monterey}
                    alt=""
                    
                    />
                    <PicCarousel.Caption>
                    <h3>Monterey</h3>
                    </PicCarousel.Caption>
                </PicCarousel.Item>
                </PicCarousel>
            </Fragment>
           
        )
    }
}

export default Carousel;