export type TestimonialType = {
    name: string;
    title: string;
    message: string;
    imageUrl?: string;
}

export const testimonials: TestimonialType[] = [
    // {
    //     name: 'Sunny Ukeachu',
    //     title: 'Founder & CEO - Mitiget Assurance',
    //     message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis excepturi impedit recusandae corrupti vel corporis, voluptate perferendis aperiam quidem qui deserunt quos, blanditiis, sit eos vero minus repellendus animi placeat!',
    // },
    {
        name: 'Ifeanyi Christopher',
        title: 'Lead Developer - Mitiget Assurance',
        message: "I've had the pleasure of seeing some of his work, and it's truly impressive. As a highly skilled full-stack developer, his attention to detail and expertise shine through in every project. He's not only experienced but also consistently delivers high-quality results.",
        imageUrl: '/images/testifiers/ifeanyi-christopher.jpg'
    },
    // {
    //     name: 'Osawese Owiadolor',
    //     title: 'Product Designer',
    //     message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis excepturi impedit recusandae corrupti vel corporis, voluptate perferendis aperiam quidem qui deserunt quos, blanditiis, sit eos vero minus repellendus animi placeat!',
    // }
]