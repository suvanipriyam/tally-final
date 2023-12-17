'use client'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import styles from './image.module.css'
const ScrollFlashyImage: React.FC = () => {
  const [ref, inView] = useInView()

  const verticalBounce = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateY(0) scale(1)'
      : 'translateY(50px) scale(0.8)',
    from: { opacity: 0, transform: 'translateY(50px) scale(0.8)' },
    config: { tension: 280, friction: 20 },
  })

  return (
    <div
      ref={ref}
      style={{ height: '500px' /* add a height to create a scrollable area */ }}
      className={styles['container']}
    >
      <animated.img
        src="/images/footer-rock.png"
        width={200}
        style={{
          ...verticalBounce,
        }}
        className={styles['animated-img']}
      />
    </div>
  )
}

export default ScrollFlashyImage
