import Header from "../../components/header";
import Single from "../single";

const people = [
    {
        name: 'Sally Burgess',
        town: 'London',
        hobbies: [' Running ', ' Jumping ', ' Skipping ']
    },

    {
        name: 'Sally Burgess',
        town: 'London',
        hobbies: [' Running ', ' Jumping ', ' Skipping ']
    },

    {
        name: 'Sally Burgess',
        town: 'London',
        hobbies: [' Running ', ' Jumping ', ' Skipping ']
    },

    {
        name: 'Sally Burgess',
        town: 'London',
        hobbies: [' Running ', ' Jumping ', ' Skipping ']
    },

    {
        name: 'Sally Burgess',
        town: 'London',
        hobbies: [' Running ', ' Jumping ', ' Skipping ']
    },

    {
        name: 'Sally Burgess',
        town: 'London',
        hobbies: [' Running ', ' Jumping ', ' Skipping ']
    },

    {
        name: 'Sally Burgess',
        town: 'London',
        hobbies: [' Running ', ' Jumping ', ' Skipping ']
    },


]
const PeopleList = () => {
    return ( <div>
        
        <h1>People List</h1>

        <ul id='list'>
            {people.map( item => <Single item={item} /> )}
        </ul>
    </div> );
}
 
export default PeopleList;