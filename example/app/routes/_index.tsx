import type { V2_MetaFunction } from "@remix-run/node";
import { Atom } from "signia";
import { useAtom, useComputed, useValue } from "signia-react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

const Prova = ({name}: {name:Atom<string>})=>{
  const mayus = useComputed('mayus', ()=>name.value.toUpperCase(), [name])
  const mayusValue = useValue(mayus)
  return <>
    <input type="text" value={name.value} onChange={(e)=>name.set(e.target.value)}/>
    <div>Your name is {name.value} ({mayusValue})</div>
  </>
}
// understood!
export default function App() {
  const nameAtom = useAtom('name','bernat')
  return (
    <>  
    <Prova name={nameAtom}/>
    </>
  )
}
// now i want the atom to be a list of "atoms"
// so i can reuse the "Prova" component
// export function App2() {
//   const namesAtom = useAtom('name',['BE'])
//   return (
//     <>  
//     {names.map(name=>
// now name is not an atom anymore, is a string :(
//       return <Prova name={name}/>
//     })}
//     <button onClick={()=>nameAtom.update(names=>([...names,'newString']))}></button>
//     </>
//   )
// }
