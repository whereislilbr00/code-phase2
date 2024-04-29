import { type } from "@testing-library/user-event/dist/type"
import Row from "./Row"
 export default function Table(){

    const transactions = [
        {
            date: "23/02/2023",
            description: "Buy",
            category: "Food",
            amount: "$1000"

        },
        {
            date: "03/08/2013",
            description: "Salary",
            category: "Income",
            amount: "$2500"

        },
        {
            date: "11/06/2018",
            description: "Business",
            category: "Expenditure",
            amount: "$3000"

        },
        {
            date: "15/09/2022",
            description: "Personal items",
            category: "shopping",
            amount: "$200"

        }
    ]
    return( 
        <>
        <div classname="m-7 p-7">
            <input className="form-control form-control-sm" type="text" placeholder="Type transaction" />
        </div>
        <table className="table table-dark">
             <thead>
                 <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                 </tr>
             </thead>
             <tbody>

                 <Row transactions={transactions}/>
             </tbody>
        </table>
        </>
    )
} 