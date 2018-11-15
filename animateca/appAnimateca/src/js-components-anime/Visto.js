import React, {Component} from 'react';
import { ListaViews } from './ListaViews';

export class Visto extends Component {
  constructor(props){
    super(props);
    this.state = { visto: 'desconocido' }
    this.handlerClickSi = this.handlerClickSi.bind(this);
    this.handlerClickNo = this.handlerClickNo.bind(this);
  }

  handlerClickSi(){
    this.setState({ visto: 'si' });
  }

  handlerClickNo(){
    this.setState({ visto: 'no' });
  }

  render(){
    return (
      <div>
        <hr/>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-9">
                <h6><span className="fi-eye" title="eye" aria-hidden="true"> ¿Has visto Naruto Shippuden?</span></h6>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-3 btn-group" role="group">
                <a id="btn-si" className="btn-sm btn-secondary text-center mb-4" onClick={this.handlerClickSi} role="button">Si</a>
                <a id="btn-no" className="btn-sm btn-secondary ml-1 text-center mb-4" onClick={this.handlerClickNo} role="button">No</a>
              </div>
            </div>
          </div>
          <hr/>
          {
            this.state.visto === 'desconocido' ? <div></div> : <ListaViews choose={this.state.visto}/>
          }
        </div>
      </div>
    );
  }
}
