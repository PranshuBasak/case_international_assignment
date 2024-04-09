
export const ArrowLeft = ({ size, color  }:{size: number, color: string}) => (
    <svg width={ size  } height={ size  } viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="51" height="51" rx="25.5" stroke="#FFE1E1"/><path d="m29 31.67-6-5.835L29 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
  
export const ArrowRight = ({ size, color  }:{size: number, color: string}) => (
    <svg width={ size  } height={ size  } viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="51" height="51" rx="25.5" stroke="#FFE1E1"/><path d="m23 31.67 6-5.835L23 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );

export const Line = ({ width,height,  color  }:{width: number,height:number, color: string}) =>(
  <svg width={width} height={height} viewBox="0 0 235 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke={color} stroke-width="6" d="M0 3h235"/></svg>
)