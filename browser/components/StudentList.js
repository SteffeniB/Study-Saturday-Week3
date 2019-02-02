import React from 'react';

const StudentList = props => {
  const students = props.students;

  console.log(props);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Students:</td>
          </tr>
          {students.map(student => {
            return (
              <tr key={student.id}>
                <td>{student.fullName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
