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

    const copyText = () => {
        let copiedText = document.querySelector(".form-control");
        let textvalue = copiedText.value;

        navigator.clipboard.writeText(textvalue);
    }

    const removeText = () =>{
        setText("");
    }

  return (
    <>
        <h2 className='my-4'>{heading}</h2>
        <form>
            <div className="mb-3">
                <textarea className="form-control" id="exampleInputEmail1"  style={{backgroundColor : currMode === 'dark' ? 'black' : 'white' , color : currMode === 'dark' ? 'white' : 'black'}} value={text} onChange={onChangeHandler} rows='6' />
            </div>
        </form>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={converttoUpperCase}>Covert to UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={converttoLowerCase}>Covert to LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={convertToCapital}>Covert to Capital</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={copyText}>Copy text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={removeText}>Remove text</button>

        <div className='container'>
            <p>Total words are {text.split(" ").filter((element) => {
                return element.length !==0;
            }).length} and total characters are {text.length}</p>
            <p>It takes around {0.008 * text.split(" ").filter((element) => {
                return element.length !==0;}).length} minutes to read the text</p>
        </div>
    </>
  )
}
