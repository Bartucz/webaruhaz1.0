class Termek {
    constructor(node, adat) {
        this.node = node;
        /**selectorok elnvezése */
        this.adat = adat;
        this.termekNev = this.node.children(".termeknev");
        this.termekLeiras = this.node.children(".leiras");
        this.termekAr = this.node.children(".ar");
        this.termekKep = this.node.children(".kep");
        this.termekKosarba = this.node.children(".kosarba");
        this.setAdat(this.adat);
        this.termekKosarba.on("click", () => {
            this.kattintasTrigger();
        });
    }

    setAdat(adat) {
            this.adat = adat;
            this.termekNev.text(adat.nev);
            this.termekLeiras.text(adat.leiras);
            this.termekAr.text(adat.ar + " Ft");
            this.termekKep.attr("src", adat.kep);
        }
        //saját esemény létrehozása
    kattintasTrigger() {
        let esemeny = new CustomEvent("termekKosarba", {
            detail: this.adat, //ezzel adatokat tudok átadni
        });
        window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
        //Az eseményt majd a script.js-ben el tudom kapni.
    }

    //saját esemény létrehozása
}