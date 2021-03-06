import PropTypes from 'prop-types'
import Button from './Button'
// impt


const Header = ({ title }) => {

    const onClick = () => {
        console.log('clicked');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text="Add" color="green" onClick={onClick} />

        </header>
    )
}

Header.defaultProps = {
    title: 'Task tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
