import React, {Component} from 'react';
import './style.css'

class Letter extends Component{

    render(){
    
		const {name , img} = this.props.dataForm
		return (
			<React.Fragment> 
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="film-preview">
								<img src={img} alt=""/>
								<h4 className='name-film'>{name}</h4>
							</div>
						</div>
					</div>
				</div> 
			</React.Fragment>
		)
	}
}

export default Letter