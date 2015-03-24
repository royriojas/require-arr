var transformTools = require( 'browserify-transform-tools' );
var path = require( 'path' );

var options = {};
var expand = require( 'glob-expand' );

module.exports = transformTools.makeFalafelTransform( 'require-arr', options, function ( node, transformOptions, done ) {
  var callee = node.callee;
  if ( node.type === 'CallExpression' && callee.type === 'Identifier' && callee.name === 'requireArr' ) {

    var filePath = path.dirname( transformOptions.file );

    var args = node.arguments.map( function ( arg ) {
      var val = arg.value;
      if ( val.match( /^!/ ) ) {
        val = '!' + path.join( filePath, val.substr( 1 ) );
      } else {
        val = path.join( filePath, val );
      }
      return val;
    } );

    //console.log( args );

    var files = expand.apply( null, args ).map( function ( f ) {

      f = './' + path.relative( filePath, f );
      return 'require(' + JSON.stringify( f ) + ')';
    } );

    node.update( '[' + files.join( ', ' ) + ']' );
  }
  done();
}
);
