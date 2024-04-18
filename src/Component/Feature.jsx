import { useEffect, useState } from "react";
import Card from "./Card";

const Feature = () => {

    const [homes, setHomes]=useState([]);
    useEffect(()=>{
        fetch('FakeData.json')
        .then(res => res.json())
        .then(data => setHomes(data));
    },[])

    return (
        <div className="px-4 md:px-8">
            <p className="text-2xl font-medium mb-7">Featured Listings</p>
             <div data-aos="zoom-in" className="flex gap-6 justify-center flex-wrap">
               {
                homes.map(item=> <Card key={item.id} item={item}></Card>)
               }
                
            </div>
        </div>
    );
};

export default Feature;