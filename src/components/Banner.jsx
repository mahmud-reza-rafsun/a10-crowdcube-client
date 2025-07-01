import img1 from '../assets/banner_img/img-1.jpg';
import img2 from '../assets/banner_img/img-2.jpg';
import img3 from '../assets/banner_img/img-3.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[300px] lg:h-[510px] rounded-md">
                <img
                    src={img1}
                    className="w-full object-cover rounded-md" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[300px] lg:h-[510px] rounded-md">
                <img
                    src={img2}
                    className="w-full object-cover rounded-md" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[300px] lg:h-[510px] rounded-md">
                <img
                    src={img3}
                    className="w-full object-cover rounded-md" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;