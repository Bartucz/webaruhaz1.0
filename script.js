$(function() {

    myAjax("termekek.json", termekLista);
    const TermekTabla=[];

    function termekLista(termekek) {
        const szuloElem = $(".termekek");
        const sablonElem = $(".termek");

        termekek.forEach(function(elem) {
            let node = sablonElem.clone().appendTo(szuloElem);





            const obj = new Termek(node, elem);
            TermekTabla.push(obj);

        });
        sablonElem.remove(); //sablonelem eltávolítása
    }

});