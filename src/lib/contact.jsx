import '../App.css';
import React from 'react';
import { Grid, Typography, Paper, Divider, Link } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    contactContainerIn: {
        animationFillMode: 'forwards',
        animation: `$contactContainerIn 2s  ${theme.transitions.easing.easeInOut}`,
    },
    contactContainerOut: {
        animationFillMode: 'forwards',
        animation: `$contactContainerOut 2s  ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes contactContainerIn': {
        '0%': {
            transform: 'translate(-1500px,0px)',
            opacity: 0,
            display:'block'
        },
        '50%': {
            transform: 'translate(0px,0px)',
            opacity: 1
        },
        '100%': {
            transform: 'translate(0px,0px)',
            opacity: 1
        }
    },
    '@keyframes contactContainerOut': {
        '0%': {
            transform: 'translate(0px,0px)',
            opacity: 1
        },
        '50%': {
            transform: 'translate(-1500px,0px)',
            opacity: 0
        },
        '100%': {
            transform: 'translate(-1500px,0px)',
            opacity: 0,
            display:'none'
        }
    }
});

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = { display: false, rendered: false }
    }
    componentDidUpdate() {
        if (this.props.sideBarValue == 3 && !this.state.rendered) {
            this.setState({ display: true })
            this.setState({ rendered: true })
        }
    }
    hideDisplay(e) {
        if (this.display)
            this.setState({ display: e })
    }
    render() {
        const classes = this.props.classes
        const p = this.props.sideBarValue == 3 ? true : false
        return this.state.display ? <ContactCompnent classes={classes} p={p} display={this.props.display} hideDisplay={this.hideDisplay} /> : null
    }
}
class ContactCompnent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tabValue: 0 }
    }
    render() {
        const classes = this.props.classes
        const p = this.props.p
        const contact = {
            name: {
                value: 'Cornello Engreso',
                variant: 'h4'
            }, email: {
                name: 'Email',
                value: 'oniel808@gmail.com',
                variant: 'body2'
            }, phone: {
                name: 'Phone',
                value: '  (+63)947-419-5458',
                variant: 'body2'
            }, address1: {
                name: 'Address',
                value: 'Amadeo, Cavite Philippines',
                variant: 'body2'
            }, githubLink: {
                name: 'Github Link: oniel808',
                value: 'https://github.com/oniel808/',
                type: 'link',
                variant: 'body2'
            }
        }

        return (
            <Grid container className={`${p ? classes.contactContainerIn : classes.contactContainerOut}`} direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ marginBottom: 200, position: 'absolute', bottom: 0, left: 0, marginTop: 150 }}>
                <Grid item md={9} sm={12}>
                    <Grid container component={Paper} spacing={5} style={{ padding: '30px 10px', maxHeight: 450, overflow: 'auto' }}>
                        <Grid item xs={12}>
                            <Typography variant="h3">My Contact</ Typography>
                        </Grid>
                        <Divider component="grid" />
                        <Grid item xs={12}>
                            {
                                Object.keys(contact).map(field => {
                                    console.log('contact', contact[field].value)
                                    if (field == 'address') {
                                        return (<Typography key={field}></ Typography>)
                                    } else if (field == 'githubLink') {
                                        return (
                                            <Typography variant={contact[field].variant} gutterBottom key={field}>
                                                <Link href={contact[field].value}>{contact[field].name}</Link>
                                                <br />
                                            </Typography>)
                                    } else {
                                        return (
                                            <Typography variant={contact[field].variant} gutterBottom key={field}>
                                                {contact[field].name?contact[field].name+': ':''}{contact[field].value}
                                                <br />
                                            </Typography>)
                                    }
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Contact)