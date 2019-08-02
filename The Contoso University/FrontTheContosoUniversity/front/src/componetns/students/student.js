import React, { Component} from 'react';
import { getStudents } from './action';
import {connect }  from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

import { Card, Button, CardHeader, Avatar, Typography } from '@material-ui/core';


const card_student = {
    'max-width': '400px',
    'border': '1px solid #333'   
}

export class Student extends Component {

    render() {
        
        return  <div className="App">
            <h2>Student List</h2>
        <div className='container'>
            <div className='row'>
                <div className='student-wrap'>
                
        {this.props.students.map(el => (
            <Card className='student_card' style={{ width: '18rem' }}>
    
            <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className='card_avatar'>
                {el.id}
                  </Avatar>
                }
                title={el.id + ' ' + el.lastName + ' '+ el.firstName}
                subheader={el.enrollmentDate}
              />
            <Typography paragraph>
                  
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
              </Typography>
              
            <Button variant="primary">Detail</Button>
            <Link to={'/student/' + el.id}>More</Link>
            <Link to={'/studentdelete/' + el.id} variant="primary">Delete</Link>
        </Card>
        ))}
        
        </div>
        </div>
       </div>
       </div>
      
    }

}