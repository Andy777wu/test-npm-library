import React, { useState } from 'react';
const Form = (props) => {
    const { 
        formList=[{
            label: 'label1',
            name: 'label1',
            value: ''
        }] ,
        submit=(()=>{}),
        type='text'
    } = props
    const [data, setData] = useState(formList)
    const commit = (e) => {
        console.log(e);
        alert(JSON.stringify(e))
        console.log('点我提交');
        // submit(e)
    }
    return (
        <form>
            {
                data.map((item, i) => {
                    return <p>
                        <label>{item.label}</label>
                        <input type={type} name={item.name} value={item.value} onChange={(e)=> {
                            const arr = [...data]
                            arr[i].value = e.target.value
                            setData(arr)
                        }} />
                    </p>
                })
            }
            <button type='submit' onClick={commit}>提交</button>
        </form>
    )
}

export default Form
