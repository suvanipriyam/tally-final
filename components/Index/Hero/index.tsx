// import React from 'react'
// import Carousel from './carousel'
import styles from './hero.module.css'

// const Hero = () => {
//   return (
//     <section
//       className="mx-auto "
//       id="home"
//       style={{
//         // backgroundImage: 'url("/images/bg1.webp")',
//         // background: 'linear-gradient(45deg, #fffae3, #ffd700)',
//         // backgroundSize: 'cover', inline-block w-full z-index-1
//         maxHeight: '80vh',
//         marginTop: '-80px',

//       }}
//     >
//       <div className={styles['context']}>
//         <div className="w-full -z-1 leading-8" style={{marginTop:'-80px'}}>
//           <Carousel />
//         </div>
//       </div>
//       <div className={styles['area']}>
//         <ul className={styles['circles']}>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>
//     </section>
//   )
// }

// export default Hero

import React from 'react'
import ResponsiveCarousel from './carouselmui'
import Carousel from './carousel'


const Hero = () => {
  return (
    <section
      className="mx-auto "
      id="home"
      style={{
        backgroundImage: 'url("/images/giphy5.gif")',
        // background: 'linear-gradient(45deg, #fffae3, #ffd700)',
        // background:
          // 'linear-gradient(45deg, rgba(255, 250, 227, 0.5), rgba(255, 215, 0, 0.5))',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // backgroundSize: 'contain',
      }}
    >
      <div className={styles['carousel-container']}>
        <div className="w-full min-h-screen -z-1 leading-8">
         <Carousel/>
        </div>
      </div>
    </section>
  )
}

export default Hero
