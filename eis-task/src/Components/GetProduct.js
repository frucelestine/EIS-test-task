import React, {Component} from 'react';
import result from '../result';
import ShowProducts from './ShowProducts'


class GetProduct extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.state = { 
            items:[]
         }
    }

    componentDidMount(){
        result.get('/product.json').then(res =>{
            console.log('Get: ', res);
            const fetchedItems = [];
            for(let key in res.data){
                fetchedItems.push({
                    ...res.data[key],
                    id:key
                })
            }
            this.setState({items:fetchedItems})
        })
    }

    
    onDelete = (itemId) =>{
         result.delete('/product/' + itemId + '.json').then(res=>{
             window.location.reload(true);
         })
        //        const fetchedItems = [];
        //     for(let key in res.data){
        //         fetchedItems.push({
        //             ...res.data[key],
        //             id:key
        //         })
        //     }
        //     this.setState({items:fetchedItems})
        
    }
    
    render() { 
        
        return ( 
            <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',}}>
                {this.state.items.map(item =>(
                    <ShowProducts
                    key= {item.id}
                    prev={item.prev}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    color={item.color}
                    delete={this.onDelete.bind(this, item.id)}
                    />
                ))}
            </div>
         );
    }
}
 
export default GetProduct;