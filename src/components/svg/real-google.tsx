import * as React from 'react';
import { Icon } from '.';

export const RealGoogle = (props: Partial<Icon>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    className={props.className}
    width={16}
    height={16}
  >
    <style />
    <defs>
      <path
        xmlSpace="preserve"
        id="y"
        fill="#D80027"
        d="M317.119 340.347c-9.001 9.076-1.39 25.586-1.39 25.586l67.757 113.135s11.124 14.915 20.762 14.915c9.683 0 19.246-7.952 19.246-7.952l53.567-76.567s5.395-9.658 5.52-18.12c.193-12.034-17.947-15.33-17.947-15.33l-126.816-40.726c-.003.004-12.428-3.294-20.699 5.059zm-6.429-57.022c6.489 11.004 24.389 7.798 24.389 7.798l126.532-36.982s17.242-7.014 19.704-16.363c2.415-9.352-2.845-20.637-2.845-20.637l-60.468-71.225s-5.24-9.006-16.113-9.912c-11.989-1.021-19.366 13.489-19.366 13.489l-71.494 112.505c0 .001-6.32 11.205-.339 21.327zm-59.78-43.864c14.9-3.668 17.265-25.314 17.265-25.314l-1.013-180.14s-2.247-22.222-12.232-28.246c-15.661-9.501-20.303-4.541-24.79-3.876L125.09 40.918s-10.288 3.404-15.646 11.988c-7.651 12.163 7.775 29.972 7.775 29.972l109.189 148.831c-.001-.001 10.776 11.143 24.502 7.752zm-25.943 72.902c.376-13.894-16.682-22.239-16.682-22.239L95.37 233.079s-16.732-6.899-24.855-2.091c-6.224 3.677-11.738 10.333-12.277 16.216l-7.354 90.528s-1.103 15.685 2.963 22.821c5.758 10.128 24.703 3.074 24.703 3.074l131.82-29.137c5.121-3.442 14.101-3.751 14.597-22.127zm32.779 48.856c-11.315-5.811-24.856 6.224-24.856 6.224l-88.265 97.17s-11.012 14.858-8.212 23.982c2.639 8.552 7.007 12.802 13.187 15.797l88.642 27.982s10.747 2.231 18.884-.127c11.552-3.349 9.424-21.433 9.424-21.433l2.003-131.563c-.001.002-.452-12.672-10.807-18.032z"
      />
      <path
        id="star"
        d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2L316.9 18z"
      />
      <path
        id="star-o"
        d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4 459.8 484c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6 68.6-141.3C270.4 5.2 278.7 0 287.9 0zm0 79-52.5 108.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9l85.9 85.1c5.5 5.5 8.1 13.3 6.8 21l-20.3 119.7 105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2-20.2-119.6c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1-118.3-17.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
      />
      <path
        id="star-h"
        d="m288 376.4.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6-42.8-87.8-.1.3v289.2zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3l-128.3-68.5-128.3 68.5c-10.8 5.7-23.9 4.8-33.8-2.3s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"
      />
      <path
        id="prev"
        d="M14.6 18.4 8.3 12l6.4-6.4.7.7L9.7 12l5.6 5.6-.7.8z"
      />
      <path
        id="next"
        d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"
      />
      <g
        id="g"
        fill="none"
        fillRule="evenodd"
      >
        <path
          fill="#4285f4"
          d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z"
        />
        <path
          fill="#34a853"
          d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15C83.93 439.12 163.74 492 256 492z"
        />
        <path
          fill="#fbbc05"
          d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84v-61.15H45.1C29.12 181.87 20 217.92 20 256s9.12 74.13 25.1 105.99l78.85-61.15z"
        />
        <path
          fill="#ea4335"
          d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20 163.75 20 83.93 72.89 45.1 150.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z"
        />
        <path d="M20 20h472v472H20V20z" />
      </g>
      <g
        id="f"
        fill="none"
        fillRule="evenodd"
      >
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset={0}
            style={{
              stopColor: '#0062e0',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#19afff',
            }}
          />
        </linearGradient>
        <path
          d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
          style={{
            fill: 'url(#SVGID_1_)',
          }}
        />
        <path
          d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
          style={{
            fill: '#fff',
          }}
        />
      </g>
    </defs>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="rpi-logo-g"
      viewBox="0 0 512 512"
      {...props}
    >
      <use xlinkHref="#g" />
    </svg>
  </svg>
);
