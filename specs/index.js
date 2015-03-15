describe( 'require-arr', function () {
  var transformTools = require( 'browserify-transform-tools' );
  var transform = require( '../' );
  var path = require( 'path' );
  var read = require( 'read-file' ).readFileSync;

  it( 'should expand the calls made to the requireArr', function ( done ) {

    var dummyJsFile = path.resolve( __dirname, '../fixtures/loader.js' );

    var content = read( dummyJsFile );
    var expected = read( path.resolve( __dirname, '../expected/loader.js' ) );

    console.log( expected );

    transformTools.runTransform( transform, dummyJsFile, {
      content: content
    }, function ( err, transformed ) {

      if ( !err ) {
        expect( transformed ).to.be.equal( expected );
        done();
      }
      throw err;
    }
    );
  } );
} );
