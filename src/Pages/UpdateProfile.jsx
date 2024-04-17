import { useContext } from 'react';
import { AuthContext } from '../Firebase/FirebaseProvider';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className='px-[100px] mt-12'>

            <Helmet>
                <title>NestQuest | UpdateProfile</title>
            </Helmet>

            <img className='h-[200px] w-[200px] rounded-full' src={user.photoURL} alt="" />
            <p className='font-bold text-xl mt-8 mb-6'>Name:{user.displayName} </p>
            <p className='font-bold text-xl'>Email: {user.email} </p>

        </div>
    );
};

export default UpdateProfile;