'use client';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { useRouter } from 'next/navigation';


const CourseCard = ({ name, title, desc, image }) => {
    const router = useRouter();

    return (
        <Card className='bg-light-2 p-4 backdrop-blur-lg rounded-xl w-[320px] shadow-lg cursor-pointer transition-all ease-in group hover:bg-dark-1 hover:scale-[1.03]' 
            onClick={() => router.push(`/courses/${name}`)}>
            <CardBody className='flex flex-col p-4 justify-between gap-4 h-full'>
                <CardTitle 
                    tag="h2"
                    className='text-dark-1 group-hover:text-white'
                >{title}</CardTitle>
                <CardText
                    className='text-gray-700 text-sm flex-grow group-hover:text-gray-400'
                >{desc}</CardText>
                <img
                    src={image}
                    alt={title}
                    className='w-24 h-24 mb-2 object-contain rounded-lg mx-auto'
                />
                <Button
                    className='w-full bg-dark-1 text-light-1 p-2 rounded-lg text-sm font-thin transition-all group-hover:bg-dark-3'
                    onClick={() => router.push(`/courses/${name}`)}
                >Read More</Button>
            </CardBody>
        </Card>
    )
}

export default CourseCard