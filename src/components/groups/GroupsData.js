import React, { useEffect, useState } from 'react';
import { baseUrl } from '../config';
import { Link } from 'react-router-dom';
import school_icon from '../../assets/ico/school.svg';
import edit_icon from '../../assets/ico/edit.svg';
import delete_icon from '../../assets/ico/delete.svg';

const GroupTable = () => {
    const [columnVisibility, setColumnVisibility] = useState({
        institute_group_name: true,
        email: false,
        phone: false,
        contact_person: true,
        website_url: false,
        established_year: false,
        group_type: false,
        status: true
    });

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filterList, setFilterList] = useState(data);

    const [institute_group_name, setinstitute_group_name] = useState('');
    const [slug, setSlug] = useState('');
    const [about_group, setabout_group] = useState('');
    const [headquarter_address, setheadquarter_address] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [contact_person, setcontact_person] = useState('');
    const [contact_person_phone, setcontact_person_phone] = useState('');
    const [contact_person_email, setcontact_person_email] = useState('');
    const [website_url, setwebsite_url] = useState('');
    const [established_year, setestablished_year] = useState('');
    const [group_type, setgroup_type] = useState('');
    const [logo_url, setlogo_url] = useState('');
    const [logo_small_url, setlogo_small_url] = useState('');
    const [favicon_url, setfavicon_url] = useState('');
    const [password, setpassword] = useState('');
    const [domain, setdomain] = useState('');
    const [tenancy_db_name, settenancy_db_name] = useState('');
    const [tenancy_db_username, settenancy_db_username] = useState('');
    const [tenancy_db_password, settenancy_db_password] = useState('');

    const [institute_group_nameEdit, setinstitute_group_nameEdit] = useState('');
    const [slugEdit, setSlugEdit] = useState('');
    const [about_groupEdit, setabout_groupEdit] = useState('');
    const [headquarter_addressEdit, setheadquarter_addressEdit] = useState('');
    const [emailEdit, setEmailEdit] = useState('');
    const [phoneEdit, setPhoneEdit] = useState('');
    const [contact_personEdit, setcontact_personEdit] = useState('');
    const [contact_person_phoneEdit, setcontact_person_phoneEdit] = useState('');
    const [contact_person_emailEdit, setcontact_person_emailEdit] = useState('');
    const [website_urlEdit, setwebsite_urlEdit] = useState('');
    const [established_yearEdit, setestablished_yearEdit] = useState('');
    const [group_typeEdit, setgroup_typeEdit] = useState('');
    const [logo_urlEdit, setlogo_urlEdit] = useState('');
    const [logo_small_urlEdit, setlogo_small_urlEdit] = useState('');
    const [favicon_urlEdit, setfavicon_urlEdit] = useState('');
    const [passwordEdit, setpasswordEdit] = useState('');
    const [domainEdit, setdomainEdit] = useState('');
    const [tenancy_db_nameEdit, settenancy_db_nameEdit] = useState('');
    const [tenancy_db_usernameEdit, settenancy_db_usernameEdit] = useState('');
    const [tenancy_db_passwordEdit, settenancy_db_passwordEdit] = useState('');


    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        setFilterList(data);
    }, [search]);

    // Create a new group 
    async function createGroup() {
        try {
            const response = await fetch(baseUrl + '/superadmin/institute_group', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            });
            const jsonData = await response.json();
            if (jsonData.success) {
                window.location.reload();
            } else {
                window.alert(jsonData.message);
            }
        } catch (error) {
            console.log(error);
        };
    };

    // fetch groups data
    async function fetchData() {
        try {
            const respose = await fetch(baseUrl + '/superadmin/institute_group');
            const jsonData = await respose.json();
            if (jsonData.success) {
                setData(jsonData.data);
            } else {
                window.alert(jsonData.message);
            };
        } catch (error) {
            console.log(error);
        };
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
            if (jsonData.success) {
                window.alert('Deleted');
            } else {
                window.alert(jsonData.message);
            };
        } catch (error) {
            console.log(error);
        };
    };

    // Status handler 
    const handlestatusToggle = async (id) => {
        try {
            const respose = await fetch(`${baseUrl}/superadmin/institute_group/${id}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jsonData = await respose.json();
            if (jsonData.success) {
                window.location.reload();
            } else {
                window.alert(jsonData.message);
            };
        } catch (error) {
            console.error(error);
        };
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
                <img src={school_icon} onClick={(e) => handleSearch(e)} alt='' />
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
                <thead className="bg-gray-200 uppercase">
                    <tr>
                        {Object.keys(columnVisibility).map((columnName) => (
                            <th key={columnName} className={`border p-2 ${columnVisibility[columnName] ? '' : 'hidden'}`}>
                                {handleColumnName(columnName)}
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3 flex-shrink-0 text-right mr-3">action</th>
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
                                        ) : (
                                            row[columnName]
                                        )
                                    }
                                </td>
                            ))}
                            <th scope="row" className="px-6 py-3 text-right">
                                <div className='flex flex-row justify-end'>
                                    <button className='text-sm  rounded-md py-1 px-2' onClick={(e) => handleEdit(e, row.id, row.name, row.slug, row.url, row.logo_url, row.description)}> <img src={edit_icon} alt='edit' className='h-5' /> </button>
                                    <button className='text-sm  rounded-md py-1 px-2 ml-2' onClick={(e) => handleDelete(e, row.id)}> <img src={delete_icon} alt='delete' className='h-5' /> </button>
                                </div>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default GroupTable;
