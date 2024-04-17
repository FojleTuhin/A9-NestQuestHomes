import 'animate.css';

const Banner = () => {
    return (
        <div className="bg-[#F5F5F5]">


            <div className="grid grid-cols-2 pl-[100px]">
                <div>
                    <p className="font-bold text-6xl mt-36 animate__animated animate__heartBeat">Let's hunt for your dream residence</p>
                    <p className="mt-6">Explore our range of beautiful properties with the addition of separate accommodation suitable for you.</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/m93LcGg/bernard-hermant-Kq-OLr8-Oi-QLU-unsplash-1.png" alt="" />
                </div>
            </div>

            <div className="px-[100px] pt-16 mb-16">
                <div className="carousel w-full max-h-[400px]">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/vx7MbW6/11.webp" className="w-full h-100vh" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/H4c9jRY/12.jpg" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/VYYBnGf/13.jpg" className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://i.ibb.co/YbZXwDj/14.jpg" className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>























        </div>
    );
};

export default Banner;