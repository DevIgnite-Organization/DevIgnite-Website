import React from 'react'
const people = [
    {
        name: 'Prof.Satish Kuchiwale',
        role: 'Faculty Co-ordinator',
        imageUrl:
            '../../teams/satish-sir.jpeg',
    },
    {
        name: 'Dr.Umakant Gohatre',
        role: 'Faculty Co-ordinator',
        imageUrl:
            '../../teams/umakant-sir.jpg',

    },
    {
        name: 'Chetan Choudhari',
        role: 'Lead Organizer',
        imageUrl:
            '../../teams/chetan.jpg',
    },
    {
        name: 'Anas Khan',
        role: 'Jt. Lead Organizer',
        imageUrl:
            '../../teams/anas.jpg',
    },
    {
        name: 'Siddiqui Danish',
        role: 'Jt. Lead Organizer',
        imageUrl:
            '../../teams/danish.jpg',
    },
    {
        name: 'Sangharaj jadhav',
        role: 'Tech Lead',
        imageUrl:
            '../../teams/sangharaj.jpeg',
    },
    {
        name: 'Hamsika Deva',
        role: 'Logistic Lead',
        imageUrl:
            '../../teams/hamsika-2.jpg',
    },
    {
        name: 'Mihir Patil',
        role: 'Management Lead',
        imageUrl:
            '../../teams/mihir.jpg',
    },
    {
        name: 'Muiz Zatam',
        role: 'Documentation Lead',
        imageUrl:
            '../../teams/muiz.jpeg',
    },
    {
        name: 'Sanjana Ghosh',
        role: 'Media Lead',
        imageUrl:
            '../../teams/sanjana.jpg',
    },
    {
        name: 'Neha Bagul',
        role: 'Marketing Lead',
        imageUrl:
            '../../teams/neha.jpeg',

    },
    {
        name: 'Riya Maji',
        role: 'Creativity Lead',
        imageUrl:
            '../../teams/riya.jpg',
    },
    // More people...
]
function Teams() {
    return (
        <div className="bg-white py-15 sm:py-14" id='teams'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center gap-y-20">
                <div className="max-w-2xl flex flex-col items-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leadership Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                        Meet the dedicated individuals leading our Hackathon
                    </p>

                </div>
                <div className="grid gap-x-12 gap-y-16 sm:grid-cols-4 sm:gap-y-20 xl:col-span-4">
                    {people.map((person) => (
                        <div key={person.name} className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Teams
