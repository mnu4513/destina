import React, { useState } from 'react';
import { data } from '../config';

const Admission = () => {

    const { student, parent } = data.data;

    const [admissionData, setAdmissionData] = useState({
        admission_number: '',
        roll_number: '',
        admission_date: '',
        Class: '',
        Section: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        gender: '',
        date_of_birth: '',
        category: '',
        religion: '',
        caste: '',
        mobile_number: '',
        email: '',
        student_profile_photo_url: '',
        blood_group: '',
        aadhar_number: '',
        current_address: '',
        permanent_address: '',
        'bus_facility_required?': false,
        'hostel_facility_required?': false,
        'physical_disability?': false,
        if_any_physical_disability: '',
        national_identification_number: '',
        local_identification_number: '',
        rte: '',
        note: '',
        status: '',
        parent_status: '',
        staff_status: '',
        parent_id: '',
        institute_id: '',
        parent_institute_id: '',
        father_name: '',
        mother_name: '',
        father_occupation: '',
        mother_occupation: '',
        father_phone: '',
        mother_phone: '',
        father_email: '',
        mother_email: '',
        father_qualification: '',
        mother_qualification: '',
        father_annual_income: '',
        mother_annual_income: '',
        father_photo: '',
        mother_photo: '',
        guardian_name: '',
        guardian_photo: '',
        guardian_aadhar_number: '',
        guardian_occupation: '',
        guardian_annual_income: '',
        guardian_qualification: '',
        guardian_phone: '',
        guardian_email: '',
        guardian_relation: '',
        current_address: '',
        permanent_address: ''
    })


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Update the state based on the input type
        setAdmissionData((prevData) => ({
            ...prevData,
            [name]: type === 'radio' ? checked : value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(admissionData);
    }

    function labelHandle(e) {
        const x = e.split('_');
        const newAr = x.map((ele) => {
            const upper = ele.slice(0, 1).toUpperCase();
            const rest = ele.slice(1);
            const result = upper + rest;
            return result
        })
        return newAr.join(' ');
    };

    return (
        <div className='py-5 font-sans flex flex-col' >
            {/* Students Details */}
            <div className='flex flex-col'>
                <div className='flex flex-row justify-between px-5 py-2 bg-gray-300'>
                    <h3 className='text-2xl'>Student Details</h3>
                    <button className='bg-gray-600 text-white px-3 py-1 border-2 border-white rounded-md hover:bg-white hover:text-gray-600 hover:border-gray-600' >Import Student</button>
                </div>
                {
                    Object.entries(student)?.map(([key, value]) => {
                        return (
                            <div key={key} className='flex flex-col flex-wrap justify-start text-start my-3'>
                                <h1 className='text-2xl px-5'> {key} </h1>
                                <div className='flex flex-row flex-wrap items-center justify-start mx-5 my-3'>
                                    {
                                        value.map((x) => {
                                            return (
                                                <div>
                                                    <form key={x.name} className='flex flex-col mx-3 space-y-2 max-w-sm'>
                                                        <label htmlFor={x.name}> {labelHandle(x.name)} </label>
                                                        {
                                                            x.type === 'select'
                                                                ?
                                                                <select value={admissionData[x.name]} name={x.name} key={x.name} className='border-2 target:border-3 px-3 py-2 rounded-md' onChange={handleChange}>
                                                                    {
                                                                        x.field_value.split(', ')?.map((opt) => {
                                                                            return <option key={opt}> {opt} </option>
                                                                        })
                                                                    }
                                                                </select>
                                                                :
                                                                <input value={admissionData[x.name]} name={x.name} onChange={handleChange} key={x.name} className='border-2 target:border-3 px-3 py-2 rounded-md' type={x.type} placeholder={labelHandle(`Enter ${x.name}`)} id={x.name} />
                                                        }
                                                    </form>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Parent Details */}
            <div className='flex flex-col'>
                <p className='text-start flex flex-row justify-between px-5 py-2 bg-gray-300 text-2xl mt-6'>Parent Details</p>
                {
                    Object.entries(parent)?.map(([key, value]) => {
                        return (
                            <div key={key} className='flex flex-col flex-wrap justify-start text-start my-3'>
                                <h1 className='text-2xl px-5'> {key} </h1>
                                <div className='flex flex-row flex-wrap items-center justify-start mx-5 my-3'>
                                    {
                                        value.map((x) => {
                                            return (
                                                <form key={x.name} className='flex flex-col mx-3 space-y-2 max-w-sm'>
                                                    <label htmlFor={x.name}> {labelHandle(x.name)} </label>
                                                    {
                                                        x.type !== 'select' ?
                                                            <input value={admissionData[x.name]} name={x.name} onChange={handleChange} key={x.name} className='border-2 target:border-3 px-3 py-2 rounded-md' type={x.type} placeholder={labelHandle(`Enter ${x.name}`)} id={x.name} /> :
                                                            <select value={admissionData[x.name]} name={x.name} onChange={handleChange} key={x.name} className='border-2 target:border-3 px-3 py-2 rounded-md'>
                                                                {
                                                                    x.field_value.split(', ')?.map((opt) => {
                                                                        return <option key={opt}> {opt} </option>
                                                                    })
                                                                }
                                                            </select>
                                                    }
                                                </form>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-row justify-end px-8'>
                <button onClick={handleSubmit} className='border-2 text-white bg-gray-600 px-3 py-1 rounded-md hover:bg-white hover:text-gray-600 hover:border-gray-600 max-w-min' >Save</button>
            </div>
        </div>
    );
};

export default Admission;