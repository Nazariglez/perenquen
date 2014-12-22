var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    insert = require('gulp-insert');

var perenquenVersion = "0.0.0",
    pixiVersion = "2.1.0";

var perenquenScripts = [
    './src/Core.js',
    './src/PixiChanges.js',
    './src/Device.js',
    './src/Debug.js',
    './src/JsonLoader.js',
    './src/BitmapFontLoader.js',
    './src/ImageLoader.js',
    './src/DataManager.js',
    './src/Game.js',
    './src/Keyboard.js',
    './src/Pool.js',
    './src/Point.js',
    './src/Path.js',
    './src/Locale.js',
    './src/DisplayCommon.js',
    './src/Container.js',
    './src/Graphics.js',
    './src/Sprite.js',
    './src/TilingSprite.js',
    './src/SceneManager.js',
    './src/Scene.js',
    './src/SceneTransition.js',
    './src/Camera.js',
    './src/AssetManager.js',
    './src/AssetLoader.js',
    './src/TextObject.js',
    './src/WebAudioSource.js',
    './src/WebAudio.js',
    './src/HTMLAudio.js',
    './src/AudioLoader.js',
    './src/AudioManager.js',
    './src/TimerManager.js',
    './src/Timer.js',
    './src/TweenManager.js',
    './src/Tween.js',
    './src/ParticleSystem.js',
    './src/Utils.js'
];

var headerTxt = '/**\n' +
    ' * PerenquenJS - http://perenquenjs.com\n' +
    ' * Version: ' + perenquenVersion + '\n' +
    ' * Compiled: ' + (new Date()).toString() + '\n';

gulp.task('compile', function(){
    var header = headerTxt + ' *\n' +
        ' * PixiJS v' + pixiVersion + ' included. [http://pixijs.com]\n' +
        ' */\n';

    var scripts = (['./libs/pixi.dev.js']).concat(perenquenScripts);
    return gulp.src(scripts)
        .pipe(uglify('perenquen.js'))
        .pipe(insert.prepend(header))
        .pipe(gulp.dest('./build'));
});

//TODO: Los sourcemaps salen fatal si usas insert, no referencian nada.
gulp.task('compileDev', function(){
    var header = headerTxt + ' *\n' +
        ' * Needs PixiJS v' + pixiVersion + ' to work. [http://pixijs.com]\n' +
        ' */\n';

    var scripts = (['./libs/pixi.dev.js']).concat(perenquenScripts);

    return gulp.src(perenquenScripts)
        //.pipe(sourcemaps.init())
        .pipe(concat('perenquen.dev.js'))
        //.pipe(sourcemaps.write('./'))
        .pipe(insert.prepend(header))
        .pipe(gulp.dest('./build'));
});

gulp.task('lint', function(){
     return gulp.src(perenquenScripts)
         .pipe(jshint())
         .pipe(jshint.reporter('default'));
});


gulp.task('watch', function(){
    gulp.watch('./src/**/*.js', ['lint','compileDev']);
});

gulp.task('dev', ['lint', 'compileDev', 'watch']);
gulp.task('default', ['lint', 'compile']);
