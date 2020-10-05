import React, {useState} from 'react';
import Task from './component/Task';
import DescriptionTask from './component/DescriptionTask';
import SettingTask from './component/SettingTask';
import WorkerRequirement from './component/WorkerRequirement';
import InputExample from './component/Input';
import ChoiceTask from './component/ChoiceTask';
import DecisionTask from './component/DecisionTask';
import SentenceTask from './component/SentenceTask';
import './css/Home.css';
import './css/Task.css';



function App() {
  const [isValue,setValue] = useState('')
  const[contact,setInput] = useState({
    TaskType: '',
    TaskTitle:'',
    TaskDescription:'',
    ExpiryDate:'',
    TaskQuestion:'',
    OptionOne:'',
    OptionTwo:'',
    OptionThree:'',
    Judgement:'',
    isRequire:'',
    Reward:'',
    Numbers:''
  })

  const ChoiceChange = (e) =>{
    setValue('Choice')
    setInput((PreValue)=>{
      return{
        TaskType: 'Choice',
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate:PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    })
  }
  const DecisionChange = (e) =>{
    setValue('Decision')
    setInput((PreValue)=>{
      return{
        TaskType: 'Decision',
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate:PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    })
  }
  const SentenceChange = (e) =>{
    setValue('Sentence')
    setInput((PreValue)=>{
      return{
        TaskType: 'Sentence',
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate:PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    })
  }

  const InputChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInput((PreValue) => {
      if(name === 'TaskTitle'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: value,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate:PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
      else if(name === 'TaskDescription'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: value,
        ExpiryDate:PreValue.ExpiryDate,
        TaskQuestion:PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'ExpiryDate'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: value,
        TaskQuestion:PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }  
    }
    else if(name ==='TaskQuestion'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: value,
        OptionOne:PreValue.OptionOne,
        OptionTwo: PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'OptionOne'){
      return{
        TaskType: PreValue.TaskType,
      TaskTitle: PreValue.TaskTitle,
      TaskDescription: PreValue.TaskDescription,
      ExpiryDate: PreValue.ExpiryDate,
      TaskQuestion: PreValue.TaskQuestion,
      OptionOne:value,
      OptionTwo: PreValue.OptionTwo,
      OptionThree:PreValue.OptionThree,
      Judgement:PreValue.Judgement,
      isRequire:PreValue.isRequire,
      Reward:PreValue.Reward,
      Numbers:PreValue.Numbers
      }
    }
    else if(name === 'OptionTwo'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
      TaskDescription: PreValue.TaskDescription,
      ExpiryDate: PreValue.ExpiryDate,
      TaskQuestion: PreValue.TaskQuestion,
      OptionOne:PreValue.OptionOne,
      OptionTwo:value,
      OptionThree:PreValue.OptionThree,
      Judgement:PreValue.Judgement,
      isRequire:PreValue.isRequire,
      Reward:PreValue.Reward,
      Numbers:PreValue.Numbers
      }
    }
    else if(name === 'OptionThree'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo:PreValue.OptionTwo,
        OptionThree:value,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'Judgement'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo:PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:value,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'isRequire'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo:PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:value,
        Reward:PreValue.Reward,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'Reward'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo:PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:value,
        Numbers:PreValue.Numbers
      }
    }
    else if(name === 'Numbers'){
      return{
        TaskType: PreValue.TaskType,
        TaskTitle: PreValue.TaskTitle,
        TaskDescription: PreValue.TaskDescription,
        ExpiryDate: PreValue.ExpiryDate,
        TaskQuestion: PreValue.TaskQuestion,
        OptionOne:PreValue.OptionOne,
        OptionTwo:PreValue.OptionTwo,
        OptionThree:PreValue.OptionThree,
        Judgement:PreValue.Judgement,
        isRequire:PreValue.isRequire,
        Reward:PreValue.Reward,
        Numbers:value
      }
    }
    })
  }

  const handleSubmit = () =>{
    fetch('http://localhost:8000/register',{
      method :'post',
      headers :{'Content-Type':'application/json'},
      body :JSON.stringify({
        TaskType: contact.TaskType,
        TaskTitle : contact.TaskTitle,
        TaskDescription:contact.TaskDescription,
        ExpiryDate:contact.ExpiryDate,
        TaskQuestion:contact.TaskQuestion,
        OptionOne:contact.OptionOne,
        OptionTwo:contact.OptionTwo,
        OptionThree:contact.OptionThree,
        Judgement:contact.Judgement,
        isRequire:contact.isRequire,
        Reward:contact.Reward,
        Numbers:contact.Numbers
      })
    })
    .then(response =>response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.log("Error"+err)
    })
  }

  return(
    <div className ='home'>
      <Task/>
      <div className='Select'>
      <span> 
            <InputExample classname='type' id='Choice' type='radio' name='TaskType' onChange={ChoiceChange} value={isValue} text2='Choice Task'/>
            <InputExample classname='type' id='Decision' type='radio' name='TaskType'  onChange={DecisionChange} value={isValue} text2='Decision-Making Task'/>
            <InputExample classname='type' id='Sentence' type='radio' name='TaskType'  onChange={SentenceChange} value={isValue} text2='Sentence-Level Task'/>
        </span> 
        </div>
      <DescriptionTask TitleChange={InputChange} DescriptionChange={InputChange} DateChange={InputChange}/>
      {
      isValue === 'Choice' && isValue !== 'Decision' && isValue !== 'Sentence'?
      <ChoiceTask ChoiceTask={InputChange} OptionOne={InputChange} OptionTwo={InputChange} OptionThree={InputChange}/>
      :
      <div>
      </div>
      }
      {
      isValue === 'Decision' && isValue !== 'Choice' && isValue !== 'Sentence' ?
      <DecisionTask DecisionTask={InputChange} YesDecision={InputChange} NoDecision={InputChange}/>
      :
      <div>
      </div>
      }
      {
      isValue === 'Sentence' && isValue !== 'Decision' && isValue !== 'Choice' ?
      <SentenceTask SentenceTask={InputChange}/>
      :
      <div>
      </div>
      }
      {
        isValue !== 'Sentence' && isValue !== 'Decision' && isValue !== 'Choice'?
        <SettingTask/>
        :
        <div>
        </div>
      }
      <WorkerRequirement Require={InputChange} Reward={InputChange} Numbers={InputChange}/>
      <div className='button'>
                <button type='submit' className="ui button" onClick={handleSubmit}>Save</button>
      </div>
    </div>   
  );
}

export default App;
