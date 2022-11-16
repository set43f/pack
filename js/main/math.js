 // basic usage of math.js
    //
    // website:  http://mathjs.org
    // docs:     http://mathjs.org/docs
    // examples: http://mathjs.org/examples
    
    // functions and constants
    print(math.round(math.e, 3));                // 2.718
    print(math.atan2(3, -3) / math.pi);          // 0.75
    print(math.log(10000, 10));                  // 4
    print(math.sqrt(-4));                        // 2i
    print(math.pow([[-1, 2], [3, 1]], 2));       // [[7, 0], [0, 7]]
    print(math.derivative('x^2 + x', 'x'));      // 2 * x + 1
    
    // expressions
    print(math.evaluate('12 / (2.3 + 0.7)'));    // 4
    print(math.evaluate('12.7 cm to inch'));     // 5 inch
    print(math.evaluate('9 / 3 + 2i'));          // 3 + 2i
    print(math.evaluate('det([-1, 2; 3, 1])'));  // -7
    
    // chaining
    var a = math.chain(3)