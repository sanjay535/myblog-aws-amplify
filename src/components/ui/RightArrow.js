function RightArrow({opacity}) {
    console.log('Right opacity', opacity)
  return (
    <svg
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      opacity={opacity?'0.7':'1'}
    >
      <path
        d='M4.16663 10.4998H15.8333M15.8333 10.4998L9.99996 4.6665M15.8333 10.4998L9.99996 16.3332'
        stroke='var(--foreground)'
        strokeWidth='1.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default RightArrow;
