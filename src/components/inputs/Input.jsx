import "./input.css"

export default function Input({ firstName, lastName, email, password, setFirstName, setLastName, setEmail, setPassword }) {

    function returnObject(type, setFunc, value, placeholder, errorText) {
        this.type = type
        this.setFunc = setFunc
        this.value = value
        this.placeholder = placeholder
        this.errorText = errorText
    }

    const inputs = [
        new returnObject("text", setFirstName, firstName, "First Name", "First Name cannot be empty"),
        new returnObject("text", setLastName, lastName, "Last Name", "Last Name cannot be empty"),
        new returnObject("text", setEmail, email, "Email", "Looks like this is not an email"),
        new returnObject("password", setPassword, password, "Password", "Password cannot be empty")
    ]

    const Validate = (value) => value.trim() === ""

    return (
        inputs.map((e, index) => (
            <div className='input-container' key={index}>
                <input
                    type={e.type}
                    value={e.value}
                    onChange={el => { e.setFunc(el.target.value) }}
                    style={
                        Validate(e.value) ?
                            {
                                border: "2px solid #FF7979",
                                backgroundImage: "url('/images/icon-error.svg')"
                            } : {}
                    }
                    placeholder={e.placeholder}
                />
                <h6 style={{ display: Validate(e.value) ? "block" : "none" }}>{e.errorText}</h6>
            </div>
        )))
}