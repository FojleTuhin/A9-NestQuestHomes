
const Cities = () => {
    return (
        <div className="px-[100px] ">
        <p className="text-2xl font-medium mb-7">Popular Cities</p>
        <div className="grid grid-cols-4 gap-7">
            <div>
                <img src="/public/Rectangle 13.png" alt="" />
                <p className=" font-medium text-2xl relative bottom-72 text-center">America</p>
            </div>
            <div>
                <img src="/public/14.png" alt="" />
                <p className="font-medium text-2xl relative bottom-72 text-center">Spain</p>
            </div>
            <div>
                <img src="/public/15.png" alt="" />
                <p className="font-medium text-2xl relative bottom-72 text-center">London</p>
            </div>
            <div>
                <img src="/public/16.png" alt="" />
                <p className=" font-medium text-2xl relative bottom-72 text-center">France</p>
            </div>
        </div>
    </div>
    );
};

export default Cities;