import React, { useEffect, useState } from 'react';
import { baseUrl } from '../config';
import edit_icon from '../../assets/ico/edit.svg';
import delete_icon from '../../assets/ico/delete.svg';


const Complaint = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editSourceId, setEditSourceId] = useState('');
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [search, setSearch] = useState('');
    const [filterList, setFilterList] = useState(data);

    const [complaint_type_id, setcomplaint_type_id] = useState('');
    const [complain_by, setcomplain_by] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [action_taken, setaction_taken] = useState('');
    const [assigned, setassigned] = useState('');
    const [note, setNote] = useState('');

    const [complaint_type_idEdit, setcomplaint_type_idEdit] = useState('');
    const [complain_byEdit, setcomplain_byEdit] = useState('');
    const [phoneEdit, setPhoneEdit] = useState('');
    const [dateEdit, setDateEdit] = useState('');
    const [descriptionEdit, setDescriptionEdit] = useState('');
    const [action_takenEdit, setaction_takenEdit] = useState('');
    const [assignedEdit, setassignedEdit] = useState('');
    const [noteEdit, setNoteEdit] = useState('');



    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setFilterList(data);
    }, [data]);

    // To create new source 
    async function handleCreate(e) {
        const response = await fetch(baseUrl + '/admin/front_office/complaint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ complaint_type_id, complain_by, phone, date, description, action_taken, assigned, note })
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
            const response = await fetch(baseUrl + '/admin/front_office/complaint');
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
        const list = data.filter((e) => e.complain_by.toLowerCase().includes(search.toLowerCase()));
        setFilterList(list);
    };

    // Edit source handler
    async function handleEdit(e, id, complaint_type_id, complain_by, phone, date, description, action_taken, assigned, note) {
        e.preventDefault();
        setEditSourceId(id);
        setcomplaint_type_idEdit(complaint_type_id);
        setcomplain_byEdit(complain_by);
        setPhoneEdit(phone);
        setDateEdit(date);
        setDescriptionEdit(description);
        setaction_takenEdit(action_taken);
        setassignedEdit(assigned);
        setNoteEdit(note);
        setShowEditPopup(true);
    };

    // Save edited source handler
    async function handleSaveEdit(e) {
        e.preventDefault();
        try {
            const response = await fetch(baseUrl + '/admin/front_office/complaint/' + editSourceId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ complaint_type_id: complaint_type_idEdit, complain_by: complain_byEdit, phone: phoneEdit, date: dateEdit, description: descriptionEdit, action_taken: action_takenEdit, assigned: assignedEdit, note: noteEdit })
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
            const response = await fetch(baseUrl + '/admin/front_office/complaint/' + id, {
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
                <input type='text' value={complaint_type_id} placeholder='Enter complaint type id' onChange={(e) => setcomplaint_type_id(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={complain_by} placeholder='Enter complaint by' onChange={(e) => setcomplain_by(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={phone} placeholder='Enter phone' onChange={(e) => setPhone(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={date} placeholder='Enter date DD/MM/YYYY' onChange={(e) => setDate(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={description} placeholder='Enter description' onChange={(e) => setDescription(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={action_taken} placeholder='Enter action taken ' onChange={(e) => setaction_taken(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={assigned} placeholder='Enter assigned' onChange={(e) => setassigned(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={note} placeholder='Enter note' onChange={(e) => setNote(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
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
                                    <th scope="col" className="px-6 py-3 flex-grow">complain_by</th>
                                    <th scope="col" className="px-6 py-3 uppercase">phone</th>
                                    <th scope="col" className="px-6 py-3 uppercase">note</th>
                                    <th scope="col" className="px-6 py-3 flex-shrink-0 text-right mr-3">action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filterList.map((source) => (
                                    <tr key={source.id} className="bg-white border-b text-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {source.complain_by}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {source.phone}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {source.note}
                                        </th>
                                        <th scope="row" className="px-6 py-3 text-right">
                                            <div className='flex flex-row justify-end'>
                                                <button className='text-sm  rounded-md py-1 px-2' onClick={(e) => handleEdit(e, source.id, source.complaint_type_id, source.complain_by, source.phone, source.date, source.description, source.action_taken, source.assigned, source.note)}> <img src={edit_icon} alt='edit' className='h-5' /> </button>
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
                            {/* complain type id */}
                            <input
                                type="text"
                                value={complaint_type_idEdit}
                                placeholder='Enter complain type id'
                                onChange={(e) => setcomplaint_type_idEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/* complain by */}
                            <input
                                type="text"
                                value={complain_byEdit}
                                placeholder='Enter complain by'
                                onChange={(e) => setcomplain_byEdit(e.target.value)}
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

                            {/*  date  */}
                            <input
                                type="text"
                                value={dateEdit}
                                placeholder='Enter date DD/MM/YYYY'
                                onChange={(e) => setDateEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/*  description  */}
                            <input
                                type="text"
                                value={descriptionEdit}
                                placeholder='Enter description'
                                onChange={(e) => setDescriptionEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/*  action taken  */}
                            <input
                                type="text"
                                value={action_takenEdit}
                                placeholder='Enter action taken '
                                onChange={(e) => setaction_takenEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/*  assigned */}
                            <input
                                type="text"
                                value={assignedEdit}
                                placeholder='Enter assigned'
                                onChange={(e) => setassignedEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  note */}
                            <input
                                type="text"
                                value={noteEdit}
                                placeholder='Enter note'
                                onChange={(e) => setNoteEdit(e.target.value)}
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

export default Complaint;