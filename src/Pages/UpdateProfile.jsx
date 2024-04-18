import { useContext } from 'react';
import { AuthContext } from '../Firebase/FirebaseProvider';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className='px-4 md-8 lg:px-[100px] mt-12 mb-16'>

            <Helmet>
                <title>NestQuest | Profile</title>
            </Helmet>

            <div className='flex flex-col text-center items-center justify-center'>
                <img className='h-[200px] w-[200px] rounded-full ' src={user.photoURL} alt="" />
                <p className='font-bold text-xl mt-8 mb-6'>Name:{user.displayName} </p>
                <p className='font-bold text-xl'>Email: {user.email} </p>
            </div>

            <div className='flex md:justify-end justify-center mt-6'>
                <Link to='/update'><button className='btn bg-[#4F95FF] font-bold text-white  '>Edit profile ?</button></Link>
            </div>

        </div>
    );
};

export default UpdateProfile;