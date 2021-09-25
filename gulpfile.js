const gulp = require('gulp')
const server = require('gulp-server-livereload')
gulp.task('build', function (cb){
    console.log('build site')
    setTimeout(cb,1200)
    cb()
})

gulp.task('serve', (cb)=>{
    gulp.src('www')
        .pipe(server({
            livereload:true,
            open:true,
        }))
})
