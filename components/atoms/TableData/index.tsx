import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

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
  
  const rows = [
    createData('Layanan Peliputan', 'Lomba Gobak Sodor Dharmawanita UNS', '07/03/2023', '08.00', 'Selasar Auditorium UNS', 'Pending'),
    createData('Layanan Penayangan Konten di Videotron', 'World Dance Event 46 - PUI Javanologi UNS', '10/03/2023', '08.00', 'Halaman Kantor Pusat UNS', 'On Progress'),
    createData('Layanan Live Streaming', 'Webinar Strategi Pencegahan Klaster Covid PTM Terbatas', '17/03/2023', '13.00', 'Ruang Sidang II Kantor Pusat UNS', 'Completed'),
  ]

export default function TableData() {
    
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
                {rows.map((row) => (
                    <TableRow key={row.judulKegiatan} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            {row.jenisLayanan}
                        </TableCell>
                        <TableCell>{row.judulKegiatan}</TableCell>
                        <TableCell align='center'>{row.tanggal}</TableCell>
                        <TableCell align='center'>{row.waktu}</TableCell>
                        <TableCell>{row.tempat}</TableCell>
                        <TableCell align='center'>Aksi</TableCell>
                        <TableCell align='center'>{
                            row.status === 'Pending' ? <Chip label={row.status} size='small' className='bg-primary text-white' /> 
                            : row.status === 'On Progress' ? <Chip label={row.status} size='small' className='bg-pending text-white' /> 
                            : row.status === 'Completed' ? <Chip label={row.status} size='small' className='bg-complete text-white' /> : undefined
                        }</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}
