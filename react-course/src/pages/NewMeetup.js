import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

export default function NewMeetupPage(){
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch(`https://react-getting-started-c8fcb-default-rtdb.firebaseio.com/meetups.json`, {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: { 'Content-Type': 'application/json' },
        }).then(() => {navigate('/')});
    }
    
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}