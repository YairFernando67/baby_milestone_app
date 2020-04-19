import Swal from 'sweetalert2';

const milestoneError = (answers, num) => {
  Swal.fire({
    icon: 'error',
    title: 'Milestons answered: ' + answers + ' of ' + num,
    text: 'Please answer every milestone before!!'
  })
}

const milestoneConfirmation = async () => {
  return Swal.fire({
    title: 'Are you sure you want to send the assesstment?',
    text: "You won't be able to revert this",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#D43571',
    confirmButtonText: 'Yes, send it!'
  })
}

const milestoneSent = async () => {
  let rst = await milestoneConfirmation();
  if (rst.value) {
    Swal.fire(
      'Success',
      'You have successfuly completed the assesstment!!',
      'success'
    )
  }
  return rst.value
}

export { milestoneError, milestoneSent }