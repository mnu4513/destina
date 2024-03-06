import React, { useEffect, useState } from 'react';
import { baseUrl } from '../config';
import edit_icon from '../../assets/ico/edit.svg';
import delete_icon from '../../assets/ico/delete.svg';


const AdmissionEnquery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editSourceId, setEditSourceId] = useState('');
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [search, setSearch] = useState('');
    const [filterList, setFilterList] = useState(data);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [next_follow_up_date, setNext_follow_up_date] = useState('');
    const [staff_id, setStaff_id] = useState('');
    const [source_of_contact_id, setSource_of_contact_id] = useState('');
    const [class_id, setClass_id] = useState('');
    const [number_of_child, setNumber_of_child] = useState('');

    const [nameEdit, setNameEdit] = useState('');
    const [emailEdit, setEmailEdit] = useState('');
    const [phoneEdit, setPhoneEdit] = useState('');
    const [addressEdit, setAddressEdit] = useState('');
    const [descriptionEdit, setDescriptionEdit] = useState('');
    const [dateEdit, setDateEdit] = useState('');
    const [next_follow_up_dateEdit, setNext_follow_up_dateEdit] = useState('');
    const [staff_idEdit, setStaff_idEdit] = useState('');
    const [source_of_contact_idEdit, setSource_of_contact_idEdit] = useState('');
    const [class_idEdit, setClass_idEdit] = useState('');
    const [number_of_childEdit, setNumber_of_childEdit] = useState('');

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setFilterList(data);
    }, [data]);

    // To create new source 
    async function handleCreate(e) {
        const response = await fetch(baseUrl + '/admin/front_office/admission_enquiry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, address, description, date, next_follow_up_date, staff_id, source_of_contact_id, class_id, number_of_child })
        });

        const jsonData = await response.json();

        if (jsonData.success) {
            window.location.reload();
        } else {
            window.alert(jsonData.message);
        };
    };

    // To fetch all sources
    async function getData() {
        try {
            const response = await fetch(baseUrl + '/admin/front_office/admission_enquiry');
            const jsonData = await response.json();
            if (jsonData.success) {
                setData(jsonData.data);
                setLoading(false);
            } else {
                window.alert(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };


    // Handle search 
    async function handleSearch(e) {
        e.preventDefault();
        const list = data.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()));
        setFilterList(list);
    };

    // Edit source handler
    async function handleEdit(e, id, name, email, phone, address, description, date, next_follow_up_date, staff_id, source_of_contact_id, class_id, number_of_child) {
        e.preventDefault();
        setEditSourceId(id);
        setNameEdit(name);
        setEmailEdit(email);
        setPhoneEdit(phone);
        setAddressEdit(address);
        setDescriptionEdit(description);
        setDateEdit(date);
        setNext_follow_up_dateEdit(next_follow_up_date);
        setStaff_idEdit(staff_id);
        setSource_of_contact_idEdit(source_of_contact_id);
        setClass_idEdit(class_id);
        setNumber_of_childEdit(number_of_child);
        setShowEditPopup(true);
    };

    // Save edited source handler
    async function handleSaveEdit(e) {
        e.preventDefault();
        try {
            const response = await fetch(baseUrl + '/admin/front_office/admission_enquiry/' + editSourceId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: nameEdit, email: emailEdit, phone: phoneEdit, address: addressEdit, description: descriptionEdit, date: dateEdit, next_follow_up_date: next_follow_up_dateEdit, staff_id: staff_idEdit, source_of_contact_id: source_of_contact_idEdit, class_id: class_idEdit, number_of_child: number_of_childEdit })
            });

            const jsonData = await response.json();

            if (jsonData.success) {
                setShowEditPopup(false);
                window.location.reload();
            } else {
                window.alert(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Delete source handler
    async function handleDelete(e, id) {
        e.preventDefault();
        try {
            const response = await fetch(baseUrl + '/admin/front_office/admission_enquiry/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const jsonData = await response.json();

            if (jsonData?.success) {
                window.location.reload();
            } else {
                window.alert(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex flex-col lg:flex-row w-full'>
            {/* Create source */}
            <div className='border-2 flex-grow min-w-min max-h-min border-gray-200 px-5 py-2 space-y-3 mt-4 mx-auto w-full'>
                <p>Add Timezone</p>
                <hr />
                <input type='text' value={name} placeholder='Enter name' onChange={(e) => setName(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={email} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={phone} placeholder='Enter phone' onChange={(e) => setPhone(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={address} placeholder='Enter address' onChange={(e) => setAddress(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={description} placeholder='Enter description' onChange={(e) => setDescription(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={date} placeholder='Enter date DD/MM/YYYY' onChange={(e) => setDate(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={next_follow_up_date} placeholder='Enter next follow up date DD/MM/YYYY' onChange={(e) => setNext_follow_up_date(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={staff_id} placeholder='Enter staff id' onChange={(e) => setStaff_id(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={source_of_contact_id} placeholder='Enter source of contact id' onChange={(e) => setSource_of_contact_id(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={class_id} placeholder='Enter class id' onChange={(e) => setClass_id(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={number_of_child} placeholder='Enter number of child' onChange={(e) => setNumber_of_child(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />

                <hr />
                <button onClick={(e) => handleCreate(e)} className='border-2 bg-gray-500 text-white px-2 py-1 rounded-md w-full'>Add</button>
            </div>

            {/* Show sources data */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex-grow w-full mx-3">
                <div className='border py-3 border-gray-500 mt-4 text-left'>
                    <input className='border py-1 px-2 mx-2 border-gray-500 rounded-md' type='text' placeholder='search source' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className='border py-1 px-2 bg-gray-500 text-white rounded-md' onClick={(e) => handleSearch(e)}>search</button>
                </div>
                {
                    loading ? <div class="flex items-center mx-auto my-3 justify-center w-56 h-24 border border-gray-200 rounded-lg bg-gray-50 ">
                        <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse ">loading...</div>
                    </div> :
                        <table className="w-full text-sm text-left ">
                            <thead >
                                <tr className="w-full uppercase">
                                    <th scope="col" className="px-6 py-3 flex-grow">Name</th>
                                    <th scope="col" className="px-6 py-3 uppercase">phone</th>
                                    <th scope="col" className="px-6 py-3 uppercase">class id</th>
                                    <th scope="col" className="px-6 py-3 flex-shrink-0 text-right mr-3">action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filterList.map((source) => (
                                    <tr key={source.id} className="bg-white border-b text-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {source.name}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {source.phone}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {source.class_id}
                                        </th>
                                        <th scope="row" className="px-6 py-3 text-right">
                                            <div className='flex flex-row justify-end'>
                                                <button className='text-sm  rounded-md py-1 px-2' onClick={(e) => handleEdit(e, source.id, source.name, source.email, source.phone, source.address, source.description, source.date, source.next_follow_up_date, source.staff_id, source.source_of_contact_id, source.class_id, source.number_of_child)}> <img src={edit_icon} alt='edit' className='h-5' /> </button>
                                                <button className='text-sm  rounded-md py-1 px-2 ml-2' onClick={(e) => handleDelete(e, source.id)}> <img src={delete_icon} alt='delete' className='h-5' /> </button>
                                            </div>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                }

                {/* Edit Pop-up */}
                {showEditPopup && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                        <div className="bg-white p-8 rounded-md">
                            <h2 className="text-2xl mb-4">Edit source</h2>
                            {/* name */}
                            <input
                                type="text"
                                value={nameEdit}
                                placeholder='Enter name'
                                onChange={(e) => setNameEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/* email  */}
                            <input
                                type="text"
                                value={emailEdit}
                                placeholder='Enter email '
                                onChange={(e) => setEmailEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/* phone */}
                            <input
                                type="text"
                                value={phoneEdit}
                                placeholder='Enter phone'
                                onChange={(e) => setPhoneEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  address */}
                            <input
                                type="text"
                                value={addressEdit}
                                placeholder='Enter address'
                                onChange={(e) => setAddressEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  description */}
                            <input
                                type="text"
                                value={descriptionEdit}
                                placeholder='Enter description'
                                onChange={(e) => setDescriptionEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  date  */}
                            <input
                                type="text"
                                value={dateEdit}
                                placeholder='Enter date DD/MM/YYYY'
                                onChange={(e) => setDateEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  next follow up date */}
                            <input
                                type="text"
                                value={next_follow_up_dateEdit}
                                placeholder='Enter next follow up date DD/MM/YYYY'
                                onChange={(e) => setNext_follow_up_dateEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/*  staff id */}
                            <input
                                type="text"
                                value={staff_idEdit}
                                placeholder='Enter staff id'
                                onChange={(e) => setStaff_idEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/*  source of contact id */}
                            <input
                                type="text"
                                value={source_of_contact_idEdit}
                                placeholder='Enter source of contact id '
                                onChange={(e) => setSource_of_contact_idEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/*  class id  */}
                            <input
                                type="text"
                                value={class_idEdit}
                                placeholder='Enter class id '
                                onChange={(e) => setClass_idEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/*  number of child */}
                            <input
                                type="text"
                                value={number_of_childEdit}
                                placeholder='Enter number of child'
                                onChange={(e) => setNumber_of_childEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />


                            <div className="flex justify-end">
                                <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={handleSaveEdit}>Save</button>
                                <button className="bg-gray-500 text-white px-4 py-2" onClick={() => setShowEditPopup(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdmissionEnquery;