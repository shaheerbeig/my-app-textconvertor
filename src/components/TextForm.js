import React, {useState} from 'react'

export default function TextForm({heading,currMode}) {
    const [text , setText] = useState("Enter the text here");

    const converttoUpperCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const converttoLowerCase = () => {
        setText(text.toLowerCase());
    }

    const convertToCapital = () => {
        const words = text.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                words[i] = words[i][0].toUpperCase() + words[i].substring(1);
            }
        }
        setText(words.join(' '));
    };

  return (
    <>
        <h2 className='my-4'>{heading}</h2>
        <form>
            <div className="mb-3">
                <textarea className="form-control" id="exampleInputEmail1"  style={{backgroundColor : currMode === 'dark' ? 'black' : 'white' , color : currMode === 'dark' ? 'white' : 'black'}} value={text} onChange={onChangeHandler} rows='6' />
            </div>
        </form>
        <button className='btn btn-primary mx-2' onClick={converttoUpperCase}>Covert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={converttoLowerCase}>Covert to LowerCase</button>
        <button className='btn btn-primary' onClick={convertToCapital}>Covert to Capital</button>
        <div className='container'>
            <p>Total words are {text.split(" ").length} and total characters are {text.length}</p>
            <p>It takes around {0.008 * text.split(" ").length} minutes to read the text</p>
        </div>
    </>
  )
}
