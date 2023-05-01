import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';

export default {
    input: 'src/components/index.js',
    plugins: [
        babel({
            presets: ['@babel/preset-react'],
            exclude: 'node_modules/**',
            sourcemap: true
        }),
        image()
    ],
    output: {
        format: 'cjs',
        dir: 'library-build'
    },
};
