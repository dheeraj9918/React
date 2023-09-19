export const Title= () => (
    <a href="/">
        <img
            className="logo"
            alt="logo"
            src="https://foodvilla.no/src/img/logo.png"
        />
    </a>
);


//header comonents 

const HeaderComponant = () => {
    return (
        <div className='header'>
            <Title />
            <div className='nave-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderComponant;