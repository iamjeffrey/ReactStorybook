import React, { useState, Component } from 'react'
import PropTypes from 'prop-types'

// class EventPractice extends Component {
//     static defaultProps = {
//         name: 'Event Practice'
//     }
//     static propTypes = {
//         name: PropTypes.string.isRequired
//     }
//     state = {
//         username: '',
//         message: '',
//         num: 0
//     }
    
//     handleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//         this.setState(prev => ({ num: prev.num + 1 }))
//     }

//     handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             this.setState({ [e.target.name]: ''})
//         }
//     }

//     render () {
//         return (
//             <div>
//                 <input 
//                     type="text" 
//                     name="username" 
//                     value={this.state.username}
//                     placeholder="Enter username"
//                     onChange = {this.handleChange} 
//                     onKeyPress={this.handleKeyPress} />
//                 <input 
//                     type="text" 
//                     name="message" 
//                     value={this.state.message}
//                     placeholder="Enter message"
//                     onChange = {this.handleChange}
//                     onKeyPress={this.handleKeyPress} />
//                 <h3>Changed username : {this.state.username}</h3>
//                 <h3>Changed message : {this.state.message}</h3>
//                 <h3>Changed num : {this.state.num}</h3>
//             </div>
//         )
//     }
// }

// ref : 특정 input에 포커스 주기, 스크롤 조작, canvas에 그림 그리기 등에 사용
const EventPractice = ({name, action}) => {
    const inputRef = React.createRef() //React v16.3 >=  
    let messageInput = null

    const style = { backgroundColor: '#fff'}
    const [form, setForm] = useState({
        username: '', 
        message:'', 
        num: 0
    })
    const handleChange = e => {
        const willForm = { 
            ...form,
            [e.target.name]: e.target.value,
            num: form.num + 1
        }
        setForm(willForm)
        action('handleChange')
    }
    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            const willForm = { ...form, [e.target.name]: '' }
            setForm(willForm)
            action('handleKeyPress')
        }
    }
    const handleClickToUsername = () => {
        action(inputRef.current.value) 
        inputRef.current.focus() //React.createRef()를 사용한 설정(차이점 주의)
    }
    const handleClickToMessage = () => {
        action(messageInput.value)
        messageInput.focus() //ref={ref => messageInput = ref}로 설정(React.createRef() 차이점 주의)
    }
    return (
        <div>
            <h2>{name}</h2>
            <input 
                ref={inputRef}
                type="text" 
                name="username" 
                value={form.username}
                placeholder="Enter username"
                onChange = {handleChange} 
                onKeyPress={handleKeyPress} />
            <input 
                ref={ref => messageInput = ref}
                type="text" 
                name="message" 
                value={form.message}
                placeholder="Enter message"
                onChange = {handleChange}
                onKeyPress={handleKeyPress} />
            <h3>Changed username : {form.username}</h3>
            <h3>Changed message : {form.message}</h3>
            <h3>Changed num : {form.num}</h3>
            <button onClick={handleClickToUsername}>Username focus</button>
            <button onClick={handleClickToMessage}>Message focus</button>
        </div>
    )
}
EventPractice.propTypes = { name: PropTypes.string.isRequired }

export default EventPractice
