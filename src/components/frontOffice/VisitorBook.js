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
    const [visitor_purpose_id, setVisitor_purpose_id] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [id_card_type, setid_card_type] = useState('');
    const [id_card_number, setid_card_number] = useState('');
    const [number_of_person, setnumber_of_person] = useState('');
    const [date, setDate] = useState('');
    const [in_time, setin_time] = useState('');
    const [out_time, setout_time] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [document, setDocument] = useState('');

    const [visitor_purpose_idEdit, setVisitor_purpose_idEdit] = useState('');
    const [nameEdit, setNameEdit] = useState('');
    const [emailEdit, setEmailEdit] = useState('');
    const [phoneEdit, setPhoneEdit] = useState('');
    const [id_card_typeEdit, setid_card_typeEdit] = useState('');
    const [id_card_numberEdit, setid_card_numberEdit] = useState('');
    const [number_of_personEdit, setnumber_of_personEdit] = useState('');
    const [dateEdit, setDateEdit] = useState('');
    const [in_timeEdit, setin_timeEdit] = useState('');
    const [out_timeEdit, setout_timeEdit] = useState('');
    const [addressEdit, setAddressEdit] = useState('');
    const [noteEdit, setNoteEdit] = useState('');
    const [documentEdit, setDocumentEdit] = useState('');


    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setFilterList(data);
    }, [data]);

    // To create new source 
    async function handleCreate(e) {
        const response = await fetch(baseUrl + '/admin/front_office/visitor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ visitor_purpose_id, name, email, phone, id_card_type, id_card_number, number_of_person, date, in_time, out_time, address, note, document })
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
            const response = await fetch(baseUrl + '/admin/front_office/visitor');
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
    async function handleEdit(e, id, visitor_purpose_id, name, email, phone, id_card_type, id_card_number, number_of_person, date, in_time, out_time, address, note, document) {
        e.preventDefault();
        setEditSourceId(id);
        setVisitor_purpose_idEdit(visitor_purpose_id);
        setNameEdit(name);
        setEmailEdit(email);
        setPhoneEdit(phone);
        setid_card_typeEdit(id_card_type);
        setid_card_numberEdit(id_card_number);
        setnumber_of_personEdit(number_of_person);
        setDateEdit(date);
        setin_timeEdit(in_time);
        setout_timeEdit(out_time);
        setAddressEdit(address);
        setNoteEdit(note);
        setDocumentEdit(document);
        setShowEditPopup(true);
    };

    // Save edited source handler
    async function handleSaveEdit(e) {
        e.preventDefault();
        try {
            const response = await fetch(baseUrl + '/admin/front_office/visitor/' + editSourceId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ visitor_purpose_id: visitor_purpose_idEdit, name: nameEdit, email: emailEdit, phone: phoneEdit, id_card_type: id_card_typeEdit, id_card_number: id_card_numberEdit, number_of_person: number_of_personEdit, date: dateEdit, in_time: in_timeEdit, out_time: out_timeEdit, address: addressEdit, note: noteEdit, document: documentEdit })
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
            const response = await fetch(baseUrl + '/admin/front_office/visitor/' + id, {
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
                <input type='text' value={visitor_purpose_id} placeholder='Enter visitor purpose id' onChange={(e) => setVisitor_purpose_id(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={name} placeholder='Enter name' onChange={(e) => setName(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={email} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={phone} placeholder='Enter phone' onChange={(e) => setPhone(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={id_card_type} placeholder='Enter id card type' onChange={(e) => setid_card_type(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={id_card_number} placeholder='Enter id card number' onChange={(e) => setid_card_number(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={number_of_person} placeholder='Enter number of person' onChange={(e) => setnumber_of_person(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={date} placeholder='Enter date DD/MM/YYYY' onChange={(e) => setDate(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={in_time} placeholder='Enter in time' onChange={(e) => setin_time(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={out_time} placeholder='Enter out time' onChange={(e) => setout_time(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={address} placeholder='Enter address' onChange={(e) => setAddress(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={note} placeholder='Enter note' onChange={(e) => setNote(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
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
                                    <th scope="col" className="px-6 py-3 flex-grow">Name</th>
                                    <th scope="col" className="px-6 py-3 uppercase">phone</th>
                                    <th scope="col" className="px-6 py-3 uppercase">number of person</th>
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
                                            {source.number_of_person}
                                        </th>
                                        <th scope="row" className="px-6 py-3 text-right">
                                            <div className='flex flex-row justify-end'>
                                                <button className='text-sm  rounded-md py-1 px-2' onClick={(e) => handleEdit(e, source.id, source.visitor_purpose_id, source.name, source.email, source.phone, source.id_card_type, source.id_card_number, source.number_of_person, source.date, source.in_time, source.out_time, source.address, source.note, source.document)}> <img src={edit_icon} alt='edit' className='h-5' /> </button>
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
                            {/* visitor purpose id */}
                            <input
                                type="text"
                                value={visitor_purpose_idEdit}
                                placeholder='Enter visitor purpose id'
                                onChange={(e) => setVisitor_purpose_idEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

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
                            {/*  id card type */}
                            <input
                                type="text"
                                value={id_card_typeEdit}
                                placeholder='Enter id card type'
                                onChange={(e) => setid_card_typeEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/*  id card number  */}
                            <input
                                type="text"
                                value={id_card_numberEdit}
                                placeholder='Enter id card number'
                                onChange={(e) => setid_card_numberEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/*  number of person */}
                            <input
                                type="text"
                                value={number_of_personEdit}
                                placeholder='Enter number of person'
                                onChange={(e) => setnumber_of_personEdit(e.target.value)}
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
                            {/*  intime */}
                            <input
                                type="text"
                                value={in_timeEdit}
                                placeholder='Enter in time'
                                onChange={(e) => setin_timeEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/*  out time */}
                            <input
                                type="text"
                                value={out_timeEdit}
                                placeholder='Enter out time'
                                onChange={(e) => setout_timeEdit(e.target.value)}
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

                            {/*  note */}
                            <input
                                type="text"
                                value={noteEdit}
                                placeholder='Enter note'
                                onChange={(e) => setNoteEdit(e.target.value)}
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

export default Complaint;