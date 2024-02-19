import React, { useEffect, useState } from 'react';
import { baseUrl } from '../config';

const AllSessions = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    // To fetch all sessions
    async function getData() {
        try {
            const respose = await fetch(baseUrl + '/admin/session');
            const jsonData = await respose.json();
            if (jsonData.success) {
                setData(jsonData.data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-full mx-auto my-8">
            {
                loading ? <h3>Loading</h3> :
                    <table className="min-w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 py-2 px-4">ID</th>
                                <th className="border border-gray-300 py-2 px-4">Session</th>
                                <th className="border border-gray-300 py-2 px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((session) => (
                                <tr key={session.id}>
                                    <td className="border border-gray-300 py-2 px-4">{session.id}</td>
                                    <td className="border border-gray-300 py-2 px-4">{session.session}</td>
                                    <td className="border border-gray-300 py-2 px-4">{session.status ? 'active' : 'inactive'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default AllSessions;