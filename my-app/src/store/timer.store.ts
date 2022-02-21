import { makeAutoObservable } from "mobx"
import { Breadcrumb } from "react-bootstrap";
import { Product } from "../models/Product.model";

export class DifficultTimer {

    secondsPassed = 0;


    dataArray: Product[] = [{
        id: 1,
        name: 'Bread',
        price: 20

    },
    {
        id: 2,
        name: 'Butter',
        price: 120
    }];

    basket: Product[] = []
  
    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.secondsPassed += 1
    }

    addToBasket(data: Product) {
        this.basket.push(data);
    }

    removeFromBasket(id?: number) {
        if (!id) {
            return;
        }

        const index = this.basket.findIndex(x => x.id === id);

        if (index === -1) {
            return;
        }

        this.basket.splice(index, 1);
    }

    addData(data: Product) {
        this.dataArray.push(data);
    }
  
    reset() {
        this.secondsPassed = 0
    }
  }