
import Image from "next/image";
import Information from '../components/Information'
import {Welcome} from '../lib/types'
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";



export default function Home() {
  

  return (
    <div>
      <Information  />
    </div>
  );
}
