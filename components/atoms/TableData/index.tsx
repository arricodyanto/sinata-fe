import React from 'react'
import { Box, Chip, Fade, IconButton, Modal, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';

  function createData(
    jenisLayanan: string,
    judulKegiatan: string,
    tanggal: string,
    waktu: string,
    tempat: string,
    status: string,
  ) {
    return { jenisLayanan, judulKegiatan, tanggal, waktu, tempat, status };
  }

  function getData(i:number) {
    // console.log(rows[index])
    return(
        <>
            <Box>
                <Typography variant='h6' fontWeight='bold' color='primary.main'>{rows[i].judulKegiatan}</Typography>
            </Box>
        </>
    )
  }
  
  const rows = [
    createData('Layanan Peliputan', 'Lomba Gobak Sodor Dharmawanita UNS', '07/03/2023', '08.00', 'Selasar Auditorium UNS', 'Pending'),
    createData('Layanan Penayangan Konten di Videotron', 'World Dance Event 46 - PUI Javanologi UNS', '10/03/2023', '08.00', 'Halaman Kantor Pusat UNS', 'On Progress'),
    createData('Layanan Live Streaming', 'Webinar Strategi Pencegahan Klaster Covid PTM Terbatas', '17/03/2023', '13.00', 'Ruang Sidang II Kantor Pusat UNS', 'Completed'),
  ]

export default function TableData() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (index:number) => {
        setOpen(true)
        getData(index)
        // console.log(index)
    }
    
    const handleClose = () => setOpen(false);
  return (
    <>
        <TableContainer component={Paper} className='shadow-none overflow-x-auto'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Jenis Layanan</TableCell>
                    <TableCell>Judul Kegiatan</TableCell>
                    <TableCell align='center'>Tanggal</TableCell>
                    <TableCell align='center'>Waktu</TableCell>
                    <TableCell>Tempat</TableCell>
                    <TableCell align='center'>Aksi</TableCell>
                    <TableCell align='center'>Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={row.judulKegiatan} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            {row.jenisLayanan}
                        </TableCell>
                        <TableCell>{row.judulKegiatan}</TableCell>
                        <TableCell align='center'>{row.tanggal}</TableCell>
                        <TableCell align='center'>{row.waktu}</TableCell>
                        <TableCell>{row.tempat}</TableCell>
                        <TableCell align='center'>
                            <IconButton onClick={() => handleOpen(index)} aria-label='view-more' size='small' className='hover:text-primary'>
                                <VisibilityIcon fontSize='small' />
                            </IconButton>
                        </TableCell>
                        <TableCell align='center'>{
                            row.status === 'Pending' ? <Chip label={row.status} size='small' className='bg-primary text-white text-xs' /> 
                            : row.status === 'On Progress' ? <Chip label={row.status} size='small' className='bg-pending text-white text-xs' /> 
                            : row.status === 'Completed' ? <Chip label={row.status} size='small' className='bg-complete text-white text-xs' /> : undefined
                        }</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Modal open={open} onClose={handleClose}>
            <Fade in={open}>
                <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-4 px-6 rounded-md xs:w-[calc(100%-40px)] md:w-[600px]'>
                    <Stack direction='row' justifyContent='space-between' className='sticky'>
                        <Typography id="transition-modal-title" variant="subtitle1" component="h2" className='font-bold'>
                            Riwayat Layanan
                        </Typography>
                        <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                            <CloseIcon fontSize='small' />
                        </IconButton>
                    </Stack>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        <>
                            
                        </>
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    </>
  )
}
