import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3'>
				{'This WebApp will detected faces in your pictures. Get it a try!'}
			</p>
			<div className='center'>
			  <div className=' form center pa4 br3 shadow-1'> 
				<input className='f4 pa2 w-70 center border-radius' type='text' onChange = {onInputChange} />
				<button className='w-25 grow f4 link ph3 pv2 dib white bg-purple center '
						onClick={onButtonSubmit}	
				>Detected!</button>
			  </div>
 			</div>
		</div>

	);
}




export default ImageLinkForm;