import "./rand_shapes.scss"
const Rand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export function Randshapes(): JSX.Element | undefined {
  const dimensions = Rand(100, 200);

  const deg = Rand(0, 175);

  const color = [
    "#7BD3EA",
    "#A1EEBD",
    "#F6F7C4",
    "#F6D6D6",
    "#FF90BC",
    "#FFC0D9",
    "#F9F9E0",
    "#8ACDD7",
    "#D2E0FB",
    "#F9F3CC",
    "#D7E5CA",
    "#8EACCD",
    "#96B6C5",
    "#EEE0C9",
    "#ADC4CE",
  ];

 
  const rad = Rand(0, 50);
  var col=Math.floor(Math.random() * (9 - +0) + 0)
  var col2,col3,col4,col5;
  if(col==9){
    col2=col-1;
    col3=col-2;
    col4=col-3;
    col5=col-4;
    
  }else{
    col2=col+1;
    col3=col+2;
    col4=col+3;
    col5=col+4;
   
  }
  return (
    <>
      <div
        className="shape"
        style={{
          background: `${color[col]}`,
          width: `${dimensions}px`,
          height: `${dimensions}px`,
          top: `${100}px`,
          left: `${50}px`,
          boxShadow: "00 0 60px 30px "+{col},
          borderRadius: `${rad}%`,
          rotate: `${deg}deg`,
        //   margin:"130px",


        }}
      ></div>
    
    <div
        className="shape"
        style={{
          background: `${color[col2 ]}`,
          width: `${dimensions*1.3}px`,
          height: `${dimensions*1.3}px`,
          bottom: `${100}px`,
          left: `${50}px`,
         

          borderRadius: `${rad+30}%`,
          rotate: `${deg+20}deg`,
        //   margin:"130px",


        }}
      ></div>

<div
        className="shape"
        style={{
          background: `${color[col3]}`,
          width: `${dimensions*.7}px`,
          height: `${dimensions*.7}px`,
          top: `${100}px`,
          right: `${50}px`,
         

          borderRadius: `${rad+45}%`,
          rotate: `${deg}deg`,
        //   margin:"230px",
        }}
      ></div>

<div
        className="shape"
        style={{
          background: `${color[col4]}`,
          width: `${dimensions*.65}px`,
          height: `${dimensions*.65}px`,
          bottom: `${100}px`,
          right: `${50}px`,
          
          borderRadius: `${rad+10}%`,
          rotate: `${deg}deg`,
        }}
      ></div>

<div
        className="shape"
        style={{
          background: `${color[col5]}`,
          width: `${dimensions*1.3}px`,
          height: `${dimensions*1.3}px`,
          top: `${(dimensions*1.3)+30}px`,
          left: `${(dimensions*1.3)+30  }px`,
        
          borderRadius: `${rad+20}%`,
          rotate: `${deg}deg`,
        }}
      ></div>
      
    </>
  );

  return undefined;
}
