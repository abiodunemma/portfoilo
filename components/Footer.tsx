import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-red-950 to-purple-950 h-20  justify-between  flexBetween max-container min-h-full padding-container'>
  <ul>
    <a href="https://x.com/AbeeyDdrummer" target="_blank" rel="noopener noreferrer">
<Image
alt= 'twitter'
src='/x2.png'
width={60}
height={70}
/>
</a>
  </ul>

<ul>
  <a href="https://github.com/abiodunemma" target="_blank" rel="noopener noreferrer">
  <Image
alt= 'github'
src='/git.png'
width={60}
height={70}
/>
</a>
  </ul>

<ul>
  <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
  <Image
alt= 'Whatsapp'
src='/in.gif'
width={60}
height={70}
/>
  </a>
  
  </ul>

      </footer>
  )
}

export default Footer