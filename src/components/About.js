import { Link } from "react-router-dom"
const About = () => {
    return (
        <div>
            <h3 style={{ margin: '20px'}}>Version 3.0.0.35</h3>
            <Link style={{ padding:'6px' , fontWeight:'normal' , borderRadius:'2px'}} to='/'>Go back</Link>
        </div>
    )
}

export default About
