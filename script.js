$(function() {

    myAjax("termekek.json", termekLista);
    const TermekTabla=[];

    function termekLista(termekek) {
        const szuloElem = $(".termekek");
        const sablonElem = $(".termek");

        termekek.forEach(function(elem) {
            let node = sablonElem.clone().appendTo(szuloElem);

            const obj = new TermekAruhaz(node, elem);
            TermekTabla.push(obj);//példányok táblába

        });
        sablonElem.remove(); //sablonelem eltávolítása




        $(window).on("termekKosarba", () => 
        console.log("kosárba tettem"))
       
    }

});