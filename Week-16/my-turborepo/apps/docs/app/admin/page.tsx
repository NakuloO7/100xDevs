import { Hello } from "@repo/ui/hello";
import { InputBox } from "@repo/ui/input-box";


export default function Admin(){
    return (
        <div>This is the admin page for docs project
        <Hello />
        <InputBox/>
        </div>
    )
}