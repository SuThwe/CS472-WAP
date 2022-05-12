window.onload = tester;

function tester() {
    console.log("start testing...");

    describe("string returns without banned word", function(){
        it("returns string returns without banned word == This house is  nice!", function(){
            assert.strictEqual("This house is not nice!".filter('not'), "This house is  nice!");
        });
    });

    describe("bubble sort", function(){
        it("returns bubble sort of array == [-2, 0, 1, 3, 4, 6]", function(){
            assert.deepEqual([6,4,0, 3,-2,1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
        });
    });

    describe("object inheritance", function(){
        it("returns string == Mary is now teaching WAP", function(){
            assert.equal(teacher1.teach("WAP"), "Mary is now teaching WAP");
        });
    });

    mocha.run();
}