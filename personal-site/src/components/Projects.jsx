import React from 'react'
import { Carousel } from 'react-bootstrap'
// import { url } from 'inspector';

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
                <Carousel.Item className>
                    <img width={700} height={500} alt="900x500" src={require("./assets/loanApp.jpg")} />
                    <Carousel.Caption className="caption">
                        <h3><a className="caption-text" href="https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.victory.yourloancalculator&sa=D&source=hangouts&ust=1566329913956000&usg=AFQjCNHH4_RqZDvLQZmJ5ia6dgapZvjVvA">Loan Calculator Mobile App</a></h3>
                        <p>React-Native app published on Google Play Store for Android.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={700} height={500} alt="900x500" src="900x500" src={require("./assets/angularIssues.jpg")} />
                    <Carousel.Caption className="caption">
                        <h3><a className="caption-text" href="https://condemned-good-bye.surge.sh/">Angular Issues</a></h3>
                        <p>This is a React.js project using Bootstrap to style. It integrates Angular's Github issues repo, and displays issues for past 7 days. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={700} height={500} alt="900x500" src="900x500" src={require("./assets/inbox.jpg")} />
                    <Carousel.Caption className="caption">
                        <h3>
                            <a className="caption-text" href="https://github.com/thatvictor7/inbox-v2">Inbox</a>
                        </h3>
                        <p>Gmail clone app. It allows you to add, delete, star, and label messages.</p>
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