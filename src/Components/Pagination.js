import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Button = styled.button`
  background: #75B753;
  color: #fff;
  border-radius: 25px;
  border: none;
  padding: 10px 20px;
  margin: 4px;
  width: 200px;
`

export const Pagination = (props) => {
  const nextPage = (e) => {
    e.preventDefault();
    props.nextPage()
  }

  const prevPage = (e) => {
    e.preventDefault();
    props.prevPage()
  }

  const sendAssestment = () => {
    Swal.fire({
      title: 'Are you sure you want to send the assesstment?',
      text: "You won't be able to revert this",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#D43571',
      confirmButtonText: 'Yes, send it!'
    }).then((result) => {
      if(result.value) {
        Swal.fire(
          'Success',
          'You have successfuly completed the assesstment!!',
          'success'
        )
        if(props.milestone[0].skill_id === 2) {
          props.finishedAssesstmentStandUp()
        }
        if(props.milestone[0].skill_id === 23) {
          props.finishedAssesstmentSecureAttachment()
        }
      }
    })
  }

  return (
    <div>
      
    </div>
  )

}