import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import uuid from 'react-uuid'



const initalFormValues = {
    color: '',
    hex: ''
}

const Form = () => {
    const [formValues, setFormValues] = useState(initalFormValues)

    const newColor = {
        code: {
            hex: formValues.code,
        },
        color: formValues.color,
        id: uuid()
    }

    const onSubmit = evt => {
        addColor(newColor)
    }

    const addColor = e => {
        e.preventDefault()
        axiosWithAuth()
            .post(`/api/colors`, {
                code: {
                    hex: newColor.code.value,
                },
                color: newColor.color.value,
                id: uuid()
            })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log({ err }))
    }

    const onInputChange = evt => {
        const { name, value } = evt.target

        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>code
                    <input
                        value={formValues.code}
                        onChange={onInputChange}
                        name='code'
                        type='text'
                    />
                </label>
                <label>color
                    <input
                        value={formValues.color}
                        onChange={onInputChange}
                        name='color'
                        type='text'
                    />
                </label>
                <button>Add Color</button>
            </div>
        </form>
    )



}

export default Form