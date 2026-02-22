import { useAppSelector } from "./redux/hooks"


const MyComp= ()=>{
    const count = useAppSelector(state => state.counter);
    return (
    <h1>This is my comp : {count}</h1>
    );
}

export default MyComp;