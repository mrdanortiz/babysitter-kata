import React, { SyntheticEvent } from "react";
import { Form, CheckboxProps, Container, InputProps, Header, Message } from "semantic-ui-react";
import { familySelection } from "../calculators/familySelection";

interface State {
    family: string;
    startTime: number;
    endTime: number;
}
export class InputForm extends React.Component {

    state: State = {
        family: undefined,
        startTime: undefined,
        endTime: undefined
    };

    handleChange = (e: SyntheticEvent, { name, value }: CheckboxProps | InputProps) => this.setState({ [name]: value });

    render() {

        const timeOptions = [
            {
                key: 1,
                text: "5:00 PM",
                value: 17
            },
            {
                key: 2,
                text: "6:00 PM",
                value: 18
            },
            {
                key: 3,
                text: "7:00 PM",
                value: 19
            },
            {
                key: 4,
                text: "8:00 PM",
                value: 20
            },
            {
                key: 5,
                text: "9:00 PM",
                value: 21
            },
            {
                key: 6,
                text: "10:00 PM",
                value: 22
            },
            {
                key: 7,
                text: "11:00 PM",
                value: 23
            },
            {
                key: 8,
                text: "12:00 AM",
                value: 0
            },
            {
                key: 9,
                text: "1:00 AM",
                value: 1
            },
            {
                key: 10,
                text: "2:00 AM",
                value: 2
            },
            {
                key: 11,
                text: "3:00 AM",
                value: 3
            },
            {
                key: 12,
                text: "4:00 AM",
                value: 4
            },
        ];

        const totalPay = familySelection(
            this.state.family,
            this.state.startTime,
            this.state.endTime
        );
        return (
            <Container textAlign="center">
                <Form>
                    <Header
                        textAlign="center"
                        style={{ display: "inline" }}
                        as="h3"
                        icon="users"
                        content="Choose Family"
                    />
                    <Form.Field>
                        <Container textAlign="center" style={{ display: "inline-flex" }}>
                            <Form.Radio
                                label="A"
                                name="family"
                                value="A"
                                inline={true}
                                checked={this.state.family === "A"}
                                onChange={this.handleChange}
                            />
                            <Form.Radio
                                label="B"
                                name="family"
                                value="B"
                                inline={true}
                                style={{ marginLeft: "100px", marginRight: "100px" }}
                                checked={this.state.family === "B"}
                                onChange={this.handleChange}
                            />
                            <Form.Radio
                                label="C"
                                name="family"
                                value="C"
                                inline={true}
                                checked={this.state.family === "C"}
                                onChange={this.handleChange}
                            />
                        </Container>
                    </Form.Field>
                    {
                        this.state.startTime &&
                        this.state.endTime &&
                        (totalPay === 0 || totalPay == NaN)
                            ?
                            <Message negative={true}>
                                <Message.Header>Please choose an end time later than the start time</Message.Header>
                            </Message>
                            : undefined
                    }
                    <Header
                        textAlign="center"
                        style={{ display: "inline" }}
                        as="h3"
                        icon="clock"
                        content="Choose Start Time"
                    />
                    <Form.Dropdown
                        name="startTime"
                        selection={true}
                        fuild="true"
                        options={timeOptions}
                        onChange={this.handleChange}
                    />
                    <Header
                        textAlign="center"
                        style={{ display: "inline" }}
                        as="h3"
                        icon="clock"
                        content="Choose End Time"
                    />
                    <Form.Dropdown
                        name="endTime"
                        selection={true}
                        fuild="true"
                        options={timeOptions}
                        onChange={this.handleChange}
                    />
                </Form >
                <br />
                <Container>
                    {this.state.family && this.state.startTime && this.state.endTime ?
                        <h2>Total Pay: $ {totalPay}</h2>
                        : undefined
                    }
                </Container>
            </Container>
        );
    }
}

export default InputForm;
