import React, { Component} from 'react';
import {connect }  from 'react-redux';
import moment from 'react-moment'
import { makeStyles } from '@material-ui/core/styles';

import { Card, Button, CardHeader, Avatar, TableHead, TableCell, TableRow, TableBody, Table } from '@material-ui/core';


const card_student = {
    'max-width': '400px',
    'border': '1px solid #333'   
}



export class StudentDetail extends Component {
  
  render() {
    
        return  <div className="student">
            <h2>Student {this.props.student.lastName + ' '+ this.props.student.firstName}</h2>
        <div className='container'>
            <div className='row'>
            <Card className='student_card' style={{ width: '100%' }}>
    
            <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className='card_avatar'>
                {this.props.student.id}
                  </Avatar>
                }
                title={this.props.student.id + ' ' + this.props.student.lastName + ' '+ this.props.student.firstName}
                subheader={'enrollmentDate ' + this.props.student.enrollmentDate}
              />
               <h6>Enrollments</h6>
            <Table style={{ width: '100%' }} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         
          {this.props.student.enrolments ? this.props.student.enrolments.map(enrolment => ( 
             <TableRow > 
              <TableCell align="left">{ enrolment.id } </TableCell>
               <TableCell align="center"> { enrolment.title }</TableCell>
              </TableRow>
          )) : <p>Нет</p> }
            
          </TableBody>
        </Table>
            
        </Card>
      
        
        </div>
        </div>
       </div>
       
      
    }

}