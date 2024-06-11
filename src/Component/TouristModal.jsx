import { Modal, Box, Typography, Button } from '@mui/material';


const TouristModal = ({ handleClose, open, modalHandle }) => {

  
    
    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" component="h2">
                    Become a Tour Guide
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Please fill out the form to become a tour guide.
                </Typography>
                <div className='flex gap-3'>
                    <Button onClick={modalHandle} variant="contained" sx={{ mt: 2 }}>
                        Continue
                    </Button>
                    <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
                        Close
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default TouristModal;
