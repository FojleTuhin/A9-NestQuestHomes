import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Card = ({item}) => {
    return (
        <div>
            
            <div data-aos="fade-up"  className="card w-[300px] bg-base-100 shadow-xl ">
                <figure className="px-6 pt-6">
                    <img src={item.images[0]} className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{item.segment_name}</h2>
                    <div className="flex items-center justify-between">
                        
                        <p className="text-xl font-bold">{item.price}</p>
                        <p className="text-xl font-bold text-right text-[#4F95FF]">{item.status}</p>
                        
                    </div>

                    <div className="flex items-center gap-2">
                        <FaLocationDot />
                        <p>{item.location}</p>
                    </div>

                    <hr className="bg-[#D1D1D1] mt-3 mb-3"/>

                    <div className="card-actions">
                        <Link to={`/details/${item.id}`}><button className="btn bg-[#4F95FF] text-white">View details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;