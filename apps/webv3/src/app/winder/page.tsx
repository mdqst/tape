'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const Spinner = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path
      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
      opacity=".3"
    />
    <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="0.3s"
        values="0 12 12;360 12 12"
        repeatCount="indefinite"
      />
    </path>
  </svg>
)

const Success = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_114_308)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75 13C1.75 19.2129 6.78656 24.2494 12.9995 24.2494C19.2124 24.2494 24.249 19.2129 24.249 13C24.249 6.78705 19.2124 1.75049 12.9995 1.75049C6.78656 1.75049 1.75 6.78705 1.75 13ZM18.3724 11.1447C18.8666 10.6626 18.8763 9.87119 18.3942 9.37705C17.9121 8.88291 17.1207 8.87316 16.6266 9.35526L11.384 14.4702L9.40624 12.386C8.93103 11.8852 8.13984 11.8645 7.63907 12.3397C7.1383 12.8149 7.11758 13.6061 7.59279 14.1069L10.443 17.1104C10.6733 17.3531 10.9912 17.4933 11.3256 17.4997C11.6601 17.5062 11.9832 17.3783 12.2226 17.1447L18.3724 11.1447Z"
        fill="currentColor"
      />
      <path
        d="M12.9995 24.2494C6.78656 24.2494 1.75 19.2129 1.75 13C1.75 6.78705 6.78656 1.75049 12.9995 1.75049C19.2124 1.75049 24.249 6.78705 24.249 13C24.249 19.2129 19.2124 24.2494 12.9995 24.2494Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_114_308">
        <rect width="26" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const Warning = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default function WinderPage() {
  const [state, setState] = useState<'idle' | 'loading' | 'warning'>('idle')

  const getIcon = () => {
    switch (state) {
      case 'loading':
        return (
          <motion.span
            key={state}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <Spinner className="mr-1.5 size-5" />
          </motion.span>
        )
      case 'warning':
        return (
          <motion.span
            key={state}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: [0, -2, 2, -2, 2, 0], // Define the shake movement
              transition: {
                scale: { duration: 0.2 }, // Duration for scale-up
                x: { delay: 0.5, duration: 0.3 } // Delay and duration for the shake effect
              }
            }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <Warning className="mr-1.5 size-5" />
          </motion.span>
        )
      default:
        return (
          <motion.span
            key={state}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <Success className="mr-1.5 size-5" />
          </motion.span>
        )
    }
  }

  const onClickBtn = () => {
    setState('loading')
    setTimeout(() => {
      setState('warning')
      setTimeout(() => {
        setState('loading')
        setTimeout(() => {
          setState('idle')
          setTimeout(() => {
            onClickBtn()
          }, 4000)
        }, 1800)
      }, 1800)
    }, 1800)
  }

  return (
    <div className="grid h-screen place-items-center">
      <motion.button
        animate={{
          backgroundColor:
            state === 'warning'
              ? '#FFE3E1'
              : state === 'loading'
                ? '#E6F4FF'
                : '#DCF4DE',
          color:
            state === 'warning'
              ? '#FF424A'
              : state === 'loading'
                ? '#40A3EF'
                : '#38C65C'
        }}
        className="flex items-center overflow-hidden rounded-full px-5 py-2.5 text-lg font-semibold"
        onClick={() => onClickBtn()}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {getIcon()}
        </AnimatePresence>

        <div className="flex items-center gap-1">
          <AnimatePresence mode="popLayout" initial={false}>
            {state === 'loading' ? (
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ type: 'spring', duration: 0.4 }}
              >
                Analyzing
              </motion.span>
            ) : null}
          </AnimatePresence>
          <motion.span
            layout
            transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
          >
            Transaction
          </motion.span>
          <AnimatePresence mode="popLayout" initial={false}>
            {state === 'warning' ? (
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.2 }
                }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                Warning
              </motion.span>
            ) : null}
          </AnimatePresence>
          <AnimatePresence mode="popLayout" initial={false}>
            {state === 'idle' ? (
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.2 }
                }}
                exit={{ opacity: 0, x: 50, transition: { duration: 0.4 } }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                Safe
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  )
}
