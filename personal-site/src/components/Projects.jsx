import React from 'react'
import { Carousel } from 'react-bootstrap'

function Projects(){
    return(
        // <div className="container">
        //     <div className="description-side">
        //         Projects
        //     </div>
        //     <div className="image-side">
        //         Image
        //     </div>
        // </div>
        <div className="carousel-container">
            <Carousel className="carousel">
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://via.placeholder.com/900x500?text=Visit+Blogging.com+Now" />
                    <Carousel.Caption>
                        <h3>Loan Calculator Mobile App</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="900x500" src="https://via.placeholder.com/900x500?text=Visit+Blogging.com+Now" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="900x500" src="https://via.placeholder.com/900x500?text=Visit+Blogging.com+Now" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Projects

// class Projects extends React.Component {
//     constructor(props, context) {
//         super(props, context);

//         this.handleSelect = this.handleSelect.bind(this);

//         this.state = {
//             index: 0,
//             direction: null
//         };
//     }

//     handleSelect(selectedIndex, e) {
//         alert(`selected=${selectedIndex}, direction=${e.direction}`);
//         this.setState({
//             index: selectedIndex,
//             direction: e.direction
//         });
//     }

//     render() {
//         const { index, direction } = this.state;

//         return (
//             <Carousel
//                 activeIndex={index}
//                 direction={direction}
//                 onSelect={this.handleSelect}
//             >
//                 <Carousel.Item>
//                     <img width={900} height={500} alt="900x500" src="https://via.placeholder.com/900x500?text=Visit+Blogging.com+Now" />
//                     <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img width={900} height={500} alt="900x500" src="https://via.placeholder.com/900x500?text=Visit+Blogging.com+Now" />
//                     <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img width={900} height={500} alt="900x500" src="https://via.placeholder.com/900x500?text=Visit+Blogging.com+Now" />
//                     <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>
//                             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//         );
//     }
// }

// // render(<Projects />);
// export default Projects