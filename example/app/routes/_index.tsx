import type { V2_MetaFunction } from "@remix-run/node";
import { Atom } from "signia";
import { useAtom } from "signia-react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

const Prova = ({name}: {name: Atom<string>})=>{
  
  return <>
    <input type="text" value={name.value} onChange={(e)=>name.set(e.target.value)}/>
    <div>Your name is {name.value}</div>
  </>
}
export default function App() {
  const nameAtom = useAtom('name','Be')
  // const name = useValue(nameAtom)
  return (
    <>      
        <Prova name={nameAtom}/>
    </>
  )
}