
const Single = ({item}) => {
    return ( 
        <div id='single'>
            <h3>{item.name}</h3>
            <p>{item.town}</p>
            <p>Hobbies: {item.hobbies}</p>
        </div>
     );
}
 
export default Single;