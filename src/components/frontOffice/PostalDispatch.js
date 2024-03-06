import React, { useEffect, useState } from 'react';
import { baseUrl } from '../config';
import edit_icon from '../../assets/ico/edit.svg';
import delete_icon from '../../assets/ico/delete.svg';


const PostalDispatch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editSourceId, setEditSourceId] = useState('');
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [search, setSearch] = useState('');
    const [filterList, setFilterList] = useState(data);

    const [to_title, setto_title] = useState('');
    const [to_address, setto_address] = useState('');
    const [reference_no, setreference_no] = useState('');
    const [note, setNote] = useState('');
    const [from_title, setfrom_title] = useState('');
    const [date, setDate] = useState('');
    const [document, setDocument] = useState('');

    const [to_titleEdit, setto_titleEdit] = useState('');
    const [to_addressEdit, setto_addressEdit] = useState('');
    const [reference_noEdit, setreference_noEdit] = useState('');
    const [noteEdit, setNoteEdit] = useState('');
    const [from_titleEdit, setfrom_titleEdit] = useState('');
    const [dateEdit, setDateEdit] = useState('');
    const [documentEdit, setDocumentEdit] = useState('');


    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setFilterList(data);
    }, [data]);

    // To create new source 
    async function handleCreate(e) {
        const response = await fetch(baseUrl + '/admin/front_office/postal_dispatch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ to_title, to_address, reference_no, note, from_title, date, document })
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
            const response = await fetch(baseUrl + '/admin/front_office/postal_dispatch');
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
        const list = data.filter((e) => e.to_title.toLowerCase().includes(search.toLowerCase()));
        setFilterList(list);
    };

    // Edit source handler
    async function handleEdit(e, id, to_title, to_address, reference_no, note, from_title, date, document) {
        e.preventDefault();
        setEditSourceId(id);
        setto_titleEdit(to_title);
        setto_addressEdit(to_address);
        setreference_noEdit(reference_no);
        setNoteEdit(note);
        setfrom_titleEdit(from_title);
        setDateEdit(date);
        setDocumentEdit(document);
        setShowEditPopup(true);
    };

    // Save edited source handler
    async function handleSaveEdit(e) {
        e.preventDefault();
        try {
            const response = await fetch(baseUrl + '/admin/front_office/postal_dispatch/' + editSourceId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ to_title: to_titleEdit, to_address: to_addressEdit, reference_no: reference_noEdit, note: note, from_title: from_titleEdit, date: dateEdit, document: documentEdit })
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
            const response = await fetch(baseUrl + '/admin/front_office/postal_dispatch/' + id, {
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
                <input type='text' value={to_title} placeholder='Enter to title' onChange={(e) => setto_title(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={to_address} placeholder='Enter to address' onChange={(e) => setto_address(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={reference_no} placeholder='Enter reference no' onChange={(e) => setreference_no(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={note} placeholder='Enter note' onChange={(e) => setNote(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={from_title} placeholder='Enter from title' onChange={(e) => setfrom_title(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={date} placeholder='Enter date DD/MM/YYYY' onChange={(e) => setDate(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={document} placeholder='Enter document' onChange={(e) => setDocument(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
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
                                    <th scope="col" className="px-6 py-3 flex-grow">to title </th>
                                    <th scope="col" className="px-6 py-3 uppercase">from title</th>
                                    <th scope="col" className="px-6 py-3 uppercase">date</th>
                                    <th scope="col" className="px-6 py-3 flex-shrink-0 text-right mr-3">action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filterList.map((source) => (
                                    <tr key={source.id} className="bg-white border-b text-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {source.to_title}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {source.from_title}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {source.date}
                                        </th>
                                        <th scope="row" className="px-6 py-3 text-right">
                                            <div className='flex flex-row justify-end'>
                                                <button className='text-sm  rounded-md py-1 px-2' onClick={(e) => handleEdit(e, source.id, source.to_title, source.to_address, source.reference_no, source.note, source.from_title, source.date, source.document)}> <img src={edit_icon} alt='edit' className='h-5' /> </button>
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


                            {/* to title  */}
                            <input
                                type="text"
                                value={to_titleEdit}
                                placeholder='Enter to title'
                                onChange={(e) => setto_titleEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/* to address  */}
                            <input
                                type="text"
                                value={to_addressEdit}
                                placeholder='Enter to address '
                                onChange={(e) => setto_addressEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/* reference no */}
                            <input
                                type="text"
                                value={reference_noEdit}
                                placeholder='Enter reference no'
                                onChange={(e) => setreference_noEdit(e.target.value)}
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

                            {/*  from titile */}
                            <input
                                type="text"
                                value={from_titleEdit}
                                placeholder='Enter from title'
                                onChange={(e) => setfrom_titleEdit(e.target.value)}
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

                            {/*  document */}
                            <input
                                type="text"
                                value={documentEdit}
                                placeholder='Enter document'
                                onChange={(e) => setDocumentEdit(e.target.value)}
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

export default PostalDispatch;