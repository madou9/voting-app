import { Component } from 'react';
import './App.css';
import Element from './components/Element';
import tof1 from './images/products/toff1.png'
import tof2 from './images/products/toff2.png'
import tof3 from './images/products/toff3.png'
import tof4 from './images/products/toff4.png'

class App extends Component {
 
    data = [
        {
            title: 'Yellow Pail',
            description: 'On-demand sand castle construction expertise.',
            submitterAvatarUrl: 'src/images/avatars/daniel.jpg',
            productImageUrl: tof1,
            count: 10
          },
          {
            
            title: 'Supermajority: The Fantasy Congress League',
            description: 'Earn points when your favorite politicians pass legislation.',
            submitterAvatarUrl: 'src/images/avatars/kristy.png',
            productImageUrl: tof2,
            count: 20
          },
          {
            
            title: 'Tinfoild: Tailored tinfoil hats',
            description: 'We already have your measurements and shipping address.',
            submitterAvatarUrl: 'src/images/avatars/veronika.jpg',
            productImageUrl: tof3,
            count: 30
          },
          {
            
            title: 'Haught or Naught',
            description: 'High-minded or absent-minded? You decide.',
            submitterAvatarUrl: 'src/images/avatars/molly.png',
            productImageUrl: tof4,
            count: 40
          },
    ]
    constructor(props) {
      super(props)
    
      this.state = {
         datas : this.data,
         
      }
    }
  handleClik = (i) => {
    let copyDatas = [...this.state.datas]
    copyDatas[i].count = copyDatas[i].count + 1;

    this.setState({
      count : copyDatas
      
    })
  }

      
      render(){
     
      return (
      <div className="App">
        {this.state.datas.sort((a,b) => b.count - a.count).map(((element , index) =>{
         return <Element 
          title = {element.title} 
          description ={element.description}
          submitterAvatarUrl = {element.submitterAvatarUrl}
          productImageUrl ={element.productImageUrl}
          index={index}
          key={index}
          handleClik = {this.handleClik}
          count ={element.count}
          />
           
        }))}
       
      </div>
    );
  }
}

  


export default App;
