import React, { Component } from 'react';
import Carousel from 'antd/lib/carousel';

import styles from './home.scss';

import img1 from 'img/1.jpg';
import img2 from 'img/2.jpg';
import img3 from 'img/3.jpg';
import img4 from 'img/4.jpg';

class Home extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Carousel autoplay className={styles.carouselHeight}>
                    <div className={styles.slickSlide}>
                        <div className={styles.carouseContent}></div>
                    </div>
                    <div className={styles.slickSlide}>
                        <div className={styles.carouseContent2}></div>
                    </div>
                    <div className={styles.slickSlide}>
                        <div className={styles.carouseContent3}></div>
                    </div>
                    <div className={styles.slickSlide}>
                        <div className={styles.carouseContent4}></div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;