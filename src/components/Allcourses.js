import React, {useEffect, useState} from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const Allcourses = () => {

    useEffect(() => {
        document.title ="All course || Hello React";
    }, []);

    //function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success
                // console.log(response);
                console.log(response.data); 
                toast.success("courses has been loaded", {
                    position:"bottom-center"
                });
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };

    //calling loading course function
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const [courses,setCourses]=useState([
                {title:"Java Course", description:"This is a java course."},
                {title:"Spring Boot Course", description:"This is a Spring Boot course."},
                {title:"React js Course", description:"This is a React js course."},
                {title:"Angular Course", description:"This is a Angular course."}
    ]);


    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id != id));
    }


    return (
        <div>
            <h1>All courses</h1>
            <p>List of courses are as follows</p>

            {
                courses.length > 0 
                ? courses.map((item)=> <Course key={item.id} course={item} update={updateCourses}/>)
                : "No courses"
            }
        </div>
    )
}


export default Allcourses;