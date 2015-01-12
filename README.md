BigNumber
=========

An arbitrary-precision arithmetic library for JavaScript.

Installation
--------------

To install, run the following:

    npm install peteroupc/BigNumber
    
or

    npm install bignumber-poupc
    
You may need to install the latest version of Node.js or use `npm` version 1.3.15 or later.
    
Usage
--------------

    var bn=require("bignumber-poupc"),
          BigInteger=bn.BigInteger,
          ExtendedDecimal=bn.ExtendedDecimal,
          ExtendedFloat=bn.ExtendedFloat;
          
    var num=BigInteger.valueOf(2000);
    
For API documentation, see the [CBOR-Java wiki](https://github.com/peteroupc/CBOR-Java/wiki).
Although the wiki describes the Java version, the JavaScript version uses essentially
the same methods for BigInteger, ExtendedDecimal, and ExtendedFloat.

History
------------

Version 1.2.1

- Fixed bug in the result of dividing certain numbers

Version 1.2

- Added Ulp, Precision, MovePointLeft, MovePointRight, and ScaleToPowerOfTwo/-Ten methods to
  ExtendedDecimal and ExtendedFloat
- Fixed double-rounding issue with ToDouble and ToFloat methods
  of ExtendedDecimal
- Added Odd and OddOrZeroFiveUp rounding modes
- Added non-decimal base conversion features to BigInteger
- Other bug fixes

Version 1.1.1

- Package renamed to "bignumber-poupc".  The old package name, "bignumber-petero", is deprecated
and will be removed soon.

Version 1.1

- Added fromRadixString, fromRadixSubstring, and toRadixString methods to BigInteger.
