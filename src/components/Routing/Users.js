import{useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Users(){
let url = useLocation();   
return (
<>

<h1>
  Users
</h1>
<ul>
    <li><Link to={`${url.pathname}/ivanoff`}>Ivanoff</Link></li>
    <li><Link to={`${url.pathname}/petroff`}>Petroff</Link></li>

    {/* <li><a href="/users/ivanoff">Ivanoff</a></li>
    <li><a href="/users/petroff">Petroff</a></li> */}
</ul>

</>
);
};

export default Users;