import { useState, useEffect } from "react";
import http from "../http"
import { Link } from "react-router-dom";

export default function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchAllBlogs();
    }, []);

    const fetchAllBlogs = () => {
        http.get('/blogs').then(response => {
            setBlogs(response.data.blogs); // Set the appropriate part of the response
        }).catch(error => {
            console.error("Error fetching blogs:", error);
        });
    }
    return (

        <div>
            <h2>Blog listing ...</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={blog.id}>
                            <td>{++index}</td>
                            <td>
                                <img src={blog.image} alt={blog.title} className="imgWidth" />
                            </td>
                            <td>{blog.title}</td>
                            <td>{blog.author.name}</td>
                            <td>{blog.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}