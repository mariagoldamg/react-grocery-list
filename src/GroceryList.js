import {Component} from 'react';
import check from './check.png'

export class GroceryList extends Component{
   state = {
userInput: '',
groceryList:[]
 }
    
    onChangeEvent(e){
        this.setState({userInput: e});
    }

addItem(input){ 
    if (input===''){alert ('Please enter an item')}
    else{
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput:''})
}}

crossedWord(event){
    const li= event.target;
    li.classList.toggle ('crossed');
}

deleteItem(){
    let listArray = this.state.groceryList;
    listArray.length=0;
    //listArray=[];
    this.setState({groceryList:listArray})
}

onFormSubmit(e){
    e.preventDefault();
}
//We use tag <form> </form> so ENTER button automatically connects to input
render() {

    return(<div>
<form onSubmit={this.onFormSubmit}>
        <div className='box'>
<input type="text" placeholder='What do you want to buy today?' 
onChange={(e)=> {this.onChangeEvent(e.target.value)}}
value={this.state.userInput}/> 
</div>
<div className='box'>
<button className ='btn add' onClick={()=> this.addItem(this.state.userInput)}>Add</button>
</div>

<ul>
    {this.state.groceryList.map((item, index) => (
        <li onClick={this.crossedWord} key={index}>
            <img src={check} width="40px" alt='check'/>
             {item}</li>
    ))}
</ul>
<div className='box'>
<button className='btn delete' onClick={()=> this.deleteItem()}>Delete</button>
    </div>
    </form>
    </div>
    )
}
    }
