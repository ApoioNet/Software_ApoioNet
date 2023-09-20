// import { AppBar, Toolbar, Button, Modal, Box, Typography } from '@mui/material';
// import { useState } from 'react';
// export function NavBar() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const handleOpenModal = () => {
//         setIsModalOpen(true);
//       };
    
//       const handleCloseModal = () => {
//         setIsModalOpen(false);
//       };
//     // 
// return (    
//     <><div>
//         <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                     My App
//                 </Typography>
//                 <Button color="inherit" onClick={handleOpenModal}>
//                     Login
//                 </Button>
//             </Toolbar>
//         </AppBar>

//         <Modal open={isModalOpen} onClose={handleCloseModal}>
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     bgcolor: 'background.paper',
//                     boxShadow: 24,
//                     p: 4,
//                 }}
//             >
//                 <Typography variant="h6" component="h2">
//                     Login Modal
//                 </Typography>
//                 {/* Add your login form or content here */}
//                 <Button onClick={handleCloseModal}>Close</Button>
//             </Box>
//         </Modal>

//         {/* Rest of your application */}
//     </div><nav>
//             <div className="nav-wrapper">
//                 {/* <a href="" className="brand-logo"><img src="src/img/Logo.jpeg" alt="" /></a> */}
//                 <ul id="nav-mobile" className="right hide-on-med-and-down">
//                     {/* <li><a href="sass.html">Sass</a></li>
//     <li><a href="badges.html">Components</a></li> */}
//                     <li><a onClick={handleOpenModal()}>Login</a></li>
//                 </ul>
//             </div>
//         </nav></>
//   )
// }