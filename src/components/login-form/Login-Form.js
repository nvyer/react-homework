import React from 'react';
import './Login-form.css'

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
            },
            errors: {
                firstName: false,
                lastName: false,
                email: false,
                phoneNumber: false,
            },
        };
    }

    componentDidMount() {
        localStorage.clear();
    }

    saveData = () => {
        localStorage.setItem('userInfo', JSON.stringify(this.state))
    }

    validateField = (field, value) => {
        if(['firstName', 'lastName'].includes(field)) {
            return Boolean(Number(value));
        } else if (field === 'email') {
            return !/\S+@\S+\.\S+/.test(value);
        } else if (field === 'phoneNumber'){
            return value.length <= 9;
        }

        return false;
    }

    onFieldChange = (fieldName) => {
        return ({ target: { value } }) => {
            this.setState(({ values: prevValues, errors: prevErrors }) => ({
                values: { ...prevValues, [fieldName]: value },
                errors: { ...prevErrors, [fieldName]: this.validateField(fieldName, value) }
            }));
        }
    }

    render() {
        const { values, errors } = this.state;
        const isSaveBtnDisabled = Object.values(errors).some(Boolean);
        const isFormDirty = !Object.values(values).every(Boolean);

        return (
            <div className="container">
                <p>First Name</p>
                <input
                    className="input"
                    onChange={this.onFieldChange('firstName')}
                />
                {errors.firstName && <span className="err">First Name is invalid</span>}
                <p>Last Name</p>
                <input
                    onChange={this.onFieldChange('lastName')}
                    className="input"
                />
                {errors.lastName && <span className="err">Last Name is invalid</span>}
                <p>Email</p>
                <input
                    className="input"
                    onChange={this.onFieldChange('email')}
                />
                {errors.email && <span className="err">Email is invalid</span>}
                <p>Phone number</p>
                <input
                    type="number"
                    className="input"
                    onChange={this.onFieldChange('phoneNumber')}
                />
                {errors.phoneNumber && <span className="err">Phone Number is invalid</span>}
                <button
                    type="submit"
                    className="submit-btn"
                    onClick={this.saveData}
                    disabled={isFormDirty || isSaveBtnDisabled}
                >
                    Submit
                </button>
            </div>
        );
    }
}