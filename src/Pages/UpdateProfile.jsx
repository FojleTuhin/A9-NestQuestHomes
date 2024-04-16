import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/FirebaseProvider';

const UpdateProfile = () => {
    const{user}=useContext(AuthContext)

    return (
        <div className='px-[100px] mt-12'>

            <img className='h-[200px] w-[200px] rounded-full' src="/public/1.png" alt="" />
           <p className='font-bold text-xl mt-8 mb-6'>Name: </p>
           <p className='font-bold text-xl'>Email: {user.email} </p>

        </div>
    );
};

export default UpdateProfile;