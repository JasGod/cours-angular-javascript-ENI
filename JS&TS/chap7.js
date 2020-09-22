var monMo;
(function (monMo) {
    // let addition = (chif1, chif2): number => {
    //   return chif1 + chif2;
    // };
    // enum uneEnum {
    //   E,
    //   N,
    //   O,
    //   S,
    // }
    // let varenum: uneEnum;
    // varenum = uneEnum.E;
    class Voiture {
        constructor(proprio) {
            this._proprio = proprio;
        }
        get kilometrage() {
            return this._kilometrage;
        }
        set kilometrage(v) {
            this._kilometrage = v;
        }
        get proprio() {
            return this._proprio;
        }
    }
    monMo.Voiture = Voiture;
    class Tracteur extends Voiture {
        /**
         *
         */
        constructor(proprio, helice) {
            super(proprio);
            this._helice = helice;
        }
        get helice() {
            return this._helice;
        }
    }
    monMo.Tracteur = Tracteur;
})(monMo || (monMo = {}));
// console.log(addition(12, 6));
// const voiture = new monMo.Voiture("Achil");
// voiture.kilometrage = 12000;
// console.log(voiture.kilometrage + " c'est la caisse de " + voiture.proprio);
// const tt = new monMo.Tracteur("Christo", "Longue");
// tt.kilometrage = 15000;
// console.log(
//   tt.proprio +
//     " est le proprio de la caisse qui fait " +
//     tt.kilometrage +
//     "km et a une hélice " +
//     tt.helice
// );
class Personne {
    constructor(nom, prenom, sex, age, taille, poids) {
        this._nom = nom;
        this._prenom = prenom;
        this._sex = sex;
        this._age = age;
        this._taille = taille;
        this._poids = poids;
    }
    get nom() {
        return this._nom;
    }
    get prenom() {
        return this._prenom;
    }
    get sex() {
        return this._sex;
    }
    get age() {
        return this._age;
    }
    get taille() {
        return this._taille;
    }
    get poids() {
        return this._poids;
    }
}
class Etudiant extends Personne {
    constructor(nom, prenom, sex, age, taille, poids, promo) {
        super(nom, prenom, sex, age, taille, poids);
        this._promo = promo;
    }
    get promo() {
        return this._promo;
    }
}
class Cours {
    constructor(label, credit) {
        this._label = label;
        this._credit = credit;
    }
    get label() {
        return this._label;
    }
    set label(v) {
        this._label = v;
    }
    get credit() {
        return this._credit;
    }
    set credit(v) {
        this._credit = v;
    }
}
class Formatteur extends Personne {
    constructor(nom, prenom, sex, age, taille, poids, listCours) {
        super(nom, prenom, sex, age, taille, poids);
        this._listCours = listCours;
    }
    get listCours() {
        return this._listCours;
    }
    set listCours(v) {
        this._listCours = v;
    }
    afficherCours() {
        this._listCours.forEach((element) => {
            console.log("- " + element.label);
        });
    }
}
let listC;
// listC = [new Cours("JavaScript", 2)];
listC.unshift(new Cours("Java", 5));
const formatteur = new Formatteur("Chariot", "Luis", "M", 35, 1.8, 75, listC);
console.time("heure");
console.log("Moi " +
    formatteur.nom +
    " " +
    formatteur.prenom +
    " j'enseigne les cours de: ");
formatteur.afficherCours();
