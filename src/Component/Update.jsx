import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Update = () => {
    const { updateUser, createUser } = useContext(AuthContext)


    const handleLSignIn = (e) => {

        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUser(name, photo)
        toast.success("Successfully Update")


    }

    return (
        <div className="px-4 md:px-8 lg:px-[100px] mb-16">

            <Helmet>
                <title>NestQuest | UpdateProfile</title>
            </Helmet>
            <div className="hero  ">
                <div className=" flex-col ">
                    <div className="text-center mb-5 mt-12">
                        <h1 className="text-4xl font-bold animate__animated animate__backInDown">Update now!</h1>
                    </div>
                    <div className="card shrink-0 max-w-sm shadow-2xl bg-[#c8d7d7]">
                        <form onSubmit={handleLSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#8aabab] font-extrabold text-white">Update</button>
                            </div>


                        </form>




                    </div>

                </div>
            </div>
            <div className=" flex md:justify-end justify-center mt-6">
                <Link to='/updateProfile'><button className="btn bg-[#8aabab] font-extrabold text-white">Go back</button></Link>
            </div>
        </div>
    );
};

export default Update;