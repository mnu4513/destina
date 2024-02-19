import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditGroup = () => {

    const { group_id } = useParams();

    const [formData, setFormData] = useState({
        institute_group_name: '',
        slug: '',
        about_group: '',
        headquarter_address: '',
        email: '',
        phone: '',
        contact_person: '',
        contact_person_phone: '',
        contact_person_email: '',
        website_url: '',
        established_year: '',
        group_type: '',
        logo_url: '',
        logo_small_url: '',
        favicon_url: '',
        password: '',
        domain: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                {/* Input Fields */}
                {Object.keys(formData).map((field, index) => (
                    <div key={index} className="mb-4">
                        <label htmlFor={field} className="block text-sm font-medium text-gray-600">
                            {field.replace(/_/g, ' ')}
                        </label>
                        <input
                            type="text"
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                ))}

                {/* Submit Button */}
                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditGroup;
