import { action, observable, computed, makeObservable } from 'mobx';
class Superheroes {
    superheroes = [];

    constructor() {
        makeObservable(this, {
            superheroes: observable,
            addHero: action,
            deleteHero: action,
            count: computed,
        })
    }

    addHero(hero) {
        this.superheroes = [...this.superheroes, { ...hero, id: Math.random() }]
    }
    deleteHero(id) {
        this.superheroes = this.superheroes.filter(hero => hero.id !== id)
    }
    get count() {
        return this.superheroes.length
    }
}

export const superheroesStore = new Superheroes();