
class Termek
{
    constructor(node, adat)
    {
        this.node = node;
        /**selectorok elnevezése */
        this.adat = adat;
        this.termekNev = this.node.children(".termeknev");
        this.termekLeiras = this.node.children(".leiras");
        this.termekAr = this.node.children(".ar");
        //this.termekKep = this.node.children(".kep").children("img"); ez ment a TermekAdmin gyerekbe
        //this.termekKosarba = this.node.children(".kosarba");
       
       
    }

    setAdat(adat) {
            this.adat = adat;
            this.termekNev.text(adat.nev);
            this.termekLeiras.text(adat.leiras);
            this.termekAr.text(adat.ar + " Ft");
            this.termekKep.attr("src", adat.kep);
        }
        //saját esemény létrehozása
   

    //saját esemény létrehozása
}


class TermekAruhaz extends Termek {
    constructor(node, adat)
    {
        super(node, adat);

        this.termekKep = this.node.children(".kep");
        this.setAdat(this.adat);
        this.termekKosarba = this.node.children(".kosarba");
        this.termekKosarba.on("click", () => {
            this.kattintasTrigger();
        });
     
    }

    kattintasTrigger()
    {
        let esemeny = new CustomEvent("termekKosarba", {
            detail: this.adat, //ezzel adatokat tudok átadni
        });
        window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
        //Az eseményt majd a script.js-ben el tudom kapni.
    }



}


class TermekAdmin extends Termek {

    constructor(node, adat)
    {
        super(node, adat);

        this.termekKep = this.node.children(".kep").children("img");
        this.setAdat(this.adat);
        
        this.termekTorol = this.node.children(".torles").children("button");
        
        this.termekTorol.on("click", () => {
            this.kattintasTrigger();
        });
     
    }

    kattintasTrigger()
    {
        let esemeny = new CustomEvent("termekTorol", {
            detail: this.adat, //ezzel adatokat tudok átadni
        });
        window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
        //Az eseményt majd a script.js-ben el tudom kapni.
    }


}