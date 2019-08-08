import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'react-moment'
import { reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';

import { Card, Button, CardHeader, TextField } from '@material-ui/core';


const card_student = {
  'max-width': '400px',
  'border': '1px solid #333'
}
let item = {
  id: 0,
  lastName: '',
  firstName: '',
  enrollmentDate: ''
}



export class StudentEdit extends Component {
  constructor(props) {
    super(props);
    
  }


  handleChange = (event) => {
    debugger;
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.props.changeValue({...this.props.student, [name]: value});
  }
  handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    this.props.update(this.props.student, this.props.history);
  }

  render() {
    
    return <div className="student">
      <div className='container'>
        <div className='row'>
          <Card className='student_card' style={{ width: '50%', padding: "10px" }}>

            <CardHeader
              title="Update"
              subheader="заполните все поля"
            />
            <form className="create_student" onSubmit={this.handleSubmit} noValidate autoComplete="off">
              <TextField 
                style={{ width: "100%" }}
                id="standard-name"
                label="LastName"
                name='lastName'
                value={this.props.student.lastName}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField  
                style={{ width: "100%" }}
                id="standard-name"
                label="FirstName"
                InputLabelProps={{
                  shrink: true,
                }}
                value={this.props.student.firstName}
                onChange={this.handleChange}
                name='firstName'
                margin="normal"
              />
              <TextField 
                style={{ width: "100%" }}
                id="standard-name"
                InputLabelProps={{
                  shrink: true,
                }}
                label="EnrollmentDate"
                value={this.props.student.enrollmentDate}
                name='enrollmentDate'
                onChange={this.handleChange}
                margin="normal"
              />
              <Button style={{ margin: "20px auto" }} type="submit">Update</Button>
            </form>

          </Card>


        </div>
      </div>
    </div>


  }

}

StudentEdit = reduxForm({
  form: 'update',
})(StudentEdit)