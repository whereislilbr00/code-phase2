import {useState} from 'react';
function Form() {
    const [formData, setFormData] = useState()

    function handleSubmit(e) {
        e.preventDefault();
        console.log();
    }

    function handleChange(e) {
console.log(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}className="container mt-2 border">
            <div className="row mx-auto g-2">
                <div className="p-2">
                    <label>Date</label>
                    <input type="date" className="form-control" onChange={handleChange}/>
                </div>
                <div className="p-2 ">
                    <input type="text" className="form-control" placeholder="Description" onChange={handleChange}/>
                </div>
                <div className="p-2">
                    <input type="text" className="form-control" placeholder="Category" onChange={handleChange}/>
                </div>
                <div className="p-2 ">
                    <input type="text" className="form-control" placeholder="Amount" onChange={handleChange}/>
                </div>
                <div>
                    <button>Add Transaction</button>
                </div>
            </div>
        </form>
    )
}
export default Form;