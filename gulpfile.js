const gulp = require('gulp');
const del = require('del');

const semantic = require('./semantic/tasks/build');

gulp.task('semantic', 'Build all Semantic UI files', semantic);

gulp.task('clean:semantic', 'Clean all Semantic UI files', function(callback) {
        del(['public/semantic'], callback);
});
