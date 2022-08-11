import React, {useState} from "react"

function App() {

  const [myArr,setNewArr] = useState([ 
      ["И","Г","Р","А"],
      [,,,],
      ["П","Я","Т","Н"], 
      ["А","Ш","К","И"]])

  const [numSteps,setNewStep] = useState(0);


  function doShift(row,col)
    {
      if (myArr[row][col]==null){
      return ;
    } 

    if ((myArr[row][col+1]==null)&&(col<3)) // ход вправо
        {
          myArr[row][col+1]=myArr[row][col];
          myArr[row][col]=null; 
        };
  
    if ((myArr[row][col-1]==null)&&(col>0)) //ход влево
        {
          myArr[row][col-1]=myArr[row][col];
          myArr[row][col]=null; 
        };
     
    if ((row<3) && (myArr[row+1][col]==null)) //ход вниз
        {
          myArr[row+1][col]=myArr[row][col];
          myArr[row][col]=null; 
        };  
    if ((row>0) && (myArr[row-1][col]==null)) //ход вниз
        {
          myArr[row-1][col]=myArr[row][col];
          myArr[row][col]=null; 
        };     
     
    var newArr = myArr.map(function func(el) {    //Копируем массив
      if(Object.prototype.toString.call(el)=="[object Array]"){
        return el.map(func);
      }
      return el;
    });

    if (JSON.stringify(myArr)===JSON.stringify([ [1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,null] ])) 
    {
      newArr= [["И","Г","Р","А"],
      [,,,],
      ["О","К","О","Н"], 
      ["Ч","Е","Н","А"]];
    } ;

    setNewArr(newArr);
    setNewStep(numSteps+1);


  };


  function getArr() {
    let copy = Object.assign ([],[ [0,0,0], [0,0,0], [0,0,0], [0,0,0] ])
    var arr = [], pool = [];

    for(var i = 0; i <= 15; i++) 
    {
      arr.push(i);
    }

    for(var i = 0; i <= 15; i++) 
    {
      var value =  arr.splice(Math.floor(Math.random() * ((16-i) - 0) + 0),1);      
      pool.push(value.pop());

    }
    var z=0;
    for(var i=0; i <4; i++) 
    {
      for(var v=0; v < 4; v++ ) {
        
        if (pool[z] != 0) 
        {
          copy[i][v] = pool[z];
        }
        else copy[i][v] = undefined;;
          z++;
      };
    }
    
     setNewArr(copy);
     setNewStep(0);
     return pool;
  }

    return (
      <div className="App">
      <h1>My App - Пятнашки. Число ходов {numSteps} </h1>
  <div style={{padding:"100px"}}> 
  <table>
    <thead>

    </thead>
    <tbody >
  <tr>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(0,0)}> {myArr[0][0]} </button> </td>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(0,1)}> {myArr[0][1]} </button> </td>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(0,2)}> {myArr[0][2]} </button> </td>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(0,3)}> {myArr[0][3]} </button> </td>
  </tr>
  <tr> 
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(1,0)}> {myArr[1][0]} </button> </td>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(1,1)}> {myArr[1][1]} </button> </td >
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(1,2)}> {myArr[1][2]} </button> </td>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(1,3)}> {myArr[1][3]} </button> </td>
  </tr>
  <tr> 
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(2,0)}> {myArr[2][0]} </button> </td>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(2,1)}> {myArr[2][1]} </button> </td>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(2,2)}> {myArr[2][2]} </button> </td>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(2,3)}> {myArr[2][3]} </button> </td>
  </tr>
  <tr> 
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(3,0)}> {myArr[3][0]} </button> </td>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(3,1)}> {myArr[3][1]} </button> </td>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(3,2)}> {myArr[3][2]} </button> </td>
    <td > <button style={{borderRadius:"10px", cursor:"pointer", width:"100px", height:"100px", backgroundColor:"grey", textAlign:"center", fontSize:"50px", border: "5px solid black"}} onClick={()=>doShift(3,3)}> {myArr[3][3]} </button> </td>
  </tr>
    </tbody>
  </table>
  </div>
  {/* <pre> {JSON.stringify(myArr,null,0)}</pre> */}

<button style={{cursor:"pointer", textAlign:"center", fontSize:"25px", border: "5px solid red"}} onClick={getArr}>Новая игра</button>
      </div>

    );
}

export default App;
