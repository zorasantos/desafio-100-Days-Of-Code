import React, {Component} from 'react'

export default class Carousel extends Component {
    render() {
        return(
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/virus-4030721_1920.jpg" alt="Primeiro Slide" />
                        <div className="carousel-caption">
                            <header>Vacine-se</header>
                            <p>Não deixe de se vacinar, isso pode salvar sua vida!</p>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
