import * as React from 'react';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';
import { GET } from '../../helpers/httpHelper';

const ViewOneUser = ({ decoded }) => {
    const navigate = useNavigate();

    const [oneUser, setOneUser] = useState(null);
    const [name, setName] = useState('');
    const [empNo, setEmpNo] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [telephone, setTelephone] = useState('');

    const fetchUsers = async () => {
        try {
            const response = await GET(`employee/emp/${decoded._id}`);
            setOneUser(response.data.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (oneUser) {
            setName(oneUser?.name);
            setEmpNo(oneUser?.empNo);
            setEmail(oneUser?.email);
            setRole(oneUser?.role);
            setImage(oneUser?.image);
            setTelephone(oneUser?.telephone);
        }
    }, [oneUser]);

    return (
        <div className="flex flex-col justify-center items-center py-10">
            <div className="absolute top-20 left-0 p-5">
                <button
                    className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
                    onClick={() => window.history.back()}
                >
                    <ArrowBackIcon />

                </button>
            </div>
            <div className="bg-gray-600 px-10 py-10 rounded-full">
                <div className="bg-gray-800  p-10 gap-10 shadow-xl rounded-lg grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 md:col-span-2 flex items-center justify-center font-bold text-3xl text-[#f1f1f1]">
                        Profile
                    </div>
                    <div className='col-span-1 md:col-span-2 flex items-center justify-center font-bold text-3xl text-[#f1f1f1]'>
                        {image?.startsWith('https://firebasestorage.googleapis.com/') ? (
                            <div className=' flex flex-col justify-center items-center gap-2'>
                                <div className="h-[120px] w-[120px] rounded-full overflow-hidden">
                                    <img src={image} alt="attachment" className="bg-cover bg-center h-full w-full" />
                                </div>
                            </div>
                        ) : (
                            null
                        )}
                    </div>
                    <div className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md opacity-50 text-gray-950">{name}</div>
                    <div className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md opacity-50 text-gray-950">{empNo}</div>
                    <div className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md opacity-50 text-gray-950">{email}</div>
                    <div className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md opacity-50 text-gray-950">{role}</div>
                    <div className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md opacity-50 text-gray-950">{telephone}</div>

                    <button
                        className="bg-gray-600 w-full p-2  hover:bg-gray-700 text-white font-bold rounded-[60px] col-span-1 md:col-span-2 "
                        onClick={() => navigate(`/edit-user/${decoded?._id}`)}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewOneUser;
