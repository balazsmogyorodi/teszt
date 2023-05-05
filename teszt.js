


QUnit.module('add', function() {
    QUnit.test('két jegyű szám utolsó számjegye', function(assert) {
      assert.equal(utolsoSzamjegy(12), 2);
    });
    QUnit.test('két jegyű negatív szám utolsó számjegye', function(assert) {
        assert.equal(utolsoSzamjegy(-12), -2);
      });
      QUnit.test('három jegyű szám utolsó számjegye', function(assert) {
        assert.equal(utolsoSzamjegy(102), 2);
      });
      QUnit.test('egy jegyű szám utolsó számjegye', function(assert) {
        assert.equal(utolsoSzamjegy(8), 8);
      });
      QUnit.test('sok jegyű szám utolsó számjegye', function(assert) {
        assert.equal(utolsoSzamjegy(12242354), 4);
      });
      QUnit.test('sok jegyű szám utolsó számjegye', function(assert) {
        assert.equal(utolsoSzamjegy(12242354.6), 6);
      });
      QUnit.test('sok jegyű szám utolsó számjegye', function(assert) {
        assert.equal(utolsoSzamjegy(), );
      });
    QUnit.test('egy kétjegyű számnak sorozata random utolsó számjegy', function(assert) {
        assert.equal(sorozat(3).length, 3 );
      });

      QUnit.test('létezik e-függvény', function(assert) {
        assert.ok(utolsoSzamjegy,"Nem létezik" );
      });
      QUnit.test('Függvény-e a type off', function(assert) {
        assert.ok(typeof utolsoSzamjegy === "function","Nem függvény a typeof" );
      });



  });