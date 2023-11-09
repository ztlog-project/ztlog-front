import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TagList() {
    const listWraper = {
        padding: "50px", height: "850px"
    }

    const [tags, setTags] = useState<any[]>([]);

    useEffect(() => {
        axios.get("https://ztlogapi.com/api/tags")
            .then((response) => {
                setTags(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="col-md-10 col-lg-8 col-xl-7" style={listWraper}>
            <div className="post-meta">
            {tags && tags.map((e) => (
                <Link to="#" key={e.tag_no} className="tag">{e.tag_name} <span>{e.tag_count}</span> </Link>
                ))}
            </div>
        </div>
    );
}