import { Modal, Box, Typography, Button } from '@mui/material';
import { MdOutlineCancel } from 'react-icons/md';




const WishListModal = ({ handleClose, open, handleReject, item }) => {



    console.log(item);

    return (
        <Modal open={open} onClose={handleClose}>
            <Box className=''
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
                <button onClick={handleClose} className='text-xl text-black text-right'><MdOutlineCancel></MdOutlineCancel></button>
                <Typography variant="h6" component="h2">
                    WishList !!!
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    visit or remove package from your wishlist
                </Typography>
                <div className='flex gap-3 mt-6'>
                    <button onClick={() => handleReject(item._id)} className='btn bg-black text-white'>
                        Remove
                    </button>
                    <button onClick={() => handleReject(item._id)} className='btn bg-yellow text-black'>
                        visit package details
                    </button>


                </div>
            </Box>
        </Modal>
    );
};

export default WishListModal;
