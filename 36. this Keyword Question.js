const obj = {
    name: "Gyan",

    regularFunction: function () {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
};

obj.regularFunction(); // Gyan
obj.arrowFunction(); // undefined