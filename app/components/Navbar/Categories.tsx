"use client";
import { TbBeach } from 'react-icons/tb'
import Container from '../Container'
import { GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import CategoryBox from '../CategoryBox'


export const categories = [
    {
        label: "Beach",
        icon: TbBeach,
        description: "This property is closed to the Beach",
    },
    {
        label: "Windmills",
        icon: GiWindmill,
        description: "This property has Windmills",
    },
    {
        label: "Modern",
        icon: MdOutlineVilla,
        description: "This property is modern",
    }   
]

const Categories = () => {
    return (
        <Container>
            <div
                className='pt-4 flex items-center justify-between overflow-x-auto'
            >
                {
                    categories.map((item) => {
                        return (
                            <CategoryBox
                                key={item.label}
                                label={item.label}
                                description={item.description}
                                icon={item.icon}
                            />
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default Categories