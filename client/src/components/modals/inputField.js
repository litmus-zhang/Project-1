import './styles.css'

export default function InputField({label, placeholder}){
    return(
        <div className='inputfield'>
        <label> {label} {" "}
        <br/>
            <input placeholder={placeholder}/>
            </label>
        </div>
    )
}