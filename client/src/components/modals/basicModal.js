import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './styles.css'
import InputField from './inputField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #444',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({Title, Description}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {Title}
            <br/>
            <small>{Description}</small>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <InputField label={"Email"} placeholder={"Email Address"}/>
          <InputField label={"Wallet"} placeholder={"Wallet Address"}/>
           <div className='btn' >
           <Button>Add Admin</Button>
           <Button>Cancel</Button>
           </div>
           
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
