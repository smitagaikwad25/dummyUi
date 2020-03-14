import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        // display: 'flex',
        // flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "30%"
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    box: {
        border: "inset 2px black",
        marginTop: "15%",
        marginLeft: "15%",
        marginRight: "15%"
    },
    textArea: {
        width: "62%"
    }
});

class OutlinedTextFields extends React.Component {
    state = {
        name: '',
        PhoneNumber: '',
        Pincode: '',
        Locality: '',
        Address: '',
        City: '',
        Landmark: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleChange = PhoneNumber => event => {
        this.setState({
            [PhoneNumber]: event.target.value,
        });
    };

    handleChange = Pincode => event => {
        this.setState({
            [Pincode]: event.target.value,
        });
    };


    handleChange = Locality => event => {
        this.setState({
            [Locality]: event.target.value,
        });
    };


    handleChange = Address => event => {
        this.setState({
            [Address]: event.target.value,
        });
    };


    handleChange = City => event => {
        this.setState({
            [City]: event.target.value,
        });
    };


    handleChange = Landmar => event => {
        this.setState({
            [Landmar]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (

            <div className={classes.box}>
                {/* <form className={classes.container} noValidate autoComplete="off"> */}
                <p>Customer Details</p>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="PhoneNumber"
                        type="number"
                        className={classes.textField}
                        value={this.state.PhoneNumber}
                        onChange={this.handleChange('PhoneNumber')}
                        margin="normal"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        id="outlined-name"
                        label="Pincode"
                        type="number"
                        className={classes.textField}
                        value={this.state.Pincode}
                        onChange={this.handleChange('Pincode')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Locality"
                        className={classes.textField}
                        value={this.state.Locality}
                        onChange={this.handleChange('Locality')}
                        margin="normal"
                        variant="outlined"
                    />
                    <br />
                    <TextareaAutosize className={classes.textArea} aria-label="minimum height"
                        rowsMin={3} rowsMax={3} placeholder="Address..." />
                    <br />
                    <TextField
                        id="outlined-name"
                        label="City/Town"
                        className={classes.textField}
                        value={this.state.City}
                        onChange={this.handleChange('City')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Landmark"
                        className={classes.textField}
                        value={this.state.Landmark}
                        onChange={this.handleChange('Landmark')}
                        margin="normal"
                        variant="outlined"
                    />
                    <br />
                    <p>type</p>
                    {/* </form> */}
            </div>

        );
    }
}

OutlinedTextFields.propTypes = {
                    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
