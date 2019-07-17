import React from 'react';
import { useSelector } from "react-redux";

export default function CourseList() {

    const courses = useSelector(state => state.data)

    return (
        <ul>
            {
                courses.map((course, index) => <li key={`${index}`}>{course}</li>)
            }
        </ul>
    );
}
