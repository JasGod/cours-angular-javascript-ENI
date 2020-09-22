module monMo {
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

  export class Voiture {
    private _kilometrage: number;
    private _proprio: string;

    constructor(proprio: string) {
      this._proprio = proprio;
    }

    public get kilometrage(): number {
      return this._kilometrage;
    }
    public set kilometrage(v: number) {
      this._kilometrage = v;
    }
    public get proprio(): string {
      return this._proprio;
    }
  }

  export class Tracteur extends Voiture {
    private _helice;
    /**
     *
     */
    constructor(proprio: string, helice: string) {
      super(proprio);
      this._helice = helice;
    }
    public get helice(): string {
      return this._helice;
    }
  }
}
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
  _nom: string;
  _prenom: string;
  _sex: string;
  _age: number;
  _taille: number;
  _poids: number;
  constructor(nom, prenom, sex, age, taille, poids) {
    this._nom = nom;
    this._prenom = prenom;
    this._sex = sex;
    this._age = age;
    this._taille = taille;
    this._poids = poids;
  }

  public get nom(): string {
    return this._nom;
  }

  public get prenom(): string {
    return this._prenom;
  }

  public get sex(): string {
    return this._sex;
  }

  public get age(): number {
    return this._age;
  }

  public get taille(): number {
    return this._taille;
  }

  public get poids(): number {
    return this._poids;
  }
}

class Etudiant extends Personne {
  _promo: number;
  constructor(nom, prenom, sex, age, taille, poids, promo) {
    super(nom, prenom, sex, age, taille, poids);
    this._promo = promo;
  }

  public get promo(): number {
    return this._promo;
  }
}

class Cours {
  constructor(label, credit) {
    this._label = label;
    this._credit = credit;
  }

  private _label: string;
  public get label(): string {
    return this._label;
  }
  public set label(v: string) {
    this._label = v;
  }

  private _credit: number;
  public get credit(): number {
    return this._credit;
  }
  public set credit(v: number) {
    this._credit = v;
  }
}

class Formatteur extends Personne {
  constructor(nom, prenom, sex, age, taille, poids, listCours: Cours[]) {
    super(nom, prenom, sex, age, taille, poids);
    this._listCours = listCours;
  }

  private _listCours: Cours[];
  public get listCours(): Cours[] {
    return this._listCours;
  }
  public set listCours(v: Cours[]) {
    this._listCours = v;
  }
  afficherCours() {
    this._listCours.forEach((element) => {
      console.log("- " + element.label);
    });
  }
}
let listC: Cours[];
listC = [new Cours("JavaScript", 2)];
listC.push(new Cours("Java", 5));

const formatteur = new Formatteur("Chariot", "Luis", "M", 35, 1.8, 75, listC);
console.log(
  "Moi " +
    formatteur.nom +
    " " +
    formatteur.prenom +
    " j'enseigne les cours de: "
);
formatteur.afficherCours();
