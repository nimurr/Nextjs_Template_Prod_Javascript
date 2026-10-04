import Preloader from '@/components/global/Preloader'
import React from 'react'

export default function loading() {
  return (
    <Preloader fullScreen={true} label="Loading..." size="md" />
  )
}
