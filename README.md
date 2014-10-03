BigNumber
=========

An arbitrary-precision arithmetic library for JavaScript.

Installation
--------------

To install, run the following:

    npm install peteroupc/BigNumber
    
Usage
--------------

    var bn=require("bignumber-petero"),
          BigInteger=bn.BigInteger,
          ExtendedDecimal=bn.ExtendedDecimal,
          ExtendedFloat=bn.ExtendedFloat;
          
    var num=BigInteger.valueOf(2000);
    
For API documentation, see the [CBOR-Java wiki](https://github.com/peteroupc/CBOR-Java/wiki).
Although the wiki describes the Java version, the JavaScript version uses essentially
the same methods for BigInteger, ExtendedDecimal, and ExtendedFloat.
