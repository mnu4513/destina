import React, { useEffect, useState } from 'react';
import { baseUrl } from '../config';
import edit_icon from '../../assets/ico/edit.svg';
import delete_icon from '../../assets/ico/delete.svg';


const Currency = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editSourceId, setEditSourceId] = useState('');
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [search, setSearch] = useState('');
    const [filterList, setFilterList] = useState(data);
    const [name, setName] = useState('');
    const [symbol_native, setSymbol_native] = useState('');
    const [symbol, setSymbol] = useState('');
    const [code, setCode] = useState('');
    const [decimal_digits, setDecimal_digits] = useState('');
    const [name_plural, setName_plural] = useState('');
    const [type, setType] = useState('');
    const [nameEdit, setNameEdit] = useState('');
    const [symbol_nativeEdit, setSymbol_nativeEdit] = useState('');
    const [symbolEdit, setSymbolEdit] = useState('');
    const [codeEdit, setCodeEdit] = useState('');
    const [decimal_digitsEdit, setDecimal_digitsEdit] = useState('');
    const [name_pluralEdit, setName_pluralEdit] = useState('');
    const [typeEdit, setTypeEdit] = useState('');

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setFilterList(data);
    }, [data]);

    // To create new source 
    async function handleCreate(e) {
        const response = await fetch(baseUrl + '/admin/currency', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, symbol_native, symbol, decimal_digits })
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
            const response = await fetch(baseUrl + '/admin/currency');
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
            const response = await fetch(`${baseUrl}/admin/currency/${id}/status`, {
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
    async function handleEdit(e, id, name, symbol_native, symbol, code, decimal_digits, name_plural, type) {
        e.preventDefault();
        setEditSourceId(id);
        setNameEdit(name);
        setSymbol_nativeEdit(symbol_native);
        setSymbolEdit(symbol);
        setCodeEdit(code);
        setDecimal_digitsEdit(decimal_digits);
        setName_pluralEdit(name_plural);
        setTypeEdit(type);
        setShowEditPopup(true);
    };

    // Save edited source handler
    async function handleSaveEdit(e) {
        e.preventDefault();
        try {
            const response = await fetch(baseUrl + '/admin/currency/' + editSourceId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: nameEdit, symbol_native: symbol_nativeEdit, symbol: symbolEdit, code: codeEdit, decimal_digits: decimal_digitsEdit, name_plural: name_pluralEdit, type: typeEdit })
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
            const response = await fetch(baseUrl + '/admin/currency/' + id, {
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
                <input type='text' value={symbol_native} placeholder='Enter symbol native' onChange={(e) => setSymbol_native(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={symbol} placeholder='Enter symbol' onChange={(e) => setSymbol(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={code} placeholder='Enter code' onChange={(e) => setCode(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={decimal_digits} placeholder='Enter decimal digits' onChange={(e) => setDecimal_digits(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={name_plural} placeholder='Enter name plural' onChange={(e) => setName_plural(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
                <input type='text' value={type} placeholder='Enter type' onChange={(e) => setType(e.target.value)} className='border-2 border-gray-500 px-2 py-1 my-2 rounded-md w-full' />
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
                                    <th scope="col" className="px-6 py-3 uppercase">Status</th>
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
                                            <button
                                                onClick={(e) => toggleStatus(e, source.id)}
                                                className={`border ${source.status ? 'bg-green-500' : 'bg-red-500'} text-white py-1 px-2 text-sm rounded-md `}>
                                                {source.status ? 'active' : 'inactive'}
                                            </button>
                                        </th>
                                        <th scope="row" className="px-6 py-3 text-right">
                                            <div className='flex flex-row justify-end'>
                                                <button className='text-sm  rounded-md py-1 px-2' onClick={(e) => handleEdit(e, source.id, source.name, source.symbol_native, source.symbol, source.code, source.decimal_digits, source.name_plural, source.type)}> <img src={edit_icon} alt='edit' className='h-5' /> </button>
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
                            {/* symbol native  */}
                            <input
                                type="text"
                                value={symbol_nativeEdit}
                                placeholder='Enter symbol native '
                                onChange={(e) => setSymbol_nativeEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />
                            {/* symbol */}
                            <input
                                type="text"
                                value={symbolEdit}
                                placeholder='Enter symbol'
                                onChange={(e) => setSymbolEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  code */}
                            <input
                                type="text"
                                value={codeEdit}
                                placeholder='Enter code'
                                onChange={(e) => setCodeEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  decimal digits */}
                            <input
                                type="text"
                                value={decimal_digitsEdit}
                                placeholder='Enter decimal digits'
                                onChange={(e) => setDecimal_digitsEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  name plural  */}
                            <input
                                type="text"
                                value={name_pluralEdit}
                                placeholder='Enter name plural '
                                onChange={(e) => setName_pluralEdit(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full"
                            />

                            {/*  type */}
                            <input
                                type="text"
                                value={typeEdit}
                                placeholder='Enter type'
                                onChange={(e) => setTypeEdit(e.target.value)}
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

export default Currency;