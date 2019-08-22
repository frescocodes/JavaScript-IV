/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/





/************* COPIED CODE  ****************/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(attrs){
        this.createdAt = attrs.createdAt; //attrs refers to the newly created obj properties that will become "this"
        this.name = attrs.name;
        this.dimensions = attrs.dimensions;
        // anything you need as direct properties will be bound here in constructor
    }
    destroy() { return `${this.name} was removed from the game.` }
}

/*
function GameObject(attrs){
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
  }
  
  GameObject.prototype.destroy = function(){
    return `${this.name} was removed from the game.`
  }

  */ 
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  /*
  function CharacterStats(charStats){
    GameObject.call(this, charStats)
    this.healthPoints = charStats.healthPoints;
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function(){
    return this.healthPoints--;
  }
  */
  class CharacterStats extends GameObject{ // if you are extending you have to pass "super" in your constructor
      constructor(char_stats){
          super(char_stats);
          this.healthPoints = char_stats.healthPoints;
      }
      takeDamage(){ return this.healthPoints--; }
      /* attack(victim){
          
          console.log(`${this.name} attacks ${victim}, ${victim} loses {}`)
      }
      */
  }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
/*

  function Humanoid(humAttrs){
    CharacterStats.call(this, humAttrs);
    this.team = humAttrs.team;
    this.weapons = humAttrs.weapons;
    this.language = humAttrs.language;
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype); //inherit Char Stats, inherit GameObjects by proxy
  
  Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}`
  } // add greet function on prototype so it isn't in the object
  
  */
   
class Humanoid extends CharacterStats {
    constructor(human_stats) {
        super(human_stats);
        this.team = human_stats.team;
        this.weapons = human_stats.weapons;
        this.language = human_stats.language;
    }
    greet(){ return `${this.name} offers a greeting in ${this.language}`}
}


  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test your work by un-commenting these 3 objects and the list of console logs below:
  
  // function Humanoid(attrs){
  //   this.dimensions = attrs.dimensions;
  //   this.healthPoints = attrs.healthPoints;
  //   this.name = attrs.name;
  //   this.team = attrs.team;
  //   this.weapons = attrs.weapons;
  //   this.language = attrs.language;
  // }
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  

    class Villain extends Humanoid{
        constructor(villain_attrs){
            super(villain_attrs);
            this.darkness = villain_attrs.darkness;
            this.order = villain_attrs.order;
        }
        yoink(yoinkee){ return `${this.name} just YOINKED all of ${yoinkee.name}'s gold, what an idiot`}
    }

    class Hero extends Humanoid{
        constructor(hero_attrs){
            super(hero_attrs);
            this.darkness = hero_attrs.darkness;
            this.order = hero_attrs.order;
        }
        save(){ return `${this.name} just saved u, [7][7][7]`}
    }


    const hercules = new Hero({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 3,
          height: 6,
        },
        healthPoints: 20,
        name: 'Hercules',
        team: 'Chads',
        weapons: [
          'Fists',
          'Dagger',
        ],
        language: 'English',
      });


      const reverseRobinHood = new Villain({
          createdAt: new Date(),
          dimensions: {
              length: 1,
              width: 1,
              height: 4,
          },
          healthPoints: 10,
          name: 'Yoinker Hood',
          team: "manlets",
          weapons: [
              'Bow',
              'Dagger,'
          ],
          language: 'English'
      })

      console.log(hercules.save());
      console.log(reverseRobinHood.yoink(archer));
    


    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!