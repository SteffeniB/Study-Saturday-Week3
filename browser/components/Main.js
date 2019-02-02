import React from 'react';
import Axios from 'axios';
import StudentList from './StudentList';
import { runInNewContext } from 'vm';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
    this.getStudents = this.getStudents.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }
  async getStudents() {
    console.log('fetching');
    try {
      const allStudents = await Axios.get('/student');
      this.setState({ students: allStudents.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <div>
          <StudentList students={this.state.students} />
        </div>
      </div>
    );
  }
}
