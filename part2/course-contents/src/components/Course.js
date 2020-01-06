import React from 'react'





const Header = ({ course }) => {

    return (
        <div>
            <ul>
                {course.map(note => <div key={note.id}><h2>{note.name}</h2>
                    {note.parts.map(l => <p>{l.name} {l.exercises}</p>)}
                    total no. of {note.parts.map(x => x.exercises).reduce((a, b) => a + b)} exercises</div>)}


            </ul>
        </div>

    )
}





const Course = ({ course }) => {

    return (
        <div>
            <Header course={course} />
        </div>
    )
}

export default Course