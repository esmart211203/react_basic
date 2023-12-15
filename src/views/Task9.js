import { useEffect, useState } from "react";
import { useFetch } from "../services/useFetch"

export const Task9 = () =>{
    const { data, isErrors,isLoading } = useFetch('https://jsonplaceholder.typicode.com/todos');
    const [selectedValue, setSelectedValue] = useState('all');
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        if (data) {
          if (selectedValue === "true") {
            setFilteredData(data.filter((item) => item.completed));
          } else if (selectedValue === "false") {
            setFilteredData(data.filter((item) => !item.completed));
          } else if (selectedValue === "all") {
            setFilteredData(data);
          }
        }
      }, [data, selectedValue]);
    const handleFilter = (value) => {
        setSelectedValue(value);
        if (value === 'true') {
          setFilteredData(data.filter((item) => item.completed));
        } else if (value === 'false') {
          setFilteredData(data.filter((item) => !item.completed));
        } else if (value === 'all') {
          setFilteredData(data);
        }
      };
    return(
        <>
            <select  className="form-select mt-3 mb-2" value={selectedValue} onChange={(e) => handleFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="true">Completed</option>
                <option value="false">Not Completed</option>
            </select>
            {isLoading && <div>Please waiting to minutes</div>}
            {isErrors && <div>Server 500</div>}
            {filteredData && filteredData.length > 0 && filteredData.map(item => (
                <p key={item.id}>TITLE: {item.title} {item.completed ? <small className="text-info">isComplated</small> : <small className="text-danger">isNotCompleted</small>}</p>
            ))}
        </>
    )
}