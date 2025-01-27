// simulatuer de combat 

class Guerrier {
    constructor(nom, age, pointsDeVie, attaque, precision) {
      this.nom = nom;
      this.age = age;
      this.pointsDeVie = pointsDeVie;
      this.attaque = attaque;
      this.precision = precision;
    }
  
    greet() {
      console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans et roi des Vikings !! Je vais détruire ce traître !`);
    }
  
    greet1() {
      console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans et je vais affronter mon frère Ragnar aujourd'hui et sa mort sera aussi aujourd'hui.`);
    }



     // ATTAQUE DU GUERRIER 1

    attaquer(cible) {
      console.log(`${this.nom} attaque ${cible.nom} avec une force de ${this.attaque}.`);
     
      cible.pointsDeVie -= this.attaque;
      console.log(`${cible.nom} a maintenant ${cible.pointsDeVie} points de vie.`);
    }
  
    afficherPrecision() {
      console.log(`${this.nom} a une précision de ${this.precision}.`);
    }

    // ATTAQUE DU GUERRIER 2 

    attaquer1(cible) {
        console.log(`${this.nom} attaque ${cible.nom} avec une force de ${this.attaque}.`);
       
        cible.pointsDeVie -= this.attaque;
        console.log(`${cible.nom} a maintenant ${cible.pointsDeVie} points de vie.`);
      }
    
      afficherPrecision1() {
        console.log(`${this.nom} a une précision de ${this.precision}.`);
      }
  }
  
  const guerrier1 = new Guerrier('RagnarLodbrok', 40, 100, 50, 75);
  const guerrier2 = new Guerrier('Rollio', 25, 90, 45, 80);
  
  console.log(guerrier1);
  console.log(guerrier2);
  
  guerrier1.greet(); 
  guerrier2.greet1(); 
  
  guerrier1.attaquer(guerrier2); 
  guerrier2.afficherPrecision(); 
  

  guerrier2.attaquer(guerrier1); 
  guerrier1.afficherPrecision(); 