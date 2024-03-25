'use client';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { useRouter } from 'next/navigation';


const CourseCard = ({ name, title, desc, image }) => {
    const router = useRouter();

    return (
        <Card className='bg-light-1 rounded-lg w-[300px] shadow-lg mx-6 my-4 hover:bg-light-2 cursor-pointer transition-all' 
            onClick={() => router.push(`/courses/${name}`)}>
            <CardBody className='flex flex-col p-4 justify-between gap-4 h-full'>
                <CardTitle 
                    tag="h2"
                >{title}</CardTitle>
                <CardText
                    className='text-sm flex-grow'
                >{desc}</CardText>
                <img
                    src={image}
                    alt={title}
                    className='w-24 h-24 mb-2 object-contain rounded-lg mx-auto'
                />
                <Button
                    className='w-full hover:bg-blue-800 hover:border-blue-900  text-light-1 p-2 rounded-lg bg-blue-600 border-blue-700 text-sm font-thin transition-all'
                    onClick={() => router.push(`/courses/${name}`)}
                >Read More</Button>
            </CardBody>
        </Card>
    )
}

export default CourseCard