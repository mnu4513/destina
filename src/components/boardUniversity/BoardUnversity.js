import React, { useEffect, useState } from 'react';
import { baseUrl } from '../config';
import edit_icon from '../../assets/ico/edit.svg';
import delete_icon from '../../assets/ico/delete.svg';


const BoardUniversity = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editSourceId, setEditSourceId] = useState('');
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [search, setSearch] = useState('');
    const [filterList, setFilterList] = useState(data);

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [is_board, setIs_board] = useState('');
    const [is_university, setIs_university] = useState('');
    const [logo, setLogo] = useState('');
    const [board_type, setBoard_type] = useState('');
    const [university_type, setUniversity_type] = useState('');
    const [state, setState] = useState('');
    const [description, setDesceription] = useState('');

    const [nameEdit, setNameEdit] = useState('');
    const [slugEdit, setSlugEdit] = useState('');
    const [is_boardEdit, setIs_boardEdit] = useState('');
    const [is_universityEdit, setIs_universityEdit] = useState('');
    const [logoEdit, setLogoEdit] = useState('');
    const [board_typeEdit, setBoard_typeEdit] = useState('');
    const [university_typeEdit, setUniversity_typeEdit] = useState('');
    const [stateEdit, setStateEdit] = useState('');
    const [descriptionEdit, setDesceriptionEdit] = useState('');


    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setFilterList(data);
    }, [data]);

    // To create new source 
    async function handleCreate(e) {
        const response = await fetch(baseUrl + '/admin/board_university', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, slug, description, is_board, is_university, logo, board_type, university_type, state })
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
            const response = await fetch(baseUrl + '/admin/board_university');
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

    // toggle status 
    async function toggleStatus(e, id) {
        e.preventDefault();
        try {
            const response = await fetch(`${baseUrl}/admin/board_university/${id}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/josn'
                }
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                window.location.reload();
            } else {
                window.alert(jsonData.message);
            };
        } catch (error) {
            console.log(error);
        }
    };

    // Edit source handler
    async function handleEdit(e, id, name, slug, description, is_board, is_university, logo, board_type, university_type, state) {
        e.preventDefault();
        setEditSourceId(id);
        setNameEdit(name);
        setSlugEdit(slug)
        setDesceriptionEdit(description);
        setIs_boardEdit(is_board);
        setIs_universityEdit(is_university);
        setLogoEdit(logo);
        setBoard_typeEdit(board_type);
        setUniversity_typeEdit(university_type);
        setStateEdit(state);
        setShowEditPopup(true);
    };

    // Save edited source handler
    async function handleSaveEdit(e) {
        e.preventDefault();
        try {
            const response = await fetch(baseUrl + '/admin/board_university/' + editSourceId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: nameEdit, slug: slugEdit, description: descriptionEdit, is_board: is_boardEdit, is_university: is_universityEdit, logo: logoEdit, board_type: board_typeEdit, university_type: university_typeEdit, state: stateEdit })
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
            const response = await fetch(baseUrl + '/admin/board_university/' + id, {
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
                <input type='text' value={slug} placeholder='Enter slug' onChange={(e) => setSlug(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={description} placeholder='Enter description' onChange={(e) => setDesceription(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={is_board} placeholder='Enter is_board' onChange={(e) => setIs_board(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={is_university} placeholder='Enter is_university' onChange={(e) => setIs_university(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={logo} placeholder='Enter logo' onChange={(e) => setLogo(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={board_type} placeholder='Enter board type' onChange={(e) => setBoard_type(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={university_type} placeholder='Enter university type' onChange={(e) => setUniversity_type(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={state} placeholder='Enter state' onChange={(e) => setState(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
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
                                    <th scope="col" className="px-6 py-3 uppercase">is_board</th>
                                    <th scope="col" className="px-6 py-3 uppercase">is_university</th>
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
                                            {source.is_board ? 'yes' : 'no'}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {source.is_university ? 'yes' : 'no'}
                                        </th>

                                        <th scope="row" className="px-6 py-3 text-right">
                                            <div className='flex flex-row justify-end'>
                                                <button className='text-sm  rounded-md py-1 px-2' onClick={(e) => handleEdit(e, source.id, source.name, source.slug, source.description, source.is_board, source.is_university, source.logo, source.board_type, source.university_type, source.state)}> <img src={edit_icon} alt='edit' className='h-5' /> </button>
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
                            {/*  slug  */}
                            <input
                                type="text"
                                value={slugEdit}
                                placeholder='Enter slug '
                                onChange={(e) => setSlugEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/* description */}
                            <input
                                type="text"
                                value={descriptionEdit}
                                placeholder='Enter description'
                                onChange={(e) => setDesceriptionEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  is_board */}
                            <input
                                type="text"
                                value={is_boardEdit}
                                placeholder='Enter is_board'
                                onChange={(e) => setIs_boardEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  is university  */}
                            <input
                                type="text"
                                value={is_universityEdit}
                                placeholder='Enter is_university'
                                onChange={(e) => setIs_universityEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  logo  */}
                            <input
                                type="text"
                                value={logoEdit}
                                placeholder='Enter logo '
                                onChange={(e) => setLogoEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  board type */}
                            <input
                                type="text"
                                value={board_typeEdit}
                                placeholder='Enter board type'
                                onChange={(e) => setBoard_typeEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/* university type */}
                            <input
                                type="text"
                                value={university_typeEdit}
                                placeholder='Enter university type'
                                onChange={(e) => setUniversity_typeEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  state */}
                            <input
                                type="text"
                                value={stateEdit}
                                placeholder='Enter state'
                                onChange={(e) => setStateEdit(e.target.value)}
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

export default BoardUniversity;