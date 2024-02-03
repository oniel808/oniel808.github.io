import '../App.css';
import React from 'react';
import { Grid, Typography, Paper, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
// import javascriptLogo from '../expertise-icons/javascript-logo.png'
// import htmlLogo from '../expertise-icons/html-logo.png'
// import CSSLogo from '../expertise-icons/CSS-logo.png'
// import reactLogo from '../expertise-icons/react-logo.png'
// import nodejsLogo from '../expertise-icons/nodejs-logo.png'
// import meteorLogo from '../expertise-icons/meteor-logo.svg'
// import mongoLogo from '../expertise-icons/mongo-logo.png'
// import restLogo from '../expertise-icons/rest-logo.png'
// import photoshopLogo from '../expertise-icons/photoshop-logo.png'
// import illustratorLogo from '../expertise-icons/illustrator-logo.png'

const styles = theme => ({
    expertiseContainerIn: {
        animationFillMode: 'forwards',
        animation: `$expertiseContainerIn 2s  ${theme.transitions.easing.easeInOut}`,
    },
    expertiseContainerOut: {
        animationFillMode: 'forwards',
        animation: `$expertiseContainerOut 2s  ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes expertiseContainerIn': {
        '0%': {
            transform: 'translate(-1500px,0px)',
            opacity: 0,
            display: 'block'
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
    '@keyframes expertiseContainerOut': {
        '0%': {
            transform: 'translate(0px,0px)',
            opacity: 1,
        },
        '50%': {
            transform: 'translate(-1500px,0px)',
            opacity: 0
        },
        '100%': {
            transform: 'translate(-1500px,0px)',
            opacity: 0,
            display: 'none'
        }
    }
})
class Expertise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { display: false, rendered: false }
    }
    componentDidUpdate() {
        if (this.props.sideBarValue == 2 && !this.state.rendered) {
            this.setState({ display: true })
            this.setState({ rendered: true })
        }
    }
    componentWillUpdate(prevProps, prevState, snapshot) {
        if (prevProps.viewSize != prevState.viewSize)
            this.setState({ viewSize: prevProps.viewSize });
    }
    hideDisplay(e) {
        if (this.display)
            this.setState({ display: e })
    }
    render() {
        const classes = this.props.classes
        const p = this.props.sideBarValue == 2 ? true : false
        return this.state.display ? <ExpertiseCompnent classes={classes} p={p} display={this.props.display} hideDisplay={this.hideDisplay} viewSize={this.state.viewSize} /> : null
    }
}
class ExpertiseCompnent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tabValue: 0 }
    }
    handleChangeTab(e, ne) {
        this.setState({ tabValue: ne })
    }
    render() {
        const classes = this.props.classes
        const p = this.props.p
        console.log('p', p)
        const expertise = [{
            name: 'JavaScript',
            icon: 'javascript-logo.png',
            description: ''
        }, {
            name: 'HTML',
            icon: 'html-logo.png',
            description: ''
        }, {
            name: 'CSS',
            icon: 'CSS-logo.png',
            description: ''
        }, {
            name: 'ReactJs',
            icon: 'react-logo.png',
            description: ''
        }, {
            name: 'NodeJs',
            icon: 'nodejs-logo.png',
            description: ''
        }, {
            name: 'MeteorJs',
            icon: 'meteor-logo.svg',
            description: ''
        }, {
            name: 'MongoDB',
            icon: 'mongo-logo.png',
            description: ''
        }, {
            name: 'REST',
            icon: 'rest-logo.png',
            description: ''
        }, {
            name: 'Photoshop',
            icon: 'photoshop-logo.png',
            description: ''
        }, {
            name: 'Illustrator',
            icon: 'illustrator-logo.png',
            description: ''
        },]
        const smallView = ['sm', 'xs']
        let isSmall = smallView.includes(this.props.viewSize)
        return (
            <Grid container className={`${p ? classes.expertiseContainerIn : classes.expertiseContainerOut}`} direction="row" justifycontent="flex-start" alignItems="flex-start" style={isSmall ? { marginTop: 200 } : { marginBottom: 200, marginTop: 150, position: 'absolute', bottom: 0, left: 0 }}>
                <Grid item md={11} sm={12}>
                    <Grid container component={Paper} spacing={5} style={{ padding: '30px 10px', maxHeight: 600, overflow: 'auto' }}>
                        {expertise.map((e) =>
                            <Grid item md={3} xs={3} key={e.name}>
                                <Card lg={6}>
                                    <img src={require('../expertise-icons/' + e.icon)} style={{ height: 140, marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                                    {/* <CardMedia
                                        sx={{ height: 140 }}
                                        image={require('../expertise-icons/' + e.icon)}
                                        title={e.name}
                                    /> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" align="center" component="div">{e.name}</Typography>
                                        <Typography variant="body2">{e.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Expertise)