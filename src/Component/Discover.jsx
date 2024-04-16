
const Discover = () => {
    return (
        <div className="px-[100px] bg-[#FCFCFC]">
            <p className="text-2xl font-medium mb-7 mt-16">Discover All Types</p>
            <div className="grid grid-cols-4 gap-7">
                <div>
                    <img src="/public/Rectangle 9.png" alt="" />
                    <p className="bg-[#FFFFFF80] font-medium text-xl relative bottom-72 text-center">Banglow</p>
                </div>
                <div>
                    <img src="/public/Rectangle 10.png" alt="" />
                    <p className="bg-[#FFFFFF80] font-medium text-xl relative bottom-72 text-center">Villa</p>
                </div>
                <div>
                    <img src="/public/Rectangle 11.png" alt="" />
                    <p className="bg-[#FFFFFF80] font-medium text-xl relative bottom-72 text-center">Penthouse</p>
                </div>
                <div>
                    <img src="/public/Rectangle 12.png" alt="" />
                    <p className="bg-[#FFFFFF80] font-medium text-xl relative bottom-72 text-center">House</p>
                </div>
            </div>
        </div>
    );
};

export default Discover;