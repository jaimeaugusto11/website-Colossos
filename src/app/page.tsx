import Agora from "@/components/frontOffice/agora";
import Bemvindo from "@/components/frontOffice/bemvindo";
import { Slider } from "@/components/frontOffice/coursel";
import Eventos from "@/components/frontOffice/eventos";


export default function Home() {
  return (
    <main className="">
      <Slider  />
      <Agora/>
      <Bemvindo/>
      <Eventos/>

     
    </main>
  );
}
