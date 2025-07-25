import React, {useState} from 'react'
const TableData = () => {
    const [students]=useState(
        [
            {Sno:1,name:'Revanth',course:'react',fee:9000},
            {Sno:2,name:'kumar',course:'python',fee:19000},
            {Sno:3,name:'chiru',course:'web',fee:15000}
        ]
    )
  return (
    <div>
        <h2>Student Data:</h2>
        <table className='table'>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>course</th>
                <th>fee</th>
            </tr>
            <body>
                {students.map(student=>
                    <tr key={student.Sno}>
                        <td>{student.Sno}</td>
                        <td>{student.name}</td>
                        <td>{student.course}</td>
                        <td>{student.fee}</td>
                    </tr>
                )}
            </body>
        </table>
        <hr/>
    </div>
  )
}

export default TableData