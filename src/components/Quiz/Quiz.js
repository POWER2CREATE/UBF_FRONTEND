import React, { Component } from 'react'
import QuizHead from './QuizHead'
import './QuizHead.css'
import QuizBody from './QuizBody'
import Timer from './Timer'
export default class Quiz extends Component {
    render() {
        return (
            <div>
                <div className="QuizHead">
                <QuizHead slug={this.props.match.params.id}/>
                </div>
                <QuizBody slug={this.props.match.params.id}/>
            </div>
        )
    }
}
