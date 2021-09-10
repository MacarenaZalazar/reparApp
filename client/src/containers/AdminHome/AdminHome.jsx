import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTechUsersAll } from '../../redux/actions/techUsers/index';
import {getAllJobRequests} from '../../redux/actions/allUsers/index';
import TechnicUser from '../../components/TechnicUser/TechnicUser';
import JobRequestCard from '../../components/JobRequestCard/JobRequestCard';
import Carousel from 'react-bootstrap/Carousel'

const AdminHome = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTechUsersAll())
        dispatch(getAllJobRequests())
    },[])

    const {allRequests, techUsers} = useSelector(state => state)

    return (
        <>
            <Carousel>
                {techUsers && techUsers.map((t, idx)=>{
                    return <>
                                <Carousel.Item key={idx}>
                                <TechnicUser   id={t.id} name={t.name} lastName={t.lastName} user={t.user} 
                                image={t.image} score={t.score} workZones={t.workZones} jobTypes={t.jobTypes} />
                                </Carousel.Item>
                    </>
                })}
            </Carousel>
            <Carousel>
                <Carousel.Item>
                    {allRequests && allRequests.map((j,idx) => {
                        return <>
                             <Carousel.Item key={idx}>
                                <JobRequestCard   id={t.id} name={t.name} lastName={t.lastName} user={t.user} 
                                image={t.image} score={t.score} zones={t.zones} jobType={t.jobType} request={request} />
                                </Carousel.Item>
                        </>
                    })}
            </Carousel.Item>

            </Carousel>


            
        </>
    );
};

export default AdminHome;