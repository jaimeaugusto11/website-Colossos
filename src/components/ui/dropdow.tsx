
import { Dropdown, DropdownItem } from "flowbite-react";

export function Dropdows({nome,primeiro, segundo}:{nome:string; primeiro:string; segundo:string}) {
  return (
    <Dropdown label={nome} inline>
      <DropdownItem>{primeiro}</DropdownItem>
      <DropdownItem>{segundo}</DropdownItem>
      
    </Dropdown>
  );
}
