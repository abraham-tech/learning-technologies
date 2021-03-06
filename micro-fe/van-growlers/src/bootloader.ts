import { load, subscribe } from "growlers/store"
import "./index.scss";

import VanillaCart from 'growlers/VanillaCart';
import VanillaTaps from 'growlers/VanillaTaps';
import VanillaSearch from 'growlers/VanillaSearch';

load('hv-taplist')

subscribe((state) => {
    console.log(state)
})

VanillaCart('#cart')
VanillaTaps('#taps')
VanillaSearch('#search')