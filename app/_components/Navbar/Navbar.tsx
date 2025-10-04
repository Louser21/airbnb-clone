import { safeUser } from '@/app/_types'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import { User } from '@prisma/client'

interface NavbarProps{
    currentUser: safeUser | null,
}

const Navbar : React.FC<NavbarProps> = ({currentUser}) => {
    return (
        <div className='fixed z-10 bg-white w-full shadow-sm'>
            <div className='py-4'>

                <Container >
                    <div className='flex justify-between items-center gap-3 md:gap-0'>
                        <Logo />
                        <Search />
                        <UserMenu currentUser = {currentUser}/>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar