### Refactoring Code
## see below for some changes to improve code readability and optimize performance 

## client/src/features/auth/Signup.jsx

```javascript
Change : 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

To :
    const [signData,setSignData]=useState({
        username:'',
        email:'',
        password:''
    })


Change :
    onClick={(e)=>setValue(e.target.value)} //for each input field

To :
    const submitData=(e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

```

I declare a constant FaStyle to replace the VERY LONG css styling locally, which is "group-hover:bg-opacity-20 p-3 cursor-pointer rounded-full  group-hover:bg-[#F91880]",
and it significantly improves the readability.

```javascript
const FaStyle = "group-hover:bg-opacity-20 p-3 cursor-pointer rounded-full group-hover:bg-[#F91880]"

From:
    <div className="group-hover:bg-opacity-20 p-3 cursor-pointer rounded-full group-hover:bg-[#F91880]">
    ...
    </div>

To:
    <div className={FaStyle}>
    ...
    </div>
```
I delete certain part of n number of like mentioned below import statements because some packages are imported yet never used. This cleans up the space and gives better readability.

```javascript
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Skeleton } from '@/components/ui/skeleton';

```

## client/src/features/posts/PostExcerptSkeleton.jsx

To significantly improves the readability i changed the whole import element to a single letter.
This cleans up the space and gives better readability

```javascript
import { Skeleton as S } from '@/components/ui/skeleton';

From :
    <Skeleton className="w-[50px] h-[10px]" />

To :
    <S className="w-[50px] h-[10px]" />

```

## client/src/...

I maked some changes in client side to improve user experience like that o go back button is not working so i changed that to navigate it to the home.
```javascript
From :
    <Link to='/'>
            <FaArrowLeft />
            <p>Go back</p>
    </Link>
```


## client/src/...

To click on the logo and just navigate to its profile is a normal thing that is in all of the social media apps so like this i also make it by navigating it to profile page.
```javascript

From :
    <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
    </Avatar>

To:
    <Link to='/profile'>
        ...
    </Link>
```