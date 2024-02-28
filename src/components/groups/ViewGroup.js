import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../config';


const ViewGroup = () => {

    const { group_id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [group_id]);

    async function getData() {
        try {
            const respose = await fetch(`${baseUrl}/superadmin/institute_group/${group_id}`);
            const jsonData = await respose.json();
            setData(jsonData.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            {
                loading ? <h2>loading</h2> :
                    <h2>group_id = {group_id} </h2>
            }

            id: {data?.id}
        </div>
    );
};

export default ViewGroup;