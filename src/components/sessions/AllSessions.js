import React, { useEffect, useState } from 'react';
import { baseUrl } from '../config';
import edit_icon from '../../assets/ico/edit.svg';
import delete_icon from '../../assets/ico/delete.svg';

const AllSessions = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editSessionId, setEditSessionId] = useState(null);
    const [editedSessionData, setEditedSessionData] = useState('');
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [session, setSession] = useState('');
    const [search, setSearch] = useState('');
    const [filterList, setFilterList] = useState(data);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setFilterList(data);
    }, [data]);

    // To create new session 
    async function handleCreate(e) {
        const response = await fetch(baseUrl + '/admin/session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ session })
        });

        const jsonData = await response.json();

        if (jsonData.success) {
            window.location.reload();
        };
    };

    // To fetch all sessions
    async function getData() {
        try {
            const response = await fetch(baseUrl + '/admin/session');
            const jsonData = await response.json();
            if (jsonData.success) {
                setData(jsonData.data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };
    // Handle search 
    async function handleSearch(e) {
        e.preventDefault();
        const list = data.filter((e) => e.session.toLowerCase().includes(search.toLowerCase()));
        setFilterList(list);
    };

    // Status toggle handler 
    async function handlestatusToggle(e, id) {
        e.preventDefault();
        try {
            const response = await fetch(baseUrl + `/admin/session/${id}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/josn'
                }
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                window.location.reload();
            };
        } catch (error) {
            console.log(error);
        }
    };

    // Edit session handler
    async function handleEdit(e, id, sessionData) {
        e.preventDefault();
        setEditSessionId(id);
        setEditedSessionData(sessionData);
        setShowEditPopup(true);
    };

    // Save edited session handler
    async function handleSaveEdit(e) {
        e.preventDefault();
        try {
            const response = await fetch(baseUrl + '/admin/session/' + editSessionId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ session: editedSessionData })
            });

            const jsonData = await response.json();
            console.log(jsonData);

            // Close the pop-up and reload data if the edit was successful
            if (jsonData.success) {
                setShowEditPopup(false);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Delete session handler
    async function handleDelete(e, id) {
        e.preventDefault();
        try {
            const response = await fetch(baseUrl + '/admin/session/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const jsonData = await response.json();

            if (jsonData?.success) {
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex flex-col lg:flex-row w-full'>
            {/* Create Session */}
            <div className='border-2 flex-grow max-h-44 border-gray-200 px-5 py-2 space-y-3 mt-4 mx-auto w-full'>
                <p>Add Session</p>
                <hr />
                <input type='text' value={session} placeholder='Enter session' onChange={(e) => setSession(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <hr />
                <button onClick={(e) => handleCreate(e)} className='border-2 bg-gray-500 text-white px-2 py-1 rounded-md w-full'>Add</button>
            </div>

            {/* Show sessions data */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex-grow w-full mx-3">
                <div className='border py-3 border-gray-500 mt-4'>
                    <input type='text' placeholder='search session' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={(e) => handleSearch(e)}>search</button>
                </div>
                {
                    loading ? <div class="flex items-center mx-auto my-3 justify-center w-56 h-24 border border-gray-200 rounded-lg bg-gray-50 ">
                        <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse ">loading...</div>
                    </div> :
                        <table className="w-full text-sm text-left">
                            <thead >
                                <tr className="w-full">
                                    <th scope="col" className="px-6 py-3 flex-grow">Session</th>
                                    <th scope="col" className="px-6 py-3 text-center">Status</th>
                                    <th scope="col" className="px-6 py-3 flex-shrink-0 text-right mr-3">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filterList.map((session) => (
                                    <tr key={session.id} className="bg-white border-b text-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {session.session}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <button
                                                onClick={(e) => handlestatusToggle(e, session.id)}
                                                className={`border ${session.status ? 'bg-green-500' : 'bg-red-500'} text-white py-1 px-2 text-sm rounded-md `}>
                                                {session.status ? 'active' : 'inactive'}
                                            </button>
                                        </th>
                                        <th scope="row" className="px-6 py-3 text-right">
                                            <button className='text-sm text-white rounded-md py-1 px-2' onClick={(e) => handleEdit(e, session.id, session.session)}> <img src={edit_icon} className='h-5' alt='edit' /> </button>
                                            <button className='text-sm  text-white rounded-md py-1 px-2 ml-2' onClick={(e) => handleDelete(e, session.id)}> <img src={delete_icon} className='h-5' alt='delete' /> </button>
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
                            <h2 className="text-2xl mb-4">Edit Session</h2>
                            <input
                                type="text"
                                value={editedSessionData}
                                onChange={(e) => setEditedSessionData(e.target.value)}
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

export default AllSessions;