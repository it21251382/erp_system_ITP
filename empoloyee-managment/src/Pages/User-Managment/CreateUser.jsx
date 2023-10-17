import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { toastFail, toastSuccess } from '../../Components/Shared/ToastNotification';
import { uploadDocument, uploadImage } from '../../firebaseConfig';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useNavigate } from 'react-router-dom';
import { POST } from '../../helpers/httpHelper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CreateUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [telephone, setTelephone] = useState('');

    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');

    const [imageLoading, setImageLoading] = useState(false);

    const createUserHandler = async () => {
        try {
            if (!name || !email || !role || !telephone || !password) {
                toastFail('Please fill all the fields');
                return;
            }
            if (!image) {
                toastFail('Please upload an image');
                return;
            }

            if (password.length < 6) {
                toastFail('Password must be at least 6 characters');
                return;
            }
            console.log(telephone);
            const numberRegex = /^[0-9]+$/;
            if (!numberRegex.test(telephone)) {
                toastFail('Telephone must be a number');
                return;
            }
            const userObject = {
                name,
                email,
                role,
                image,
                telephone,
                password,
            };
            const response = await POST('employee/register', userObject);
            navigate('/');
            toastSuccess('User Created successful');
        } catch (error) {
            console.log(error);
            toastFail(`${error?.response?.data?.message ? error?.response?.data?.message : 'Something went wrong'}`);
        }
    };

    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    };

    const handleUpload = async (fileUrl) => {
        if (fileUrl) {
            setImageLoading(true);
            if (fileUrl.type.startsWith('image/')) {
                const url = await uploadImage(fileUrl);
                if (url) {
                    console.log('Uploaded URL:', url);
                    setImage(url); // Update the previous URL
                    setImageLoading(false);
                } else {
                    console.error('Error uploading image.');
                }
            } else {
                const collectionName = 'files';
                const url = await uploadDocument(collectionName, fileUrl);
                console.log(url);

                if (url) {
                    console.log('Uploaded URL:', url);
                    setImage(url); // Update the previous URL
                    setImageLoading(false);
                } else {
                    console.error('Error uploading file.');
                }
            }
        }
    };

    if (localStorage.getItem('AccessToken')) {
        return navigate('/');
    }

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
                        Create User
                    </div>
                    <div className='col-span-1 md:col-span-2 flex items-center justify-center font-bold text-3xl text-[#f1f1f1]'>
                        {image ? (
                            <div className="">
                                {image?.startsWith('https://firebasestorage.googleapis.com/') ? (
                                    <div className=' flex flex-col justify-center items-center gap-2'>
                                        <div className="h-[120px] w-[120px] rounded-full overflow-hidden">
                                            <img src={image} alt="attachment" className="bg-cover bg-center h-full w-full" />
                                        </div>
                                        <div className="flex gap-5 flex-col">
                                            <button
                                                className="bg-gray-600 w-full p-2  hover:bg-gray-700 text-white text-sm rounded-[60px] col-span-1 md:col-span-2 "
                                                onClick={() => setImage(null)}
                                            >
                                                remove
                                            </button>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        ) : (
                            <>
                                {imageLoading ? (
                                    <div className="flex justify-center items-center h-[120px]">
                                        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
                                    </div>
                                ) : (
                                    <label className="bg-white text-black text-sm font-bold py-2 px-4 rounded-full cursor-pointer shadow-lg border-2 border-gray-300 flex flex-col justify-center items-center gap-2 h-[120px]">
                                        <input
                                            type="file"
                                            onChange={(e) => handleUpload(e.target.files[0])}
                                            className="hidden"
                                        />
                                        <FileUploadIcon />
                                        Upload Image
                                    </label>
                                )}
                            </>
                        )}
                    </div>
                    <input
                        className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md"
                        placeholder="NAME......"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md"
                        placeholder="EMAIL ADDRESS......"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <select className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select Role</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="EMPLOYEE">EMPLOYEE</option>
                    </select>

                    <input
                        className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md"
                        placeholder="TELEPHONE......"
                        type="number"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                    />

                    <div className="w-full flex flex-col items-center gap-2">
                        <div className="flex w-full">
                            <input
                                type={passwordType}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                name="password"
                                className="bg-[#f1f1f1] p-2 pl-4 w-full hover:bg-slate-200 rounded-md rounded-tr-none rounded-br-none"
                                placeholder="PASSWORD......"
                            />
                            {passwordType === 'password' ? (
                                <a
                                    className="p-2 cursor-pointer text-gray-500 hover:text-gray-600 bg-[#f1f1f1]  rounded-tr-md rounded-br-md"
                                    onClick={togglePassword}
                                >
                                    <VisibilityIcon />
                                </a>
                            ) : (
                                <a
                                    className="p-2 cursor-pointer text-gray-500 hover:text-gray-600 bg-[#f1f1f1] rounded-tr-md rounded-br-md"
                                    onClick={togglePassword}
                                >
                                    <VisibilityOffIcon />
                                </a>
                            )}
                        </div>
                    </div>
                    <button
                        className="bg-gray-600 w-full p-2  hover:bg-gray-700 text-white font-bold rounded-[60px] col-span-1 md:col-span-2 "
                        onClick={createUserHandler}
                    >
                        Create User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;
