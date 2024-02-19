import React, { useEffect, useState } from 'react';
import { baseUrl } from '../config';
import { Link } from 'react-router-dom';
import school_icon from '../../assets/ico/school.svg';

const rows = [
    {
        "id": "18725b6d-d770-4e4b-93c9-3d62701d9764",
        "institute_group_name": "Dummy 1 Institute Group",
        "slug": null,
        "about_group": null,
        "headquarter_address": "Belgavi",
        "email": "test1@gmail.com",
        "phone": "1231231236",
        "contact_person": "User",
        "contact_person_phone": null,
        "contact_person_email": null,
        "website_url": 'group_url',
        "established_year": null,
        "group_type": "private",
        "logo_url": null,
        "logo_small_url": null,
        "favicon_url": null,
        "status": 1,
        "tenancy_db_name": "u800761312_app1",
        "tenancy_db_username": "u800761312_app1",
        "tenancy_db_password": "u800761312_App1",
        "created_by": null,
        "updated_by": null,
        "deleted_by": null,
        "password": "$2y$12$iPN.aA3KcaKQCsMqNhX1QuUTBozTpdQvSu\/gG2S5TxJRT2G1i8flK",
        "deleted_at": null,
        "created_at": "2024-02-17T10:10:11.000000Z",
        "updated_at": "2024-02-17T10:10:11.000000Z",
        "data": null,
        "domains": [
            {
                "id": 2,
                "domain": "app1",
                "tenant_id": "18725b6d-d770-4e4b-93c9-3d62701d9764",
                "created_at": null,
                "updated_at": null
            }
        ]
    },
    {
        "id": "18725b6d-d770-4e4b-93c9-3d62701d9765",
        "institute_group_name": "Dummy 2 Institute Group",
        "slug": null,
        "about_group": null,
        "headquarter_address": "Belgavi",
        "email": "test1@gmail.com",
        "phone": "1231231236",
        "contact_person": "User",
        "contact_person_phone": null,
        "contact_person_email": null,
        "website_url": 'group_url',
        "established_year": null,
        "group_type": "private",
        "logo_url": null,
        "logo_small_url": null,
        "favicon_url": null,
        "status": 1,
        "tenancy_db_name": "u800761312_app1",
        "tenancy_db_username": "u800761312_app1",
        "tenancy_db_password": "u800761312_App1",
        "created_by": null,
        "updated_by": null,
        "deleted_by": null,
        "password": "$2y$12$iPN.aA3KcaKQCsMqNhX1QuUTBozTpdQvSu\/gG2S5TxJRT2G1i8flK",
        "deleted_at": null,
        "created_at": "2024-02-17T10:10:11.000000Z",
        "updated_at": "2024-02-17T10:10:11.000000Z",
        "data": null,
        "domains": [
            {
                "id": 2,
                "domain": "app1",
                "tenant_id": "18725b6d-d770-4e4b-93c9-3d62701d9764",
                "created_at": null,
                "updated_at": null
            }
        ]
    },
    {
        "id": "18725b6d-d770-4e4b-93c9-3d62701d9766",
        "institute_group_name": "Dummy 3 Institute Group",
        "slug": null,
        "about_group": null,
        "headquarter_address": "Belgavi",
        "email": "test1@gmail.com",
        "phone": "1231231236",
        "contact_person": "User",
        "contact_person_phone": null,
        "contact_person_email": null,
        "website_url": 'group_url',
        "established_year": null,
        "group_type": "private",
        "logo_url": null,
        "logo_small_url": null,
        "favicon_url": null,
        "status": 1,
        "tenancy_db_name": "u800761312_app1",
        "tenancy_db_username": "u800761312_app1",
        "tenancy_db_password": "u800761312_App1",
        "created_by": null,
        "updated_by": null,
        "deleted_by": null,
        "password": "$2y$12$iPN.aA3KcaKQCsMqNhX1QuUTBozTpdQvSu\/gG2S5TxJRT2G1i8flK",
        "deleted_at": null,
        "created_at": "2024-02-17T10:10:11.000000Z",
        "updated_at": "2024-02-17T10:10:11.000000Z",
        "data": null,
        "domains": [
            {
                "id": 2,
                "domain": "app1",
                "tenant_id": "18725b6d-d770-4e4b-93c9-3d62701d9764",
                "created_at": null,
                "updated_at": null
            }
        ]
    },
    {
        "id": "18725b6d-d770-4e4b-93c9-3d62701d9767",
        "institute_group_name": "Dummy 4 Institute Group",
        "slug": null,
        "about_group": null,
        "headquarter_address": "Belgavi",
        "email": "test1@gmail.com",
        "phone": "1231231236",
        "contact_person": "User",
        "contact_person_phone": null,
        "contact_person_email": null,
        "website_url": 'group_url',
        "established_year": null,
        "group_type": "private",
        "logo_url": null,
        "logo_small_url": null,
        "favicon_url": null,
        "status": 1,
        "tenancy_db_name": "u800761312_app1",
        "tenancy_db_username": "u800761312_app1",
        "tenancy_db_password": "u800761312_App1",
        "created_by": null,
        "updated_by": null,
        "deleted_by": null,
        "password": "$2y$12$iPN.aA3KcaKQCsMqNhX1QuUTBozTpdQvSu\/gG2S5TxJRT2G1i8flK",
        "deleted_at": null,
        "created_at": "2024-02-17T10:10:11.000000Z",
        "updated_at": "2024-02-17T10:10:11.000000Z",
        "data": null,
        "domains": [
            {
                "id": 2,
                "domain": "app1",
                "tenant_id": "18725b6d-d770-4e4b-93c9-3d62701d9764",
                "created_at": null,
                "updated_at": null
            }
        ]
    },
    {
        "id": "18725b6d-d770-4e4b-93c9-3d62701d9768",
        "institute_group_name": "Dummy 5 Institute Group",
        "slug": null,
        "about_group": null,
        "headquarter_address": "Belgavi",
        "email": "test1@gmail.com",
        "phone": "1231231236",
        "contact_person": "User",
        "contact_person_phone": null,
        "contact_person_email": null,
        "website_url": 'group_url',
        "established_year": null,
        "group_type": "private",
        "logo_url": null,
        "logo_small_url": null,
        "favicon_url": null,
        "status": 1,
        "tenancy_db_name": "u800761312_app1",
        "tenancy_db_username": "u800761312_app1",
        "tenancy_db_password": "u800761312_App1",
        "created_by": null,
        "updated_by": null,
        "deleted_by": null,
        "password": "$2y$12$iPN.aA3KcaKQCsMqNhX1QuUTBozTpdQvSu\/gG2S5TxJRT2G1i8flK",
        "deleted_at": null,
        "created_at": "2024-02-17T10:10:11.000000Z",
        "updated_at": "2024-02-17T10:10:11.000000Z",
        "data": null,
        "domains": [
            {
                "id": 2,
                "domain": "app1",
                "tenant_id": "18725b6d-d770-4e4b-93c9-3d62701d9764",
                "created_at": null,
                "updated_at": null
            }
        ]
    }
    // ... (other rows)
];

const GroupTable = () => {
    const [columnVisibility, setColumnVisibility] = useState({
        institute_group_name: true,
        email: false,
        phone: false,
        contact_person: true,
        website_url: false,
        established_year: false,
        group_type: false,
        status: true,
        delete: true,
        edit: false
    });

    const [data, setData] = useState(rows);
    const [search, setSearch] = useState('');
    const [filterList, setFilterList] = useState(data);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const respose = await fetch(baseUrl + '/superadmin/institute_group');
            const jsonData = await respose.json();
            // console.log(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    // column name handler 
    const handleColumnName = (str) => {
        const ar = str.split('_');
        const arChangeCase = ar.map(e => e.toUpperCase());
        const result = arChangeCase.join(' ');
        return result;
    };

    // search handler 
    function handleSearch(e) {
        e.preventDefault();
        const list = data.filter((e) => e.institute_group_name.toLowerCase().includes(search.toLowerCase()));
        setFilterList(list);
    };

    const handleColumnVisibilityChange = (columnName) => {
        if (columnName === 'institute_group_name') {
            return;
        }
        setColumnVisibility((prevVisibility) => ({
            ...prevVisibility,
            [columnName]: !prevVisibility[columnName],
        }));
    };

    // Delete handler 
    const handleDelete = async (id) => {
        try {
            const respose = await fetch(`${baseUrl}/superadmin/institute_group/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jsonData = await respose.json();
            console.log(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    // Status handler 
    const handlestatusToggle = async (id) => {
        try {
            const updatedData = filterList.map((row) => {
                if (row.id === id) {
                    return {
                        ...row,
                        status: row.status === '0' ? '1' : '0',
                    };
                }
                return row;
            });
            setData(updatedData);

            const respose = await fetch(`${baseUrl}/superadmin/institute_group/${id}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jsonData = await respose.json();
            console.log(jsonData);
            // const respose = await fetch(baseUrl + '/superadmin/institute_group/' + id + '/'+ 'status')


            // Simulate backend update with a delay
            // await new Promise((resolve) => setTimeout(resolve, 1000));
            // console.log(`status updated as for ID ${id} as ${status}`);
        } catch (error) {
            console.error('Error during status update:', error);
        }
    };

    const handleCheckboxChange = (columnName) => {
        handleColumnVisibilityChange(columnName, !columnVisibility[columnName]);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className="mx-auto my-8">
            <div className='flex flex-row justify-center space-x-3'>
                <input className='border py-2 px-3 rounded-md' type='text' placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
                <img src={school_icon} onClick={(e) => handleSearch(e)} />
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div
                    className="p-6 cursor-pointer"
                    onClick={handleToggle}
                >
                    <h2 className="text-lg font-semibold"> -- Select Columns -- </h2>
                </div>
                {isOpen && (
                    <div className="flex flex-col items-center">
                        {Object.keys(columnVisibility).slice(1).map((columnName) => (
                            <label key={columnName} className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    checked={columnVisibility[columnName]}
                                    onChange={() => handleCheckboxChange(columnName)}
                                    className="form-checkbox text-blue-500"
                                />
                                <span className="ml-2">{columnName}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>



            <table className="w-full border-collapse border rounded">
                <thead className="bg-gray-200">
                    <tr>
                        {Object.keys(columnVisibility).map((columnName) => (
                            <th key={columnName} className={`border p-2 ${columnVisibility[columnName] ? '' : 'hidden'}`}>
                                {handleColumnName(columnName)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filterList.map((row) => (
                        <tr key={row.id}>
                            {Object.keys(columnVisibility).map((columnName) => (
                                <td key={`${row.id}-${columnName}`} className={`border p-2 ${columnVisibility[columnName] ? '' : 'hidden'}`}>
                                    {
                                        columnName === 'institute_group_name' ? (
                                            <Link to={`/group/view-group/${row.id}`} >
                                                {row.institute_group_name}
                                            </Link>
                                        ) : columnName === 'status' ? (

                                            <button
                                                onClick={() => handlestatusToggle(row.id)}
                                                className={`text-white text-sm ${row.status === '0' ? 'bg-red-500' : 'bg-green-500'
                                                    } py-1 px-2 rounded-md`}
                                            >
                                                {row.status === '0' ? 'inactive' : 'active'}
                                            </button>
                                        ) : columnName === 'delete' ? (

                                            <button
                                                onClick={() => handleDelete(row.id)}
                                                className={`text-white text-sm bg-red-500 py-1 px-2 rounded-md`}
                                            >
                                                Delete
                                            </button>
                                        ) : columnName === 'edit' ? (
                                            <Link to={`/group/edit-group/${row.id}`} >
                                                <button className={`text-white text-sm bg-green-500 py-1 px-2 rounded-md`}>
                                                    Edit
                                                </button>
                                            </Link>
                                        ) : (
                                            row[columnName]
                                        )
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default GroupTable;
