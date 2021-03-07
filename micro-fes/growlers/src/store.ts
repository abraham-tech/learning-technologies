import { proxy } from "valtio";
import {Beverage } from './types'

export interface TapStore {
    taps: Beverage[];
    filteredTaps: Beverage[];
    cart: Beverage[];
    searchText: string;
    alcoholLimit: number;
}


const store = proxy<TapStore>({
    taps:[],
    searchText:"",
    alcoholLimit:10,
    filteredTaps:[],
    cart:[],
})

const filtered = () => {
    const searchRe = new RegExp(store.searchText, 'i');
    return store.taps.filter(({beverageName, abv}) => 
        beverageName.match(searchRe) && abv < store.alcoholLimit)
        .slice(0,15)
}


export const load = (client: string): void =>{
    fetch(`http://localhost:8080/${client}.json`)
    .then(response => response.json())
    .then((taps: Beverage[]) => {
        store.taps = taps;
        store.filteredTaps = filtered();
    })
}

export const setSearchText = (text: string) => {
    store.searchText = text;
    store.filteredTaps = filtered();
}

export const setAlcoholLimit  = (limit: number) => {
    store.alcoholLimit = limit; 
    store.filteredTaps = filtered();
}

export const addToCart = (beverage : Beverage) => {
    store.cart.push(beverage);
};



export default store;