import React from 'react'





const Filtered = ({ filter, setFilter}) => {

    const handlefilterChange = (event) => {

        setFilter(event.target.value)
    }



    return (
        <div>
            filter shown with: <input value={filter} onChange={handlefilterChange} />
        </div>
    )
}



export default Filtered