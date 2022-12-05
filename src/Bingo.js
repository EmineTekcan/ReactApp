import React, {Component} from "react";
import { Button} from 'react-bootstrap';



class Bingo extends Component{
  constructor(props)
    {  
        super(props);
        this.state={
            nums1:[],
            nums2:[],
            pickedNumbers:[],
            corrAns1:0,
            corrAns2:0,
    }
  
    this.handlenum1Change=this.handlenum1Change.bind(this);
    this.handlenum2Change=this.handlenum2Change.bind(this);
    this.handlenum3Change=this.handlenum3Change.bind(this);
    this.handlenum4Change=this.handlenum4Change.bind(this);
    this.handlenum5Change=this.handlenum5Change.bind(this);
    }
    handlenum1Change(evt)
    {
        this.setState({nums1:evt.target.value});
    }
    handlenum2Change(evt)
    {
        this.setState({nums2:evt.target.value});
    }  
    handlenum3Change(evt)
    {
        this.setState({pickedNumbers:evt.target.value});      
    }  
    handlenum4Change(evt)
    {
        this.setState({corrAns1: evt.target.value});
    }
    
    handlenum5Change(evt)
    {
        this.setState({corrAns2:evt.target.value});
    }

newCard=()=> {
    this.getNewNum1();
    this.getNewNum2();
        var currSquare="square1";
        var currSquare2="square2";
        for(var i=0; i<8; i++){
            document.getElementById(currSquare+i).innerHTML = this.state.nums1[i];
        }
      
        for(var i=0; i<8; i++){
            document.getElementById(currSquare2+i).innerHTML = this.state.nums2[i];
        }
}


getNewNum1=()=> {
    for(var i=0; i<=7; i++){
        var currNum=Math.floor(Math.random() * 100+1);
        if(this.state.nums1.includes(currNum)){
          this.getNewNum1();
        }  
        else{
           this.state.nums1.push(currNum);

        }
    }

  
}
getNewNum2=()=> {
    for(var i=0; i<=7; i++){
        var currNum=Math.floor(Math.random() * 100+1);
        if(this.state.nums2.includes(currNum)){
          this.getNewNum2();
        }  
        else{
           this.state.nums2.push(currNum);

        }
    }
 
}

control=(pickedNum)=>{
    if(this.state.corrAns1==8){
        document.getElementById("control").innerHTML=pickedNum+" Congratulations Player 1 won the Game!"
    }
    else if(this.state.corrAns2==8){
        document.getElementById("control").innerHTML=pickedNum+" Congratulations Player 2 won the Game!"
    }
}

nextNum=()=>{
    var pickedNum= Math.floor(Math.random() * 100+1);
    
    if(this.state.pickedNumbers.includes(pickedNum)){
        this.nextNum();
    }
    else{
        this.state.pickedNumbers.push(pickedNum);

        if(this.state.nums1.includes(pickedNum) && this.state.nums2.includes(pickedNum)){
            this.state.corrAns1 +=1;
            this.state.corrAns2 +=1;
            this.state.pickedNum2.push(pickedNum);
            document.getElementById("control").innerHTML=pickedNum+" Player one hits - Player two hits";
    
        }else if(this.state.nums2.includes(pickedNum) && !(this.state.nums1.includes(pickedNum))){
            this.state.corrAns2 +=1;
            document.getElementById("control").innerHTML=pickedNum+" - Player two hits ";
    
        }else if(this.state.nums1.includes(pickedNum) && !(this.state.nums2.includes(pickedNum) )){
            this.state.corrAns1 +=1;
            document.getElementById("control").innerHTML=pickedNum+" - Player one hits";
            
        }else{
            document.getElementById("control").innerHTML=pickedNum+" - No hits";
    
        }
        this.control(pickedNum);
    }
   
   
}    



    render(){
        return(
            
            <div>
                <div className="d-grid gap-2">
                <h3>Bingo Game</h3>
                 <Button variant="primary" size="lg" onClick={this.newCard}>
                  START
                 </Button>
                 <Button variant="secondary" size="lg" onClick={this.nextNum}>
                  NEXT NUMBER
                 </Button>
                 <p><b id="control"></b></p>
                </div>
                <div id="container">
    <div className="float">
    <div id="header">
      <h1>Player 1</h1>
    </div>
	<div id="content">
		<table id="bingotable">
			<tr>
				<td id="square10">&nbsp; </td>
				<td id="square11"> &nbsp;</td>
				<td id="square12"> &nbsp;</td>
				<td id="square13"> &nbsp;</td>
				<td id="square14"> &nbsp;</td>
                <td id="square15"> &nbsp;</td>
                <td id="square16"> &nbsp;</td>
                <td id="square17"> &nbsp;</td>
			</tr>
		</table>
	</div>
    </div>
    <div className="float">
    <div id="header">
      <h1>Player 2</h1>
    </div>
	<div id="content">
		<table id="bingotable">
			<tr>
               <td id="square20">&nbsp; </td>
				<td id="square21"> &nbsp;</td>
				<td id="square22"> &nbsp;</td>
				<td id="square23"> &nbsp;</td>
				<td id="square24"> &nbsp;</td>
                <td id="square25"> &nbsp;</td>
                <td id="square26"> &nbsp;</td>
                <td id="square27"> &nbsp;</td>
			</tr>
		</table>
	</div>
    </div>   

            </div>
            </div>
        );
    }
}

export default Bingo;
