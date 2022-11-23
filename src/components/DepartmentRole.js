import * as React from 'react';
import { Typography } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import './Style.css';
export default function dashboard() {
    return (
        <>
          <div className='col-2 card'>
            hello world
          </div>
          <div className='row heading'>
            <Typography variant='h4'><b>Manage User</b></Typography>
            <NotificationAddIcon className='icon'  color="primary"></NotificationAddIcon>
            <Avatar className='avatar' alt="Remy Sharp" src="/static/images/avatar/1.jpg"></Avatar>
          </div>  
          <div className='jumbotron'>
            <div className='row'>
              <Typography className='text4' variant='h5'><b>Departments</b></Typography>
              <Button className='btn-add' variant="contained" size='medium'>+ New Department</Button>
            </div>
            <br/>
            <div>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Department Name</th>
                    <th scope="col">Department Code </th>
                    <th scope="col">Supervisor</th>
                    <th scope="col">Total User</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"> <span type="button" class="dropdown-menu-arrow dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      </span> Devsinc HR</th>
                    <td>0</td>
                    <td>-</td>
                    <td>2</td>
                    <td>
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">New Deaprtment</a>
                        <a class="dropdown-item" href="#">View User</a>
                        <a class="dropdown-item" href="#">Edit Department</a>
                      </div>
                    </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><span type="button" class="dropdown-menu-arrow dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      </span> main office</th>
                    <td>1</td>
                    <td>-</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <th scope="row"><span type="button" class="dropdown-menu-arrow dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      </span> main office</th>
                    <td>2</td>
                    <td>-</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='row'>
              <Typography className='text2' variant='dark'>Showing data 1 to 8 of 256K entries</Typography>
              <nav aria-label="Page navigation example" className='text1'>
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">...</a></li>
                  <li class="page-item"><a class="page-link" href="#">40</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>     
        </>
    );
}

