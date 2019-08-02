import React, { Component} from 'react';
import {connect }  from 'react-redux';
import moment from 'react-moment'
import { makeStyles } from '@material-ui/core/styles';

import { Card, Button, CardHeader, Avatar, TableHead, TableCell, TableRow, TableBody, Table } from '@material-ui/core';


const card_student = {
    
}



export class StudentDelete extends Component {
  
  
  cancel = ()  => {
   this.props.history.push('/students');
 }

 del = () => {
   debugger;
    this.props.delete(this.props.student.id, this.props.history);
 }
  
  render() {
    
        return  <div className="student">
          
        <div className='container'>
            <div className='row'>
            <Card className='student_card'>
            <h2> Are you sure that you want to delete the student: {this.props.student.id + ' ' + this.props.student.lastName + ' '+ this.props.student.firstName}</h2>
            <div className="student_action">
              <Button onClick={this.del} color="primary">Delete</Button><Button onClick={this.cancel}  color="secondary">Cancel</Button>
            </div>
        </Card>
      
        
        </div>
        </div>
       </div>
       
      
    }

}