import React, {Component} from 'react';
import Project from './Project.jsx';

class Matriz extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render()
  {
    console.log(this.props.lista);
    return(
      <div >
        {
          this.props.lista.map((proy,i) => {
            if(i<9)
            {
              console.log(proy);
              return (
                      <div className="col-md-4" key={i}>
                          <Project project={proy}/>
                      </div>
              );
            }
          })
        }
      </div>
    )
  }

}
export default Matriz;
