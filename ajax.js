function myAjax(fajlnev, myCallback) {
    const termekek = [];
    $.ajax({
        url: fajlnev,
        success: function(result) {
            result.forEach((element) => {
                termekek.push(element);
            });

            myCallback(termekek);
        },
    });
}