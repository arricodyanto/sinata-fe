import React from 'react'
import { Box, Button, Chip, Fade, IconButton, InputAdornment, Modal, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import TextfieldBasic from '../../atoms/TextfieldBasic';
import DatePickerBasic from '../../atoms/DatePickerBasic';
import TimePickerBasic from '../../atoms/TimePickerBasic';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

type TRiwayatAjuanProps = {
    rows: {
        judulKegiatan: string
        deskripsi: string
        tanggal: string
        waktu: string
        tempat: string
    }[]
}

export default function TableKegiatan(props: TRiwayatAjuanProps) {
    const { rows } = props
    const [open, setOpen] = React.useState(false)
    const [currIndex, setCurrIndex] = React.useState(0)
    const handleOpen = (index:number) => {
        setOpen(true)
        setCurrIndex(index)
    }
    
    const handleClose = () => setOpen(false)

    // Table Pagination
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const handleChangePage = ( event: React.MouseEvent<HTMLButtonElement> | null, newPage: number, ) => {
        setPage(newPage)
    }
    
    const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, ) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }
    const count = rows.length
  return (
    <>
        <TableContainer component={Paper} className='shadow-none overflow-x-auto'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Judul Kegiatan</TableCell>
                    <TableCell>Deskripsi Kegiatan</TableCell>
                    <TableCell align='center'>Tanggal</TableCell>
                    <TableCell align='center'>Waktu</TableCell>
                    <TableCell>Tempat</TableCell>
                    <TableCell align='center'>Aksi</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={row.judulKegiatan} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            {row.judulKegiatan}
                        </TableCell>
                        <TableCell width={400}>
                            <Typography variant='body2' className='xs:line-clamp-4 md:line-clamp-2'>
                                {row.deskripsi}
                            </Typography>
                        </TableCell>
                        <TableCell align='center'>{row.tanggal}</TableCell>
                        <TableCell align='center'>{row.waktu}</TableCell>
                        <TableCell>{row.tempat}</TableCell>
                        <TableCell align='center'>
                            <IconButton onClick={() => handleOpen(index)} aria-label='view-more' size='small' className='hover:text-primary'>
                                <VisibilityIcon fontSize='small' />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            component="div"
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Modal open={open} onClose={handleClose}>
            <Fade in={open}>
                <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-4 px-6 rounded-md xs:w-[calc(100%-40px)] md:w-[600px]'>
                    <Stack direction='row' justifyContent='space-between' className='sticky'>
                        <Typography id="transition-modal-title" variant="subtitle1" component="h2" className='font-bold leading-5'>
                            Riwayat Kegiatan Yang Ditambahkan
                        </Typography>
                        <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                            <CloseIcon fontSize='small' />
                        </IconButton>
                    </Stack>
                    <Box id="transition-modal-description" sx={{ mt: 2 }}>
                        { rows.filter((item, i) => i === currIndex).map(data => {
                            return(
                                <>
                                    <TextfieldBasic label='Judul Kegiatan' value={data.judulKegiatan} />
                                    <TextfieldBasic label='Deskripsi Kegiatan' value={data.deskripsi} multiline maxRows={4} />
                                    <Stack direction='row' spacing={1} className='mb-6'>
                                        <DatePickerBasic label='Tanggal Kegiatan' defaultValue={data.tanggal} />
                                        <TimePickerBasic label='Waktu Kegiatan' defaultValue={data.tanggal+' '+data.waktu} />
                                    </Stack>
                                    <TextfieldBasic label='Tempat Kegiatan' value={data.tempat} />
                                </>
                            )
                        })}
                        <Stack direction='row' justifyContent='flex-end' spacing={1} marginBottom={1}>
                            <Button variant='outlined' color='error' size='small' className='rounded-md capitalize' startIcon={<DeleteIcon fontSize='small' className='-mr-2' />}>Hapus</Button>
                            <Button variant='contained' color='success' size='small' className='rounded-md capitalize' disableElevation startIcon={<SaveIcon fontSize='small' className='-mr-2' />}>Simpan</Button>
                        </Stack>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    </>
  )
}
