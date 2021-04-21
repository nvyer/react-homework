import React from "react";
import './wrapper.css';

export class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { id: 1, isOpen: false, unmounted: 0 },
                { id: 2, isOpen: false, unmounted: 0 },
                { id: 3, isOpen: false, unmounted: 0 },
                { id: 4, isOpen: false, unmounted: 0 },
                { id: 5, isOpen: false, unmounted: 0 },
                { id: 6, isOpen: false, unmounted: 0 }
            ],
            isReportOpen: false
        };
    }

    openBox = (id) => {
        this.setState((prevState) => ({
            boxes: prevState.boxes.map(el => el.id === id ? ({ ...el, isOpen: true }) : el)
        }))
    }

    closeBox = (id) => {
        this.setState((prevState) => ({
            boxes: prevState.boxes.map(el => el.id === id ? ({ ...el, isOpen: false, unmounted: el.unmounted + 1 }) : el)
        }))
    }

    openReport = () => {
        this.setState((prevState) => ({
            isReportOpen: !prevState.isReportOpen
        }))
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="box-container">
                        {this.state.boxes.map((el) => {
                            return (
                                el.isOpen ?
                                    <div key={el.id} className='box'>
                                        <span className='number'>{el.id}
                                        </span>
                                        <span onClick={() => this.closeBox(el.id)} className='x-btn'>X</span>
                                    </div>
                                    :
                                    <span onClick={() => this.openBox(el.id)} className='show-box'>Show</span>
                            )
                        })}
                    </div>
                    <button onClick={this.openReport} className="report-btn">
                        {this.state.isReportOpen ? 'Close Report' : 'Get Report' }
                    </button>
                    {this.state.isReportOpen && (
                        <div className='report-container'>
                            {this.state.boxes.map((el) => {
                                return (

                                    <p>card number {el.id} has been unmounted {el.unmounted} times !</p>

                                )
                            })}
                        </div>)}
                </div>
            </div>
        );
    }
}
