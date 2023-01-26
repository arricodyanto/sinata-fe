import React from 'react'
import FaqComponent from '../../molecules/FaqComponent'

export default function FaqItems() {
  return (
    <>
      <FaqComponent panel='panel1' question='Lorem, ipsum dolor sit amet consectetur adipisicing?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in voluptas repellat. Modi beatae quaerat illum tenetur esse molestiae error corporis quas odit aspernatur. Ex qui magnam excepturi sint laboriosam.' />
      <FaqComponent panel='panel2' question='Lorem, ipsum dolor sit amet consectetur adipisicing?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in voluptas repellat. Modi beatae quaerat illum tenetur esse molestiae error corporis quas odit aspernatur. Ex qui magnam excepturi sint laboriosam.' />
      <FaqComponent panel='panel3' question='Lorem, ipsum dolor sit amet consectetur adipisicing?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in voluptas repellat. Modi beatae quaerat illum tenetur esse molestiae error corporis quas odit aspernatur. Ex qui magnam excepturi sint laboriosam.' />
    </>
  )
}
