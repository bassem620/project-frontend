import { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("");
    const onChange = e => {
        setSearch(e.target.value);
    }
    return (
        <>
        <div className="search">
            <div className="container-lg">
                <input 
                    type="text"
                    className="py-2 px-4 border-0"
                    name="search"
                    id="search"
                    value={search}
                    placeholder="Search for cars, guitar and more..."
                    onChange={onChange}
                />
            </div>
        </div>
        </>
    );
}

export default Search;