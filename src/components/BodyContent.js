import React from 'react';
import { Link } from 'react-router-dom';
import CompletedSection from './CompletedSection';
import './CSS/BodyContent.css';
import SearchBar from './SearchBar';
import ToDoSection from './ToDoSection';


const BodyContent = () => {
    return (
        <div className="bg-light">
            <div className="bg-light body-content">
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <h3 className="navbar-brand fw-bold" href="#">To Do List</h3>
                        <form className="d-flex">
                            {/* <button className="btn btn-outline-success bg-primary text-white" type="submit"> */}
                                <Link to="/add" className="btn btn-outline-success bg-primary text-white" >Add To Do</Link>
                            {/* </button> */}
                        </form>
                    </div>
                </nav>
            </div>
            <div className="body-content">
                <SearchBar />
                <ToDoSection />
                <div style={{padding: "20px 0"}}>
                    <hr/>
                </div>
                <CompletedSection />
            </div>
        </div>
    )
}

export default BodyContent;