// IMPORT MODULES under test here:
import { checkResults } from '../get-random-throw.js';

const test = QUnit.test;


//testing draw conditions

test('checkResults is a draw', function(assert) {
   
    const player = 'rock';
    const computer = 'rock';
    const result = checkResults(player, computer);
    const expected = 'draw';

    assert.equal(expected, result);
});

test('checkResults is a draw', function(assert) {
   
    const player = 'paper';
    const computer = 'paper';
    const result = checkResults(player, computer);
    const expected = 'draw';

    assert.equal(expected, result);
});

test('checkResults is a draw', function(assert) {
   
    const player = 'scissors';
    const computer = 'scissors';
    const result = checkResults(player, computer);
    const expected = 'draw';

    assert.equal(expected, result);
});

//testing win conditions

test('checkResults is a win', function(assert) {
    
    const player = 'rock';
    const computer = 'scissors';
    const result = checkResults(player, computer);
    const expected = 'win';

    assert.equal(expected, result);
});

test('checkResults is a win', function(assert) {
    
    const player = 'paper';
    const computer = 'rock';
    const result = checkResults(player, computer);
    const expected = 'win';

    assert.equal(expected, result);
});

test('checkResults is a win', function(assert) {
   
    const player = 'scissors';
    const computer = 'paper';
    const result = checkResults(player, computer);
    const expected = 'win';

    assert.equal(expected, result);
});

//testing loss conditions

test('checkResults is a loss', function(assert) {
    
    const player = 'rock';
    const computer = 'paper';
    const result = checkResults(player, computer);
    const expected = 'loss';

    assert.equal(expected, result);
});


test('checkResults is a loss', function(assert) {
  
    const player = 'paper';
    const computer = 'scissors';
    const result = checkResults(player, computer);
    const expected = 'loss';

    assert.equal(expected, result);
});

test('checkResults is a loss', function(assert) {
   
    const player = 'scissors';
    const computer = 'rock';
    const result = checkResults(player, computer);
    const expected = 'loss';

    assert.equal(expected, result);
});