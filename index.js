remove = function(id1, id2) {
    document.getElementById( id1 ).addEventListener("click", () => {
        document.getElementById( id1 ).hidden = true;
        document.getElementById( id2 ).hidden = false;
    }, false);
  }