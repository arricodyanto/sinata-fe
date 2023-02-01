import { Container } from '@mui/material'
import React from 'react'

type TContainerPageProps = {
    className?: string
    children?: React.ReactNode
}

export default function ContainerPage(props: TContainerPageProps) {
    const { className, children } = props
  return (
    <Container sx={{width: {xs: 320, sm: 380, md: 760, lg: 1280}}} className={className}>
        {children}
    </Container>
  )
}
