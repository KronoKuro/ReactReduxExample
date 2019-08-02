import React, { Component, useState} from 'react';
import {connect }  from 'react-redux';
import moment from 'react-moment'
import { reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';

import { Card, Button, CardHeader, TextField } from '@material-ui/core';


const card_student = {
    'max-width': '400px',
    'border': '1px solid #333'   
}

export class StudentCreate extends Component {
  constructor(props){
    super(props);
  }

  handleChange = (event) => {
    debugger;
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.props.student[name] = value;
  }
  handleSubmit = (e) => {
    debugger;
    console.log(this.props.student);
    e.preventDefault(); 
    this.props.create(this.props.student, this.props.history);
    //this.props.history.push('/students');
  }

  render() {
   
        return  <div className="student">
        <div className='container'>
            <div className='row'>
            <Card className='student_card' style={{ width: '50%', padding: "10px" }}>
    
            <CardHeader
                title="Create"
                subheader="заполните все поля"
              />
              <form className="create_student" onSubmit={ this.handleSubmit } noValidate autoComplete="off">
      <TextField {...this.props.student.lastName}
        style={{ width: "100%" }}
        id="standard-name"
        label="LastName"
        name='lastName'
        onChange={this.handleChange}
        margin="normal"
      />
      <TextField {...this.props.student.firstName}
      style={{ width: "100%" }}
        id="standard-name"
        label="FirstName"
        onChange={this.handleChange}
        name='firstName'
        margin="normal"
      />
      <TextField
      {...this.props.student.enrollmentDate}
      style={{ width: "100%" }}
        id="standard-name"
        label="EnrollmentDate"
        name='enrollmentDate'
        onChange={this.handleChange}
        margin="normal"
      />
      <Button style={{margin: "20px auto" }} type="submit">Создать</Button>
      </form>
            
        </Card>
      
        
        </div>
        </div>
       </div>
       
      
    }

}

StudentCreate = reduxForm({
  form: 'create',
})(StudentCreate)