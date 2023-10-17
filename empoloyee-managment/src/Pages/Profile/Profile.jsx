import React, { useEffect, useState } from 'react';
import { GET } from '../../helpers/httpHelper';
import EmailIcon from '@mui/icons-material/Email';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NumbersIcon from '@mui/icons-material/Numbers';

function Profile({ decoded }) {
    const [userDetails, setUserDetails] = useState({});
    const getUserDetails = async () => {
        try {
            const response = await GET(`/user/get-details/${decoded?.user}`);
            setUserDetails(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <div className="pt-16 bg-[#]">
            <div className="w-full lg:w-4/12 px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-[#3466aa] w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center">
                                <img alt="..." src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                            </div>
                        </div>
                        <div className="text-left mt-24">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-[#f1f1f1]">
                                {userDetails?.name}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-[#f1f1f1] font-bold">
                                <EmailIcon className="fas fa-envelope mr-2 text-lg text-[#f1f1f1]" />
                                <a href='mailto: {userDetails.email}'>
                                    {userDetails.email}
                                </a>
                            </div>
                            {decoded.role !== 'ADMIN' && (
                                <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                                    <CorporateFareIcon className="fas fa-map-marker-alt mr-2 text-lg text-gray-400" />
                                    {userDetails.department?.name}
                                </div>
                            )}
                            <div className="text-sm leading-normal mb-2 text-gray-400 mt-0">
                                <PeopleAltIcon className="fas fa-briefcase mr-2 text-lg text-gray-400" />
                                {userDetails.role}
                            </div>
                            <div className="text-sm leading-normal mb-2 text-gray-400">
                                <NumbersIcon className="fas fa-university mr-2 text-lg text-gray-400" />
                                {userDetails.empNo}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;
