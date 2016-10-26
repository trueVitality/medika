var gulp 					= require('gulp'), // gulp
		csso 					= require('gulp-csso'), //// Минификация CSS
		imagemin	 		= require('gulp-imagemin'), // Минификация изображений
		concat 				= require('gulp-concat'), // Склейка файлов
		uglify 				= require('gulp-uglify'), // Минификация JS
		sass 					= require('gulp-sass'), // Sass
		autoprefixer 	= require('gulp-autoprefixer'),
		htmlhint 			= require("gulp-htmlhint"),
		livereload 		= require('gulp-livereload'),
		connect 			= require('gulp-connect'),
		pug 					= require('gulp-pug'), // pug
		bourbon				= require('node-bourbon'), // bourbon
		sourcemaps	 	= require('gulp-sourcemaps'); // Reload

var path = {
	build: {
	js: 'build/js',
	css: 'build/css',
	img: 'build/img',
	html: 'build/',
	fonts: 'build/fonts/'
	},
	src: {
	js: 'src/js/*.js',
	sass: 'src/sass/**/*.sass',
	css: 'src/css',
	main: 'src/css/*',
	img: 'src/img/*',
	html: 'src/html/*.html',
	pug: 'src/pug/**/*.pug',
	pugDest: 'src/html/',
	fonts: 'src/fonts/**/*'
	}
}

gulp.task('js:build', function () {
		gulp.src(path.src.js)
			.pipe(uglify())
			.pipe(gulp.dest(path.build.js));
});

gulp.task('js', function () {
		gulp.src(path.src.js)
		.pipe(connect.reload());
});

gulp.task('sass', function () {
	gulp.src(path.src.sass)
		.pipe(sourcemaps.init())
		.pipe(sass({
            includePaths: bourbon.includePaths
        }).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.src.css))
		.pipe(connect.reload());
});

gulp.task('csso:build', function () {
	return gulp.src(path.src.main)
		.pipe(gulp.dest(path.build.css));
});

gulp.task('img:build', function() {
	gulp.src(path.src.img)
		.pipe(imagemin())
		.pipe(gulp.dest(path.build.img));
});

gulp.task('html:build', ['pug:build'], function () {
	gulp.src(path.src.html)
		.pipe(gulp.dest(path.build.html));
});

gulp.task('html', function () {
	gulp.src(path.src.html)
		.pipe(connect.reload());
});

gulp.task('pug', function() {
	return gulp.src(path.src.pug)
		.pipe(pug({
			pretty: true,
			locals: {
				cssPath: '../css/',
				jsPath: '../js/',
				imgPath: '../img/'
			}
		}))
		.pipe(gulp.dest(path.src.pugDest))
});

gulp.task('pug:build', function() {
	return gulp.src(path.src.pug)
		.pipe(pug({
			pretty: true,
			locals: {
				cssPath: 'css/',
				jsPath: 'js/',
				imgPath: 'img/'
			}
		}))
		.pipe(gulp.dest(path.src.pugDest))
});

gulp.task('fonts:build', function() {
	return gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts))
});

gulp.task('connect', function() {
	connect.server({
		root: 'src',
		port: 9000,
		livereload: true
	});
});

gulp.task('watch', function () {
	gulp.watch(path.src.sass, ['sass']);
	gulp.watch(path.src.js, ['js']);
	gulp.watch(path.src.pug, ['pug']);
	gulp.watch(path.src.html, ['html']);
});

gulp.task('default', ['connect', 'html', 'pug', 'sass', 'js', 'watch']);

// Сборка проекта
gulp.task('b', function() {
	gulp.run('html:build');
	gulp.run('csso:build');
	gulp.run('js:build');
	gulp.run('img:build');
	gulp.run('fonts:build');
});
