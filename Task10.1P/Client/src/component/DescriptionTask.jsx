import React from 'react';
import InputExample from './Input'
import '../css/DescriptionTask.css'

const DescriptionTask = (props) =>{
    return(
        <div>
        <div className='title2'>
            <h2>Describe your task to Workers</h2>
        </div>
        <div>
            <InputExample labelid = 'labeltile' classname='Description' text='Title' type='text' name='TaskTitle' onChange={props.TitleChange}/>
            <br></br>
            <InputExample classname='Description' text='Description' type='text' name='TaskDescription' onChange={props.DescriptionChange} />
            <br></br>
            <InputExample classname='Description' text='Expiry Date' type='date' name='ExpiryDate' onChange={props.DateChange}/>
        </div>
        </div>
    )
}

export default DescriptionTask