import React,{useState,useRef} from 'react';

const Box = () => {
    let i;
    const boxRef=useRef(null);
    
    let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let box=['box1','box2','box3','box4','box5','box6','box7','box8','box9','box10','box11','box12','box13','box14','box15','box16'];
    let inpData=[];
    let count=0;
    const ChangeBg=(data)=>{
      console.log(inpData[data]);
      console.log(inpData.length);
        inpData[data].innerHTML=`box ${data}`;
        inpData[data].style.color="red";
    }
    return (
        <div className='container-fluid box'>
            <div className="row row1">
                <div className="col-3 bx bx-0" onClick={()=>ChangeBg(0)} ref={(ref) => inpData[0] = ref}></div>
                <div className="col-3 bx bx-1" onClick={()=>ChangeBg(1)} ref={(ref) => inpData[1] = ref}></div>
                <div className="col-3 bx bx-2" onClick={()=>ChangeBg(2)} ref={(ref) => inpData[2] = ref}></div>
                <div className="col-3 bx bx-3" onClick={()=>ChangeBg(3)} ref={(ref) => inpData[3] = ref}></div>
                
            </div>
            <div className="row row2">
                <div className="col-3 bx bx-4" onClick={()=>ChangeBg(4)} ref={(ref) => inpData[4] = ref}></div>
                <div className="col-3 bx bx-5" onClick={()=>ChangeBg(5)} ref={(ref) => inpData[5] = ref}></div>
                <div className="col-3 bx bx-6" onClick={()=>ChangeBg(6)} ref={(ref) => inpData[6] = ref}></div>
                <div className="col-3 bx bx-7" onClick={()=>ChangeBg(7)} ref={(ref) => inpData[7] = ref}></div>
                
            </div>
            <div className="row row3">
                <div className="col-3 bx bx-8" onClick={()=>ChangeBg(8)} ref={(ref) => inpData[8] = ref}></div>
                <div className="col-3 bx bx-9" onClick={()=>ChangeBg(9)} ref={(ref) => inpData[9] = ref}></div>
                <div className="col-3 bx bx-10" onClick={()=>ChangeBg(10)} ref={(ref) => inpData[10] = ref}></div>
                <div className="col-3 bx bx-11" onClick={()=>ChangeBg(11)} ref={(ref) => inpData[11] = ref}></div>
            </div>
            <div className="row row4">
                <div className="col-3 bx bx-12" onClick={()=>ChangeBg(12)} ref={(ref) => inpData[12] = ref}></div>
                <div className="col-3 bx bx-13" onClick={()=>ChangeBg(13)} ref={(ref) => inpData[13] = ref}></div>
                <div className="col-3 bx bx-14" onClick={()=>ChangeBg(14)} ref={(ref) => inpData[14] = ref}></div>
                <div className="col-3 bx bx-15" onClick={()=>ChangeBg(15)} ref={(ref) => inpData[15] = ref}></div>
            </div>
        </div>
    )
}

export default Box
