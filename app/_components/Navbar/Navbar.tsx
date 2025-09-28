import Container from '../Container'
import Logo from './Logo'
import Search from './Search'

function Navbar() {
    return (
        <div className='fixed z-10 bg-white w-full shadow-sm'>
            <div className='py-4'>

                <Container >
                    <div className='flex justify-between items-center gap-3 md:gap-0'>
                        <Logo />
                        <Search />
                    </div>

                </Container>
            </div>
        </div>
    )
}

export default Navbar